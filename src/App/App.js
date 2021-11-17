import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
function App() {
  return (
    <div className="App">
      <Button
        text="OK"
        onButtonClicked={(arg) => {
          alert("click sur button");
        }}
      />
      <Button text="cancel" />
      <Button
        text="User ne clique pas ICI"
        bgColor="tomato"
        onButtonClicked={(arg) => {
          console.log(arg);
          alert("Le user a osé cliquer, il est vilain le user");
        }}
      />
      <Button text="Je sais que tu vas quand meme cliquer" />
    </div>
  );
}

export default App;
