//Packages
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

//Pages and Component
import Home from './pages/home'
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className="Pages">
          <Routes>
            <Route
              path="/"
              element={<Home/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
