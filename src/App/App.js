import React from "react";
import { connect } from "react-redux";
import Button from "./components/Button/Button";
import FlexLayout from "./components/FlexLayout/FlexLayout";
import Header from "./components/Header/Header";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import { REST_ADR, REST_RESSOURCES } from "./config/config";
import store, { currentInitialState, ressourcesInitialState } from './store/store'
class App extends React.Component {
  componentDidUpdate() {
    console.log(
      "%c%s",
      "font-size:10pt;color:red;background-color:skyblue;border:1px solid black;text-align:center",
      "le changement est pret et effectif" + JSON.stringify(this.state)
    );
  }
  render() {
    console.log('APP-->', this.props)
    return (
      <>
        <Header />
        <div className="App">
          <FlexLayout>
            <MemeViewer
              meme={this.props.current}
              image={this.props.images.find((e) => e.id === this.props.current.imageId)}
            />
           <MemeForm
             
              // onMemeChange={(meme) => {
              //   this.setState({ current: meme })
              // }}
           
            />  
          </FlexLayout>
        </div>
      </>
    );
  }
}
function mapStateToProps(state,own){
  return {
    ...own,
    current:state.current,
    images:state.ressources.images
  }
}
function mapDispatchToProps(dispatch)
{
  return {}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
