import { createSelector } from 'reselect';

const selectPinPad = state => state.get('pinpad');

const makeSelectValidPin = () => createSelector(
  selectPinPad(),
  pinpadState => pinpadState.get('validPin'),
);

const makeSelectLocked = () => createSelector(
  selectPinPad(),
  pinpadState => pinpadState.get('locked'),
);

export {
  makeSelectValidPin,
  makeSelectLocked
};
