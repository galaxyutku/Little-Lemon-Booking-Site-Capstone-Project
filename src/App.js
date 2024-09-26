import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./views/HomePage";
import "../src/styles.css";
import ReservationPage from "./views/ReservationPage";
import AboutUsPage from "./views/AboutUsPage";
import ContactPage from "./views/ContactPage";
import NavBar from "./components/NavBar";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <AlertProvider>
    <div className="mainstyling">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
    <ChakraProvider>
      <Alert />
    </ChakraProvider>
    </AlertProvider>
  );
}

export default App;
