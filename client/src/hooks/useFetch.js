import { useState, useEffect } from 'react';

const useFetch = (method, url, fetchData) => {
  useEffect(() => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const requestOptions = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fetchData),
    };

    fetch(url, requestOptions)
      .then((res) => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });

    return [data, isPending, error];
  }, [url]);
};

export default useFetch;
