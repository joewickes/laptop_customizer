import React from 'react';
import {USCurrencyFormat} from '../App';

class Option extends React.Component {
  render() {

    const {featureHash, feature, selectedOption} = this.props;

    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
  }
}

export default Option;