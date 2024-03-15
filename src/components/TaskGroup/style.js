import styled from 'styled-components';

export const Wrapper = styled.div`
  & > fieldset {
    border: none;
  }

  .header-title-wrap {
    display: flex;
    align-items: center;
  }

  .expand-button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    color: #999999;
    font-size: 14px;
    margin-right: 10px;
    padding: 0;

    & > p {
      margin: 0;
      margin-right: 10px;
    }
  }

  .group-header {
    display: flex;
    justify-content: space-between;
  }

  .group-content {
    padding: 10px;
  }

  .clipboard-icon {
    margin-right: 10px;
  }
`;
