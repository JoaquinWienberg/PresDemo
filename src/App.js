import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import NavBar from './components/NavBar/NavBar';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])

  return (
    <>
      {loading === false ? (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />}/>
          </Routes>
        </BrowserRouter>
      </div>
      ) : (
      <LoadingScreen/>)} </>
    
  );
}

export default App;
