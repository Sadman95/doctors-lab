import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom';
import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Doctors from "../Doctors/Doctors";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import DoctorsAll from "../DoctorsAll/DoctorsAll";

const Home = () => {
  const [doctors, setDoctors] = useState([]);

  const history = useHistory();

  useEffect(() => {
    fetch("/doctors_data/doctors_data.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  const handleMore = () =>{
    history.push('/alldoctors');
}

  const slicedDoctors = doctors.slice(0, 3);

  return (
    <>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Box id='doctors'>
      <h1 className='text-gray-800 text-center mt-20 mb-6 font-semibold text-4xl'>Our Specialists</h1>
      <Grid
        container
        spacing={{ xs: 2, md: 8 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {
        slicedDoctors.map((doctor, i) => (
          <Grid item xs={2} sm={4} md={4} key={i}>
            <Doctors doctor={doctor}></Doctors>
          </Grid>
        ))
        }
      </Grid>
      <Box className='flex justify-center mt-8'>
      <Button onClick={handleMore} variant='contained'>More</Button>
      </Box>
      </Box>
    </>
  );
};

export default Home;
