import styled from 'styled-components';

export const Wrapper = styled.div`
margin-top: 15px;
margin-bottom: 15px;
margin-left: 10px;

label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
`;

export const Checkbox = styled.input`
width: 16px;
height: 16px;
position: relative;
border: 1px solid;
border-radius: 2px;
background: none;
cursor: pointer;
margin: 0 0.6em 0 0;
outline: 0;
padding: 0 !important;
vertical-align: middle;
-webkit-appearance: none;
opacity: 0.5;

&:hover {
  opacity: 1;
}

&:checked {
  border: none;
  background-color: #02bc9c;
  opacity: 1;
}

&:before {
  content: '';
  position: absolute;
  right: 50%;
  top: 50%;
  width: 4px;
  height: 8px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  margin: -1px -1px 0 -1px;
  transform: rotate(45deg) translate(-50%, -50%);
  z-index: 2;
}
`;

export const LabelText = styled.p`
margin: 0;
font-size: 16px;
line-height: 24px;
font-weight: 400;
margin-left: 5px;
`;
