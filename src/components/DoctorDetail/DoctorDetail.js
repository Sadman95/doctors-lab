import { Chip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from 'sweetalert2'

const DoctorDetail = () => {
  const { doctorId } = useParams();

  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("/doctors_data/doctors_data.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  const uniqueDoctor = doctors.filter(
    (doctor) => doctor.id === parseInt(doctorId)
  );

  const successMessage = () =>{
    Swal.fire(
        'Well Done!',
        'You appointment is taken!',
        'success'
      )
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-48 mt-8">
      <div>
        <img width='300px' src={uniqueDoctor[0]?.img_url} alt="" />
      </div>
      <div>
        <h1 className='text-3xl text-green-700 font-medium'>{uniqueDoctor[0]?.name}</h1>
        <h2 className='text-blue-600 font-semibold mb-4'>{uniqueDoctor[0]?.field}</h2>
        <p className='font-medium text-gray-400'>Email: {uniqueDoctor[0]?.email}</p>
        <p className='font-medium text-gray-400 mb-4'>Phone: {uniqueDoctor[0]?.phone}</p>
        <Chip className='font-semibold mr-2' label={uniqueDoctor[0]?.chamber_time} color="success" />
        <Chip onClick={successMessage} className='font-semibold' label="Appoint" clickable color="warning" />
      </div>
    </div>
  );
};

export default DoctorDetail;
