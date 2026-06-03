import http from "./httpService";

export function getOtpApi(data) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}

export function checkOtpApi(data) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}

export function completeProfileApi(data) {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}

export function logoutApi() {
  return http.post("/user/logout").then(({ data }) => data.data);
}

export function profileApi() {
  return http.get("/user/profile").then(({ data }) => data.data);
}

export function userListApi() {
  return http.get("admin/user/list").then(({ data }) => data.data);
}

export function userChangeUserStatusApi({ userId, data }) {
  return http
    .patch(`admin/user/verify/${userId}`, data)
    .then(({ data }) => data.data);
}
