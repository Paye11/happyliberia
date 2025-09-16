// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
// import NotFound from "./pages/NotFound";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
// import Aboutsection from "./components/Aboutcomponent/Aboutsection";
// import Plantationsection from "./components/Plantationcomponent/Plantationsection";
// import Whypartnersection from "./components/Whypartnercomponent/Whypartnersection";
// import Contactsection from "./components/Contactcomponent/Contactsection";
// import NotFound from "./pages/NotFound";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/about" element={<Aboutsection />} />
//         <Route path="/plantation" element={<Plantationsection />} />
//         <Route path="/partnership" element={<Whypartnersection />} />
//         <Route path="/contact" element={<Contactsection />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


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
