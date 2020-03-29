import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../';
import {
  PaymentRowContainer,
  PaymentColumnField,
  PaymentColumnFieldButton
} from './styles';
import { RowContext } from './PaymentMethodTable';

/**
 *  PaymentRow component should be called with
 *  @param {Node} children - (Required) It's the column's content to be displayed.
 *  @param {String} id - (Required) It's an unique ID to identifier each option in Payment group.
 *  @param {Boolean} isSelected - (Optional) Define is row is selected by default.
 *  @param {Object} style - (Optional) It's define the container styles.
 */
const PaymentRow = ({ children, id, isSelected, style }) => {
  const context = useContext(RowContext);
  const { row, handleClick } = context;
  const selected = id === row;
  const className = selected ? 'selected' : '';

  useEffect(() => {
    if (isSelected) {
      handleClick(id);
    }
  }, []);

  const renderButton = (props) => {
    if (props.textWhenSelect) {
      return <Button label={selected ? props.textWhenSelect : props.children} type="link-default-left" onClick={() => handleClick(id, props.onClick)} />
    } else {
      return <Button label={selected ? null : props.children} icon={selected ? props.iconWhenSelect : null} type="link-check-left" onClick={() => handleClick(id, props.onClick)} />
    }
  };

  return (
      <PaymentRowContainer className={className} {...style}>
        {children.map((row, index) => {
          const button = renderButton(row.props);
          if (row.props.button) {
            return (
              <PaymentColumnFieldButton borderLeft="none" key={index}>
                {button}
              </PaymentColumnFieldButton>
            );
          } else {
            return <PaymentColumnField borderLeft={index === 0 ? 'none' : row.props.borderLeft} key={index}>{row.props.children}</PaymentColumnField>;
          }
        })}
      </PaymentRowContainer>
  );
};

PaymentRow.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  styles: PropTypes.shape({}),
};

PaymentRow.defaultProps = {
  isSelected: false,
  styles: {},
};

export default PaymentRow;