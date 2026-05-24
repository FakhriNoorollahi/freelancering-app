import http from "./httpService";

export function getCategoryList() {
  return http.get("/category/list").then(({ data }) => data.data);
}
