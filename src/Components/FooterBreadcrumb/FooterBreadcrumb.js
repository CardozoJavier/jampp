import React from 'react';
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
 * @param {Number} currentStep - (Required) Index that define the active step. From 0 to length-1 of array steps. Default value is 0.
 * @param {String} prevButtonType - (Optional) It's the type button to be displayed like "previous button". Default value is "secondary-inverted-medium".
 * @param {String} nextButtonType - (Optional) It's the type button to be displayed like "next button". Default value is "secondary-default-medium".
 * @param {String} prevButtonDisabled - (Optional) If true, the "previous" button is disabled.
 * @param {String} nextButtonDisabled - (Optional) If true, the "next" button is disabled.
 * @return {React Component} A view for breadcrumb into footer with next and back action buttons.
 */
const FooterBreadcrumb = ({ children = [], onChange, prevButtonText, nextButtonText, currentStep, prevButtonType, nextButtonType, prevButtonDisabled, nextButtonDisabled }) => {
  const handleBack = () => {
    onChange(currentStep, children[currentStep].props.text);
  }

  const handleNext = () => {
    onChange(currentStep, children[currentStep].props.text);
  }

  return (
    <Container>
      <Button label={prevButtonText} type={prevButtonType} onClick={handleBack} disabled={prevButtonDisabled} />
      <Breadcrumb currentStep={currentStep}>
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
  currentStep: PropTypes.number.isRequired,
  prevButtonType: PropTypes.string,
  nextButtonType: PropTypes.string,
  prevButtonDisabled: PropTypes.bool,
  nextButtonDisabled: PropTypes.bool,
};

FooterBreadcrumb.defaultProps = {
  onChange: () => null,
  prevButtonText: 'Back',
  nextButtonText: 'Next',
  prevButtonType: 'secondary-inverted-medium',
  nextButtonType: 'secondary-default-medium',
  prevButtonDisabled: false,
  nextButtonDisabled: false,
};

export default FooterBreadcrumb;
