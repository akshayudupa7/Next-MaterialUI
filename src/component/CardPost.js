"use client";
import {
  Button,
  CardActions,
  CardContent,
  Card,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  Main: {
    backgroundImage: `url(https://images.unsplash.com/photo-1615469038804-6b91aef7026f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max)`,
    backgroundPosition: "center",
    padding: "50px 50px",
  },
}));
export default function CardPost() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.Main}>
        <CardContent>
          <Typography variant="h3" color="white">
            Title of a longer featured blog post
          </Typography>
          <Typography variant="subtitle1" color="white">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what's most interesting in this post's
            contents.
          </Typography>
        </CardContent>
        <CardActions variant="subtitle1">
          <Button size="small" color="primary">
            Continue Reading....
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
