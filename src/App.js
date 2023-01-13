import {useState} from 'react';
import './App.css';
import SideBar from './SideBar';
import CardCreatorScreen from './CardCreator/CardCreatorScreen.js';
import TierListScreen from "./TierList/TierListScreen.js"
import About from './About';

function App() {
  const contentStates = [
    CardCreatorScreen,
    TierListScreen,
    About
  ]
  const [activeButton, setActiveButton] = useState(0)
  const [content, setContent] = useState(<CardCreatorScreen/>);
  const onSideBarClicked = (_idx) => {
    setActiveButton(_idx)
    const CurrentContent = contentStates[_idx]
    setContent(<CurrentContent/>)
  }
  return (
    <div className="App">
      <SideBar>
          <button disabled={activeButton === 0} onClick={() => onSideBarClicked(0)}>Card Creator</button>
          <button disabled={activeButton === 1} onClick={() => onSideBarClicked(1)}>Tier List</button>
          <button disabled={activeButton === 2} onClick={() => onSideBarClicked(2)}>About</button>
      </SideBar>
      <div className="mainContent">
        {content}
      </div>
    </div>
  );
}

export default App;
