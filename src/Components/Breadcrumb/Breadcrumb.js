import React from 'react';
import PropTypes from 'prop-types';
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

/**
 * Breadcrumb component should be called with
 * @param {Array} children - (Required) They're the steps to be display.
 * @param {Number} currentStep - (Required) Index that define the active step. From 0 to length-1 of array steps.
 * @return {React Component} A view for breadcrumb.
 */
const Breadcrumb = ({ children, currentStep }) => (
  <BreadcrumbContainer>
    {children.map((step, index) => (
      <Step
        key={step.props.text}
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

Breadcrumb.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({
    props: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }),
  })).isRequired,
  currentStep: PropTypes.number,
};

Breadcrumb.defaultProps = {
  currentStep: 0,
};

export default Breadcrumb;
