import styled from 'styled-components';
import { InputFieldContainer } from '../../InputField/styles';

export const CreationTagContainer = styled(InputFieldContainer)`
  width: ${({ width }) => width};
  padding: 0 5px;
  flex-wrap: wrap;
  cursor: text;
`;