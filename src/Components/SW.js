import React from 'react';
import SWA from '../images/SW.png'
import Data from '../images/Database.png'
import Server from '../images/Server.png'
import onComp from '../images/OnComp.png'
import Micro from '../images/Micro.png'
import SDR from '../images/SDR.png'
import { useState } from 'react';

function SW() {
    return (
        <div id='sw' className='disp'>
            <div id='over' className='sect'>
                <div className='dLc'>
                    <b><h4>Software System:</h4></b>
                    <p>A satellite ground station is made up of many parts. The biggest type of part is called a system. 
                        The software system is made up of parts, or subsystems, that create and interpret the messages. 
                        This page talks about the different parts of the sotware system!
                    </p>
                    <p>The different sections are:</p>
                    <ul>
                        <li>Database</li>
                        <li>Server</li>
                        <li>Onboard Computer</li>
                        <li>Microcontroller</li>
                        <li>Software Defined Radio</li>
                    </ul>
                </div>
                <div className='dRc'>
                    <img src={SWA} alt='swarch'></img>
                    <h6>Model Made by Nate Hayman</h6>
                </div>
            </div>
            <div id='database' className='sect'>
                <div className='dLc'>
                    <b><h4>Database:</h4></b>
                    <p>A database is where information is stored for the long term. It is not physically at the ground 
                        station, but instead connected wirelessly. Data can be accessed from the database anytime when 
                        past data needs to be looked at.
                    </p>    
                    <p>This is very important because it keeps data well organized. This way current data can be compared 
                        to past data to toubleshoot a problem or understand scientific data progression over time.
                    </p>
                    <p>Data being sent to the database can be telemetry data or scientific data. Telemetry data tells us 
                        how the satellite is doing in space. This is important to make sure that nothing is damaged or 
                        needing fixed. Most satellites are also doing some kind of science in space, like telescopes. It 
                        is important to store and access data so that scientists can draw conclusions on data trends over 
                        time and make new discoveries.
                    </p>
                </div>
                <div className='dRc'>
                    <img src={Data} alt='dataim'></img>
                </div>
            </div>
            <div id='server' className='sect'>
                <div className='dLc'>
                    <b><h4>Server:</h4></b>
                    <p>The main server does most of the work. It works as the center point for the software system. This 
                        is the subsystem that the database connects to. In this system, the satellite is tracked, messages 
                        are interpretted, and data is visualized. 
                    </p>    
                    <p>As you can see in the diagram to the right, there are these 3 services that the server works on. The box 
                        labeled as GPredict gets the direction of the satellite. The second box, labeled as gs-control, gets 
                        the message in the form of a packet and interprets the packet. The third box, labeled as gs-command, 
                        visualizes data and creates new packets to send.
                    </p>
                    <p>The command component works very similarly to a website. People can remotely access the command panel 
                        from their personal computer to look at data trends and even send new messages to the satellite.
                    </p>
                </div>
                <div className='dRc'>
                    <img src={Server} alt='serverim'></img>
                </div>
            </div>
            <div id='onComp' className='sect'>
                <div className='dLc'>
                    <b><h4>Onboard Computer:</h4></b>
                    <p>The onboard computer is tasked with getting information from the server an handing out tasks to 
                        the software defined radio and the microcontroller.
                    </p>    
                    <p>The onboard computer, labeled as Raspberry Pi in the diagram on the right, sends the packets 
                        from the server to the software defined radio to be processed and sent to the electrical system.
                    </p>
                    <p>The onboard computer also gets direction information from the server, which it sends to the 
                        microcontroller. This is labeled as rotctld.
                    </p>
                </div>
                <div className='dRc'>
                    <img src={onComp} alt='oncompim'></img>
                </div>
            </div>
            <div id='micro' className='sect'>
                <div className='dLc'>
                    <b><h4>Microcontroller:</h4></b>
                    <p>The microcontroller gets directional information from the onboard computer end uses that to 
                        control the rotator to make sure that the antenna is pointing towards the satellite.
                    </p>    
                    <p>Their are many different types of microcontrollers. The one used in this diagram is a YaesuG5500 
                        Arduino Controller specifically suited for controlling the rotator used in this design.
                    </p>
                    <p>This is a type of Arduino controller, which are very common and great for learning purposes!
                    </p>
                </div>
                <div className='dRc'>
                    <img src={Micro} alt='microim'></img>
                </div>
            </div>
            <div id='sdr' className='sect'>
                <div className='dLc'>
                    <b><h4>Software Defined Radio:</h4></b>
                    <p>The microcontroller gets directional information from the onboard computer end uses that to 
                        control the rotator to make sure that the antenna is pointing towards the satellite.
                    </p>    
                    <p>Their are many different types of microcontrollers. The one used in this diagram is a YaesuG5500 
                        Arduino Controller specifically suited for controlling the rotator used in this design.
                    </p>
                    <p>This is a type of Arduino controller, which are very common and great for learning purposes!
                    </p>
                </div>
                <div className='dRc'>
                    <img src={SDR} alt='sdrim'></img>
                </div>
            </div>
        </div>
    );
}

export default SW;