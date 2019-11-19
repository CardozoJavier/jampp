import React from 'react';
import '../src/main.css';
import { 
  PrimaryButtonContainer,
  SecondaryButtonContainer,
} from '../src/Components/Button/styles';

import { Button } from '../src/Components';

export default {
  title: 'Button',
};

export const Primary = () => (
  <>
    <PrimaryButtonContainer>
      <Button label="Primary big button" className="button--primary-large" />
    </PrimaryButtonContainer>

    <PrimaryButtonContainer>
      <Button label="Primary big button" className="button--primary-medium" />
    </PrimaryButtonContainer>

    <PrimaryButtonContainer>
      <Button label="Primary big button" className="button--primary-small" />
    </PrimaryButtonContainer>

    <PrimaryButtonContainer disabled={true}>
      <Button label="Primary ghost button" className="button--primary-large" disabled />
    </PrimaryButtonContainer>
  </>
);


export const Secondary = () => (
  <>
    <PrimaryButtonContainer>
      <Button label="Button" className="button--primary-medium" />
    </PrimaryButtonContainer>

    <SecondaryButtonContainer>
      <Button label="Button" className="button--secondary-medium" />
    </SecondaryButtonContainer>

    <PrimaryButtonContainer>
      <Button label="Button" className="button--primary-medium" disabled/>
    </PrimaryButtonContainer>
  </>
);
