import React, { useState, useEffect } from "react";
import { AppointmentCard } from "../components/AppointmentCard";

const Appointments = () => {
  const [appoint, setAppoint] = useState({
    name: "Dr Hazel Pinto",
    specialist: "Endocrinologist",
    rating: 4.36,
    imageurl:
      "https://m.media-amazon.com/images/M/MV5BMTY1OTk1NzQwOF5BMl5BanBnXkFtZTgwNDUzNTA3NjE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
  });

  return (
    <div>
      <AppointmentCard
        name={appoint.name}
        specialist={appoint.specialist}
        rating={appoint.rating}
        imageurl={appoint.imageurl}
      />
    </div>
  );
};

export default Appointments;
