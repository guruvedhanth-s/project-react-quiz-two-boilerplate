import React, { Component } from 'react'
import "../App.css"

export class Home extends Component {
  render() {
    return (
        <>
        <div className='container-1'>
        <h1 style={{color:"white"}}>Quiz App</h1>
        <button className='playbutton'>Play</button>
        </div>
        </>
    )
  }
}

export default Home