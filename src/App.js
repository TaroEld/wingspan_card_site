import './App.css';
import TopBar from './TopBar';
import CardCreatorScreen from './CardCreator/CardCreatorScreen.js';
import TierListScreen from "./TierList/TierListScreen.js"
import About from './About';
import { BrowserRouter,Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { useState} from 'react';

const Layout = () =>
{
  return (
    <div className="App">
      <TopBar/>
      <Outlet className="mainContent"/>
  </div>
  )
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Navigate to="creator"/>}/>
          <Route path="creator" element={<CardCreatorScreen/>} />
          <Route path="tierlists" element={<TierListScreen/>} />
          <Route path="about" element={<About/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
