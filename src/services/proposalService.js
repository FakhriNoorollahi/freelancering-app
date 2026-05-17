import http from "./httpService";

export function getProposal(id) {
  return http.patch(`/proposal/${id}`).then(({ data }) => data.data);
}
