import { Modal, Button } from "react-bootstrap";
import {useState, useRef, useContext } from 'react';
import ItemsContext from "./ItemsContext";

function NewTodo(){
    const itemCtx = useContext(ItemsContext);
    const itemInputRef = useRef();
    const [showModal, setShowModal] = useState();

    function submitHandler(event) {
        event.preventDefault();
        const enteredItem = itemInputRef.current.value;
        const todoData = [{
            id: (itemCtx.items.length > 0)? itemCtx.items.slice(-1)[0].id+1 : 1,
            item: enteredItem,
            completed: false
        }];

        itemCtx.addItem(todoData);
        closeModalHandler();

    }

    function showModalHandler() {
        setShowModal(true);
    }

    function closeModalHandler() {
        setShowModal(false);
    }

    return <div className='row'>
            <button className='btn btn-sm btn-primary' onClick={showModalHandler}> NEW ITEM</button>
        <Modal show={showModal} onHide={closeModalHandler}>
            <Modal.Header closeButton>
                <Modal.Title>Add new TODO item</Modal.Title>
            </Modal.Header>
            <form onSubmit={submitHandler}>
                <Modal.Body>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Item" aria-label="Item" aria-describedby="basic-addon1" ref={itemInputRef}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModalHandler}>
                        Close
                    </Button>
                    <Button  type='submit' variant="primary">
                        Save
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    </div>
}

export default NewTodo;