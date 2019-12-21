import styled from 'styled-components';
import { palette } from '../../styles';
import { XIconContainer } from '../../UI/Icons/styles';
const { gray, green, red, blue, link, black } = palette;

export const NotificationHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 700px;
  min-height: 60px;
  
  &.notification {
    &.header {

      ${XIconContainer} {
        margin-right: 20px;
        fill: ${gray.g3};
        svg {
          height: 10px;
          width: 10px;
        }
      }

      ${XIconContainer}:hover {
        fill: ${black};
        cursor: pointer; 
      }

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
  }
`;
