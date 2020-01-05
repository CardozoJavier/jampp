import React from 'react';
import PropTypes from 'prop-types';
import { ArrowIcon, CheckIcon } from '../UI/Icons';
import { StepContainer, IconContainer, IconCircle, StepText } from './styles';

/**
 * Step component should be called with
 * @param {String} text - (Required) It's the name step.
 * @param {Boolean} isDone - (Optional) Define if the step is done for styling breadcrumb. 
 * @param {Boolean} isCurrent - (Optional) Define if is the current step. 
 * @param {Boolean} isLast - (Optional) Define if is the last step and not display ArrowIcon.
 * @param {String} borderColor - (Optional) Define the border color of check icon regarding step is done/current/next.
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

Step.propTypes = {
  text: PropTypes.string.isRequired,
  isDone: PropTypes.bool,
  isCurrent: PropTypes.bool,
  isLast: PropTypes.bool,
  borderColor: PropTypes.string,
};

Step.defaultProps = {
  isDone: false,
  isCurrent: false,
  isLast: false,
  borderColor: '',
};

export default Step;
