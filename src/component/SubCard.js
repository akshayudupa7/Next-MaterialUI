"use client";
import { Grid } from "@mui/material";
import {
  Button,
  CardActions,
  CardContent,
  Card,
  Typography,
  CardMedia,
  CardActionArea,
  Hidden,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
const useStyles = makeStyles(() => ({
  cardbox: {
    display: "flex",
  },
}));
export default function SubCard({ value ,id}) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea href={`/card${id}`}>
        <Card className={classes.cardbox}>
          <CardContent className={classes.contents}>
            <Typography variant="h5"> {value.title}</Typography>
            <Typography variant="body2">{value.date}</Typography>
            <Typography variant="body1">{value.description}</Typography>
          </CardContent>
          <Hidden smDown>
            <CardMedia
              component="img"
              className={classes.contents}
              sx={{ width: 151 }}
              image={value.image}
              alt={value.imageText}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
