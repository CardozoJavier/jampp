import React from 'react';
import Step from './Step';
import { BreadcrumbContainer } from './styles';
import { palette } from '../styles';
const { green, gray, action } = palette;

const setBorderColor = (index, currentStep) => {
  let color;
  if (currentStep > index) {
    color = green.g1;
  } else if (currentStep === index) {
    color = action;
  } else {
    color = gray.g07;
  }

  return color;
}

const Breadcrumb = ({ children, currentStep }) => (
  <BreadcrumbContainer>
    {children.map((step, index) => (
      <Step
        isLast={index === (children.length-1)}
        isCurrent={currentStep === index}
        isDone={currentStep > index}
        isNext={currentStep < index}
        text={step.props.text}
        borderColor={setBorderColor(index, currentStep)}
      />
    ))}
  </BreadcrumbContainer>
);

export default Breadcrumb;
