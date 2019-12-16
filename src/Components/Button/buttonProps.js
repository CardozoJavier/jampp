import {
  AccessoryButtonContainer,
  SecondaryButtonContainer,
  PrimaryButtonContainer,
  StatusButtonContainer,
} from './styles';


const buttonProps = {
  "accessory-default-left": {
    defaultClassName: 'button accessory--default-left',
    optionalClassName: '',
    iconClassName: 'icon accessory--default-left',
    ButtonContainer: AccessoryButtonContainer,
    iconProps: {
      left: '10px',
      width: '11px',
      height: '11px',
    },
  },
  "accessory-gray-left": {
    defaultClassName: 'button accessory--gray-left',
    optionalClassName: '',
    iconClassName: 'icon accessory--gray-left',
    ButtonContainer: AccessoryButtonContainer,
    iconProps: {
      left: '10px',
      width: '11px',
      height: '11px',
    },
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
  "label-small-right": {
    defaultClassName: 'button label--default-small__right',
    optionalClassName: '',
    ButtonContainer: StatusButtonContainer,
    iconClassName: 'icon label--default-small__right',
    iconProps: {
      right: '8px',
      width: '4px',
      height: '4px',
    },
  },
  "label-default-medium": {
    defaultClassName: 'button label--default-medium right-icon',
    optionalClassName: '',
    ButtonContainer: StatusButtonContainer,
    iconClassName: 'icon label--default-medium__right',
    iconProps: {
      right: '8px',
      width: '6px',
      height: '6px',
    },
  },
};

export default buttonProps;
