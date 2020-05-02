export const getQueryParams = (params, url) => {
  //this expression is to get the query strings
  const reg = new RegExp("[?&]" + params + "=([^&#]*)", "i");
  const queryString = reg.exec(url);
  return queryString ? queryString[1] : null;
};
