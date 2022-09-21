import './user.interface.css'
import { useState, useEffect } from 'react'
import { ToDoItem } from '../todo-item/todo-item-component'
import ToDoItemClass from '../todo-item/todo-item-class.jsx'

export const UserInterface = ({ title, dataArray }) => {
  // console.log(checkRef.current.value)


  const [currentData] = useState(dataArray)
  const [userInput, setUserInput] = useState("")
  const matchUserInput = (todoItemData)=>{
    return todoItemData.title.toLowerCase().includes(userInput.toLowerCase())
  }

useEffect(function (){console.log("valami")}, [userInput])
// a második paraméter változására futtatja le a függvényt


  return (
    <section>
      <div className='card'>
        <h1>{title}</h1>
        <p>Hello {document.title}!</p>
        <input type="text" onChange={(e) =>{
          setUserInput(e.target.value)
        }} />
        <div className='datas'>
          {currentData
          //.filter(matchUserInput)
          .map((todoItemData) => 
           matchUserInput(todoItemData) && <ToDoItem key={todoItemData.id} todoItemData={todoItemData}></ToDoItem>
          )}
        </div>
        {(!currentData
          .some(matchUserInput)) && <p>Nincs találat</p>}
      </div>
    </section>
  )
}
