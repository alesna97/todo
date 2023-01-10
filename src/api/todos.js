import baseApi from "api/baseApi";

const path = "/todos";

const getAllTodosApi = (userId, config) =>
  baseApi.get(`${path}/user/${userId}`, config);
const getTodoApi = (id, config) => baseApi.get(`${path}/${id}`, config);
const createTodoApi = (data, config) =>
  baseApi.post(`${path}/add`, data, config);
const editTodoApi = (id, data, config) =>
  baseApi.put(`${path}/${id}`, data, config);
const deleteTodoApi = (id, config) => baseApi.delete(`${path}/${id}`, config);
const markTodoApi = (id, config) =>
  baseApi.patch(`${path}/${id}`, { completed: true }, config);

export {
  getAllTodosApi,
  getTodoApi,
  createTodoApi,
  editTodoApi,
  deleteTodoApi,
  markTodoApi,
};
