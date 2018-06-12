import * as constants from './constants';

export default function verifyPin(payload) {
  return {
    type: constants.VERIFY_PIN,
    payload
  };
}
