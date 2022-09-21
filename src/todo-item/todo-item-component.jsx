import { useState } from 'react'

export const ToDoItem = ({ todoItemData }) => {
  const [time, setTime] = useState(0)
  const [clickNum, setClickNum] = useState(0)

  return (
    <div className={`data `}>
      
      <h3>{todoItemData.title}</h3>
      <p>
        {todoItemData.id} : {todoItemData.completed.toString()}
      </p>
      <input
        type='button'
        value={`pressed me: ${clickNum}`}
        onClick={() => {
          setClickNum(clickNum + 1)
          console.log(clickNum)
        }}
      />
    </div>
  )
}
