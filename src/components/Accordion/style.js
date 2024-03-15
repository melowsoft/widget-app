import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid #cccccc;
  border-radius: 8px;

  & > *:not(:first-child) {
    border-top: 1px solid #dddddd;
  }
`;
