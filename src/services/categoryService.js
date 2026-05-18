import http from "./httpService";

export default function getCategories() {
  return http.get("/category/list").then(({ data }) => data.data);
}
