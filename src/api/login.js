import request from "../utils/request";

export const login = (data) => {
  return request({
    url: '/api/login',
    method: 'POST',
    data,
  })
}