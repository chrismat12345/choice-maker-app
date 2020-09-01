 import React, {Component} from 'react'
 import Choices from './components/Choices'
 import './App.css'


 
 class MyChoiceMakerApp extends Component{
 
  render(){
    return(
      <div className='container' >
        <h1>CHOICE MAKER APP</h1>
        <p> Let's Help you make those choices </p>
   
       
        <Choices/>
      </div>
      
    )
  }
}

 export default MyChoiceMakerApp 