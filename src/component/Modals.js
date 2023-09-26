'use client'

import  {useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#000",
  border: "2px solid #fff",
  color:'#fff',
  boxShadow: 24,
  padding:'0px 10px 30px 30px'
};

export default function Modals() {
  const [open, setOpen] =useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        {" "}
          <PersonPinIcon fontSize="large" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
        <Button onClick={handleClose} sx={{color:"#fff",display:"flex",justifyContent:"flex-end",width:"100%"}}>
          <CloseIcon fontSize="large" sx={{width:"1.4rem"}} />
        </Button>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           My Account
          </Typography>
          <Typography sx={{marginTop:'10px',marginBottom:'16px'}}>
            Do you want to create new account
          </Typography>
          <Button sx={{color:'#fff',borderColor:'#fff'}} variant="outlined">
              Sign Up
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
