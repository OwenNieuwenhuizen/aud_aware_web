import React from 'react';
import './EE.css'
import GS from '../images/GS1.png'
import Ant from '../images/Antenna.png'
import RFront from '../images/RFront.png'
import PowerD from '../images/PowerD.png'
import { useState } from 'react';

function EE() {
    return (
        <div id='ee' className='disp'>
            <div id='over' className='sect'>
                <div className='dLc'>
                    <b><h4>Electrical System:</h4></b>
                    <p>A satellite ground station is made up of many parts. The biggest type of part is called a system. 
                        The electrical system is made up of parts, or subsystems, that connect the mechanical and 
                        software systems. This page talks about the different parts of the electrical system!
                    </p>
                    <p>The different sections are:</p>
                    <ul>
                        <li>Antenna</li>
                        <li>RF Front End</li>
                        <li>Power Distribution</li>
                    </ul>
                </div>
                <div className='dRc'>
                    <img src={PowerD} alt='pwrasembly'></img>
                    <h6>Model Made by Ben Cook</h6>
                </div>
            </div>
            <div id='antenna' className='sect'>
                <div className='dLc'>
                    <b><h4>Antenna:</h4></b>
                    <p>The antenna is made out of aluminum square tubing, which allows a signal, or a message, to be 
                        carried across it. The main part is the boom. This is the section of the antenna that is the 
                        longest. The smaller parts are called elements.
                    </p>    
                    <p>There are a total of 36 elements, 18 on each axes as shown in the image on the right. For each 
                        set of 18, there is a reflector, a driven element, and 16 directors. The lengths of these elements 
                        decrease the closer you get to the top of the antenna. The reflector is the longest element and 
                        increases the gain, or the ability for the antenna to accept and send a clear message. The driven 
                        element is the second longest element. It is where the antenna gets and sends the message to and from 
                        the rest of the system. The directors focus the gain in the right direction, so that we are sending 
                        and receiving messages where we want to.
                    </p>
                    <p>There are 2 sets of elements. This is not the case with all yagi antennas. Each set carries the message 
                        with a signal in an electric field. This means that when there is only 1 set, the signal can only be 
                        sent or received clearly from space if the axes angle exactly matches the angle of the antenna and its 
                        signal in space. Satellites move around a lot in space though, so having 1 set of elements would not 
                        work very well. This is why we have two sets. Each set carries the same signal, but one of those signals 
                        is a little delayed. This creates circular polarization! This concept is quite complex, so if you wish to 
                        learn more about it, there is a lot of great videos out there. You can also ask me at n.owen@wustl.edu.
                    </p>
                </div>
                <div className='dRc'>
                    <img src={Ant} alt='antasembly'></img>
                </div>
            </div>
            <div id='rfront' className='sect'>
                <div className='dLc'>
                    <b><h4>RF Front End:</h4></b>
                    <p>The RF front end is where the signal, or message, gets preprocessed. This involves filtering the 
                        signal as well as strengthening it.
                    </p>    
                    <p>On the receiving side, we get our signal from the driven elements of the antenna. This is in two parts 
                        at first because there are two driven elements. We combine these elements with a hybrid coupler. 
                        This is shown in the picture to the right as the part going from the antenna to the rest of the drawing 
                        The rest of the parts are housed inside of the enclosure subsystem, which you can learn about in 
                        the mechanical system page. After the signals are combined, the signal passes through a switch, which 
                        will send it to the RX, or receive, side. This side starts out with a band pass filter, labeled as 
                        RX External BPF. This filter allows us to remove some of the parts of the signal that do not 
                        contain the message. The signal is to week to understand, so after the filter, the signal goes through 
                        two low noise amplifiers, labeled as HMC35GLP3ETR. This amplifies, or stengthens, our signal 
                        without adding too much noise, or parts that are not our message. The signal then goes through another 
                        switch to the software defined radio, labeled as HackRF Board. You can learn about what a 
                        software defined radio does in the software system page.
                    </p>
                    <p>On the transmitting side, or sending side, we get our signal from the software defined radio. It then goes 
                        through a switch to the TX, or transmit, path. This path begins with a band pass filter, labeled as 
                        TX External BPF. This filter weakens a lot of the noise in the signal. The signal then goes through 
                        a pre-amplifier, labeled as GPIO LNA. This amplifier partially strengthens the signal. The next part 
                        that the signal goes through is a high power amplifier, or HPA, labeled as 7030PA. This strengthens 
                        this signal a lot so that our signal is strong enough to deliver our message to space. After it has been 
                        strengthened, it then goes through a switch to the hyprid coupler. The hybrid coupler splits the signal into 
                        2 and delays one of the signals. These two signals get sent to the driven elements of the antenna where 
                        the signal is sent to space.
                    </p>
                </div>
                <div className='dRc'>
                    <img src={RFront} alt='rfrontasembly'></img>
                </div>
            </div>
            <div id='powerd' className='sect'>
                <div className='dLc'>
                    <b><h4>Power Distribution:</h4></b>
                    <p>The power distribution subsystem gives the power that is necessary to make all of the parts of the 
                        ground station work. As you can see on the right, there are quite a few parts that need power in a 
                        ground station.
                    </p>    
                    <p>You may have noticed that different parts of the ground station require different levels of power. 
                        All of the initial power comes from a 120V AC power source for this ground station design. This is 
                        just the power that comes out of the wall socket that it is plugged into.
                    </p>
                    <p>After that, that power gets converted to different power levels using a power converter. All a power 
                        converter does is change two aspects of a supplied power. It changes the current, the voltage, or both 
                        This is because some devices require a specific voltage, and some require a specific current. Power 
                        is just current multiplied by voltage, so this is a easy way to supply power to the entire ground 
                        station.
                    </p>
                </div>
                <div className='dRc'>
                    <img src={PowerD} alt='powerdasembly'></img>
                </div>
            </div>
        </div>
    );
}

export default EE;