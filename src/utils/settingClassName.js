import getPosition from './getPosition';
/**
 * Children is parsed for setting initial className to each radio button
 */
const settingClassName = (children, currentId, defaultClassName, disabled) => {
  const inputsArray = children.map(({ props }, index) => {
    let className;
    if (props.disabled) {
      className = `${getPosition(children, index, defaultClassName)}__disabled`;
    } else {
      className = currentId === props.id ? `${getPosition(children, index, defaultClassName)}__selected` : `${getPosition(children, index, defaultClassName)}`;
    }
    return {
      className,
      id: props.id,
      flat: props.flat,
      label: props.label,
      color: props.color,
      onClick: props.onClick,
      children: props.children,
      disabled: props.disabled,
    };
  });
  return inputsArray;
}

export default settingClassName;
