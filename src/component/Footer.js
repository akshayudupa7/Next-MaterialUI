"use client";
import { Typography, Stack } from "@mui/material";

export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#E5E3E7",
        padding: "40px 0px",
      }}
    >
      <Stack direction="column" sx={{marginBottom:"20px"}}>
        <Typography variant="subtitle1"  sx={{display:'flex',justifyContent:'center'}}>Contact Us :</Typography>
        <Typography variant="body1"   sx={{display:'flex',justifyContent:'center',width:'100%',textAlign:'center'}}>
         Aevitas IT LLC 4200 Research Forest Dr Ste 194,<br/> The
          Woodlands TX 77381, USA <br/>Phone: +1 (713) 589 3297<br/> E-mail:
          contact@aevitasit.com
        </Typography>
      </Stack>
      <Typography>Something here to give the footer a purpose!</Typography>
      <Typography>Copyright © Your Website 2023.</Typography>
    </div>
  );
}
