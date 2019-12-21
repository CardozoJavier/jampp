import {
  AccessoryButtonContainer,
  SecondaryButtonContainer,
  PrimaryButtonContainer,
  OptionButtonContainer,
  StatusButtonContainer,
  LinkButtonContainer,
} from './styles';


const buttonProps = {
  "accessory-default-left": {
    defaultClassName: 'button accessory--default-left',
    optionalClassName: '',
    iconClassName: 'icon accessory--default-left',
    ButtonContainer: AccessoryButtonContainer,
    iconProps: {
      // left: '10px',
      // width: '11px',
      // height: '11px',
    },
  },
  "accessory-gray-left": {
    defaultClassName: 'button accessory--gray-left',
    optionalClassName: '',
    iconClassName: 'icon accessory--gray-left',
    ButtonContainer: AccessoryButtonContainer,
    iconProps: {
      // left: '10px',
      // width: '11px',
      // height: '11px',
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
  "label-default-small": {
    defaultClassName: 'button label--default-small',
    optionalClassName: '',
    ButtonContainer: StatusButtonContainer,
    iconClassName: 'icon label--default-small__right',
    iconProps: {
      // right: '8px',
      // width: '4px',
      // height: '4px',
    },
  },
  "label-default-medium": {
    defaultClassName: 'button label--default-medium right-icon',
    optionalClassName: '',
    ButtonContainer: StatusButtonContainer,
    iconClassName: 'icon label--default-medium__right',
    iconProps: {
      // right: '8px',
      // width: '6px',
      // height: '6px',
    },
  },
  "link-default-left": {
    defaultClassName: 'button link--default-left',
    optionalClassName: '',
    ButtonContainer: LinkButtonContainer,
    iconClassName: '',
    iconProps: {},
  },
  "status-small-green": {
    defaultClassName: 'button status--small-green',
    optionalClassName: '',
    ButtonContainer: StatusButtonContainer,
    iconClassName: '',
    iconProps: {},
  },
  "status-small-red": {
    defaultClassName: 'button status--small-red',
    optionalClassName: '',
    ButtonContainer: StatusButtonContainer,
    iconClassName: '',
    iconProps: {},
  },
  "status-small-yellow": {
    defaultClassName: 'button status--small-yellow',
    optionalClassName: '',
    ButtonContainer: StatusButtonContainer,
    iconClassName: '',
    iconProps: {},
  },
  "status-small-blue": {
    defaultClassName: 'button status--small-blue',
    optionalClassName: '',
    ButtonContainer: StatusButtonContainer,
    iconClassName: '',
    iconProps: {},
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
