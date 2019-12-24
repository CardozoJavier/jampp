import React from 'react';
import { ArrowIcon, CheckIcon } from '../UI/Icons';
import { StepContainer, IconContainer, IconCircle, StepText } from './styles';

const Step = ({ text, isDone, isCurrent, isNext, isLast, borderColor }) => (
  <StepContainer>
    <IconContainer>
      <CheckIcon />
      <IconCircle borderColor={borderColor} isDone={isDone} />
    </IconContainer>
    <StepText isCurrent={isCurrent}>{text}</StepText>
    {!isLast &&
      <ArrowIcon />
    }
  </StepContainer>
);

export default Step;
