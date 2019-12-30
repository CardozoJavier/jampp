import React from 'react';
import { ArrowIcon, CheckIcon } from '../UI/Icons';
import { StepContainer, IconContainer, IconCircle, StepText } from './styles';

/**
 * Step component should be called with
 * @param {String} text - (Required) It's the name step.
 * @param {Boolean} isDone - (Required) Define if the step is done for styling breadcrumb. 
 * @param {Boolean} isCurrent - (Required) Define if is the current step. 
 * @param {Boolean} isLast - (Required) Define if is the last step and not display ArrowIcon.
 * @param {String} borderColor - (Required) Define the border color of check icon regarding step is done/current/next.
 */
const Step = ({ text, isDone, isCurrent, isLast, borderColor }) => (
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
