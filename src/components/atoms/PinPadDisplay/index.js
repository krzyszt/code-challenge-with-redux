import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    background: #ededed;
    margin: 3.5%;
    width: 92%;
    font-size: 2em;
    text-align: center;
    border: 1px solid #d5d5d5;
`;

function PinPadDisplay(props) {
  return (<Input value={props.val} disabled />);
}

export default PinPadDisplay;
