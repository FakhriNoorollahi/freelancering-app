import http from "./httpService";

export function updateProposal(req) {
  const { proposalId, ...data } = req;
  return http
    .patch(`/proposal/${proposalId}`, data)
    .then(({ data }) => data.data);
}
