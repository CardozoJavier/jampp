import getPosition from './getPosition';
/**
 * Children is parsed for setting initial className to each radio button
 */
const settingClassName = (children, currentId, elementClassName) => {
  const inputsArray = children.map(({ props: { label, id, color } }, index) => {
    const className = currentId === id ? `${getPosition(children, index, elementClassName)}__selected` : `${getPosition(children, index)}`;
    return {
      label,
      id,
      color,
      className,
    };
  });

  return inputsArray;
}

export default settingClassName;
