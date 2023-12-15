import React, { Component } from 'react'
import "../App.css"
import Data from "./Data"


export class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {count:0};
  }
  render() {
    const handleprevious=()=>{
      if (this.state.count>0){
        this.setState((prevState) => ({
          count: prevState.count - 1,
        }));
      }
    }
    const handlequit=()=>{
      alert("Are you sure you want to quit ?")
    }
    const handlenext = ()=>{
      if (this.state.count<14){
        this.setState((prevState) => ({
          count: prevState.count + 1,
        }));
      }
      
    }
    return (
      <>
        <div className='boss'>
            <div className='container-2'>
            <div className='smallcontainer'>
            <h1>Question</h1>
            <span>{this.state.count+1} of 15 </span>
            </div>
            <p className='question'>{Data[this.state.count].question}</p>
            
            <div className='options'>
                <button className='btn-1'>{Data[this.state.count].optionA}</button>
                <button className='btn-1'>{Data[this.state.count].optionB}</button>
                <button className='btn-1'>{Data[this.state.count].optionC}</button>
                <button className='btn-1'>{Data[this.state.count].optionD}</button>
            </div>
            <div className='movements'> 
                <button className='btn-2' id='previous' onClick={handleprevious}>Previous</button>
                <button className='btn-2' id='Next' onClick={handlenext}>Next</button>
                <button className='btn-2'id='Quit'onClick={handlequit}>Quit</button>
            </div>
            </div>
        </div>
      </>
    )
  }
}

export default Quiz