import React from 'react';

const Weather = (props) => {
  return (
    <div>
      {props.citi && 
        <div>
          <p>Росташування: {props.citi}, {props.country}</p>
          <p>Температура: {props.temp}</p>
          <p>Тиск {props.pressure}</p>
          <p>Захід сонця: {props.sunset}</p>
        </div>
      }
        <p>{ props.error }</p>
    </div>
  );
}

export default Weather;
