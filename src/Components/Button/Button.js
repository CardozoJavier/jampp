import React from 'react';
import { ButtonInput } from './styles';
import { bemDestruct } from '../../utils';

const handleClick = () => (alert('You clicked me!'));

const Button = ({ Container, children, className, disabled }) => (
  <Container>
    <ButtonInput 
      type="submit" 
      children={children}
      className={bemDestruct(className, disabled)}
      onClick={disabled ? null : handleClick}
    />
  </Container>
);

export default Button;
