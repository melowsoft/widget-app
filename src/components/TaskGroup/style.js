import styled from 'styled-components';

export const Wrapper = styled.fieldset`
  border: none;
  padding: 0;

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
    padding: 10px;
  }

  .group-content {
    
  }

  .clipboard-icon {
    margin-right: 10px
  }
`;
