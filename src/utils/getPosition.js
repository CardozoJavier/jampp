/**
 * Define className for each radio button that can be in top, middle, or bottom position
 */
const getPosition = (array, index, className) => {
  const isTop = index === 0;
  const isBottom = (array.length - 1) === index;
  // const className = 'optionCheckbox basic--default';

  if (isTop) {
    return `${className}-top`;
  } else if (isBottom) {
    return `${className}-bottom`;
  } else {
    return `${className}-middle`;
  }
}

export default getPosition;
