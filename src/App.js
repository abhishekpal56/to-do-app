import React, {useState} from 'react'
import "./App.css"
import Todoinput from './components/Todoinput'
import TodoList from './components/TodoList';


function App() {
  const [listTodo, setListtodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!==' ')
    setListtodo([...listTodo, inputText]);
  }

  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1)
    setListtodo([...newListTodo])
  }
  return (
    <div className='main-container'>
      <div className='center-container'>
         <Todoinput addList={addList} />
         <h1 className='app-heading'>TODOs</h1>
         <hr /> 
        {listTodo.map((listItem, i)=>{
          return(
            <TodoList key={i} index = {i} item={listItem} deleteItem={deleteListItem} />
          )
        })}
      </div>
    </div>
  )
}

export default App