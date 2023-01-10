import baseApi from "api/baseApi";
import user from "config/user";

const path = "/auth/login";

export const login = () =>
  baseApi.post(path, user[Math.floor(Math.random() * user.length)]);
