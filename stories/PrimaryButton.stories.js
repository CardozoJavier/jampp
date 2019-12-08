import React from 'react';
import '../src/main.css';
import {
  PrimaryButtonContainer,
} from '../src/Components/Button/styles';

import { Button, } from '../src/Components';

export default {
  title: 'Primary Button',
};

export const Solid = () => (
  <>
    <PrimaryButtonContainer>
      <Button label="Primary big button" defaultClassName="button primary--default-large" />
    </PrimaryButtonContainer>

    <PrimaryButtonContainer disabled={true}>
      <Button
      label="Primary big button"
      defaultClassName="button primary--default-large"
      disabled
      />
    </PrimaryButtonContainer>
  </>
);

export const Ghost = () => (
  <>
    <PrimaryButtonContainer>
      <Button 
        label="Primary ghost button"
        defaultClassName="button primary--inverted-large"
        optionalClassName="button primary--inverted-large__selected"  
      />
    </PrimaryButtonContainer>

    <PrimaryButtonContainer disabled={true}>
      <Button 
        label="Primary ghost button"
        defaultClassName="button primary--inverted-large"
        disabled
      />
    </PrimaryButtonContainer>
  </>
);
