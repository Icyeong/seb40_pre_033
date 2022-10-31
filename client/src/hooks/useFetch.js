import axios from 'axios';

const DOMAIN = 'http://localhost:8000';

const useFetch = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export default useFetch;
