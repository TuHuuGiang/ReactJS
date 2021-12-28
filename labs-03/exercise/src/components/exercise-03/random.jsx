import React from 'react';
import '../../assets/css/exercise-03/random.css';

class Random extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            min: 0,
            max: 0,
            number: 0
        }
    }

    minValue = (e) => {
        this.setState({ min: e.target.value });
    }

    maxValue = (e) => {
        this.setState({ max: e.target.value });
    }

    random = () => {
        if (this.state.min > this.state.max) {
            const minTemp = this.state.min
            const maxTemp = this.state.max
            this.setState({min: maxTemp, max: minTemp});
            this.setState({ number: Number(Math.floor(Math.random() * (minTemp - maxTemp + 1) + maxTemp)) });
        } else {
            this.setState({ number: Number(Math.floor(Math.random() * (this.state.max - this.state.min + 1) + this.state.min)) });
        }
    }

    render() {
        return (
            <div id="container-random">
                <div className="content">
                    <div className="result">
                        <h1>{this.state.number}</h1>
                    </div>
                    <div className="options">
                        <span>Min</span>
                        <input id="min" type="number" value={this.state.min} onChange={this.minValue} />
                        <span>Max</span>
                        <input id="max" type="number" value={this.state.max} onChange={this.maxValue} />
                    </div>
                </div>
                <div className="button">
                    <input id="generate" type="submit" value="GENERATE" onClick={this.random} />
                </div>
            </div>
        );
    }
}

export default Random;