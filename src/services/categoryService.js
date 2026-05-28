import http from "./httpService";

export function getCategoryListApi() {
  return http.get("/category/list").then(({ data }) => data.data);
}
