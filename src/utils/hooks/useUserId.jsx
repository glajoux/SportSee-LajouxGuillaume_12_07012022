import { useFetch } from "./useFetch";

export function useUserId(url) {
  const dataUserId = useFetch(url.userId);

  return dataUserId;
}
