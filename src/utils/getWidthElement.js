/**
 * Function to get width of an HTML element 
 */

const getWidthElement = (value = '', offset = 0, fontSize = '10px') => {
  const p = document.createElement('p');
  p.insertAdjacentHTML('afterbegin', value);
  p.style.visibility = 'hidden';
  p.style.width = 'fit-content';
  p.style.fontSize = fontSize;
  document.body.appendChild(p);
  const width = `${p.offsetWidth + Number(offset)}px`;
  p.remove();

  return width;
}

 export default getWidthElement;
