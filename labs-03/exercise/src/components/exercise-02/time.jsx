import React from 'react';
import '../../assets/css/exercise-02/time.css';

class CountdownTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 300,
        }
    }
    handleStart() {
        this.timer = setInterval(() => {
            const newCount = this.state.count - 1;
            this.setState(
                { count: newCount >= 0 ? newCount : 0 }
            );
        }, 1000);
    }

    handleStop() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    handleReset() {
        this.handleStop();
        this.setState(
            { count: 300 }
        );
    }

    render() {
        return (
            <div className="container-timer">
                <div className="header">
                    <h4>Timer</h4>
                </div>
                <div className="screen-timer">
                    <h1>{(Math.floor(this.state.count / 60)) < 10 ? '0' + Math.floor(this.state.count / 60) : Math.floor(this.state.count / 60)}<span>m</span> {(this.state.count % 60) < 10 ? '0' + this.state.count % 60 : this.state.count % 60}<span>s</span></h1>
                    {/* <h1>{this.state.count}</h1> */}
                </div>
                <div className="options-timer">
                    <button className="start" onClick={() => this.handleStart()}>Start</button>
                    <button className="reset" onClick={() => this.handleReset()}>Reset</button>
                </div>
            </div>
        );
    }
}

export default CountdownTimer;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            running: false,
        }
    }


}