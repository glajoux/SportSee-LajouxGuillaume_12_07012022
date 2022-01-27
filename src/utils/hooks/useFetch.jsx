import { useState, useEffect } from "react";
import axios from "axios";

/**
 * Custom hook which fetch the data with axios
 * @param {string} url
 * @param {function} mapperFunction
 * @returns {object} data, error
 */
export function UseFetch(url, mapperFunction) {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setData(mapperFunction.convertToUser(response.data));
      })
      .catch((err) => {
        console.log("ERREUR : " + err);
        setError(true);
      });
  }, [url]);
  return { data, error };
}
