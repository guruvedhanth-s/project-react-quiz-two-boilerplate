import React, { Component } from 'react'
import "../App.css"

export class Result extends Component {
  render() {
    return (
      <div id='resultcontainer'>
        <div className='container-3'>
      <h1 id='result'>Result</h1>
      <div className="seconddiv">
          <h2>You need more practice!</h2>
          <h1>Your score is 20 %</h1>
          <div className="lineflex">Total number of questions<p>15</p></div>
          <div className="lineflex">Number Of attempted questions<p>9</p></div>
          <div className="lineflex">Number of correct answers<p>3</p></div>
          <div className="lineflex">Number Of wrong answers<p>6</p></div>
      </div>
      <div className="buttons">
          <button>Play again</button>
          <button>Back to home</button>
      </div>
    </div>
      </div>
    )
  }
}

export default Result