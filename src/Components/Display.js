import { useState } from 'react';
import "./display.scss";

function Display() {
    const[state, setState] = useState([]);
    const[todoState, settodoState] = useState(localStorage.getItem('Name'));
    let arr = [];

const todoFunn = (e) => {
   
    setState(e.target.value);
    localStorage.setItem('Name', e.target.value);
}

const handleSubmit = () => {
  arr.push(state)

  let listItems = arr.map((number) =>
    <li>{number}</li>
    );
  
  console.log("CheckData:",arr)
  settodoState(listItems)
}

  return (
    <div className="display">
      <h1>Todo List</h1>
      <h4>{todoState}</h4>
      <input className="textDesign" type="text"  onChange={(e)=>todoFunn(e)}/>
      <input className="btndesign" type="button" value={"Submit"} onClick={()=>handleSubmit()}/>
    </div>
  );
}

export default Display;