import http from "./httpService";

export function addCategory(data) {
  return http.post("/project/add", data).then(({ data }) => data.data);
}
