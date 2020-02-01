import styled from 'styled-components';
import { palette } from '../../styles';
import { XIconContainer, EllipseIconContainer } from '../../UI/Icons/styles';
const { black, violet, green, gray, red, blue, yellow, link } = palette;

export const StatusLabelText = styled.p`
  margin: 0;
`;

export const StatusLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ margin }) => margin};

  &.label {
    transition: background-color .3s;
    text-align: center;
    padding: 0;
    ${StatusLabelText} {
      font-size: 12px;
    }

    /****************************
     * Status label color green *
     ****************************
    */
    &-green {
      ${StatusLabelText} {
        font-size: 10px;
      }
      padding: .3em 1em;
      background-color: ${green.g0};
      color: ${green.g1};
      
      ${EllipseIconContainer} {
        fill: ${green.g1};
      }
    }

    /**************************
     * Status label color red *
     **************************
    */
    &-red {
      ${StatusLabelText} {
        font-size: 10px;
      }
      padding: .3em 1em;
      background-color: ${red.r1};
      color: ${red.r3};
      
      ${EllipseIconContainer} {
        fill: ${red.r3};
      }
    }

    /*****************************
     * Status label color yellow *
     *****************************
    */    
    &-yellow {
      ${StatusLabelText} {
        font-size: 10px;
      }
      padding: .3em 1em;
      background-color: ${yellow.y0};
      color: ${yellow.y2};
      
      ${EllipseIconContainer} {
        fill: ${yellow.y2};
      }
    }
    
    /***************************
     * Status label color blue *
     ***************************
    */
    &-blue {
      ${StatusLabelText} {
        font-size: 10px;
      }
      padding: .3em 1em;
      background-color: ${blue.b05};
      color: ${link};
      
      ${EllipseIconContainer} {
        fill: ${link};
      }
    }

    /*****************************
     * Default label medium size *
     *****************************
    */
    &-medium {
      min-width: 80px;
      font-size: 10px;
      font-weight: normal;      
      padding: .6em 1em;
      color: ${black};

      ${XIconContainer} {
        svg {
          width: 6px;
          height: 6px;
        }
      }
    }

    /****************************
     * Default label small size *
     ****************************
    */
    &-small {
      font-size: 10px;
      font-weight: normal;
      padding: .3em 1em;
      color: ${gray.g4};

      ${XIconContainer} {
        margin-left: 5px;
        svg {
          width: 5px;
          height: 5px;
        }
      }
    }
    
    /*******************************
     * Status label button default *
     * *****************************
     */
    &.status {
      align-items: baseline;
      border-radius: 9px;
      flex-direction: row-reverse;
      
      ${EllipseIconContainer} {
        margin-right: 5px;
      }

      &--small {

        ${EllipseIconContainer} {
          svg {
            width: 6px;
            height: 6px;
          }
        }
      }
    }
`;
