import http from "./httpService";

export function changeProposalStatusApi({ proposalId, data }) {
  return http
    .patch(`/proposal/${proposalId}`, data)
    .then(({ data }) => data.data);
}

export function addProposalApi(data) {
  return http.post("/proposal/add", data).then(({ data }) => data.data);
}

export function getProposalsListApi(qs) {
  return http.get(`/proposal/list?${qs}`).then(({ data }) => data.data);
}
