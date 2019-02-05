window.addEventListener('load', () => {
	let long;
	let lat;

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(position => {
			long = position.coords.longitude;
			lat = position.coords.latitude;

			let temperatureDescription = document.querySelector('.temperature-desciption');
			let temperatureDegree = document.querySelector('.temperature-degree');
			let locationTimezone = document.querySelector('.location-timezone');
			let temperatureSection = document.querySelector('.temperature');
			const temperatureSpan = document.querySelector('.temperature span');


			const proxy = 'https://cors-anywhere.herokuapp.com/';
			const api = `${proxy}https://api.darksky.net/forecast/e558e3cf9038a0253a2b52e6d39f4c4b/${lat},${long}`;

			fetch(api)
			.then(response => {
				return response.json();
			})
			.then(data => {
				console.log(data);
				const {temperature, summary, icon } = data.currently;
				// SET DOM ELEMENTS FROM API
				temperatureDegree.textContent = temperature;
				temperatureDescription.textContent = data.hourly.summary;
				locationTimezone.textContent = data.timezone;

			//F to C
			let celsius =(temperature -32) * (5/9);

			// set icon
			setIcons(icon, document.querySelector(".icon"));

			//Change temperature 
				temperatureSection.addEventListener('click',() => {
				if(temperatureSpan.textContent === "F"){
					temperatureSpan.textContent = "C";
					temperatureDegree.textContent= Math.round(celsius*100)/100;
				}else{
					temperatureDegree.textContent = temperature;
					temperatureSpan.textContent = "F";
				}

			});



			});
		});
	}

	function setIcons(icon, iconID) {
		  const skycons = new Skycons({"color": "white"});
		  const currentIcon = icon.replace(/-/g,"_").toUpperCase();
		  skycons.play();
		  return skycons.set(iconID, Skycons[currentIcon]);

	}
});