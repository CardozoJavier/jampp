import React from 'react';
import { Button } from '../Button';
import { XIcon } from '../UI/Icons';

/**
 * DefaultLabel component should be called with
 * @param {String} text - (Required) Text to be display inside label.
 * @param {String} size - (Optional) Define label size, it can be small or medium. Small is default.
 * @param {Function} onClose - (Optional) Callback to trigger on onClick event on X icon.
 */
const DefaultLabel = ({ text, size = 'small', onClose }) => (
  <Button label={text} type={`label-default-${size}`} icon={XIcon} onClickIcon={onClose} />
);

export default DefaultLabel;
