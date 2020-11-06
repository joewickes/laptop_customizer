import React from 'react';
import SelectedOption from './SelectedOption';

// This object will allow us to
// easily convert numbers into US dollar values
import {USCurrencyFormat} from './../App';

class Summary extends React.Component {
  render() {
    
    const {selectedKeys, selectedObj} = this.props;

    const total = selectedKeys.reduce(
      (acc, curr) => acc + selectedObj[curr].cost,
      0
    );

    return (
      <>
        <h2>Your cart</h2>
        {selectedKeys.map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          const selectedOption = selectedObj[feature];
          return (<SelectedOption key={feature + '-selection'} featureHash={featureHash} feature={feature} selectedOption={selectedOption} />);
        })}
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {USCurrencyFormat.format(total)}
          </div>
        </div>
      </>
    );
  }
}

export default Summary;