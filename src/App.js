
import { Component } from 'react';
import './App.css';
import Letters from './Compnent/Letters';
import Score from './Compnent/Score';
import Solution from './Compnent/Solution';


class App extends Component {
  constructor(){
    super()
    this.state = {
      letterStatus: generateLetterStatuses(),
      solution :{
        word: "SECRET",
        hint:"something we dont know"
      },
      score: 20
      
    }
    
  }
  
  
  render(){
     return (
       <div className="App">
        <Solution letterStatus={this.state.letterStatus} solution={this.state.solution}/>
        <Score score={this.state.score}/>
        <Letters letterStatus={this.state.letterStatus} selectLetter={this.props.selectLetter}/>
      </div>
    );
  } 
}
function generateLetterStatuses() {
  let letterStatus = {}
  for (let i = 65; i < 91; i++) {
    letterStatus[String.fromCharCode(i)] = false
  }
  return letterStatus
}

function selectLetter(letter){
  this.state.letterStatus[letter]= true
  console.log("hi")
}

export default App;
