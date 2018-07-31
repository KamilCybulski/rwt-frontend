import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  height: 600px;
  background-color: grey;
  margin: 10px auto;
`;

const ExampleComponent = ({ text }) => (
  <Container>
    Witamy w RwT app!
    {text}
  </Container>
);

ExampleComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ExampleComponent;
