import getPosition from './getPosition';
/**
 * Children is parsed for setting initial className to each radio button
 */
const settingClassName = (children, currentValue) => {
  const inputsArray = children.map(({ props: { label, value, color } }, index) => {
    const className = currentValue === value ? `${getPosition(children, index)}__selected` : `${getPosition(children, index)}`;
    return {
      label,
      value,
      color,
      className,
    };
  });

  return inputsArray;
}

export default settingClassName;
