import React from 'react';

import PinPadForm from '../../atoms/PinPadForm';
import PinPadButton from '../../atoms/PinPadButton';
import PinPadDisplay from '../../atoms/PinPadDisplay';

class PinPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: '',
      locked: false,
      display: '',
      attempts: 0
    };
  }

  addNumber = (i) => {
    this.setState((prevState) => {
      const { pin } = prevState;
      let { attempts, locked } = prevState;
      let newPin = pin.toString() + i;
      const hidden = newPin.split('').map(() => '*');
      hidden.pop();
      let display = (newPin.length === 1) ? newPin : hidden.join('') + i;
      if (newPin.length === 4) {
        display = this.verifyPin(newPin) ? 'OK' : 'ERROR';
        locked = !this.verifyPin(newPin) && (attempts + 1) === 3;
        attempts = this.verifyPin(newPin) || locked ? 0 : attempts + 1;
        newPin = '';
      }
      if (locked) {
        display = 'LOCKED';
        this.unlockPinPad();
      }
      return {
        pin: newPin,
        display,
        attempts,
        locked
      };
    });
  }

  verifyPin = pin => pin === '1234';

  unlockPinPad = () => {
    setTimeout(() => {
      this.setState({
        locked: false,
        display: 'UNLOCKED'
      });
    }, 30000);
  }

  render() {
    const { display } = this.state;
    return (
            <PinPadForm action="" method="" autoComplete="off">
            <h1>{this.props.title}</h1>
            <h2> Attempts : {this.state.attempts}</h2>
            <br/>
              <PinPadDisplay val={display} />
            <br/>
             { [1, 2, 3].map(i => <PinPadButton key={i} val={i} locked={this.state.locked} setValue={this.addNumber} />)}
            <br/>
            { [4, 5, 6].map(i => <PinPadButton key={i} val={i} locked={this.state.locked} setValue={this.addNumber} />)}
            <br/>
            { [7, 8, 9].map(i => <PinPadButton key={i} val={i} locked={this.state.locked} setValue={this.addNumber} />)}
            <br/>
            <PinPadButton empty />
            <PinPadButton val={0} locked={this.state.locked} setValue={this.addNumber} />
            <PinPadButton empty />
            </PinPadForm>
    );
  }
}

export default PinPad;
