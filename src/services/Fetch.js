export const fetchJson = (url, options = {}) => {
	
  const requestHeaders = options.headers || new Headers({
      Accept: 'application/json',
    });
  if (!(options && options.body && options.body instanceof FormData)) {
    requestHeaders.set('Content-Type', 'application/json');
  }
  if (options.token) {
    requestHeaders.set('x-token', options.token);
  }

  if(options.authorize && options.authorize.username && options.authorize.password){
    requestHeaders.set('Authorization', 'Basic ' + base64.encode(options.authorize.username + ":" + options.authorize.password));
  }
  return fetch(url, { ...options, headers: requestHeaders })
    .then(response => response.text().then(text => ({
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      body: text,
    })))
    .then(({ status, statusText, headers, body }) => {
      let data;
      try {
        data = JSON.parse(body);
      } catch (e) {
        // not json, no big deal
      }
      if (status < 200 || status >= 300) {
        return Promise.reject(new MyError((data && data._error) || statusText ,data,status));
      }
      return { status, headers, body, data };
    }).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
      // ADD THIS THROW error
      throw error;
    });
};

export const queryParameters = (data) => Object.keys(data)
  .map(key => [key, data[key]].map(encodeURIComponent).join('='))
  .join('&');

function MyError(message, data=null, status=null) {
  this.name = 'SweError';
  this.status = status
  this.message = message;
  this.data = data;
  this.stack = (new Error()).stack;
}