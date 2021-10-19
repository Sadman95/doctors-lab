import {
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
import { useHistory } from "react-router";

const Doctors = ({ doctor }) => {
  const { id, img_url, name, field } = doctor;

  const history = useHistory();
  const goToDetails = (doctorId) =>{
      history.push(`/doctordetail/${doctorId}`)
  }

  return (
    <Box className="flex justify-center sm:gap-8">
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
        <CardActions className="flex justify-between">
          <Typography size="small" color="primary">
            {field}
          </Typography>
          <Chip
            onClick={()=> goToDetails(id)}
            label="See Details"
            component="a"
            color="primary"
            variant="outlined"
            clickable
          />
        </CardActions>
      </Card>
    </Box>
  );
};

export default Doctors;
