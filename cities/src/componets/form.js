import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.wetherMethod}>
      <input type='text' name='citi' placeholder='Місто' />
      <button>Отримати погоду</button>
    </form>
  );
}

export default Form;
