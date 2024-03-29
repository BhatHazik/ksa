import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import "../src/styles/App.css"
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Worksheets from "./Components/Worksheets";
import AdminPannel from "./Components/AdminPannel";
function App() {





  return (
    <>
    <BrowserRouter basename="/ksa">

    
    <Navbar/>

    <Routes>
      <Route path="/" element={<Section/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/work" element={<Worksheets/>}/>
      <Route path="/admin" element={<AdminPannel/>}/>
    </Routes>
    
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
