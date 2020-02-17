import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import { Breadcrumb} from '../Breadcrumb';
import { Step } from '../Breadcrumb/styles';
import { Button } from '../Button';

/**
 * FooterBreadcrumb component should be called with
 * @param {Node} children - (Required) They're the steps to be displayed.
 * @param {Function} onChange - (Optional) Callback to trigger on onChange event. It receive two arguments: index and text of current step.
 * @param {String} prevButtonText - (Optional) It's the text to be displayed into button for previous step. Default value is "Back".
 * @param {String} nextButtonText - (Optional) It's the text to be displayed into button for next step. Default value is "Next".
 * @param {Number} currentStep - (Optional) Index that define the active step. From 0 to length-1 of array steps. Default value is 0.
 * @param {String} prevButtonType - (Optional) It's the type button to be displayed like "previous button". Default value is "secondary-inverted-medium".
 * @param {String} nextButtonType - (Optional) It's the type button to be displayed like "next button". Default value is "secondary-default-medium".
 * @param {String} prevButtonDisabled - (Optional) If true, the "previous" button is disabled.
 * @param {String} nextButtonDisabled - (Optional) If true, the "next" button is disabled.
 * @return {React Component} A view for breadcrumb into footer with next and back action buttons.
 */
const FooterBreadcrumb = ({ children = [], onChange, prevButtonText, nextButtonText, currentStep, prevButtonType, nextButtonType, prevButtonDisabled, nextButtonDisabled }) => {
  const [stepIndex, setStepIndex] = useState(currentStep);

  const handleBack = () => {
    const previousStep = stepIndex === 0 ? 0 : stepIndex - 1;
    setStepIndex(previousStep);
    onChange(previousStep, children[previousStep].props.text);
  }

  const handleNext = () => {
    const nextStep = stepIndex < (children.length - 1) ? stepIndex + 1 : stepIndex;
    setStepIndex(nextStep);
    onChange(nextStep, children[nextStep].props.text);
  }

  return (
    <Container>
      <Button label={prevButtonText} type={prevButtonType} onClick={handleBack} disabled={prevButtonDisabled} />
      <Breadcrumb currentStep={stepIndex}>
        {children.map((stepItem, index) => (
          <Step key={index} text={stepItem.props.text} />
        ))}
      </Breadcrumb>
      <Button label={nextButtonText} type={nextButtonType} onClick={handleNext} disabled={nextButtonDisabled} />
    </Container>
  );
};

FooterBreadcrumb.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({
    props: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }),
  })).isRequired,
  onChange: PropTypes.func,
  prevButtonText: PropTypes.string,
  nextButtonText: PropTypes.string,
  currentStep: PropTypes.number,
  prevButtonType: PropTypes.string,
  nextButtonType: PropTypes.string,
  prevButtonDisabled: PropTypes.bool,
  nextButtonDisabled: PropTypes.bool,
};

FooterBreadcrumb.defaultProps = {
  onChange: () => null,
  prevButtonText: 'Back',
  nextButtonText: 'Next',
  currentStep: 0,
  prevButtonType: 'secondary-inverted-medium',
  nextButtonType: 'secondary-default-medium',
  prevButtonDisabled: false,
  nextButtonDisabled: false,
};

export default FooterBreadcrumb;
