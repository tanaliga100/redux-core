import React from "react";
import { Box, Grid, Paper, Rating, Typography } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

function TourCard() {
  return (
    <Grid item xs={3}>
      <Paper elevation={5} square>
        <img
          src="https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="img"
        />
        <Box paddingX={1}>
          <Typography variant="subtitle1">Guitars</Typography>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              alignItems: "center",
            }}
          >
            <AccessTime sx={{ width: 12 }} />
            <Typography variant="body2" marginLeft={0.8}>
              4 hours
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
            mt={3}
          >
            <Rating
              name="read-only"
              value={3.5}
              readOnly
              precision={0.5}
              size="small"
            >
              <Typography variant="body2" marginLeft={0.8}>
                3.5
              </Typography>
              <Typography variant="body2" marginLeft={0.8}>
                1023 reviews
              </Typography>
            </Rating>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}
export default TourCard;
