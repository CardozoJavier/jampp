import { palette } from '../styles';
import { InputFieldContainer } from './styles';
const { gray } = palette;

/**
 * Properties for inputs field by type
 */
const inputProps = {
  "basic-medium": {
    defaultClassName: 'input basic--default-medium',
    onFocusClassName: "input basic--default-medium__focus",
    onBlurClassName: "input basic--default-medium__blur",
    errorClassName: "",
    InputContainer: InputFieldContainer,
  },
  "icon-small-left": {
    defaultClassName: 'input basic--small-left',
    onFocusClassName: "input basic--small-left__focus",
    onBlurClassName: "input basic--small-left__blur",
    errorClassName: "",
    InputContainer: InputFieldContainer,
    iconProps: {
      fill: gray.g07,
      width: '11px',
      height: '11px',
    },
  },
  "searchbar": {
    defaultClassName: 'input basic--medium-left',
    onFocusClassName: "input basic--medium-left__focus",
    onBlurClassName: "input basic--medium-left__blur",
    errorClassName: "",
    InputContainer: InputFieldContainer,
    iconProps: {
      fill: gray.g07,
      width: '11px',
      height: '11px',
    },
  },
  "icon-right-medium": {
    defaultClassName: 'input accessory--default-medium__right',
    iconProps: {
      top: '7px',
      left: '145px',
      fill: gray.g07,
      width: '16px',
      height: '16px',
      verticalAlign: 'middle',
    },
  },
  "label-medium": {
    defaultClassName: 'input accessory--default-medium__right',
    iconProps: {
      top: '34px',
      left: '145px',
      fill: gray.g07,
      width: '16px',
      height: '16px',
      verticalAlign: 'middle',
    },
  },
  "controlled-medium": {
    inputClassName: "input basic--default-medium",
    defaultClassName: "placeholder controlled--default-medium",
    optionalClassName: "placeholder controlled--default-medium__typing",
    onFocusClassName: "border controlled--default-medium__focus",
    onBlurClassName: "border controlled--default-medium__blur",

  },
  "searchbar-large": {
    defaultClassName: 'input accessory--searchbar-large__left',
  },
  "error-message-medium": {
    defaultClassName: "input basic--default-medium",
    onFocusClassName: "input basic--default-medium__focus",
    onBlurClassName: "input basic--default-medium__blur",
    errorClassName: "input basic--default-medium__error",
    InputContainer: InputFieldContainer,
  },
};

export default inputProps;
