import React from 'react';
import '../src/main.css';
import {
  PrimaryButtonContainer,
} from '../src/Components/Button/styles';
import { Button } from '../src/Components';

export default {
  title: 'Button',
};

export const Primary = () => (
  <>
    <Button Container={PrimaryButtonContainer} className="button--primary-large">
      Primary big button
    </Button>
    <Button Container={PrimaryButtonContainer} className="button--primary-medium">
      Primary small button
    </Button>
    <Button Container={PrimaryButtonContainer} className="button--primary-small">
      Primary very small button
    </Button>
    <Button Container={PrimaryButtonContainer} className="button--primary-large" disabled>
      Primary ghost big button
    </Button>
  </>
);
