import baseApi from "api/baseApi";

const path = "/todos";

const getAllTodosApi = () => baseApi.get(path);
const getTodoApi = (id) => baseApi.get(`${path}/${id}`);
const createTodoApi = (data) => baseApi.post(`${path}/add`, data);
const editTodoApi = (id, data) => baseApi.put(`${path}/${id}`, data);
const deleteTodoApi = (id) => baseApi.delete(`${path}/${id}`);

export {
  getAllTodosApi,
  getTodoApi,
  createTodoApi,
  editTodoApi,
  deleteTodoApi,
};
