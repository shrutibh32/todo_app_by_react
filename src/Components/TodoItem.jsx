import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
export default function TodoItem({todoName,todoDate,todoCompleted,ondeletebutton,onToggleComplete }) {
 
  return (
      <div className="row item_row">
        <div className="col-4">{todoName}</div>
        <div className="col-2">{todoDate}</div>
        <div  className="col-2">
                   <input
        type="checkbox"
        checked={todoCompleted}
        onChange={() => onToggleComplete(todoName)}
        
      />
        </div>

        <div className="col-2">
          <button type="button" className="btn btn-danger" onClick={()=>ondeletebutton(todoName)}>
            <RiDeleteBin5Line />
          </button>
        </div>
      </div>
  )
}
