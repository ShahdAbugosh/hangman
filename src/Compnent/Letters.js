import React, { Component } from 'react';
//import App from '../App';
import Letter from './Letter';

class Letters extends Component {
    
       
    
    render() {
        return (
            <div>
                
                 {Object.keys(this.props.letterStatus).map((l)=> <Letter isUsed={isUsed(this.props.letterStatus,l)} letter={l} selectLetter={this.props.selectLetter}/>)}
                
            </div>
                
            
        );
    }
}

function isUsed (letterStatus,letter){
    if(letterStatus[letter]){
        return "isUsed"
    }
    return "isNotUsed"

}

export default Letters;