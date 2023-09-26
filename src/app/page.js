
import Header from "../component/Header";
import { Container, Grid } from "@mui/material";
import CardPost from "../component/CardPost";
import SubCard from "../component/SubCard";
import { featuredPosts } from "../Data/data";
import { sidebar } from "../Data/data";
import Main from "../component/Main";
import Social from "../component/Social";
import Footer from "../component/Footer";


export default function Home() {
  return (
    <main>
      <Container>
  
        <Header />
        <br />
        <CardPost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((value,id) => {
            return <SubCard value={value}  id={id}/>;
          })}
        </Grid>
        <Grid
          container
          spacing={4}
          sx={{ marginTop: "1px", marginBottom: "20px" }}
        >
          <Main title="Blog Title" />
          <Social
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
          />
        </Grid>
      </Container>
      <Footer />
    </main>
  );
}
