import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, ondeletebutton,onToggleComplete}) => {


  return (
    <div className="items-container">
      {todoItems.map(item=>
         <TodoItem todoName={item.name} todoDate={item.dueDate}  todoCompleted={item.completed} onToggleComplete={onToggleComplete} ondeletebutton={ondeletebutton} key={item.name}/>
      )}
     
    </div>
  );
};
export default TodoItems;
