import React from 'react';

// functional component: 
function EditToggle(props) {
  return (
    <select className="dropDownContainer ml0" 
    /* onChange={ (event) => this.updateEditStatus(event.target.value) } */ 
    onChange={ (event) => props.update(event.target.value) } 
    >
      <option value="true"> Allow Edit </option>
      <option value="false"> Disable Edit </option>
    </select>
  )
}

export default EditToggle;

