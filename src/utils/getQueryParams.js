/**
 * Function to get query params from an URL
 */
const getQueryParams = (url) => {
  if (!url) return null;
  try {
    const newUrl = new URL(url);
    const params = new URLSearchParams(newUrl.search);
    const paramsDecoded = decodeURIComponent(params);
    const paramsSplitted = paramsDecoded.split('&').map(param => param.split('='));
    const paramsMapped = new Map(paramsSplitted);

    return paramsMapped;
  } catch (e) {
    return null;
  };
}

export default getQueryParams;
