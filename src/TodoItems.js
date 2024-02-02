//import './TodoItem.css'
import './TodoItems.css'
import React from 'react';

function TodoItems(props){
  return (
    <div className='ContainerFirstAdd'>
    {/* <img src= "/ToDo.png" alt="insert text" className='todoImage'/> */}
    <img src= {props.UrlImage} alt="insert text" className='todoImage'/>
    <p>{props.Description}</p>
    </div>);
  }

  export {TodoItems}
