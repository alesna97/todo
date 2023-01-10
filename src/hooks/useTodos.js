import { useQuery } from "@tanstack/react-query";
import { getAllTodosApi } from "api/todos";
import { useRouter } from "next/router";
import React from "react";

const useTodos = () => {
  const router = useRouter();

  const getAllTodos = useQuery(
    ["list-todos", router.query],
    () => getAllTodosApi(router.query),
    {
      onSuccess: (res) => console.log(res),
      onError: (err) => console.log(err),
    }
  );

  const getTodo = async () => {};
  const updateTodo = async () => {};
  const createTodo = async () => {};
  const deleteTodo = async () => {};

  return {
    getAllTodos,
    getTodo,
    updateTodo,
    createTodo,
    deleteTodo,
  };
};

export default useTodos;
