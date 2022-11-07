const useFetch = (method, url, fetchData) => {
  const accessToken = localStorage.getItem('accessToken');

  // 기본 옵션
  const defaultOptions = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': 'skip',
      Authorization: accessToken,
    },
    body: JSON.stringify(fetchData),
  };

  // const API = process.env.REACT_APP_API_URL;
  return fetch(
    'https://fe54-14-55-61-123.jp.ngrok.io' + url,
    defaultOptions
  ).then(async (res) => {
    if (!res.ok) {
      return res.status;

      // 토큰이 있는 경우 (로그인)
    } else if (res.headers.get('authorization')) {
      localStorage.setItem('accessToken', res.headers.get('authorization'));
      localStorage.setItem('refreshToken', res.headers.get('refresh'));
      return res;
    }

    return res.json();
  });
};

export default useFetch;
