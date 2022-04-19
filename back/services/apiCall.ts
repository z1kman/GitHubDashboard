const {default : fetch} = require('node-fetch');

export default function apiCall<T>(url: string, params?: any): Promise<T> {
  return fetch(`https://api.github.com${url}`, params).then((response : any) => {
    return response.json() as Promise<T>;
  });
}
