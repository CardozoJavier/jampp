import React, { useState } from 'react';
import { bemDestruct, getClassName } from '../../utils';
import { ButtonInput } from '../Button/styles';
import { IconGenerator, DownChevronIcon } from '../UI/Icons';
import { OptionStatusLabelGroup } from '../OptionStatusLabel/styles';
import { ButtonDropdownContainer } from './styles';
import { palette } from '../styles';
import { OptionStatusLabel } from '../OptionStatusLabel';
import { Option } from '../OptionCheckbox/styles';

const { gray } = palette;

const StatusLabelDropdown = ({ label, children, defaultClassName, optionalClassName, disabled }) => {
  const [className, setClassName] = useState(defaultClassName);
  const [chevron, setChevron] = useState('chevron chevron--default__closed');
  
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);
  const toggleChevronDirection = getClassName(chevron, 'chevron chevron--default__closed', 'chevron chevron--default__opened');

  const handleClick = () => {
    setClassName(toggleToClassName);
    setChevron(toggleChevronDirection);
  }

  return (
    <>
      <ButtonDropdownContainer className={bemDestruct(className, disabled)} onClick={handleClick}>
        <ButtonInput
          children={label || children}
          className={bemDestruct(className, disabled)}
        />
        <IconGenerator
          renderIcon={DownChevronIcon}
          props={{
            position: 'relative',
            right: '20px',
            fill: gray.g4,
            width: '16px',
            height: '16px',
            className: bemDestruct(chevron),
          }}
        />
      </ButtonDropdownContainer>

      <OptionStatusLabelGroup className={bemDestruct(className)}>
        <OptionStatusLabel>
            <Option label="status" value="id1" color="green" />
            <Option label="status" value="id2" color="red" />
            <Option label="status" value="id3" color="yellow" />
            <Option label="status" value="id4" color="blue" />
        </OptionStatusLabel>
      </OptionStatusLabelGroup>
    </>
  );
};

export default StatusLabelDropdown;
