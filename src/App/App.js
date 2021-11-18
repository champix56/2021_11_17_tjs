import React from "react";
import Button from "./components/Button/Button";
import MemeViewer from "./components/MemeViewer/MemeViewer";

class App extends React.Component {
  counter = 0;
  constructor(props) {
    super(props);
    this.state = { counter: 0, value2: 0 };
  }
  componentDidUpdate() {
    console.log(
      "%c%s",
      "font-size:42pt;color:red;background-color:skyblue;border:1px solid black;text-align:center",
      "le changement est pret et effectif" + this.state.counter
    );
  }
  render() {
    return (
      <div className="App">
        <MemeViewer
          meme={{
            titre: "mon 1er meme",
            text: "stop la triche",
            x: 370,
            y: 530,
            fontSize: 27,
            color: "tomato",
            fontWeight: "900",
            underline: true,
            italic: true,
            frameX: 0,
            frameY: 0,
          }}
          image={{
            id: 0,
            url: "img/meme1.jpg",
            titre: "meme1",
            h: 778,
            w: 736,
          }}
        />
      </div>
    );
  }
}
export default App;
