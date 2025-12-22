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
import Audiovisual from './sections/Audiovisual/Audiovisual';
import TerraAVista from './sections/Audiovisual/TerraAVista/TerraAVista';
import BadDreams from './sections/Audiovisual/BadDreams/BadDreams';
import TPIFS from './sections/Videogame/TPIFS/TPIFS';
import Teatro from './sections/Teatro/Teatro';
import Orian from './sections/Fotografia/Orian/Orian';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          {/* HOME */}
          <Route path='/' element={<Home />} />

          {/* FOTOGRAFIA */}
          <Route path='/fotografia' element={<Fotografia />} />
          <Route path='/fotografia/aurora' element={<Aurora />} />
          <Route path='/fotografia/orian' element={<Orian />} />
          {/* <Route path='/fotografia/machines' element={<Machines />} /> */}

          {/* AUDIOVISUAL */}
          <Route path='/audiovisual' element={<Audiovisual />} />
          <Route path='/audiovisual/terra-a-vista' element={<TerraAVista />} />
          <Route path='/audiovisual/bad-dreams-in-the-night' element={<BadDreams />} />

          {/* VIDEOGAME */}
          <Route path='/videogames/the-place-i-feel-safe' element={<TPIFS />} />

          {/* TEATRO */}
          <Route path='/teatro' element={<Teatro />} />

          {/* CONTATO */}
          <Route path='/contato' element={<Contato />} />

        </Routes>
      </main>

      <Footer />

    </BrowserRouter>

  );
}

export default App;
