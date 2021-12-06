import { Box, IconButton, Link, Typography } from "@mui/material";
import GithubIcon from "@mui/icons-material/GitHub";
import PersonIcon from "@mui/icons-material/Person";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";
import Modal from "./Modal";

export default function Footer() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <Box
      margin="auto"
      width={"95%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent="space-between"
      className="footer"
    >
      <div>
        <Typography color="#3A6944" onClick={handleClickOpen}>
          © 2021 Jay Lin
        </Typography>
        <Modal open={open} onClose={handleClose} />
      </div>
      <div>
        <Link href={"https://www.linjay.me"} target={"_blank"}>
          <IconButton aria-label="facebook">
            <PersonIcon />
          </IconButton>
        </Link>
        <Link
          href={"https://www.linkedin.com/in/jay-lin-88347a1aa/"}
          target={"_blank"}
        >
          <IconButton aria-label="twitter">
            <LinkedInIcon />
          </IconButton>
        </Link>
        <Link href={"https://github.com/linjay8"} target={"_blank"}>
          <IconButton aria-label="github" style={{ marginRight: -12 }}>
            <GithubIcon />
          </IconButton>
        </Link>
      </div>
    </Box>
  );
}
