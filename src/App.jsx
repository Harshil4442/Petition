import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Page from './app/Home/page';
import Petition from './app/componants/petitions';
import CreatePetition from './app/componants/create-petition';
import PetitionDetails from './app/componants/petitionDetails';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter basename='/'>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route exact path="/petitions" element={<Petition />} />
          <Route exact path="/create-petition" element={<CreatePetition />} />
          <Route exact path="/petition-details/:id" element={<PetitionDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
