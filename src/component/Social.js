"use client";
import Link from "next/link";
import { Paper, Typography, Grid } from "@mui/material";
export default function Social({ title, archives, description }) {
  return (
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
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
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
  );
}
