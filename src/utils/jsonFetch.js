import 'whatwg-fetch';

export function jsonFetch(url, options) {
  return new Promise((resolve, reject) => {
    fetch(url, options)
    .then(res => {
      if(res.ok) {
        res.json()
        .then(resolve)
        .catch(reject);
      } else {
        reject(res);
      }
    })
    .catch(reject);
  });
};
