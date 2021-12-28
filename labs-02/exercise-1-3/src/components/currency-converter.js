import React from 'react';
import '../assets/css/currency-converter.css';

class CurrencyConverter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { result: 0 }
        this.amount = React.createRef();
        this.amountFrom = React.createRef();
        this.amountTo = React.createRef();
    }

    Change() {
        let temp;
        temp = this.amountFrom.current.value;
        this.amountFrom.current.value = this.amountTo.current.value
        this.amountTo.current.value = temp;
        this.Convert();
    }

    Convert() {
        if (this.amountFrom.current.value === 'VNĐ' && this.amountTo.current.value === 'USD') { // VND -> USD
            this.setState({result: this.amount.current.value / 22702 + '$'});
        } else if (this.amountFrom.current.value === 'USD' && this.amountTo.current.value === 'VNĐ') { // USD -> VND
            this.setState({result: this.amount.current.value * 22702 + ' VNĐ'});
        } else if (this.amountFrom.current.value === 'VNĐ' && this.amountTo.current.value === 'EUR') { // VND -> EUR
            this.setState({result: this.amount.current.value / 25712 + ' Euros'});
        } else if (this.amountFrom.current.value === 'EUR' && this.amountTo.current.value === 'VNĐ') { // EUR -> VND
            this.setState({result: this.amount.current.value * 25654 + ' VNĐ'});
        } else if (this.amountFrom.current.value === 'USD' && this.amountTo.current.value === 'EUR') { // USD -> EUR
            this.setState({result: this.amount.current.value / 1.13236 + ' Euros'});
        } else if (this.amountFrom.current.value === 'EUR' && this.amountTo.current.value === 'USD') { // EUR -> USD
            this.setState({result: this.amount.current.value * 1.13236 + ' Euros'});
        } else {
            this.setState({result: this.amount.current.value + ' ' + this.amountTo.current.value});
        }
    }

    render() { 
        return (
            <div className="containers">.
                <form action="" id="recipe-form" class="border border-primary row shadow-sm rounded-3 converter-form">
                  <div class="form-group col-md-3 my-2">
                      <label for="name">Amount</label>
                      <input ref={this.amount} type="text" class="form-control" id="name" autocomplete="off"/>
                  </div>

                  <div class="form-group col-md-4 my-2">
                      <label for="method">From</label>
                      <select class="form-select" aria-label="Default select example" ref={this.amountFrom}>
                        <option value="VNĐ">VNĐ - Vietnamese Dong</option>
                        <option value="USD">USD - US Dollar</option>
                        <option value="EUR">EUR - Euro</option>
                      </select>
                  </div>

                  <div class="form-group col-md-2 my-2 div-icon" onClick={()=>this.Change()}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-right icon-swap" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                      </svg>
                  </div>

                  <div class="form-group col-md-4 my-2">
                      <label for="roast">To</label>
                      <select class="form-select" aria-label="Default select example" ref={this.amountTo}>
                        <option value="USD">USD - US Dollar</option>
                        <option value="VNĐ">VNĐ - Vietnamese Dong</option>
                        <option value="EUR">EUR - Euro</option>
                      </select>
                  </div>

                  <div class="form-group col-md-12 my-2">
                      <label for="roast">Result</label>
                      <h1>{this.state.result}</h1>
                  </div>

                  <div className="footer">
                    <div class="form-group col-md-6 mt-4">
                        <span>
                            We use midmarket rate
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle mx-1" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                            </svg>
                        </span>
                    </div>
                    <div class="form-group col-md-6 mt-4 button">
                        <button type="button" class="btn btn-primary" onClick={() => this.Convert()}>Convert</button>
                    </div>
                  </div>
                </form>
            </div>
        );
    }
}
 
export default CurrencyConverter;