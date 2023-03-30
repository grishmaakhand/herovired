import React from "react";
import { Grid } from "@mui/material";
import Login from "../atoms/Login";

function NavBar() {
  return (
    <Grid container>
      <Grid item xs={3} md={6} lg={12}>
        Hello
      </Grid>
      <Grid item xs={3} md={6} lg={12}>
        Hello
      </Grid>
      <Login />
    </Grid>
  );
}
export default NavBar;
