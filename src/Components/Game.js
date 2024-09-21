import React from 'react'
import './Game.css'
import P1 from '../images/Puzzle/P1.png'
import { useEffect, useState, useRef } from 'react';
import Draggable from 'react-draggable';

function Game() {
    return (
        <div id='game'>
            <div id='instruct'>
                <h2>Ground Station Game:</h2>
                <h3>Complete the puzzle to see the ground station!
                </h3>
            </div>
            <div id='field'>
                <div id='pieces'>
                    <Draggable><div id='P2'></div></Draggable>
                    <Draggable><div id='P1'></div></Draggable>
                    <Draggable><div id='P5'></div></Draggable>
                    <Draggable><div id='P3'></div></Draggable>
                    <Draggable><div id='P4'></div></Draggable>
                </div>
                <div id='board'></div>
            </div>
        </div>        
    );
}

export default Game