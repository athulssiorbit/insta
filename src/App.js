import './App.css';
import Button from './Components/Button/Button';
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import ButtonPage from './Pages/Add/ButtonPage';
import Add from './Pages/Add/Add';
import Home from './Pages/Home';
import { useState } from 'react';

function App() {
  const [listData, setListData] = useState({})
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Home setListData={setListData}/>} />
        <Route path="/main" element={<ButtonPage listData={listData} />} />
        <Route path="/create" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
