import styled from 'styled-components';
import { palette } from '../../styles';
const { link } = palette;

export const TooltipContainer = styled.div`
  position: relative;
`;

export const TooltipBox = styled.div`
  display: ${({ display }) => display};
  position: absolute;
  background-color: ${link};
  padding: 12px;
  top: 35px;
  left: ${({ left }) => left};
  right: -140px;
  max-width: 160px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, .25);
  z-index: 9999;
`;

export const TooltipIndicator = styled.div`
  width: 13px;
  height: 13px;
  transform: rotate(45deg);
  background-color: ${link};
  position: absolute;
  top: -6px;
  right: 25px;
`;
