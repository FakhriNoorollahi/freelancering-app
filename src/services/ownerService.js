import http from "./httpService";

export function getProject(id) {
  return http.get(`/project/${id}`).then(({ data }) => data.data);
}

export function getProjects() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}

export function addProject(data) {
  return http.post("/project/add", data).then(({ data }) => data.data);
}

export function updateProject({ id, data }) {
  return http
    .patch(`/project/update/${id}`, data)
    .then(({ data }) => data.data);
}

export function deleteProject(id) {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
}
