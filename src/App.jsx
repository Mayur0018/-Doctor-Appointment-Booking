import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contect from "./pages/Contect";
import MyAppoitment from "./pages/MyAppoitment";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import About from "./pages/About";
import Docters from "./pages/Docters";
import Navbar from "./Components/Navbar";
import Appointment from "./pages/Appointment";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <div className="mx-4 sm:mx-[10%]">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/docters" element={<Docters/>}></Route>
          <Route path="/docters/:speciality" element= {<Docters/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/Contect" element={<Contect/>}></Route>
          <Route path="/About" element= {<About/>}></Route>
          <Route path="/myProfile" element={<MyProfile/>}></Route>
          <Route path="/MyAppoitment" element={<MyAppoitment/>}></Route>
          <Route path="/Appointment/:docId" element={<Appointment/>}></Route>
        </Routes> 
        <Footer />
      </div>
    </>
  );
}

export default App;
