import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Mas.css";

const Mas = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [backgroundStyle, setBackgroundStyle] = useState({});
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

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
              api_key: import.meta.env.VITE_NASA_API_KEY,
              date: selectedDate,
            },
          }
        );
        setName(response.data.explanation);
        setImageUrl(response.data.url);
        setTitle(response.data.title);
        console.log(response.data);
        setBackgroundStyle({ backgroundImage: `url(${response.data.url})` });
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
        <label htmlFor="datePicker" defaultValue={Date.now}>
          Selecciona una fecha:
        </label>
        <input
          className="fecha"
          type="date"
          id="datePicker"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      <div className="fotoDelDia">
        <h2 className="titluloPOD">{title}</h2>
        <div>
          {imageUrl && (
            <img
              className="fotoODAY"
              src={imageUrl}
              alt="NASA APOD"
              width={800}
              height={600}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Mas;
