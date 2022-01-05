import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeInternalURL } from './ActivityRouter';

const NAME = 'Arduino Drone'
export const ARDUINO_DRONE_ROUTE = 'arduino-drone'
export const arduinoDroneLink = () => {return (<NavLink to={makeInternalURL(ARDUINO_DRONE_ROUTE)}>{NAME}</NavLink>)}
export const arduinoDrone = () => { return ( <div>

<br />
<h4>{NAME}</h4>
<h5>Summary: Create an Arduino based drone that can be used to teach Software Engineering skills at Lewis University.</h5>
<h5>Prerequisites: A desire to make something interesting... and some Software Engineering skills</h5>
			
<p>Wouldn’t it be more fun to learn Software Engineering and Object-Oriented Programming topics like Encapsulation, 
Inheritance, and Polymorphism while working on drones? Let’s make it possible by creating an Arduino drone based 
academic platform where we can teach Object-Oriented Programming.</p> 

</div> ) }