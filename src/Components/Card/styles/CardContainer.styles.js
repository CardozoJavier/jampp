import styled from 'styled-components';
import { palette } from '../../styles';
const { gray, white } = palette;

export const CardContainer = styled.div`
  width: ${({ width }) => width || '600px'};
  min-height: 240px;
  border: 1px solid ${gray.g2};
  border-radius: 4px;
  padding: ${({ padding }) => padding || '15px'};
  background-color: ${white};
`;