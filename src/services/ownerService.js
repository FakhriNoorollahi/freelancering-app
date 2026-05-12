import http from "./httpService";

export function getProjects() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}

export function addProject(data) {
  console.log(data);

  return http.post("/project/add", data).then(({ data }) => data.data);
}
