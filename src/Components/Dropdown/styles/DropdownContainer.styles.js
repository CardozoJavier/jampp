import styled from 'styled-components';

export const DropdownContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: ${({ direction }) => direction || ''};
  align-items: ${({ align }) => align || 'center'};
`;