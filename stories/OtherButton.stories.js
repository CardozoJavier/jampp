import React from 'react';
import '../src/main.css';
import { Button } from '../src/Components';
import { AddIcon } from '../src/Components/UI/Icons';

export default {
  title: 'Other Button',
};

export const Link = () => (
  <>
    <Button label="Button-link" type="link-default-left" icon={AddIcon} />
    <Button label="Button-link" type="link-default-left" icon={AddIcon} disabled />
  </>
);
