import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './pages/home/Home';
import { Create } from './pages/create/Create';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Aboutus } from './pages/dashboard/Aboutus';
import Details from './pages/details/Details';

function App() {
  return (

    <Router>
      <Navbar />
      {/* <Home/> */}
      <Footer/>
      {/* <Navbar/> */}
      {/* <Alert alert={alert} /> */}

      {/* <div className="container my-3"> */}
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/dashboard" element={<Aboutus />} />
          <Route path="/details/:id" element={<Details />} />
          
        </Routes>
      {/* </div> */}
    </Router>


  );
}

export default App;
