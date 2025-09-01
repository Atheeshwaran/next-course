'use client';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Purchase = () => {
  return (
    <Card sx={{ display: "flex", width: 400 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            Mac Miller
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTtG8DvmQ2HGzcyVFyf-wRxcE8w4qW1RVdIioyRsbBjvivvkfshMob02kCCoPce0EPYywV-rH9qTiOxgdKc13yz1J7fC7CH84BG_x9sd2y_"
        alt="Live from space album cover"
      />
    </Card>
  );
};

export default Purchase;
