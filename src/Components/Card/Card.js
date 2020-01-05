import React from 'react';
import PropTypes from 'prop-types';
import { CardContainer, CardTitle, CardDescription, CardHeader } from './styles';

/**
 * Card component can be called with
 * @param {String} title - (Optional) It's title to be displayed in card.
 * @param {String} description - (Optional) It's description to be displayed in card below of title.
 * @return {React Component} A view for card with title and description.
 */
const Card = ({ title, description }) => (
  <CardContainer>
    <CardHeader>
      <CardTitle>{ title }</CardTitle>
      {description && <CardDescription>{ description }</CardDescription>}
    </CardHeader>
  </CardContainer>
);

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Card.defaultProps = {
  title: '',
  description: '',
};

export default Card;
