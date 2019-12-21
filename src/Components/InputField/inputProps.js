import { palette } from '../styles';
const { gray } = palette;

/**
 * Properties for inputs field by type
 */
const inputProps = {
  basic: {
    defaultClassName: 'input basic--default-medium',
  },
  "accessory-left": {
    defaultClassName: 'input accessory--default-medium__left',
    iconProps: {
      top: '7px',
      left: '10px',
      fill: gray.g07,
      width: '11px',
      height: '11px',
      verticalAlign: 'middle',
    },
  },
  "accessory-right": {
    defaultClassName: 'input accessory--default-medium__right',
    iconProps: {
      top: '7px',
      left: '145px',
      fill: palette.gray.g07,
      width: '16px',
      height: '16px',
      verticalAlign: 'middle',
    },
  },
  "label-right": {
    defaultClassName: 'input accessory--default-medium__right',
    iconProps: {
      top: '34px',
      left: '145px',
      fill: palette.gray.g07,
      width: '16px',
      height: '16px',
      verticalAlign: 'middle',
    },
  },
  controlled: {
    inputClassName: "input basic--default-medium",
    defaultClassName: "placeholder controlled--default-medium",
    optionalClassName: "placeholder controlled--default-medium__selected",
  },
  "searchbar": {
    defaultClassName: 'input accessory--searchbar-medium__left',
  },
  "error-message": {
    defaultClassName: "input basic--default-medium",
    onFocusClassName: "input basic--default-medium__focus",
    onBlurClassName: "input basic--default-medium__blur",
    errorClassName: "input basic--default-medium__error",
  },
};

export default inputProps;
