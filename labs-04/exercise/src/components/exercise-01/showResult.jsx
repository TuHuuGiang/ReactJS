import '../../assets/css/exercise-01/tempconvert.css';
import InputValue from './inputValue';
import React from 'react';

class ShowResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cel: '', fah: '', kel: '' }
    }

    temperatureC = (value) => {
        let celValue = value;
        let fahValue = Math.round(celValue * 9 / 5 + 32);
        let kelValue = Number(celValue) + 273;
        this.setState({ cel: celValue, fah: fahValue, kel: kelValue });
    }

    temperatureF = (value) => {
        let fahValue = value;
        let celValue = Math.round((fahValue - 32) * 5 / 9);
        let kelValue = Math.round(Number(celValue) + 273);
        this.setState({ cel: celValue, fah: fahValue, kel: kelValue });
    }

    temperatureK = (value) => {
        let kelValue = value;
        let celValue = kelValue - 273;
        let fahValue = Math.round(celValue * 9 / 5 + 32);
        this.setState({ cel: celValue, fah: fahValue, kel: kelValue });
    }

    BtnRest = () => {
        this.setState({ cel: '', fah: '', kel: '' });
    }

    render() {
        return (
            <div className="container">
                <div className="content">
                    <div className="header">
                        <h1>Temperature Convert</h1>
                    </div>
                    <div className="result">
                        <div className="temp-fields">
                            <h3 className="title">Celsius</h3>
                            <InputValue onInputChange={this.temperatureC} value={this.state.cel} />
                        </div>
                        <div className="temp-fields">
                            <h3 className="title">Fahrenheit</h3>
                            <InputValue onInputChange={this.temperatureF} value={this.state.fah} />
                        </div>
                        <div className="temp-fields">
                            <h3 className="title">Kelvin</h3>
                            <InputValue onInputChange={this.temperatureK} value={this.state.kel} />
                        </div>
                    </div>
                    <button type="button" className="button" onClick={this.BtnRest}>Reset</button>
                </div>
            </div>
        );
    }
}

export default ShowResult;