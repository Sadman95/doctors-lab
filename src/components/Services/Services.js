import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Service from "./Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services_data/services_data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <Box id='services' sx={{marginTop: 22}}>
      <p className="text-center italic mb-2">We are ready to serve you</p>
      <h1 className="text-gray-600 table m-auto text-4xl font-semibold mb-8">Our Available Services</h1>

      <Box className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
        {
            services.map((service, i) => <Service key={i} service={service}></Service>)
        }
      </Box>
    </Box>
  );
};

export default Services;
