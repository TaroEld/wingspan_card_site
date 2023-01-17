import './App.css';
import {TopBar} from './TopBar';
import CardCreatorScreen from './CardCreator/CardCreatorScreen.js';
import TierListScreen from "./TierList/TierListScreen.js"
import About from './About';
import { BrowserRouter,Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { useState} from 'react';

const Layout = (props) =>
{
  return (
    <div className="App">
      <TopBar activeRouteButton={props.activeRouteButton} setActiveRouteButton={props.setActiveRouteButton}/>
      <Outlet className="mainContent"/>
  </div>
  )
}
function App() {
  const [activeRouteButton, setActiveRouteButton] = useState("")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout activeRouteButton={activeRouteButton} setActiveRouteButton={setActiveRouteButton}/>}>
          <Route index element={<Navigate to="creator"/>}/>
          <Route path="creator" element={<CardCreatorScreen setActiveRouteButton = {setActiveRouteButton}/>} />
          <Route path="tierlists" element={<TierListScreen setActiveRouteButton = {setActiveRouteButton}/>} />
          <Route path="about" element={<About setActiveRouteButton = {setActiveRouteButton}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
