/**
 * Define className for each radio button that can be in top, middle, or bottom position
 */
const getPosition = (array, index, className) => {
  const isFirst = index === 0;
  const isLast = (array.length - 1) === index;

  if (isFirst) {
    return `${className}-first`;
  } else if (isLast) {
    return `${className}-last`;
  } else {
    return `${className}-middle`;
  }
}

export default getPosition;
