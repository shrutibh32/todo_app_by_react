import React, { useState } from "react";
import Appname from "./Components/Appname";
import Todoinput from "./Components/Todoinput";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import WelComeMessage from "./Components/WelComeMessage";
export default function App() {
  const initialtodoItems = [
    {
      name: "Buy Milk",
      dueDate: "2023-06-12",
    },
  ];

  const [todoItems, setTodoItems] = useState(initialtodoItems)

  let handleaddbutton = (itemName,itemDueDate) => {
    console.log(`item name ${itemName} Date:${itemDueDate}`);
   setTodoItems([...todoItems,{name:itemName,dueDate:itemDueDate}]);
  };


  let handleDeleteButton=(todoName)=>{
    const newtodoItem=todoItems.filter(item=>item.name!==todoName);
    setTodoItems(newtodoItem);
    console.log(`Item deleted:${todoName}`);
  }

  return (
    <div className="container text-center">
      <Appname />
      <Todoinput  onaddbutton={handleaddbutton} />
      {todoItems.length===0 && <WelComeMessage/>}
      <TodoItems todoItems={todoItems} ondeletebutton={handleDeleteButton}/>
    </div>
  );
}
