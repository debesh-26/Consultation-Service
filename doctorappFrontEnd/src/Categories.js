import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/card";
import "./categories.css";
import { Link } from "react-router-dom";
import { baseUrl } from "./constants";

function Categories({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Creating an async function to fetch categories
    async function fetchCategories() {
      try {
        const response = await axios.get(`${baseUrl}/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    // Calling the async function
    fetchCategories();
  }, []);

  return (
    <div className="Card">
      <h2>Book an appointment for an in-clinic consultation</h2>
      <div className="sub-heading">
        Find experienced doctors all across the specalities
      </div>
      <div className="CardWrapper">
        {categories.map((category) => (
          <div
            className="CardContent"
            key={category}
            onClick={() => onSelectCategory(category)}
          >
            <Link
              to="/doctor"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card category={category} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
