import React from 'react';
import Button from './components/Button/Button'

class App extends React.Component{
  counter=0;
  constructor(props)
  {
    super(props);
  }
  render(){
    return <div className="App">
          counter:{this.counter}<br/>
          <Button text="soustraire 1" onButtonClicked={()=>{
            this.counter--; 
            console.log(this.counter);
          }} bgColor="tomato"/>
          <Button text="Ajouter 1" onButtonClicked={()=>{
            this.counter++; 
            console.log(this.counter);
          }} bgColor="green"/>
    </div>
  }
}
export default App;