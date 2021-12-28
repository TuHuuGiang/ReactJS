import React from 'react';
import '../../assets/css/exercise-03/clock.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    Countdown() {
        let fullTime = new Date("jan 4,2022 00:00:00");
        let now = new Date();
        let d = fullTime - now;
        console.log(d);
        let days = Math.floor(d / 1000 / 60 / 60 / 24);
        let hours = Math.floor(d / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(d / 1000 / 60) % 60;
        let seconds = Math.floor(d / 1000) % 60;

        return (
            <div className="container-clock mb-5">
                <img className="image overlay" src="https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" />
                <div className="screen">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-alarm-fill mb-4" viewBox="0 0 16 16">
                        <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                    </svg>
                    <h1 className="mb-4">We're comming soon</h1>
                    <h5>We are working very hard on the new version of our site.</h5>
                    <h5>It will bring a lot of new features. Stay tuned !</h5>
                    <div className="clock mt-4">
                        <div className="time">
                            <p className="number">{days}</p>
                            <p>Days</p>
                        </div>
                        <div className="time">
                            <p className="number">{hours}</p>
                            <p>Hours</p>
                        </div>
                        <div className="time">
                            <p className="number">{minutes}</p>
                            <p>Minutes</p>
                        </div>
                        <div className="time">
                            <p className="number">{seconds}</p>
                            <p>Seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState(this.Countdown);
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            this.Countdown()
        );
    }
}

export default Clock;