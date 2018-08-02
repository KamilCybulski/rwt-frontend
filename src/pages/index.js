import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getCardsRequest } from '../actions';

const Container = styled.div`
  padding: 200px;
`;

class Index extends React.Component {
  static propTypes = {
    cards: PropTypes.shape({
      cards: PropTypes.array.isRequired,
    }).isRequired,
  }

  static getInitialProps({ ctx }) {
    ctx.store.dispatch(getCardsRequest(6));
  }

  render() {
    const { cards } = this.props;

    return (
      <Container>
        {
          cards.cards.map(card => (
            <img src={card.imageUrl} alt={card.name} />
          ))
        }
      </Container>
    );
  }
}

export default connect(state => ({ cards: state.cards }))(Index);
