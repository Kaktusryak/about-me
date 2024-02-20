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
          <Route index   element={<Programming/>}/>
          <Route path="/programming" element={<Programming/>}/>
          <Route path="/modelling" element={<Modelling/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/*" element={<Programming/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
