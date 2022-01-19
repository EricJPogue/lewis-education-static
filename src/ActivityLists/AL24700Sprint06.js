import React from 'react'
import { NavLink } from 'react-router-dom';

import { LearningObjectivesIntro, ActivitiesListIntro, InitialPost } from './AL00000Sprint03'
import { StandardActivities, StandardActivitiesClosing, Closing  } from './AL00000Sprint06'

import { oreillyPlaylistWeb } from '../Links'
import { MustangV2 } from './ProgrammingAssignments'

export const al24700Sprint06 = () => {
	return (

<div>
<h5>Sprint 6: Server-side Programming with PHP or Node.js</h5>

<p>Welcome to Sprint 6! Need I say more? I hope you enjoyed our first implementation Mustang. This week it’s
time to work on Mustang version 2 and to start getting ready to do some server-side programming with PHP. 
Yes, I know that many of you would like to get your hands dirty with Node.js and JavaScript server-side 
programming. So would I, but we need to make sure that we are comfortable with PHP as well. Feel free to utilize 
Node.js for your assignments if you would prefer.</p>

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Understand server-side web programming languages and platforms</li>
	<li>Study the PHP language and platform</li>
	<li>Develop and test our first PHP applications</li>
	<li>Develop, test, and deploy HTML, CSS, JavaScript, and PHP based applications</li>
</ul>  

{ActivitiesListIntro()}
<ol>
	{StandardActivities(MustangV2, oreillyPlaylistWeb, 6 )}
	<li>Review MustangLite version 2 in our example code</li>
	<li>Read Sebesta chapter 9 and review our PHP <NavLink to='/activity/sebesta-chapter-09'>lecture</NavLink></li>

	{InitialPost()}	

	<li>Explore  <NavLink to='/activity-architecture/application-architecture-part1'>Application Architecture - Part 1</NavLink></li>
	{StandardActivitiesClosing(MustangV2, 6)}
</ol>

{Closing()}
{al24700Sprint06Extras()}
</div>

	)
};

const al24700Sprint06Extras = () => {
	return (

<div>
<br />
<h5>Extras:</h5>
<ul style={{listStyleType:'square'}}>
	<li>Complete Programming Together with <a href='https://app.knowmia.com/lyyA' target='_blank' rel='noopener noreferrer'>Deploying Node.js on Microsoft Azure</a></li>		
	<li>Optionally complete Programming Together with <a href='https://app.knowmia.com/bBVA' target='_blank' rel='noopener noreferrer'>React On Azure</a></li>
	<li>Optionally review the video tutorial series available from O'Reilly <a href='React - The Complete Guide' target='_blank' rel='noopener noreferrer'>[link]</a></li>					
</ul>
</div>

	)
}
