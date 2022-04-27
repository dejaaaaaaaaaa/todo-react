import { createContext, useState } from "react";
import list from "./TodoData";
import TodoItem from "./todoItem";

const ItemsContext = createContext({
  items: list,
  totalItems: list.length,
  addItem: (item) => {},
  completeItem: (item) => {},
});

export function ItemsContextProvider(props) {
  const [todoItems, setTodoItems] = useState(list);

  function addItemHandler(item) {
    setTodoItems(todoItems.concat(item));
  }

  function removeItemHandler(item) {
    var updatedTodo = todoItems.filter((element) => {
      return element.id != item
    });
    setTodoItems(updatedTodo);
  }

  function completeItemHandler(item) {
    const newTodoItems = todoItems.map(element =>
        element.id === item ? { ...element, completed: true } : element
    );

    setTodoItems(newTodoItems);
  }

  const context = {
    items: todoItems,
    totalItems: todoItems.length,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    completeItem: completeItemHandler
  };

  return (
    <ItemsContext.Provider value={context}>
      {props.children}
    </ItemsContext.Provider>
  );
}

export default ItemsContext;
