import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { TooltipContainer, TooltipBox, TooltipIndicator } from './styles';
import { Text } from '../UI/GenericElements/GenericElements.styles';
import { palette, fonts } from '../styles';
const { white } = palette;
const { size10 } = fonts;

const tooltipBoxWidth = 160;
const tooltipIndicatorWidth = 13;
const tooltipIndicatorRight = 25;

/**
 * Tooltip component should be called with
 * @param {Node} children - (Required) It's the element target.
 * @param {String} text - (Required) It's the text to be displayed into tooltip.
 * @param {Boolean} hide - (Optional) If true, tooltip will not display.
 */
const Tooltip = React.memo(({ children, text, hide }) => {
  const [display, setDisplay] = useState('none');
  const [left, setLeft] = useState('');
  const ref = useRef(null);
  
  const onMouseEnterHandler = () => {
    !hide && setDisplay('block');
  };

  const onMouseLeaveHandler = () => {
    setDisplay('none');
  };
  
  const Children = React.cloneElement(children, {
    ref,
    onMouseEnter: onMouseEnterHandler,
    onMouseLeave: onMouseLeaveHandler,
    props : {
      ref,
      onMouseEnter: onMouseEnterHandler,
      onMouseLeave: onMouseLeaveHandler,
      ...children.props.props,
    }
  });

  useEffect(() => {
    const childrenWidth = ref.current ? ref.current.offsetWidth : '';
    const positionLeft = `${-(tooltipBoxWidth - tooltipIndicatorWidth/2 - tooltipIndicatorRight - childrenWidth/2).toString()}px`;
    setLeft(positionLeft);
  }, [ref.current]);

  return (
    <TooltipContainer>
      {Children}
      <TooltipBox left={left} display={display}>
        <TooltipIndicator />
        <Text color={white} fontSize={size10}>{text}</Text>
      </TooltipBox>
    </TooltipContainer>
  );
});

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  hide: PropTypes.bool,
};

Tooltip.defaultProps = {
  hide: false,
};

export default Tooltip;