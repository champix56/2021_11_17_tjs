import React from "react";
import Button from "./components/Button/Button";

class App extends React.Component {
  counter = 0;
  constructor(props) {
    super(props);
    this.state = { counter: 0, value2: 0 };
  }
  componentDidUpdate(){
    console.log('%c%s','font-size:42pt;color:red;background-color:skyblue;border:1px solid black;text-align:center','le changement est pret et effectif'+this.state.counter)
  }
  render() {
    return (
      <div className="App">
        counter:{this.state.counter}
        <br />
        <Button
          text="soustraire 1"
          onButtonClicked={() => {
            this.setState({ counter: this.state.counter - 1 });
            console.log(this.state);
          }}
          bgColor="tomato"
        />
        <Button
          text="Ajouter 1"
          onButtonClicked={() => {
            this.setState({ counter: this.state.counter + 1 });
            console.log(this.state);
          }}
          bgColor="green"
        />
      </div>
    );
  }
}
export default App;
