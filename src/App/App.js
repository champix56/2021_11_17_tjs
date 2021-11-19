import React from "react";
import { connect } from "react-redux";
import Header from "./components/Header/Header";
import MemeThumbnail from "./components/MemeThumbnail/MemeThumbnail";
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
        <div className="App">
          <MemeThumbnail/>
          {/* <FlexLayout>
            <MemeViewer
              meme={this.props.current}
              image={this.props.images.find((e) => e.id === this.props.current.imageId)}
            />
           <MemeForm
             
              // onMemeChange={(meme) => {
              //   this.setState({ current: meme })
              // }}
           
            />  
          </FlexLayout> */}
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
