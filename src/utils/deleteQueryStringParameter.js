import sanitizeUrl from './sanitizeUrl';

const deleteQueryStringParameter = (url = '', key) => {
  const originalUrl = sanitizeUrl(url);
  const newUrl = new URL(originalUrl);
  const paramsToUpdate = new URLSearchParams(newUrl.search);
  paramsToUpdate.delete(key);
  newUrl.search = paramsToUpdate;
  const urlDecoded = decodeURIComponent(newUrl.href);
  return urlDecoded;
};

export default deleteQueryStringParameter