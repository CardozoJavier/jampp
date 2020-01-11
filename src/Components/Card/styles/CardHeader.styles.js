import styled from 'styled-components';
import { palette } from '../../styles';
const { gray } = palette;

export const CardHeader = styled.div`
  border-bottom: ${({ borderBottom }) => borderBottom || `1px solid ${gray.g2}`};
  padding-bottom: 15px;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  align-items: baseline;
  justify-content: flex-start;
`;