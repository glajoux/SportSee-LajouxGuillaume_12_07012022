import { UseFetch } from "./useFetch";
import { path } from "../path";
import ActivityMapper from "../../mapper/ActivityMapper";

/**
 * hook which fetch user activity
 * @param {string} id of user id
 * @returns {object} data, error
 */
export const getActivity = (id) => {
  console.log(path.url.userActivity(id));

  return UseFetch(path.url.userActivity(id), ActivityMapper);
};
