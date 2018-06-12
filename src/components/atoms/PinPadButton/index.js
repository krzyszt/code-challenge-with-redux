import styled from 'styled-components';

const Input = styled.input`
    background: #ededed;
    color: #7e7e7e;
    border: none;
    border-radius: 50%;
    font-size: 1.5em;
    text-align: center;
    width: 60px;
    height: 60px;
    margin: 7px 20px;
    box-shadow: ${props => !props.empty ? '#bbb 0 0 1px 1px' : ''};
    :hover {
        border-radius: 50%;
        box-shadow: ${props => !props.empty ? '#506CE8 0 0 1px 1px' : ''};
        cursor: ${props => !props.empty && 'pointer'};
    }
    :focus {
        outline: none
    };
`;

function PinPadButton(props) {
  return (<Input type='button' empty={props.empty} value={props.val} onClick={() => props.setValue(props.val)}/>);
}

export default PinPadButton;
