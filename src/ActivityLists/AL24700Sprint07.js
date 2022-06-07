import React from 'react'
import { NavLink } from 'react-router-dom';

import { LearningObjectivesIntro, ActivitiesListIntro, InitialPost } from './AL00000Sprint03'
import { Closing } from './AL00000Sprint06'
import { StandardActivities, StandardActivitiesClosing } from './AL00000Sprint07'

import { Start_MustangVersion3, Complete_MustangVersion3 } from '../Activities/MustangVersion2'
import { Start_FinalProjectDistributedV1, Complete_FinalProjectDistributedV1 } from '../Activities/FinalProject'
import { oreillyPlaylistWeb } from '../Links'

export const al24700Sprint07 = () => {
	let sprint = 7
	return (

<div>
<h5>Sprint 7: More Server-side Programming, Cloud Computing, and Map Reduce</h5>

<p>Welcome to Sprint 7. We have two parts to our programming assignment this week. First, we need to wrap up Mustang 
version 3 by implementing persistent storage. Second, we will be delivering version 1 of our final projects.</p>

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Develop server-side Ajax applications that can response to Ajax call</li>
	<li>Understand Cloud Computing &amp; Map Reduce applications</li>
	<li>Combine HTML, CSS, JavaScript, PHP, GitHub, and Azure to deliver a full dynamic web application</li>
</ul>  

{ActivitiesListIntro()}
<ol>
<li>???Explore  <NavLink to='/activity-architecture/application-architecture-part1'>Application Architecture - Part 1</NavLink></li>
	{StandardActivities(Start_MustangVersion3(), oreillyPlaylistWeb(), sprint)}
    <li>Explore <NavLink to='/activity-web/cloud-computing-mapreduce'>Cloud Computing and Map Reduce</NavLink></li>
	<li>{Complete_MustangVersion3()}</li>

	{InitialPost()}	
	<li>{Start_FinalProjectDistributedV1()}</li>
	{StandardActivitiesClosing(Complete_FinalProjectDistributedV1())}
 </ol>

 {Closing()}
</div>

	)
}

// Review FinalProjectDistributed to see if we need more to differentiate version 1 from version 2.
// Following Coding Standards are graded twice. Consider updating programming assignment so that it does not have 
//     coding standards as requirement 4.  
