import './App.css';
import SideBar from './SideBar';
import TierListScreen from './TierListScreen';
import CardCreatorScreen from './CardCreatorScreen';
import { useState } from 'react';

function App() {
  const contentStates = {
    // TierList : <TierListScreen/>,
    CardCreator : <CardCreatorScreen/>
  }
  const [content, setContent] = useState(contentStates.CardCreator);
  const onSideBarClicked = (_state) => {
    setContent(contentStates[_state])
  }
  return (
    <div className="App">
      <SideBar parentCallback = {onSideBarClicked}/>
      <div className="mainContent">
        {content}
      </div>
    </div>
  );
}

export default App;
