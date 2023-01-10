import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createTodoApi,
  deleteTodoApi,
  editTodoApi,
  getAllTodosApi,
  getTodoApi,
  markTodoApi,
} from "api/todos";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

const useTodos = (props) => {
  const defaultProps = {
    getAllTodo: false,
    getSingleTodo: false,
    ...props,
  };

  const { getAllTodo, getSingleTodo, user, callback, todoId } = defaultProps;
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  const router = useRouter();

  const config = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
      "Content-Type": "application/json",
    },
  };

  const getAllTodos = useQuery(
    ["list-todos", router.query],
    () => getAllTodosApi(user?.id, config),
    {
      enabled: getAllTodo,
    }
  );

  const getTodo = useQuery(["todo", todoId], () => getTodoApi(todoId, config), {
    enabled: Boolean(getSingleTodo && todoId),
  });

  const updateTodo = useMutation(
    ["update-todo"],
    (params) => editTodoApi(params.id, params.data, config),
    {
      onSuccess: (res) => {
        queryClient.invalidateQueries("list-todos");
        callback && callback();
        enqueueSnackbar("Successfully update todo", { variant: "success" });
      },
      onError: (err) => {
        enqueueSnackbar("Oops, something went wrong", { variant: "error" });
      },
    }
  );

  const completeTodo = useMutation(
    ["update-todo"],
    (params) => markTodoApi(params.id, config),
    {
      onSuccess: (res) => {
        queryClient.invalidateQueries("list-todos");
        callback && callback();
        enqueueSnackbar("Successfully complete todo", { variant: "success" });
      },
      onError: (err) => {
        enqueueSnackbar("Oops, something went wrong", { variant: "error" });
      },
    }
  );

  const createTodo = useMutation(
    ["create-todo"],
    (params) => createTodoApi(params, config),
    {
      onSuccess: (res) => {
        queryClient.invalidateQueries("list-todos");
        callback && callback();
        enqueueSnackbar("Successfully create todo", { variant: "success" });
      },
      onError: (err) => {
        enqueueSnackbar("Oops, something went wrong", { variant: "error" });
      },
    }
  );

  const deleteTodo = useMutation(
    ["delete-todo"],
    (params) => deleteTodoApi(params.id, config),
    {
      onSuccess: (res) => {
        queryClient.invalidateQueries("list-todos");
        callback && callback();
        enqueueSnackbar("Successfully delete todo", { variant: "success" });
      },
      onError: (err) => {
        enqueueSnackbar("Oops, something went wrong", { variant: "error" });
      },
    }
  );

  return {
    getAllTodos,
    getTodo,
    updateTodo,
    createTodo,
    deleteTodo,
    completeTodo,
  };
};

export default useTodos;
