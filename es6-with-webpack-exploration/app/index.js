import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const api_key = '227195fdd3e0a279d6b3f593dabec5fe';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'London',
      description: ''
    }
  }

  componentDidMount() {
    this.getWeather(this.state.city)
  }

  getWeather(city) {
    // the .then is handling of the promises that are returned by each function
    // a promise handles the eventual result of an operation
    // and determines if it returns a success or a failure
    fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`)
      .then(response => response.json())
      .then(json => {
        this.setState({description: json.weather[0].description})
      })
  }

  render() {
    return (
      <div>
        <h1>Weather report for {this.state.city}</h1>
        <h2>{this.state.description}</h2>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
