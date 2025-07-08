import React, { useEffect, useState } from "react";
import Appname from "./Components/Appname";
import Todoinput from "./Components/Todoinput";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import WelComeMessage from "./Components/WelComeMessage";
export default function App() {
  // const initialtodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "2023-06-12",
  //     completed: false,
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([])
  const [isFirstLoad, setIsFirstLoad] = useState(true);

useEffect(()=>{
  const savedtodos=localStorage.getItem("todoItems");
  if(savedtodos){
    setTodoItems(JSON.parse(savedtodos));
  }
},[])

// Save to localStorage when todoItems change (but not on first load)
useEffect(() => {
  if (isFirstLoad) {
    setIsFirstLoad(false);
    return;
  }
  localStorage.setItem("todoItems", JSON.stringify(todoItems));
}, [todoItems]);

  let handleaddbutton = (itemName,itemDueDate) => {
    console.log(`item name ${itemName} Date:${itemDueDate}`);
   setTodoItems([...todoItems,{name:itemName,dueDate:itemDueDate, completed: false}]);
  };


  let handleDeleteButton=(todoName)=>{
    const newtodoItem=todoItems.filter(item=>item.name!==todoName);
    setTodoItems(newtodoItem);
    console.log(`Item deleted:${todoName}`);
  }
let handleToggleComplete = (todoName) => {
  const updatedItems = todoItems.map((item) =>
    item.name === todoName ? { ...item, completed: !item.completed } : item
  );
  setTodoItems(updatedItems);
};



useEffect(()=>{
  const now=new Date;
  const todayDate=now.toISOString().split('T')[0];
  const tasksDueToday=todoItems.filter((item)=>item.dueDate===todayDate && !item.completed);

  if(tasksDueToday.length===0) return;


  const reminderTime=new Date();
  console.log(reminderTime)
  reminderTime.setHours(21,0,0,0);

  const delay=reminderTime.getTime()-now.getTime();
console.log(delay)
  if(delay>0){
    const timeoutId=setTimeout(()=>{
      tasksDueToday.forEach((task)=>{
        alert(`Reminder you havent completed ${task.name}`);
      });
    },delay);
    return ()=>clearTimeout(timeoutId);
  }

},[todoItems]);



  return (
    <div className="container text-center">
      <Appname />
      <Todoinput  onaddbutton={handleaddbutton} />
      {todoItems.length===0 && <WelComeMessage/>}
      <TodoItems todoItems={todoItems} onToggleComplete={handleToggleComplete} ondeletebutton={handleDeleteButton}/>
    </div>
  );
}
