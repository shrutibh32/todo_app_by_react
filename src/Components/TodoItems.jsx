import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, ondeletebutton}) => {


  return (
    <div className="items-container">
      {todoItems.map(item=>
         <TodoItem todoName={item.name} todoDate={item.dueDate} ondeletebutton={ondeletebutton} key={item.name}/>
      )}
     
    </div>
  );
};
export default TodoItems;
