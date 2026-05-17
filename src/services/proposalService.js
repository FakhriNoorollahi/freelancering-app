import http from "./httpService";

export function getProposal(id) {
  return http.patch(`/proposal/${id}`).then(({ data }) => data.data);
}

export function addProposal(data) {
  return http.post("/proposal/add", data).then(({ data }) => data.data);
}

export function getProposalsList() {
  return http.get("/proposal/list").then(({ data }) => data.data);
}
