import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  background: #333333;
  color: white;
  padding: 5px;
`;

const Line = ({ line }) => <Row>{line}</Row>;

export default Line;
