import {
  SecondaryActionButtonContainer,
  AccessoryButtonContainer,
  SecondaryButtonContainer,
  PrimaryButtonContainer,
  OptionButtonContainer,
  LinkButtonContainer,
} from './styles';
import { palette } from '../styles';
const { link, action } = palette;

const buttonProps = {
  "accessory-default-left": {
    defaultClassName: 'button accessory--default-left',
    optionalClassName: '',
    iconClassName: 'icon accessory--default-left',
    ButtonContainer: AccessoryButtonContainer,
    iconProps: {},
  },
  "accessory-gray-left": {
    defaultClassName: 'button accessory--gray-left',
    optionalClassName: '',
    iconClassName: 'icon accessory--gray-left',
    ButtonContainer: AccessoryButtonContainer,
    iconProps: {},
  },
  "accessory-default-both": {
    defaultClassName: 'button accessory--default-both',
    optionalClassName: '',
    ButtonContainer: AccessoryButtonContainer,
  },
  "accessory-inverted-left": {
    defaultClassName: 'button accessory--inverted-left',
    optionalClassName: '',
    ButtonContainer: AccessoryButtonContainer,
  },
  "secondary-default-medium": {
    defaultClassName: 'button secondary--default-medium',
    optionalClassName: '',
    ButtonContainer: SecondaryButtonContainer,
    iconClassName: '',
    iconProps: {},
  },
  "secondary-red-medium": {
    defaultClassName: 'button secondary--red-medium',
    optionalClassName: '',
    ButtonContainer: SecondaryButtonContainer,
    iconClassName: '',
    iconProps: {},
  },
  "primary-action-medium": {
    defaultClassName: 'button secondary--action-medium',
    optionalClassName: '',
    ButtonContainer: SecondaryButtonContainer,
    iconClassName: '',
    iconProps: {},
  },
  "secondary-action-medium": {
    defaultClassName: 'button secondary--action-medium',
    optionalClassName: '',
    ButtonContainer: SecondaryActionButtonContainer,
    iconClassName: '',
    iconProps: {},
  },
  "secondary-gray-medium": {
    defaultClassName: 'button secondary--gray-medium',
    optionalClassName: '',
    ButtonContainer: SecondaryButtonContainer,
    iconClassName: '',
    iconProps: {},
  },
  "secondary-inverted-medium": {
    defaultClassName: 'button secondary--inverted-medium',
    optionalClassName: '',
    ButtonContainer: SecondaryButtonContainer,
    iconClassName: '',
    iconProps: {},
  },
  "primary-default-large": {
    defaultClassName: 'button primary--default-large',
    optionalClassName: '',
    ButtonContainer: PrimaryButtonContainer,
    iconClassName: '',
    iconProps: {},
  },
  "primary-inverted-large": {
    defaultClassName: 'button primary--inverted-large',
    optionalClassName: 'button primary--inverted-large__selected',
    ButtonContainer: PrimaryButtonContainer,
    iconClassName: '',
    iconProps: {},
  },
  "link-default-left": {
    defaultClassName: 'button link--default-left',
    optionalClassName: '',
    ButtonContainer: LinkButtonContainer,
    iconClassName: 'button link--default-left',
    iconProps: {
      fill: link,
      width: '11px',
      height: '11px',
    },
  },
  "link-check-left": {
    defaultClassName: 'button link--default-left',
    optionalClassName: '',
    ButtonContainer: LinkButtonContainer,
    iconClassName: 'button link--default-left',
    iconProps: {
      stroke: action,
      width: '14px',
      height: '14px',
    },
  },
  "duplicate-structure": {
    defaultClassName: 'button link--duplicate-left',
    optionalClassName: '',
    ButtonContainer: LinkButtonContainer,
    iconClassName: '',
    iconProps: {
      fill: link,
      width: '9px',
      height: '9px',
    },
  },
  "option-default-medium": {
    defaultClassName: 'button option--default-medium',
    optionalClassName: 'button option--default-medium__selected',
    ButtonContainer: OptionButtonContainer,
    iconClassName: '',
    iconProps: {},
  },

};

export default buttonProps;
