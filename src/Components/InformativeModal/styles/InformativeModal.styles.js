import styled from 'styled-components';
import { palette } from '../../styles';
const { gray } = palette;

export const InformativeModalContainer = styled.div`
  padding: 24px;
`;

export const ResultContainer = styled.div`
  border: 1px solid ${gray.g1};
  border-radius: 4px;
  margin-bottom: 15px;
  padding: 8px 9px;
  width: 70%;
`;