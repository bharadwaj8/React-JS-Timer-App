import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {start: 1, reset: 0, timer: 25}

  increaseTimer = () => {
    this.setState(prevState => ({timer: prevState.timer + 1}))
  }

  decreaseTimer = () => {
    const {timer} = this.state

    this.setState(prevState => ({timer: prevState.timer - 1}))
  }

  startTimer = () => {
    this.setState(prevState => ({start: !prevState.start, reset: 0}))
  }

  resetTimer = () => {
    this.setState(prevState => ({reset: 1}))
  }

  render() {
    const {start, reset, timer} = this.state
    const t1 = new Date(2020, 11, 3, 0, timer, 0)
    const delta = new Date(1000)
    console.log(t1.getUTCMinutes() - delta)

    return (
      <div className="bg">
        <h1 className="name">Digital Timer</h1>
        <div className="container">
          <div className="timer-container">
            <div className="timer-card">
              <h1 className="timer" testid="timer">
                {timer}:00
              </h1>
              {start || reset ? (
                <p className="timer-desc">paused</p>
              ) : (
                <p className="timer-desc">Running</p>
              )}
            </div>
          </div>
          <div className="options-container">
            <div className="controls-container">
              <div className="control">
                {start ? (
                  <>
                    <button
                      className="button"
                      type="button"
                      onClick={this.startTimer}
                    >
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                        alt="play icon"
                        className="icon"
                      />

                      <p className="button-name">Start</p>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="button"
                      type="button"
                      onClick={this.startTimer}
                    >
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                        alt="pause icon"
                        className="icon"
                      />
                      <p className="button-name">Pause</p>
                    </button>
                  </>
                )}
              </div>
              <div className="control">
                <button
                  className="button"
                  type="button"
                  onClick={this.resetTimer}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="icon"
                  />
                  <p className="button-name">Reset</p>
                </button>
              </div>
            </div>
            <p className="desc">Set Timer limit</p>
            <div className="limit-container">
              {start ? (
                <button
                  type="button"
                  className="symbol"
                  onClick={this.decreaseTimer}
                >
                  -
                </button>
              ) : (
                <button type="button" className="symbol">
                  -
                </button>
              )}
              <div className="limit">
                <p className="limit-desc">{timer}</p>
              </div>
              {start ? (
                <button
                  type="button"
                  className="symbol"
                  onClick={this.increaseTimer}
                >
                  +
                </button>
              ) : (
                <button type="button" className="symbol">
                  +
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
