import http from "./httpService";

export function changeProposalStatusApi({ proposalId, data }) {
  return http
    .patch(`/proposal/${proposalId}`, data)
    .then(({ data }) => data.data);
}
