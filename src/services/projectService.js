import http from "./httpService";

export function getOwnerProjectsApi() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}

export function getProjectApi(id) {
  return http.get(`/project/${id}`).then(({ data }) => data.data);
}

export function addProjectApi(data) {
  return http.post("/project/add", data).then(({ data }) => data.data);
}

export function updateProjectApi({ id, newProject }) {
  return http
    .patch(`/project/update/${id}`, newProject)
    .then(({ data }) => data.data);
}

export function deleteProjectApi(id) {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
}

export function getListProject() {
  return http.get(`/project/list`).then(({ data }) => data.data);
}
