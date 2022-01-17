import { useState, useEffect } from "react";
import UserMapper from "../../mapper/UserMapper";

export function useFetchUser(url) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (!url) return;
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setData(UserMapper.convertToUser(data));
      setLoading(false);
    }
    setLoading(true);
    fetchData();
  }, [url]);
  return { data, isLoading };
}
