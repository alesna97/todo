/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import useTodos from "hooks/useTodos";
import React, { useEffect, useState } from "react";

const ModalForm = ({ open, handleClose, editId, user, setEditId }) => {
  const { createTodo, updateTodo, getTodo } = useTodos({
    callback: handleClose,
    getSingleTodo: Boolean(editId),
    todoId: editId,
    user,
  });
  const [todo, setTodo] = useState("");

  const onSubmit = async () => {
    if (editId) {
      await updateTodo.mutateAsync({
        id: editId,
        data: { todo },
      });
    } else {
      await createTodo.mutateAsync({ todo, userId: user.id, completed: false });
    }

    setTodo("");
  };

  useEffect(() => {
    if (editId) {
      setTodo(getTodo.data?.data?.todo);
    }
  }, [getTodo.data?.data?.todo]);

  return (
    <Dialog
      open={open}
      onClose={() => {
        setTodo("");
        setEditId();
        handleClose();
      }}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle>Todo</DialogTitle>
      {getTodo.isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={100}
        >
          <CircularProgress size={24} />
        </Box>
      ) : (
        <DialogContent>
          <TextField
            multiline
            rows={4}
            label="Todo"
            placeholder="describe your todo..."
            fullWidth
            disabled={createTodo.isLoading || updateTodo.isLoading}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <DialogActions>
            <Button
              onClick={onSubmit}
              disabled={createTodo.isLoading || updateTodo.isLoading}
            >
              Save
            </Button>
            <Button
              onClick={handleClose}
              disabled={createTodo.isLoading || updateTodo.isLoading}
            >
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default ModalForm;
