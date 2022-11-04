const useFetch = (method, url, data) => {
  const accessToken = localStorage.getItem('accessToken');

  // 기본 옵션
  const defaultOptions = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': 'skip',
      Authorization: accessToken,
    },
    body: JSON.stringify(data),
  };

  return fetch(url, defaultOptions).then(async (res) => {
    if (!res.ok) {
      // 이미 있는 유저가 회원가입을 한 경우
      if (res.status === 409) {
        console.log('conflict 에러');
      }
      console.log('에러', res);
      throw Error('에러발생');

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
