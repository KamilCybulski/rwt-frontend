import React from 'react';
import { connect } from 'react-redux';

import { getCardsRequest } from '../actions';

class Index extends React.Component {
  static getInitialProps({ ctx }) {
    ctx.store.dispatch(getCardsRequest(6));
  }

  render() {
    return (
      <div>
        Hello mtg
      </div>
    );
  }
}

export default connect()(Index);
