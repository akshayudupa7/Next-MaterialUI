import React from 'react'
import { Typography, Grid ,Container,Paper,Hidden} from "@mui/material";
import Header from "./Header";
import { sidebar } from "../Data/data";
import Link from 'next/link';
import Image from 'next/image';

export default function CardDetails({val}) {
    const {archives}=sidebar
  return (
    <Container>
    <Header/>
    <Grid container spacing={4}>
      <Grid item xs={12} md={8}>
      <Typography variant="h4" component="h2" sx={{marginBottom:'20px' }}>
        {val.title}
      </Typography>
      <Hidden smDown>
      <Image src={val.image}width={400} height={200}/>
      </Hidden>
      <Typography variant="subtitle1" sx={{ color: "grey",marginTop:'20px',marginBottom:'20px' }}>
        Published : {val.publish}
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "17px", color: "#406C50" }}>
         {val.details}
      </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
      <Paper
        elavation={0}
        sx={{
          backgroundColor: "#E5E3E7",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h5" component="h2">
          About Us
        </Typography>
        <Typography variant="body1">{val.author}</Typography>
      </Paper>
      <Typography variant="h5" component="h2">
        Archives
      </Typography>
      {archives.map((value) => {
        return (
          <div style={{ marginTop: "10px" }}>
            <Link variant="body1" href={value.url} key={value.title}>
              {value.title}
            </Link>
          </div>
        );
      })}
    </Grid>
    </Grid>
    </Container>

  )
}
