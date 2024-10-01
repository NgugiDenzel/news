import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import First from "./First"
import NavBar from "./NavBar"
import NewsList from "./News";
import { useState } from "react";
function App() {
  const [category, setCategory] = useState('general');

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div className="pl-12 pr-12" >

  <Router>
      <NavBar onCategoryChange={handleCategoryChange} />
      <Routes>
      <Route path="/news/:category" element={<NewsList />} />
      <Route path="/news/:category" element={<First />} />

      {/* Add more routes here as needed */}
      </Routes>
    </Router>
    <First category={category}/>

     
    </div>
  )
}

export default App
