import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Doctors = ({ doctor }) => {
  const { img_url, name, field } = doctor;

  return (
    <Box className='flex justify-center sm:gap-8'>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={img_url}
            alt="doctor_img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className='flex justify-between'>
          <Typography size="small" color="primary">
            {field}
          </Typography>
          <Chip
        label="See Details"
        component="a"
        color='primary'
        variant="outlined"
        clickable
      />
        </CardActions>
      </Card>
    </Box>
  );
};

export default Doctors;
