import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeInternalURL } from './ActivityRouter';
import { deliveryDronePowerpoint } from '../DataAndAPIs/Links';

import DeliveryDronePhoto from './DeliveryDrone.png'

const NAME = 'Delivery Drone'
export const DELIVERY_DRONE_ROUTE = 'delivery-drone'
export const deliveryDroneLink = () => {return (<NavLink to={makeInternalURL(DELIVERY_DRONE_ROUTE)}>{NAME}</NavLink>)}
export const deliveryDrone = () => { return ( <div>

<br />
<h4>{NAME}</h4>
<h5>Summary: Create a Delivery Drone while working on a joint team with Computer Engineering students</h5>
<h5>Prerequisites: A desire to make something interesting... and some Software Engineering skills</h5>
			
<p>In this project you will work with students from the Lewis University Computer Engineering program to create a 
Delivery Drone. For more information, please review the {deliveryDronePowerpoint()}.</p>

<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
	<img src={DeliveryDronePhoto} alt='Room Layout' width= '1024' />
</div>
<br /><br />
<p>** Note that this project is limited to two additional participants.</p>
</div> ) }