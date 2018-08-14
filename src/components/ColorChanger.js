import React from 'react';

function ColorChanger(props) {
  return (
    <select 
      className="dropDownContainer"
      onChange={ (event) => props.update(event.target.value) }
      disabled={ props.allowEdit === 'true' ? false : true }
    >
      <option value="black"> Black </option>
      <option value="blue"> Blue </option>
      <option value="green"> Green </option>
    </select>
  )
}

export default ColorChanger;
