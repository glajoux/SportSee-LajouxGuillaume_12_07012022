import { useSate, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useSate({});
  const [isLoading, setLoading] = useSate(true);

  useEffect(() => {
    if (!url) return;
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
      setLoading(false);
    }

    setLoading(true);
    fetchData();
  }, [url]);

  return { data, isLoading };
}

export default useFetch;
