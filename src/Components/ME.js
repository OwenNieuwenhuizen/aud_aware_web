import React from 'react';
import './ME.css'
import GS1I from '../images/GS1.png'
import Base from '../images/Base.png'
import Mast from '../images/Mast.png'
import Rotator from '../images/Rotator.png'
import SArm from '../images/Support Arm.png'
import Enc from '../images/Enclosure.png'
import Ant from '../images/Antenna.png'

function ME() {
    return (
        <div id='me' className='disp'>
            <div id='over' className='sect'>
                <div className='dLc'>
                    <b><h4>Mechanical System:</h4></b>
                    <p>A satellite ground station is made up of many parts. The biggest type of part is called a system. 
                        The mechanical system is made up of parts, or subsystems, that are mostly structural. This page talks 
                        about the different parts of the mechanical system!
                    </p>
                    <p>The different sections are:</p>
                    <ul>
                        <li>Base</li>
                        <li>Mast</li>
                        <li>Rotator</li>
                        <li>Support Arm</li>
                        <li>Antenna</li>
                        <li>Enclosure</li>
                    </ul>
                </div>
                <div className='dRc'>
                    <img src={GS1I} alt='systasembly'></img>
                    <h6>Model Made by Geoffrey Goffman</h6>
                </div>
            </div>
            <div id='base' className='sect'>
                <div className='dLc'>
                    <b><h4>Base:</h4></b>
                    <p>The base is like the bottom of a pyramid. It is wide so that the ground station does not tip. 
                        It is strong so that it does not break. 
                    </p>    
                    <p>You may have also noticed that it looks like a ladder. 
                        This is because the base needs to be heavy so that strong winds do not tip the 
                        ground station. In this design, cinder blocks are placed on the base and that ladder shape 
                        allows them to fit nicely. 
                    </p>
                    <p>With the cinder blocks and the wide shape of the base, the ground 
                        station is unlikely to tip.
                    </p>
                </div>
                <div className='dRc'>
                    <img src={Base} alt='baseasembly'></img>
                </div>
            </div>
            <div id='mast' className='sect'>
                <div className='dLc'>
                    <b><h4>Mast:</h4></b>
                    <p>The mast is what fits the rest of the system off of the ground. The bottom of the mast is connected 
                        to the center of the base. You can look at the picture of the ground station to see how these to 
                        subsystems are connected.
                    </p>    
                    <p>You may have noticed how colorfull the mast is on the right. This is becasue this image is showing 
                        the results of an FEA run on the mast. You are probably wondering what an FEA is. FEA stands for 
                        Finite Element Analysis. The elements here are the mast and the supporting connectors towards the 
                        bottom of the mast. The colors represent displacement under, in this case 90mph winds in mm.
                    </p>
                    <p>This shows that the mast will hold up under very strong winds, which is important both to protect 
                        ground station itself, but also anyone or anything that could be close to the ground station.
                    </p>
                </div>
                <div className='dRc'>
                    <img src={Mast} alt='mastasembly'></img>
                </div>
            </div>
            <div id='rotator' className='sect'>
                <div className='dLc'>
                    <b><h4>Rotator:</h4></b>
                    <p>The rotator is a very important part of the ground station. This is the subsystem that is in charge 
                        of directing the antenna. If the antenna is not pointed in the direction of the satellite, then 
                        the message cannot be received and messages cannot be sent.
                    </p>    
                    <p>This device also needs to be strong like the other mechanical subsytems. An important thing to consider 
                        when choosing or designing a rotator is torque. Torque is the amount of force required to rotate an object 
                        around a point. In this case we are rotating the antenna around the antennas center of mass, or the point 
                        where its weight is equal on each side. 
                    </p>
                    <p>The rotator has 3 points of connection. It connects to the mast as well as the support arm, which 
                        we will talk about next. It also connects to the electrical system, which sends electrical signals 
                        to the rotator to make it move.
                    </p>
                </div>
                <div className='dRc'>
                    <img src={Rotator} alt='rotasembly'></img>
                </div>
            </div>
            <div id='sarm' className='sect'>
                <div className='dLc'>
                    <b><h4>Support Arm:</h4></b>
                    <p>The support arm is what connects the rotator and the antenna. The support arm goes through the 
                        top of the rotator. It is then split into 2 parts, giving two points of contact to hold up 
                        the antenna. The support arm holds onto the antenna with 2 clamps with a bolt through them.
                    </p>    
                    <p>An important thing to consider here is what materials are used. The antenna cannot be touched 
                        by metal otherwise it will mess up the message. This is why the clamps are made out of delrin, 
                        which is an engineering thermoplastic. This means that it will hold up in harsh conditions, but 
                        will not mess up our message we are trying to send or receive. 
                    </p>
                    <p>The arm itself also should not be made out of metal, so it is PVC pipe. PVC pipe is strong, but 
                        not super strong, so we need to add something to make sure that it doesn't break or bend under 
                        high winds. What you can't see in the picture to the right is that there is a metal bar that is 
                        in the inside of that pipe. This allows for the support arm to be strong, but not metal on the outside.
                    </p>
                </div>
                <div className='dRc'>
                    <img src={SArm} alt='sarmasembly' id='sarmi'></img>
                </div>
            </div>
            <div id='antenna' className='sect'>
                <div className='dLc'>
                    <b><h4>Antenna:</h4></b>
                    <p>The antenna is what actually allows us to send and receive our messages. You can't tell from the 
                        picture on the right, but this antenna is actually quite large. It is about 12ft tall! This main 
                        part is called the boom. You may have also noticed that there are a lot of smaller parts attached 
                        to the boom. This is because this is a yagi, or a directional antenna. A yagi antenna is very useful 
                        for sending and receiving messages that are coming from a specific point. This is covered in more 
                        detail in the electrical system part of this site. 
                    </p>    
                    <p>Those smaller elements are attached to the boom with plastic clamps and screws. This means that the 
                        elements and the boom never touch, so our message will not get messed up.
                    </p>
                    <p>On this antenna, there are a total of 32 parts that are not the boom. There are 18 on one axes and 
                        18 on the other. The longest element in each set is the reflector. The second largest is the driven 
                        elements. The rest are directors. The elements that are longer are at the bottom of the boom and 
                        increase in size going up the boom. You can learn more about why a yagi antenna is designed like this 
                        in the electrical system antenna section!
                    </p>
                </div>
                <div className='dRc'>
                    <img src={Ant} alt='antasembly'></img>
                </div>
            </div>
            <div id='enclosure' className='sect'>
                <div className='dLc'>
                    <b><h4>Enclosure:</h4></b>
                    <p>The enclosure subsystem is where most of the electronics are stored. This is essentially just a 
                        box. It needs to be waterproof. It also needs to be kept around room temperature.
                    </p>    
                    <p>I am sure you have accidentally gotten your phone wet before. If water get's in through one of the 
                        holes, like the charging port, in your phone, then your phone will stop working. The enclosure is 
                        like the case for your phone. If water gets into, it will break the electronics inside. Waterproofing 
                        is very important for this subsystem.
                    </p>
                    <p>If electronics overheat, it can perminantly damage them. If they get too cold, the same thing can 
                        happen. To learn more about what is inside of the enclosure, visit the electrical system page.
                    </p>
                </div>
                <div className='dRc'>
                    <img src={Enc} alt='encasembly'></img>
                </div>
            </div>
        </div>
    );
}

export default ME;