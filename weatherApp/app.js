window.addEventListener('load', () => {
	let long;
	let lat;

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(position => {
			console.log(position);
		});
	}else{
		h1.textContent =  "Hey this is not working because of reasons...";
	}
});