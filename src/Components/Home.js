import React from 'react';
import GS1I from '../images/GS1.png'
import './Home.css'
import { useState } from 'react';

function Home() {
    return (
        <div id='home' className='disp'>
            <div className='dLc'>
                <b><h4>Overview:</h4></b>
                <p>When you look out into the night sky, you may wonder what those small specs are. They are not stars. 
                    They're not bright enough, so what are they? They are satellites! These are devices put into space 
                    to record data and send messages back to us on the ground. We are going to talk about what the 
                    process of sending messages to and from satellites looks like.
                </p>
                <p>You have probably noticed that space is very far away. We can't just run a wire up to a satellite 
                    and get the message that way. We also do not have cell towers that go step by step up to space. 
                    This leaves us with an interesting problem; how do we communicate to and from space?
                </p>
                <p>The answer is a satellite ground station, like the one on the right! A ground station is made up of 
                    many different parts. This site will teach you the basics of what those parts are and how they come 
                    together.
                </p>
            </div>
            <div className='dRc'>
                <img src={GS1I} alt='systasembly'></img>
                <h6>Model Made by Geoffrey Goffman</h6>
            </div>
        </div>
    );
}

export default Home;