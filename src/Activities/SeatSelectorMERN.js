
import React from 'react';
import { NavLink } from 'react-router-dom';

import { mern, firebase } from '../DataAndAPIs/Links'
import { makeInternalURL } from './ActivityRouter';
import SeatSelectorSketch from './SeatSelectorSketch.png'
import SeatSelectorPhoto from './SeatSelectorPhoto.png'

export const SEAT_SELECTOR_MERN_ROUTE = 'seat-selector-mern'
const NAME = 'Ultimate Seat Selector '
export const seatSelectorMERNLink = () => {return (<NavLink to={makeInternalURL(SEAT_SELECTOR_MERN_ROUTE)}>{NAME}</NavLink>)}
export const seatSelectorMERN = () => { return ( <div>

<br />
<h4>{NAME}</h4>
<h5>Summary: Create an elegant HTML, CSS, and JavaScript webpage utilizing the full {mern()} stack that allows students 
to select the seat they are sitting in currently, or select that they are participating virtually in the class.</h5>
<h5>Prerequisites: HTML, CSS, JavaScript, {mern()}, and {firebase()}</h5>
			
<p>In this project you will create an HTML, CSS, and JavaScript based webpage that allows students to select their 
seat. The webpage should be elegant, functional, and include all tables, seats, and the lectern. A sketch and a photo 
of the room layout are provided below.</p>

<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
	<img src={SeatSelectorSketch} alt='Room Layout Sketch' width= '348' />
	<img src={SeatSelectorPhoto} alt='Room Layout' width= '512' />
</div>
<br />

<p>Certainly you can make something much more elegant than this sketch, right?</p>

<em>Requirement 1</em>
<p>Create an aesthetically pleasing webpage in HTML, CSS, and JavaScript that includes:</p>
<ol>
	<li>Instructions explaining how to utilize the application and how to select a seat</li>
	<li>A truly elegant layout of tables, seats, and the lectern</li>
	<li>Seat numbers listed on each seat</li>
</ol>

<em>Requirement 2</em>
<p>Enhance your webpage by adding the functionality to:</p>
<ol>
	<li>Select a seat or the lectern by clicking on the seat</li>
	<li>Display the last seat number selected in a field on the webpage</li>
	<li>Displays a “Participating Remotely” option that displays “Online" in the last selected seat number field</li>
</ol>

<em>Requirement 3</em>
<p>Enhance your webpage so that it includes the ability to:</p>
<ol>
	<li>Add a preferred name, and last name when the seat, lectern, or virtual participation is selected</li>
	<li>Displays the preferred and last name directly below the selected seat</li>
	<li>Adds virtual participants to a virtual participant list that is shown on the main webpage</li>
</ol>

<em>Requirement 4</em>
<p>Update the webpage so that utilizes standard authentication from GitHub, Azure, Google, or Facebook to identify the 
default user name while allowing the user to provide an alternative name:</p>

<em>Requirement 5</em>
<p>Update the webpage so that it is fully multi-user and stores the data in MondoDB</p>

</div> ) }