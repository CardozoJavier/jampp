import React from 'react';
import { RowContainer } from './styles';
import { LoadingState } from '../LoadingState';

/**
 *  Row component can be called with
 *  @param {Node} children - (Required) It's the content to be displayed into each row.
 *  @param {Boolean} loading - (Optional) It's the flag to determinate a loading state for view data.
 */
const Row = ({ children, loading }) => (
  <RowContainer>
    {children.map((field, index) => {
      if (loading && !field.props.isButtonGroup) {
        return <LoadingState key={index} />;
      }
      return field;
    })}
  </RowContainer>
);

export default Row;
