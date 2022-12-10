import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { SearchPage } from './components/SearchPage';
import {createContext, useState} from 'react';

export const Global=createContext();
function App() {
  const[input,setInput]=useState('');
  return (
    <div className="App">
    <Global.Provider value={{input,setInput}}>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/search' element={<SearchPage/>} />
      </Routes>
      </Global.Provider>
    </div>
  );
}

export default App;
