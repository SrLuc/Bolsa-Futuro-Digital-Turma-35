import { useState, useEffect } from "react";

function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setErro(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, erro };
}

export default useApi;
