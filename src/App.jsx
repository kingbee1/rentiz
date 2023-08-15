import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Buying from "./pages/Buying";
import Renting from "./pages/Renting";
import Selling from "./pages/Selling";
import ContactUs from "./pages/ContactUs";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import WelcomePage from "./pages/WelcomePage"


function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/buying" element={<Buying />} />
          <Route path="/renting" element={<Renting />} />
          <Route path="/selling" element={<Selling />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<Buying />} />
          <Route path="/welcome-page" element={<WelcomePage /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
