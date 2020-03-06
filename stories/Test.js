import React, { useState } from 'react';
import { ToggleSwitch, Button } from '../src/Components';
import { DivContainer } from '../src/Components/UI/GenericElements/GenericElements.styles';

const Test = () => {
  const [status, setStatus] = useState(false);

  const handleClick = () => {
    setStatus(!status);
  };

  return (
    <DivContainer>
      <Button label="button" type="secondary-default-medium" onClick={handleClick} />
      <ToggleSwitch status={status} onChange={status => console.log(status)} />
    </DivContainer>
  );
};

export default Test;