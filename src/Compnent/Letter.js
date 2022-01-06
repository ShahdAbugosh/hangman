

import React, { Component } from 'react';

class Letter extends Component {
    render() {
        
        
        return (
        
            <span onClick={this.selectLetter} className={this.props.isUsed}> {this.props.letter}</span>
               
           
        );
    }
}
function selectLetter(){
    this.props.selectLetter(this.props.letter)
     console.log("hello")
}


export default Letter;