import TodoItem from "./todoItem";

function TodoList(props){
    return (
        <ul className='list-group'>
            {props.todoList.map((item) => (
                <TodoItem key={item.id} id={item.id} item={item.item} completed={item.completed}/>
            ))}
        </ul>
    )
}

export default TodoList;