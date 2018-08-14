import React from 'react';

export default function SizeChanger(props) {
  return (
    <select 
      className="dropDownContainer" 
   /* onChange={ (event) => this.updateSize(parseInt(event.target.value,10)) }*/
      onChange={ (event) => props.update(parseInt(event.target.value, 10)) } 
      disabled={ props.allowEdit === 'true' ? false : true } 
    >
      <option value="16"> 16 </option>
      <option value="20"> 20 </option>
      <option value="30"> 30  </option>
    </select>
  )
} 

