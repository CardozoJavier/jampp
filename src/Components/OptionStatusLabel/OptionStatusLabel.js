import React, { useState } from 'react';
import { OptionStatusLabelContainer } from './styles';
import { bemDestruct, settingClassName } from '../../utils';
import { StatusButtonContainer } from '../Button/styles';
import { Button } from '../Button';

const OptionStatusLabel = ({ children }) => {
  const childrenParsed = settingClassName(children);
  const [array, setArray] = useState(childrenParsed);

  /**
   * When an option is clicked, his className is toggle to selected and everyone else are being uncheck.
   */
  const handleCheck = (e, currentValue) => {
    const inputsArray = settingClassName(children, currentValue);
    setArray(inputsArray);
  }

  return (
    array.map((input, i) => (
      <OptionStatusLabelContainer
        key={input.value}
        className={bemDestruct(input.className)}
        onClick={e => handleCheck(e, input.value)}
      >
        <StatusButtonContainer margin={'0'}>
          <Button label="status" defaultClassName={`button status--${input.color}-small`}/>
        </StatusButtonContainer>
      </OptionStatusLabelContainer>
    ))
  );
}

export default OptionStatusLabel;
