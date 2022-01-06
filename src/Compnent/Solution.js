
import React, { Component } from 'react';
import Letter from './Letter';

class Solution extends Component {
   
    
   
    render() {
        
        
        const chars = this.props.solution.word.split('')  

        return (
            <div>
                
                {chars.map((l)=> <Letter letter = {changestatus(l,this.props.letterStatus)}/>)}
                <div>{this.props.solution.hint}</div>
      
                
            </div>
        );
    }
}

function changestatus (letter,letterStatus){
   
    
        if(!letterStatus[letter]){
           return '_'
        }
    
    return letter

}


export default Solution;