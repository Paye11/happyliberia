import React from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";



const App = () => {
  return(
  <Router>
      <Routes>
       <Route path="/" element={<LandingPage />} />
         <Route path="*" element={<NotFound />} />
       </Routes>
    </Router>
  )
   ;
};

export default App;
