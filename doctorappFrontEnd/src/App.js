import React, { useState } from "react";
import Categories from "./Categories";
import Doctors from "./Doctors";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelect = (category) => {
    console.log(category);
    setSelectedCategory(category);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Categories onSelectCategory={handleCategorySelect} />} />
          <Route path="/doctor" element={<Doctors selectedCategory={selectedCategory} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
