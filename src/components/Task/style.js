import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  
  label {
    display: flex;
    align-items: center;
  }

  p {
    margin: 0;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    margin-left: 5px;
  }

  input[type='checkbox'] {
    width: 16px;
    height: 16px;
    position: relative;
    border: 1px solid;
    border-radius: 2px;
    background: none;
    cursor: pointer;
    line-height: 0;
    margin: 0 0.6em 0 0;
    outline: 0;
    padding: 0 !important;
    vertical-align: text-top;
    -webkit-appearance: none;
    opacity: 0.5;
  }

  input[type='checkbox']:hover {
    opacity: 1;
    border: 1px solid;
  }

  input[type='checkbox']:checked {
    border: none;
    background-color: #02bc9c;
    opacity: 1;
  }

  input[type='checkbox']:before {
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