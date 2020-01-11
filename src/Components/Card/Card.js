import React from 'react';
import PropTypes from 'prop-types';
import { CardTitle, CardDescription, CardHeader } from './styles';

/**
 * Card component can be called with
 * @param {Node} children - (Optional)  It's the content to be displayed into Card.
 * @param {String} title - (Optional) It's title to be displayed in card.
 * @param {String} description - (Optional) It's description to be displayed in card below of title.
 * @return {React Component} A view for card with title and description.
 */
const Card = ({ children, title, description }) => (
  <>
    {title &&
      <CardHeader>
        <CardTitle>{ title }</CardTitle>
        {description && <CardDescription>{ description }</CardDescription>}
      </CardHeader>
    }
    {children}
  </>
);

Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};

Card.defaultProps = {
  children: null,
  title: '',
  description: '',
};

export default Card;
