import 'whatwg-fetch';

const fetchIt = (url, userOptions = {}) => {

  const defaultHeaders = {
    'Content-Type': 'application/json'
  };

  const options = {
    ...userOptions,
    headers: {
      ...defaultHeaders,
      ...userOptions.headers
    }
  }

  const isFile = options.body instanceof File;

  if(!isFile && options.body && typeof options.body === 'object')
    options.body  =JSON.stringify(options.body);

  let response = null;
  let statusError = null;

  return fetch(url, options)
  .then(responseObject => {
    response = responseObject;
    statusError = response.status < 200 || response.status >= 300;
    if(statusError)
      return response.text();
    return response.json();
  })
  .then(parsedResponse => {
    if(statusError)
      throw parsedResponse;
    return parsedResponse;
  })
  .catch(error => {
    let errorMessage = response ? `Failed w/ status ${response.status}` : error.toString();
    throw errorMessage;
  })
}        
      
export default fetchIt;
