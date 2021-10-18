import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Service = ({service}) => {
    const {icon_url, service_title, service_description} = service;
  return (
    <>
      <Card sx={{ maxWidth: 345, marginBottom: 4, textAlign: 'center', border: '1px solid lightGrey'}}>
        <CardActionArea>
          <CardMedia
            sx={{height: 50, width: 50, margin: '10px auto'}}
            component="img"
            height="140"
            image={icon_url}
            alt="service_icon"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {service_title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {service_description}
            </Typography>
          </CardContent>
        <div className='flex justify-center gap-4 my-2 text-red-600'>
            <PhoneIcon></PhoneIcon>
            <EmailIcon></EmailIcon>
        </div>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Service;
