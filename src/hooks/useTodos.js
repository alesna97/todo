import { useMutation, useQuery } from "@tanstack/react-query";
import { createTodoApi, editTodoApi, getAllTodosApi } from "api/todos";
import { useRouter } from "next/router";

const useTodos = (params = { getAllTodo: false, getSingleTodo: false }) => {
  const { getAllTodo, getSingleTodo } = params;

  const router = useRouter();

  const getAllTodos = useQuery(
    ["list-todos", router.query],
    () => getAllTodosApi(router.query),
    {
      enabled: getAllTodo,
      onSuccess: (res) => console.log(res),
      onError: (err) => console.log(err),
    }
  );

  const getTodo = useQuery(
    ["todo", router.query],
    () => getAllTodosApi(router.query),
    {
      enabled: getSingleTodo,
      onSuccess: (res) => console.log(res),
      onError: (err) => console.log(err),
    }
  );

  const updateTodo = useMutation(
    ["update-todo"],
    (params) => editTodoApi(params.id, params.data),
    {
      onSuccess: (res) => console.log(res),
      onError: (err) => console.log(err),
    }
  );

  const createTodo = useMutation(
    ["create-todo"],
    (params) => createTodoApi(params),
    {
      onSuccess: (res) => console.log(res),
      onError: (err) => console.log(err),
    }
  );

  const deleteTodo = useMutation(
    ["delete-todo"],
    (params) => editTodoApi(params.id, params.data),
    {
      onSuccess: (res) => console.log(res),
      onError: (err) => console.log(err),
    }
  );

  return {
    getAllTodos,
    getTodo,
    updateTodo,
    createTodo,
    deleteTodo,
  };
};

export default useTodos;
