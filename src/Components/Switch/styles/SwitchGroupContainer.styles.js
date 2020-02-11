import styled from 'styled-components';

export const SwitchGroupContainer = styled.div`
  display: flex;
  height: fit-content;
  justify-content: ${({ justifyContent }) => justifyContent};
`;