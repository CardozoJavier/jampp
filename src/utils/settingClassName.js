import getPosition from './getPosition';
/**
 * Children is parsed for setting initial className to each radio button
 */
const settingClassName = (children, currentId, defaultClassName) => {
  const inputsArray = children.map(({ props }, index) => {
    const className = currentId === props.id ? `${getPosition(children, index, defaultClassName)}__selected` : `${getPosition(children, index, defaultClassName)}`;
    return {
      label: props.label,
      id: props.id,
      color: props.color,
      className,
      children: props.children,
    };
  });
  return inputsArray;
}

export default settingClassName;
