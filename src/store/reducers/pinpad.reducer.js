import { fromJS } from 'immutable';

import * as actions from '../actions/constants';

const initialState = fromJS({
  loading: false,
  validPin: false,
  locked: false,
  error: null
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN_STARTED:
      return state
        .set('loading', true);
    default:
      return state;
  }
}
