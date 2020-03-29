import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DefaultLabelContainer, DefaultLabelText } from './styles';
import { XIcon, IconGenerator } from '../UI/Icons';
import { bemDestruct, getReferencedId } from '../../utils';

/**
 * DefaultLabel component should be called with
 * @param {String} text - (Required) Text to be display inside label.
 * @param {String} size - (Optional) Define label size, it can be small or medium. Small is default.
 * @param {Function} onClose - (Optional) Callback to trigger on onClick event on X icon.
 */
const DefaultLabel = ({ text, size, onClose, targetId, ...props }) => {
  const [className, setClassName] = useState(`label label--default-${size}`);
  const id = getReferencedId();

  const deleteHandler = () => {
    onClose && onClose(targetId, text);
    const element = document.getElementById(id) || { style: {} };
    element.style.display = 'none';
  };

  return (
    <DefaultLabelContainer id={id} className={bemDestruct(className)} {...props}>
      <DefaultLabelText {...props}>{ text }</DefaultLabelText>
      <IconGenerator
        renderIcon={XIcon}
        props={{
          className: `icon label--default-${size}__right`,
          onClick: deleteHandler,
          display: '',
          margin: '0 0 0 5px',
        }}
      />
    </DefaultLabelContainer>
  );
};

DefaultLabel.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  onClose: PropTypes.func,
};

DefaultLabel.defaultProps = {
  size: 'small',
  onClose: () => null,
};

export default React.memo(DefaultLabel);
