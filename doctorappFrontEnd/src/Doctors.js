import React, { useState, useEffect } from "react";
import axios from "axios";
import Doctor from "./components/Doctor";
import { baseUrl } from "./constants";
function Doctors({ selectedCategory }) {
  const [doctors, setDoctors] = useState([]);
  console.log(selectedCategory);
  useEffect(() => {
    // Creating an async function to fetch doctors based on the selected category
    async function fetchDoctors() {
      try {
        if (selectedCategory) {
          const response = await axios.get(
            `${baseUrl}/doctors/${selectedCategory}`
          );
          setDoctors(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    // Calling the async function
    fetchDoctors();
  }, [selectedCategory]);
  return (
    <div>
      <h2 style={{ margin: "20px" }}>Related Doctors</h2>
      <div>
        <div>{<Doctor doctors={doctors} />}</div>
      </div>
    </div>
  );
}

export default Doctors;
