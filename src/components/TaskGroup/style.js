import styled from 'styled-components';

export const Wrapper = styled.fieldset`
  border: none;
  padding: 10px;

  .expand-button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;

    & > p {
        margin: 0;
        color: #999999;
        font-size: 14px;
        margin-right: 10px;
    }
  }

  .group-header {
    display: flex;
    justify-content: space-between;
  }

  .group-content {
    margin-top: 20px;
  }
`;
