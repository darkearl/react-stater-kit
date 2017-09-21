const getfile = (key) => {
  switch(key) {
    case 'login':
      return require('../fixtures/login_success.json');
      break;
    case 'getProfile':
      return require('../fixtures/getProfile.json');
      break;
    default:
      console.log('fixtures ' + key +' not found');
  }
}
export const fetchJson = (url, options = {}) => {
  let dumpData = getfile(url);
  let { status, statusText, data } = dumpData;
  let headers = null;
  let body = null;
  
  return new Promise(function (resolve, reject) {
      // simulate an asynchronous action where data is fetched on
      // a remote server somewhere.
      
      setTimeout(function () {
        if (status < 200 || status >= 300) {
          reject(new MyError((data && data._error) || statusText ,data,status));
        }
        resolve({ status, headers, body, data });
      }, 250);
    });
};


function MyError(message, data=null, status=null) {
  this.name = 'SweError';
  this.status = status
  this.message = message;
  this.data = data;
  this.stack = (new Error()).stack;
}