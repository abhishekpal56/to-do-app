import React,{useState} from 'react'

function Todoinput(props) {
    const [inputText, setInputText] = useState('')
    const handleEnterPress = (e)=>{
      if(e.KeyCode===13){
        props.addList(inputText )
        setInputText(' ')
      }
    }
  return (
    <div className="input-container">
        <input
         type='text'
         className='input-box-todo'
         placeholder='Enter Your ToDo'
         value={inputText}
         onChange={e=>{
            setInputText(e.target.value)
         }}
         onKeyDown={handleEnterPress}
         />
        <button className='add-btn'
        onClick={e=>{
          props.addList(inputText )
          setInputText(' ')
        }}>+</button>
    </div>
  )
}

export default Todoinput   