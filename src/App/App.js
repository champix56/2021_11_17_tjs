import React from 'react';
import './App.css';
import Button from './components/Button/Button'
function App() {
  return (
    <div className="App">
      <Button text="OK"/>
      <Button text="cancel"/>
      <Button text="User ne clique pas ICI"/>
      <Button text="Je sais que tu vas quand meme cliquer"/>
    </div>
  );
}

export default App;
