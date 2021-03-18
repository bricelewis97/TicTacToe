import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from "./components/Game"

    // Constructor keeps track of the games state. It is not neccesary because when a square is clicked the program calls on a function provided by "board"
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         value: null,
 //     };
    // }

  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  