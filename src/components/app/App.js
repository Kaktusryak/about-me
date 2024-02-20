import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Modelling from '../../pages/modelling/Modelling';
import Programming from '../../pages/programming/Programming';
import Contacts from '../../pages/contacts/Contacts';
import NoPage from '../../pages/noPage/NoPage';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route index element={<Programming/>}/>
          <Route path="/about-me/programming" element={<Programming/>}/>
          <Route path="/about-me/modelling" element={<Modelling/>}/>
          <Route path="/about-me/contacts" element={<Contacts/>}/>
          <Route path="/about-me/*" element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
