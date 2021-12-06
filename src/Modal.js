import { styled } from "@mui/material/styles";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import ReactDom from "react-dom";

export default function Modal(props) {
  const BootstrapDialog = styled(Dialog)(() => ({
    "& .MuiPaper-root": {
      borderRadius: "20px",
    },
  }));
  const modalContainer = document.getElementById("modal-container");

  const { onClose, open } = props;
  const handleClose = () => {
    onClose();
  };

  return ReactDom.createPortal(
    <BootstrapDialog onClose={handleClose} open={open}>
      <DialogTitle sx={{ fontFamily: "Inter" }}>About Jay</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ fontFamily: "Inter" }}>
          Jay is a junior at the University of Southern California. He is
          studying Computer Science and Game Design. His hobbies include
          drumming, cooking, and hanging out with his cat, Sato.
        </DialogContentText>
      </DialogContent>
    </BootstrapDialog>,
    modalContainer
  );
}
