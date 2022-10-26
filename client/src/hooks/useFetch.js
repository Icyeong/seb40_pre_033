import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = async (url) => {
  const [data, setData] = useState(null);
  //   const [isPending, setIsPending] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res))
      .catch((error) => setError(error))
      .then(() => [data, error]);
  }, [url]);
};

export default useFetch;
