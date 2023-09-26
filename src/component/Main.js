"use client";
import { Typography, Grid } from "@mui/material";

export default function Main({ title }) {
  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h4" component="h2">
        {title}
      </Typography>
      <Typography variant="h5" compoent="h3" sx={{ color: "grey" }}>
        Sample blog post
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "grey" }}>
        April 1, 2020
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "17px", color: "#406C50" }}>
        This blog post shows a few different types of content that are supported
        and styled with Material styles. Basic typography, images, and code are
        all supported. You can extend these by modifying Markdown.js. Cum sociis
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
        vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
        consectetur purus sit amet fermentum. Curabitur blandit tempus
        porttitor. <br />
        Nullam quis risus eget urna mollis** ornare vel eu leo. Nullam id dolor
        id nibh ultricies vehicula ut id elit. Etiam porta sem malesuada magna
        mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean
        lacinia bibendum nulla sed consectetur. Heading Vivamus sagittis lacus
        vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non
        commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
        elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Sub-heading Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Sub-heading Cum sociis natoque penatibus
        et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia
        bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis
        euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris
        condimentum nibh, ut fermentum massa justo sit amet risus.
        <br />- Praesent commodo cursus magna, vel scelerisque nisl consectetur
        et. - Donec id elit non mi porta gravida at eget metus. - Nulla vitae
        elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor
        fringilla. Nulla vitae elit libero, a pharetra augue. 1. Vestibulum id
        ligula porta felis euismod semper. 2. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. 3. Maecenas sed
        diam eget risus varius blandit sit amet non magna. Cras mattis
        consectetur purus sit amet fermentum. Sed posuere consectetur est at
        lobortis.
      </Typography>
    </Grid>
  );
}
