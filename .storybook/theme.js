import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'white',
  colorSecondary: '#cbcfff',

  // UI
  appBg: 'white',
  appContentBg: '#f7f7f7',
  appBorderColor: '#eee',
  appBorderRadius: 5,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#000',
  textInverseColor: '#333',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',

  inputTextColor: '#333',
  inputBorderRadius: 4,

  brandTitle: 'Jampp',
  brandUrl: 'https://jampp.com/',
  brandImage: 'https://jampp.com/assets/images/logo.svg',
});
