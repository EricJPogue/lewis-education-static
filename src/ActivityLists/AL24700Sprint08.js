import React from 'react'
import { NavLink } from 'react-router-dom';

import { LearningObjectivesIntro, ActivitiesListIntro } from './AL00000Sprint03'
import { StandardActivities, StandardActivitiesClosing, Closing } from './AL00000Sprint08'

import { Start_FinalProjectDistributed, Complete_FinalProjectDistributed } from '../Activities/FinalProject'
import { oreillyPlaylistWeb } from '../Links'

export const al24700Sprint08 = () => {
	return (

<div>
<h5>Sprint 8: Final Project</h5>

<p>You made it. Very well done! Thank you for your dedication, support, and participation. All that’s left is to finish 
strong and deliver a Final Project that makes you proud. Don’t do it for me, don’t do it for the grade, do it for 
yourself.</p>  

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Deliver a sophisticated web application utilizing technologies that include HTML, CSS, JavaScript, Azure, and Node.js or PHP</li>
    <li>Explore leading edge web development technology trends and determine where you would like to focus your future learning 
		efforts</li>
</ul>  

{ActivitiesListIntro()}
<ol>
	{StandardActivities(Start_FinalProjectDistributed(), oreillyPlaylistWeb(), 8)}
	<li>Explore <NavLink to='/activity-architecture/application-architecture-part2'>Application Architecture - Part 2</NavLink></li>
	{StandardActivitiesClosing(Complete_FinalProjectDistributed())}
 </ol>
 {Closing()}
</div>

	)
}

// Review FinalProjectDistributed to see if we need more to differentiate version 1 from version 2.