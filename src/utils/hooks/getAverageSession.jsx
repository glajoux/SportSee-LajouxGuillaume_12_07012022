import { UseFetch } from "./useFetch";
import { path } from "../path";
import AverageSessionsMapper from "../../mapper/AverageSessionsMapper";

/**
 * hook which fetch user average session
 * @param {string} id of user id
 * @returns {object} data, error
 */
export const getAverageSession = (id) => {
  console.log(path.url.userAverageSession(id));

  return UseFetch(path.url.userAverageSession(id), AverageSessionsMapper);
};
