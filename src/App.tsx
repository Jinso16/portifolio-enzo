import React from 'react';
import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './sections/Header/Header';
import Footer from './sections/Footer/Footer';
import Home from './sections/Home/Home';
import Fotografia from './sections/Fotografia/Fotografia';
import Aurora from './sections/Fotografia/Aurora/Aurora';
import Machines from './sections/Fotografia/Machines/Machines';
import Contato from './sections/Contato/Contato';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          {/* HOME */}
          <Route path='/' element={<Home />}/>

          {/* FOTOGRAFIA */}
          <Route path='/fotografia' element={<Fotografia />} />
          <Route path='/fotografia/aurora' element={<Aurora />} />
          <Route path='/fotografia/machines' element={<Machines />} />

          {/* CONTATO */}
          <Route path='/contato' element={<Contato />} />

        </Routes>
      </main>

      <Footer />

    </BrowserRouter>

  );
}

export default App;
