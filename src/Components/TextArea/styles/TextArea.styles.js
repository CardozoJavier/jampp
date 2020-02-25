import styled from 'styled-components';
import { palette } from '../../styles';
const { gray, black, white } = palette;

export const TextAreaContainer = styled.div``;

export const TextAreaInput = styled.textarea`
  border: none;
  resize: none;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: ${({ fontSize }) => fontSize};
  word-break: break-all;
  line-height: 30px;
  color: ${({ disabled }) => disabled ? gray.g3 : black};
  
  &:focus {
    outline: none;
  }
  
  &:disabled {
    background-color: ${gray.g0};
  }
`;