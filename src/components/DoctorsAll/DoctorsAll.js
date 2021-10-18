import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Doctors from "../Doctors/Doctors";

const DoctorsAll = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("/doctors_data/doctors_data.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <Box className='my-14'>
      <Grid
        container
        spacing={{ xs: 2, md: 8 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {doctors.map((doctor, i) => (
          <Grid item xs={2} sm={4} md={4} key={i}>
            <Doctors doctor={doctor}></Doctors>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DoctorsAll;
