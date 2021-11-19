import React from "react";
import Button from "./components/Button/Button";
import FlexLayout from "./components/FlexLayout/FlexLayout";
import Header from "./components/Header/Header";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import { REST_ADR, REST_RESSOURCES } from "./config/config";
import store from './store/store'
class App extends React.Component {
  counter = 0;
  constructor(props) {
    super(props);
    this.state = {
      current: {
        titre: "mon 1er meme",
        text: "stop la triche",
        x: 370, y: 530,
        fontSize: 27,
        color: "tomato",
        fontWeight: "900",
        underline: true, italic: true,
        frameX: 0, frameY: 0,
        imageId: 0
      },
      images: [ ]
    };
  }
  componentDidMount(){
    fetch(`${REST_ADR}${REST_RESSOURCES.images}`)
      .then(f=>f.json())
      .then(arr=>this.setState({images:arr}))
  }
  componentDidUpdate() {
    console.log(
      "%c%s",
      "font-size:42pt;color:red;background-color:skyblue;border:1px solid black;text-align:center",
      "le changement est pret et effectif" + JSON.stringify(this.state)
    );
  }
  render() {
    return (
      <>
        <Header />
        <div className="App">
          <FlexLayout>
            <MemeViewer
              meme={this.state.current}
              image={this.state.images.find((e) => e.id === this.state.current.imageId)}
            />
            <MemeForm
              meme={this.state.current}
              onMemeChange={(meme) => {
                this.setState({ current: meme })
              }}
              images={this.state.images}
            />
          </FlexLayout>
        </div>
      </>
    );
  }
}
export default App;
