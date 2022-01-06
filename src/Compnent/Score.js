import React, { Component } from 'react';

class Score extends Component {
    render() {
        return (
            <div>
                <div> {this.props.score}</div>
            </div>
        );
    }
}

export default Score;