import styled from 'styled-components';

export const DropdownContainer = styled.div`
  display: flex;
  position: ${({ position }) => position || 'relative'};
  flex-direction: ${({ direction }) => direction || ''};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
`;