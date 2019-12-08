import React from 'react';
import '../src/main.css';
import { palette } from '../src/Components/styles';
import { LinkButtonContainer } from '../src/Components/Button/styles';
import { Button } from '../src/Components';
import { IconGenerator, AddIcon } from '../src/Components/UI/Icons';

const { link, gray } = palette;

export default {
  title: 'Other Button',
};

export const Link = () => (
  <>
    <LinkButtonContainer>
      <IconGenerator
        renderIcon={AddIcon}
        props={{
          left: '5px',
          bottom: '3px',
          fill: link,
          width: '8px',
          height: '8px',
        }}
      />
      <Button
        label="Button-link"
        defaultClassName="button link--default-left"
      />
    </LinkButtonContainer>

    <LinkButtonContainer disabled={true}>
    <IconGenerator
      renderIcon={AddIcon}
      props={{
        left: '5px',
        bottom: '3px',
        fill: gray.g05,
        width: '8px',
        height: '8px',
      }}
    />
    <Button
      label="Button-link"
      defaultClassName="button link--default-left"
      disabled
    />
    </LinkButtonContainer>
  </>
);
