import React, { useState } from 'react';

const TODOlIST = () => {
  const [inputList, setInputList] = useState("");
const [item, setItem] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listItem = () => {
   setItem((oldItems)=>{
    return [...oldItems,inputList]
   });
   setInputList("");

  };
  const deleteItem = () => {
    setItem((oldItems) => {
      // Remove the last item from the list
      const updatedItems = [...oldItems];
      updatedItems.pop();
      return updatedItems;
    });
  };

  return (
    <div className='main_div'>
      <div className='center_div'>
        <br />
        <h1>ToDoList</h1>
        <br />
        <input type='text' placeholder='Add an Item' 
        value={inputList}   onChange={itemEvent} />
        <button onClick={listItem}>+</button>
        <ol>
          {/* <li>{inputList}</li> */}

        {item.map((itemval) => {
          return <li> {itemval}
           </li>
          })}
        </ol>
        <button  onClick={deleteItem} type="button">delete</button>

      </div>
    </div>
  );
};

export default TODOlIST;
