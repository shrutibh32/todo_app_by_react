import React, { useState } from "react";
import { IoBagAddOutline } from "react-icons/io5";
export default function Todoinput({ onaddbutton }) {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");
let handleNameChange=(event)=>{
setName(event.target.value);
}
let handledueDateChange=(event)=>{
setDueDate(event.target.value);
}
  let handleButtonClicked=(event)=>{
    event.preventDefault();
    onaddbutton(name,dueDate);
    setName("");
    setDueDate("");
  }
  return (
    <form className="row todo_input"  onSubmit={handleButtonClicked}>
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter TODO here"
          value={name}
          onChange={handleNameChange }
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          value={dueDate}
          onChange={handledueDateChange}
        />
      </div>
      <div className="col-2">
        <button
       
          className="btn btn-success"
          
        >
          <IoBagAddOutline />
        </button>
      </div>
    </form>
  );
}
