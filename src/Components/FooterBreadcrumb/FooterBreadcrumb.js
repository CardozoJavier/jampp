import React, { useState } from 'react';
import { Container } from './styles';
import { Breadcrumb, Step } from '../Breadcrumb';
import { Button } from '../Button';

const FooterBreadcrumb = ({ children }) => {
  const [stepIndex, setStepIndex] = useState(0);

  const handleBack = () => {
    const previousStep = stepIndex === 0 ? 0 : stepIndex - 1;
    setStepIndex(previousStep);
  }

  const handleNext = () => {
    const nextStep = stepIndex < children.length ? stepIndex + 1 : stepIndex;
    setStepIndex(nextStep);
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
