import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    features: {
      Processor: [
        {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        {
          name: 'Professor X AMD Fire Breather with sidewinder technology',
          cost: 1200
        }
      ],
      'Operating System': [
        {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        {
          name: 'Bodhi Linux',
          cost: 300
        }
      ],
      'Video Card': [
        {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        {
          name: 'Mind mild breeze 2000',
          cost: 1345
        }
      ],
      Display: [
        {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        },
        {
          name: '15.3" HGTV (3840 x 2160) Home makeover edition',
          cost: 1400
        },
      ]
    },
    
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];

      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    });

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        <Header />
        <main>
          {<Form 
            featureNames={Object.keys(this.state.features)} 
            featuresObj={this.state.features} 
            selected={this.state.selected} 
            updateFeature={this.updateFeature}
          />}
          <section className="main__summary">
            <Summary />
            <h2>Your cart</h2>
            {summary}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
