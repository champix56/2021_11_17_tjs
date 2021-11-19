import React from "react";
import { connect } from "react-redux";
import Header from "./components/Header/Header";
import MemeThumbnail from "./components/MemeThumbnail/MemeThumbnail";
import { Route, Switch } from 'react-router-dom'
import FlexLayout from "./components/FlexLayout/FlexLayout";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import MemeForm from "./components/MemeForm/MemeForm";
import Navbar from "./components/Navbar/Navbar";

class App extends React.Component {
  componentDidUpdate() {
    console.log(
      "%c%s",
      "font-size:10pt;color:red;background-color:skyblue;border:1px solid black;text-align:center",
      "le changement est pret et effectif" + JSON.stringify(this.props)
    );
  }
  render() {
    console.log('APP-->', this.props)
    return (
      <>
        <Header />
        <Navbar/>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <h1>Bonjour et bienvenue</h1>
              voici le nouveau generateur de meme version 2021
            </Route>
            <Route path="/thumbnail">
              <MemeThumbnail />
            </Route>
            <Route path="/edit">
              <FlexLayout>
                <MemeViewer
                  meme={this.props.current}
                  image={this.props.images.find((e) => e.id === this.props.current.imageId)}
                />
                <MemeForm/>
              </FlexLayout>
            </Route>
            <Route path="/" >
            <h1>404 !! NOT FOUND</h1>
            </Route>
          </Switch>


        </div>
      </>
    );
  }
}
function mapStateToProps(state, own) {
  return {
    ...own,
    current: state.current,
    images: state.ressources.images
  }
}
function mapDispatchToProps(dispatch) {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
