import { Box, Input, Modal, TextField, Button } from "@mui/material";
import useTodoStore from "../store/todoStore";
import ListAltIcon from "@mui/icons-material/ListAlt";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 420,
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "0px solid #1365ef",
  p: 2,
  borderRadius: "6px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const ModalAddTodoList = () => {
  const open = useTodoStore((state) => state.open);
  const handleClose = useTodoStore((state) => state.openModal);

  const ariaLabel = {
    "aria-label": "description",
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Input
            placeholder="Title To-do List"
            inputProps={ariaLabel}
            fullWidth
            sx={{
              padding: "0px 34px 0px 4px",

              "& .MuiInputBase-root": {
                "& :before": {
                  borderBottom: "0px solid red",
                },
              },
            }}
          />
          <ListAltIcon
            sx={{
              color: "action.active",
              mr: 1,
              my: 0.5,
              position: "absolute",
              right: "12px",
            }}
          />
          <TextField
            id="standard-multiline-static"
            // label="Multiline"
            placeholder="Description"
            multiline
            rows={5}
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                padding: "8px",
              },
            }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "4px",
            }}
          >
            <Button
              variant="text"
              sx={{ minWidth: "100px", lineHeight: "20px" }}
            >
              ADD
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAddTodoList;
