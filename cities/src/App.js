import React from 'react';
import './App.css';
import Info from './componets/info';
import Form from './componets/form';
import Weather from './componets/Weather';

const API_KEY = '50f27417f5f8bd9b5750e90781f40fb5';

class App extends React.Component {

  state = {
    temp: undefined,
    citi: undefined,
    country: undefined,
    presure: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const citi = e.target.elements.citi.value;
    
    
    if(citi) {
      const api_url = await 
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citi}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        citi: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
        error: undefined
      });
    } else {
        this.setState({
          temp: undefined,
          citi: undefined,
          country: undefined,
          presure: undefined,
          sunset: undefined,
          error: "Ведіть назву міста"
        });
      }
  }

  render() {
    return (
      <div>
        <Info />
        <Form wetherMethod={this.gettingWeather} />
        <Weather 
          temp={this.state.temp}
          citi={this.state.citi}
          country={this.state.country}
          pressure={this.state.pressure}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
