import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from './components/About';
import Destination from './components/Destination';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Breadcrumbs from './components/Breadcrumbs';
import Footer from './components/Footer';

function App(){
  return(
    <>
      <BrowserRouter>
      <Navbar/>
      <Breadcrumbs/>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>

  );
}

export default App