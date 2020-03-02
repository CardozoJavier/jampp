import styled from 'styled-components';
import { palette } from '../../styles';
import { XIconContainer } from '../../UI/Icons/styles';
const { black, violet, gray } = palette;

/**
 * Label status | medium - small
 */

export const DefaultLabelText = styled.p`
  margin: 0;
  max-width: ${({ maxWidth }) => `${maxWidth}px` || 'unset'};
  overflow: hidden;
  word-break: break-all;
`;

export const DefaultLabelContainer = styled.div`
  max-width: ${({ maxWidth }) => maxWidth};
  display: ${({ display }) => display || 'flex'};
  justify-content: space-between;
  margin: ${({ margin }) => margin};
  height: fit-content;

  &.label {
    transition: background-color .3s;
    text-align: center;
    padding: 0;

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
        margin-left: 10px;
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
        
    /************************
     * Label button default *
     * **********************
     */
    &.label {
      align-items: center;
      border-radius: 4px;
      ${XIconContainer} {
        fill: ${gray.g07};
      }

      &--default {
        background-color: ${violet.v05};
      }
    }
  }
`;
