import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Contact } from "./pages/Contact";
import { Navbar } from "./pages/Navbar";
import { useState, createContext } from "react";
import { Profile } from "./pages/Profile";

const AppContext = createContext();
export const App = () => {
  const [userName, setUserName] = useState();
  return (
    <div>
      <AppContext.Provider value={{ userName, setUserName }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<p>Nepostojeca stranica </p>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
};
