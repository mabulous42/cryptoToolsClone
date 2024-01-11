import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './dashboard/HomePage';
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <>
      <HomePage />    
    </>
  );
}

export default App;
