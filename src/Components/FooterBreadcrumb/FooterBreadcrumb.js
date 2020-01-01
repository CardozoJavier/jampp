import React, { useState } from 'react';
import { Container } from './styles';
import { Breadcrumb, Step } from '../Breadcrumb';
import { Button } from '../Button';

/**
 * FooterBreadcrumb component should be called with
 * @param {Number} currentStep - (Required) Index that define the active step. From 0 to length-1 of array steps.
 * @param {Array} children - (Required) They're the steps to be displayed.
 * @return {React Component} A view for breadcrumb into footer with next and back action buttons.
 */
const FooterBreadcrumb = ({ children, onChange, currentStep = 0 }) => {
  const [stepIndex, setStepIndex] = useState(currentStep);

  const handleBack = () => {
    const previousStep = stepIndex === 0 ? 0 : stepIndex - 1;
    setStepIndex(previousStep);
    onChange && onChange(previousStep, children[previousStep].props.text);
  }

  const handleNext = () => {
    const nextStep = stepIndex < (children.length - 1) ? stepIndex + 1 : stepIndex;
    setStepIndex(nextStep);
    onChange && onChange(nextStep, children[nextStep].props.text);
  }

  return (
    <Container>
      <Button label="Back" type="secondary-inverted-medium" onClick={handleBack} />
      <Breadcrumb currentStep={stepIndex}>
        {children.map((stepItem, index) => (
          <Step key={index} text={stepItem.props.text} />
        ))}
      </Breadcrumb>
      <Button label="Next" type="secondary-default-medium" onClick={handleNext} />
    </Container>
  );
};

export default FooterBreadcrumb;
