import React from 'react';

const Weather = (props) => {
  return (
    <div className='infoWeath'>
      {props.citi && 
        <div>
          <p>Росташування: {props.citi}, {props.country}</p>
          <p>Температура: {props.temp}</p>
          <p>Тиск {props.pressure}</p>
          <p>Захід сонця: {props.sunset}</p>
        </div>
      }
        <p className='error'>{ props.error }</p>
    </div>
  );
}

export default Weather;
