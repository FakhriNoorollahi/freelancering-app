import http from "./httpService";

export function addCategoryApi(data) {
  return http.post("/project/add", data).then(({ data }) => data.data);
}
