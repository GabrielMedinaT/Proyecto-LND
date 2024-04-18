import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Mas.css";

const Mas = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.nasa.gov/planetary/apod",
          {
            params: {
              api_key: "Vcj8GJ8OM5W36S4RmnrJu8y1HyULtyLmUdbTadMs",
              date: selectedDate, // Utiliza la fecha seleccionada
            },
          }
        );
        setImageUrl(response.data.url);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (selectedDate !== "") {
      fetchData();
    }
  }, [selectedDate]);

  return (
    <div className="mas">
      <div className="fecha">
        <label htmlFor="datePicker">Selecciona una fecha:</label>
        <input
          type="date"
          id="datePicker"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      <div className="foto">
        {" "}
        {imageUrl && (
          <img src={imageUrl} alt="NASA APOD" width={500} height={500} />
        )}
      </div>
    </div>
  );
};

export default Mas;
