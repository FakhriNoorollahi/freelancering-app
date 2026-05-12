export function addCategory(data) {
  console.log(data);

  return http.post("/project/add", data).then(({ data }) => data.data);
}
