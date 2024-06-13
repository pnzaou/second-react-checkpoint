import React from "react";
import ReactDom from 'react-dom'
import './App.css'
import PlayerList from "./composants/PlayerList";

const App = () => {
  return (
    <>
      <PlayerList/>
    </>
  );
}

ReactDom.createRoot(document.getElementById('root')).render(<App/>)
