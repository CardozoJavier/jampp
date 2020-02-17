import styled from 'styled-components';
import { palette } from '../../styles';
const { gray } = palette;

export const ParametersDuplicationContainer = styled.div`
  display: grid;
  align-items: baseline;
  grid-template-columns 28% 5% auto 8%;
  width: 475px; 
  padding: 15px;
  border-bottom: 1px solid ${gray.g1};

  .button.link--default-left {
    padding: 15px;
  }
`;