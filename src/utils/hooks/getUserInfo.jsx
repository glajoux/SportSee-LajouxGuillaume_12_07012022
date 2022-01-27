import { UseFetch } from "./useFetch";
import { path } from "../path";
import UserMapper from "../../mapper/UserMapper";

/**
 * hook which fetch user infos
 * @param {string} id of user id
 * @returns {object} data, error
 */
export const getUserInfo = (id) => {
  console.log(path.url.infoUser(id));

  return UseFetch(path.url.infoUser(id), UserMapper);
};
