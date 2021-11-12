import React from 'react'
import { NavLink } from 'react-router-dom';

import { InitialPost,  } from './AL00000Sprint02'
import { LearningObjectivesIntro, ActivitiesListIntro } from './AL00000Sprint03'
import { Closing } from './AL00000Sprint06'
import { StandardActivities, StandardActivitiesClosing } from './AL00000Sprint07'

import { Start_MustangVersion3, Complete_MustangVersion3 } from '../Activities/MustangVersion2'
import { Start_FinalProject, Complete_FinalProject } from '../Activities/FinalProject'
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
	{StandardActivities(Start_MustangVersion3(), oreillyPlaylistWeb(), sprint)}
    <li>Explore <NavLink to='/activity-web/cloud-computing-mapreduce'>Cloud Computing and Map Reduce</NavLink></li>
	<li>{Complete_MustangVersion3()}</li>

	{InitialPost()}	
	<li>{Start_FinalProject()}</li>

	<li><em>Complete Final Project version 1</em><sup> ~5 hours</sup></li>
	{StandardActivitiesClosing(Complete_FinalProject())}
 </ol>

 {Closing()}
</div>

	)
}
