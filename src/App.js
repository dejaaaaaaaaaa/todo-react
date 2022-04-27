import NewTodo from "./components/newTodo";
import TodoList from "./components/todoList";
import {useContext } from 'react';
import ItemsContext from "./components/ItemsContext";

function App() {
    const itemCtx = useContext(ItemsContext);
    let content;
    if (itemCtx.totalItems === 0) {
        content = <p>You got no items</p>;
    } else {
        content = <TodoList todoList={itemCtx.items}/>
    }

  return (
    <div className='content'>
        <div className='container'>
            <h2 className='text-center mt-2'>TO-DO LIST</h2>
            <div className='row mt-2'>
                <div className='col-lg-12 p-4'>
                    <div className='float-end'>
                        <NewTodo/>
                    </div>
                </div>
            </div>
            <div className='row mt-2'>

                <div className='col-lg-12'>
                    {content}
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
