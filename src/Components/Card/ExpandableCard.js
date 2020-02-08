import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ExpandableCardContainer, CardTitle, ExpandableCardDescription, ExpandableCardHeader, ChildrenContainer } from './styles';
import { DownChevronIcon } from '../UI/Icons';
import { getClassName } from '../../utils';
import { palette } from '../styles';
const { gray } = palette;

const expandableCardClassesName = {
  opennedClassName: 'expandable card--default__expand',
  closedClassName: 'expandable card--default__collapse'
};

/**
 * ExpandableCard component can be called with
 * @param {Node} children - (Optional)  It's the content to be displayed into Card.
 * @param {String} title - (Optional) It's title to be displayed in card.
 * @param {String} description - (Optional) It's description to be displayed in card below of title.
 * @param {String} width - (Optional) It's the width of the card container.
 * @param {String} padding - (Optional) It's the padding of the card container.
 * @return {React Component} A view for card with title and description.
 */
const ExpandableCard = ({ children, title, description, width, padding, borderBottom, }) => {
  const { opennedClassName, closedClassName } = expandableCardClassesName;
  const [expand, setExpand] = useState(false);
  const [className, setClassName] = useState(closedClassName);
  const toggleToClassName = getClassName(className, opennedClassName, closedClassName);

  const handleClick = () => {
    setClassName(toggleToClassName);
    setExpand(!expand);
  };

  return (
    <ExpandableCardContainer width={width} padding={padding} className={className}>
      {title &&
        <ExpandableCardHeader flexDirection={description ? 'column' : 'row'} borderBottom={borderBottom}>
          <CardTitle>{ title }</CardTitle>
          {description && <ExpandableCardDescription>{ description }</ExpandableCardDescription>}
          <DownChevronIcon props={{
            width: '24px',
            height: '24px',
            className,
            onClick: handleClick,
            cursor: 'pointer',
            fill: gray.g4,
            }}
          />
        </ExpandableCardHeader>
      }
      <ChildrenContainer className={className}>
        {children}
      </ChildrenContainer>
    </ExpandableCardContainer>
  );
};

ExpandableCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
  borderBottom: PropTypes.string,
};

ExpandableCard.defaultProps = {
  children: null,
  title: '',
  description: '',
  width: '',
  padding: '',
  borderBottom: '',
};

export default ExpandableCard;
