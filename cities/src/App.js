import React from 'react';
import './App.css';
import Info from './componets/info';
import Form from './componets/form';
import Weather from './componets/Weather';

const API_CAY = ''

class App extends React.Component {

  gettingWeather = async () => {
    const api_url = await 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=${API_CAY}&units=metric`);
    const data = await api_url.json();
    console.log(data)
  }

  render() {
    return (
      <div>
        <Info />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
