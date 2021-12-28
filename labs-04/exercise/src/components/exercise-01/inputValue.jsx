import React from 'react';
import '../../assets/css/exercise-01/tempconvert.css';

class InputValue extends React.Component {
    constructor(props) {
        super(props);
    }

    onInputChange = (e) => {
        this.props.onInputChange(e.target.value)
    }

    render() { 
        return ( 
            <input className="input" onChange={this.onInputChange} value={this.props.value} />
        );
    }
}
 
export default InputValue;