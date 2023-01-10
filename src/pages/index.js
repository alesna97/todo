/* eslint-disable react-hooks/exhaustive-deps */
import { Add } from "@mui/icons-material";
import { Fab, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Header from "components/Header";
import ModalForm from "components/ModalForm";
import TodoList from "components/TodoList";
import useTodos from "hooks/useTodos";
import { useCallback, useState } from "react";

const Home = ({ user }) => {
  const [openModal, setOpenModal] = useState(false);
  const [editId, setEditId] = useState();
  const { getAllTodos, deleteTodo, completeTodo } = useTodos({
    getAllTodo: true,
    user,
  });

  const closeModal = useCallback(() => setOpenModal(false), []);
  const handleOpenModal = useCallback(() => setOpenModal(true), []);
  const handleEdit = useCallback((id) => {
    setOpenModal(true);
    setEditId(id);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      position="relative"
      minHeight="100vh"
      gap={2}
      boxShadow={3}
    >
      <Header />
      <Typography px={2} variant="h6">
        logged in as {user.username}.
      </Typography>
      <TodoList
        data={getAllTodos.data?.data?.todos || []}
        onEditItem={handleEdit}
        onDeleteItem={deleteTodo}
        onMarkItem={completeTodo}
        loading={getAllTodos.isFetching}
      />
      <ModalForm
        open={openModal}
        handleClose={closeModal}
        user={user}
        editId={editId}
        setEditId={setEditId}
      />
      <Box position="fixed" bottom={30} right={30}>
        <Fab
          color="primary"
          aria-label="add"
          size="large"
          onClick={handleOpenModal}
        >
          <Add />
        </Fab>
      </Box>
    </Box>
  );
};

export default Home;
