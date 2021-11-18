import React from "react";
import Button from "./components/Button/Button";
import FlexLayout from "./components/FlexLayout/FlexLayout";
import Header from "./components/Header/Header";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";

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
      images: [
        {
          id: 0,
          url: "img/meme1.jpg",
          titre: "meme1",
          h: 778,
          w: 736,
        },
        {
          id: 1,
          url: "img/camera.png",
          titre: "camera",
          h: 768,
          w: 922,
        }
      ]
    };
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
