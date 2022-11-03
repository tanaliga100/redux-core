import React from "react";
import "./App.css";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { reducerFunction } from "./redux/reducer";
// items
import { Card, Container, Grid, Paper } from "@mui/material";
// redux stuff

function App() {
  // cart setup
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
    // <main>
    //   <Container>
    //     <Grid container spacing={5}>
    //       <TourCard />
    //       <TourCard />
    //       <TourCard />
    //       <TourCard />
    //     </Grid>
    //   </Container>
    // </main>
  );
}
export default App;
