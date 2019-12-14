import styled from 'styled-components';
import { palette } from '../../styles';
const { green, red, blue, link, black } = palette;

export const NotificationHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 700px;
  min-height: 60px;
  
  &.notification {
    &.header {
      &--success {
        background-color: ${green.g0};
        color: ${green.g1};
      }

      &--error {
        background-color: ${red.r1};
        color: ${red.r3};
      }

      &--info {
        background-color: ${blue.b05};
        color: ${link};
      }
    }

    svg:hover {
      fill: ${black};
      cursor: pointer; 
    }
  }
`;
