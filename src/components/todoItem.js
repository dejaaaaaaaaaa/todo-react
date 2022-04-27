import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import ItemsContext from "./ItemsContext";
import {useContext, useState } from "react";

function TodoItem(props){
    const itemCtx = useContext(ItemsContext);
    const [isCompleted, setToCompleted] = useState(props.completed);
    function taskHandler(itemId){
        itemCtx.completeItem(itemId);
        setToCompleted(true);
    }
    function removeTaskHandler(itemId){
        itemCtx.removeItem(itemId);
        setToCompleted(true);
    }
    return (
        <li key={props.id} id={props.id} className='list-group-item border-bottom pt-4 pb-4'> <span>{ (isCompleted) ? <s>{ props.item } </s> : props.item }</span>
            { (!isCompleted) ?
                <span>
                    <button className='btn btn-sm btn-danger float-end m-1' onClick={() => removeTaskHandler(props.id)}><FontAwesomeIcon icon={faTrash} /></button>
                    <button className='btn btn-sm btn-success float-end m-1' onClick={() => taskHandler(props.id)}><FontAwesomeIcon icon={faCheck} /></button>
                </span> :
                <button className='btn btn-sm btn-danger float-end m-1' onClick={() => removeTaskHandler(props.id)}><FontAwesomeIcon icon={faTrash} /></button>
            }
        </li>
    )
}

export default TodoItem;