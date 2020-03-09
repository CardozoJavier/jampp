/**
 * Function to get width of an HTML element 
 */

const getWidthElement = (value = '', offset = 0) => {
  const p = document.createElement('p');
  p.insertAdjacentHTML('afterbegin', value);
  p.style.visibility = 'hidden';
  p.style.width = 'fit-content';
  p.style.fontSize = '10px';
  document.body.appendChild(p);
  const width = `${p.offsetWidth + Number(offset)}px`;
  p.remove();

  return width;
}

 export default getWidthElement;
