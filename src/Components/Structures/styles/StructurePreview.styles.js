import styled from 'styled-components';
import { Text } from '../../UI/GenericElements';
import { palette, fonts } from '../../styles';
const { gray } = palette;
const { size10 } = fonts;

export const HeaderParameter = styled.div`
  background-color: ${gray.g0};
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

export const HeaderText = styled(Text)`
  font-size: ${size10};
  padding: ${({ padding }) => padding};
  border-right: ${({ borderRight}) => borderRight};
  color: ${gray.g4};
`;