import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import * as selectors from '../../../store/selectors/auth.selector';
import { logout } from '../../../store/actions/auth.actions';

import PinPad from '../../molecules/PinPad';
// import PinPad from '../PinPad';

export class AppContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.title = 'Code Challange Test';
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>{this.title}</title>
          <meta name="description" content="App Container" />
        </Helmet>
        <PinPad title='Controlled component'></PinPad>
        {/* <PinPad title='With Redux'></PinPad> */}
      </article>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onLogout: () => dispatch(logout())
  };
}

const mapStateToProps = createStructuredSelector({
  user: selectors.makeSelectUser(),
  authenticated: selectors.makeSelectAuthenticated()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(AppContainer);
