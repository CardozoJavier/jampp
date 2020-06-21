import styled from 'styled-components';
import { palette } from '../../styles';

const { gray } = palette;

export const InputSearchContainer = styled.div`
  padding: 20px 10px;
  position: sticky;
    top: 0;
    background: white;
    z-index: 999;
`;

export const InputSearch = styled.input`
  max-width: 100%;
  border: 1px solid ${gray.g1};
  border-radius: 4px;
  padding: 5px;
  &::placeholder {
    color: ${gray.g07};
  }
  &:focus, &:hover {
    border: 1px solid ${gray.g07};
    outline: none;
  }
`;
