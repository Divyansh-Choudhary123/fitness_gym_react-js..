import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/footer/footer';
import About from './Components/About/About';
import Locations from './Components/Locations/Locations';
import Studio from './Components/Studio/Studio';
import Team from './Components/Team/Team';
import Kinsing from './Components/Kinsing/Kinsing';
import Chelsa from './Components/Chelsa/Chelsa';
import Kensington from './Components/Kensington/Kensington';
import Chelsea from './Components/Chelsea/Chelsea';

function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="Locations" element={<Locations/>}></Route>
        <Route path="Studio" element={<Studio/>}></Route>
        <Route path="Team" element={<Team/>}></Route>
        <Route path="kinsing" element={<Kinsing/>}></Route>
        <Route path="Chelsa" element={<Chelsa/>}></Route>
        <Route path="Kensington" element={<Kensington/>}></Route>
        <Route path="Chelsea" element={<Chelsea/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
