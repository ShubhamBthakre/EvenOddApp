// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onClickIncrement = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState(preState => ({count: preState.count + randomNum}))
  }

  isCountOddOrEven = () => {
    const {count} = this.state
    return count % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const {count} = this.state
    const isCountOddOrEven = this.isCountOddOrEven()

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="count-heading">
            Count <span>{count}</span>
          </h1>
          <p className="count-type">{`Count is ${isCountOddOrEven}`}</p>
          <button
            className="increment-button"
            type="button"
            onClick={this.onClickIncrement}
          >
            Increment
          </button>
          <p>*increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
