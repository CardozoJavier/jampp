import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { StoriesContainer as Center } from '../stories/styles/StoriesContainer.styles';
import theme from './theme';

addDecorator(storyFn => (
  <Center>
    {storyFn()}
  </Center>
));

addParameters({
  backgrounds: [
    { name: 'white', value: '#ffffff', default: true },
    { name: 'light', value: '#eeeeee' },
    { name: 'gray', value: '#cccccc' },
    { name: 'lightdark', value: '#525252' },
    { name: 'dark', value: '#222222' },
    { name: 'black', value: '#000000' },
    { name: 'blue', value: 'deepskyblue' },
  ],
  options: {
    theme,
  },
})

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
