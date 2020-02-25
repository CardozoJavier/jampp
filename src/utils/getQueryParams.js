/**
 * Function to get query params from an URL
 */
const getQueryParams = (url) => {
  const a = document.createElement('a');
  a.href = url;
  const params = new URLSearchParams(a.search);
  const paramsDecoded = decodeURIComponent(params);
  const paramsSplitted = paramsDecoded.split('&').map(param => param.split('='));
  const paramsMapped = new Map(paramsSplitted);
  
  return paramsMapped;
}

export default getQueryParams;
