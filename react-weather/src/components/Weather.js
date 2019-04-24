import React from 'react';

class Weather extends React.Component {

    render() {
        return (
            <div>
                {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p> }
                {this.props.temprature && <p>Temperature: {this.props.temprature}</p>}
                {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
                {this.props.description && <p>In short:{this.props.description}</p>}
                {this.props.error && <p>{this.props.error}</p>}

            </div>
        );
    }
}

export default Weather;