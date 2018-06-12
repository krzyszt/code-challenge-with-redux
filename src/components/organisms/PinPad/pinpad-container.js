import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import * as selectors from '../../../store/selectors/pinpad.selector';
import verifyPin from '../../../store/actions/pinpad.actions';

const storeProvider = (Component) => {
  class Wrapper extends React.Component {
    static displayName = `WithStore(${getDisplayName(Component)})`;
    render() {
      const { title } = this.props;
      return (
        <Component
          title={title}
          validPin={this.props.validPin}
          locked={this.props.locked} />
      );
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      verifyPin: payload => dispatch(verifyPin(payload))
    };
  }

  const mapStateToProps = createStructuredSelector({
    validPin: selectors.makeSelectValidPin(),
    locked: selectors.makeSelectLocked()
  });

  const withConnect = connect(mapStateToProps, mapDispatchToProps);

  return compose(withConnect)(Wrapper);
};

function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
}

export default storeProvider;
