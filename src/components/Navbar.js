import React from "react";
import { connect } from "react-redux";
import {
  AppBar,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { MiscellaneousServicesOutlined } from "@mui/icons-material";
const Navbar = (props) => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Container>
          <Grid container sx={{ alignItems: "center" }}>
            <Grid item xs={10}>
              <Typography variant="h4">Redux-Core</Typography>
            </Grid>
            <Grid item xs={2}>
              <AddShoppingCartIcon fontSize="medium" />
              {props.amount}
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
const mapStateToProps = (store) => {
  return {
    cart: store.cart,
    amount: store.amount,
  };
};
export default connect(mapStateToProps)(Navbar);
