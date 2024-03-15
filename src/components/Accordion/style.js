import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid #cccccc;
  border-radius: 8px;

  & > *:not(:first-child):not(:last-child) {
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
  }
`;
