import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route, Form} from 'react-router-dom'
import Counter from './Counter';
import Navigation from './Navbar';
import { Home } from './Home';
import Regi from './Form';
import LoginPage from './Login';
import { Reg } from "./Regform";
import Regi1 from './Regpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<Navigation/>}>

      <Route index element={<Home/>}/>
      <Route path='app' element={<App/>}/>
      <Route path='form' element={<Reg/>}/>
      
      <Route path='counter' element={<Counter/>}/>
      </Route> */}
      <Route path='/' element={<LoginPage/>}>
      <Route path='regi1' element={<Regi1/>}/>
      <Route path='reg' element={<Regi/>}/>

      </Route>
      
      </Routes></BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
