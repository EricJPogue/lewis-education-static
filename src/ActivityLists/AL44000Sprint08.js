import React from 'react'
import { LearningObjectivesIntro, ActivitiesListIntro } from './AL00000Sprint03'
import { StandardActivities, StandardActivitiesClosing, Closing } from './AL00000Sprint08'

import { oreillyPlaylistSE } from '../Links'
import { Start_FinalProjectSprint8, Complete_FinalProjectSprint8 } from '../Activities/FinalProject'

export const al44000Sprint08 = () => {
	const sprint = 8
	return (

<div>
	<h5>Sprint 8: Final project, Software Architecture, Performance, Releases, Reliability, and Security</h5>

	<p>You made it. Very well done! Thank you for your dedication, support, and participation. All that’s left is to finish 
	strong and deliver a Final Project that makes you proud. Don’t do it for the grade, don’t do it for me, do this one for 
	yourself.</p> 

	{LearningObjectivesIntro()}
	<ul style={{listStyleType:'square'}}>
		<li>Utilize your knowledge of Agile development and Saas to deliver a final project that you are proud of creating</li>
		<li>Understand Software Architecture including performance, releases, reliability, and security</li>
		<li>Enhance your understanding of application architecture, Object-Oriented Programming, and Databases</li>
	</ul>

	{ActivitiesListIntro()}
	<ol>
		{StandardActivities(Start_FinalProjectSprint8(), oreillyPlaylistSE(), sprint)}
		<li>Read Fox Chapter 12 on Performance, Releases, Reliability, and Security</li>

		<li>Complete your team’s sprint 7 Review and Retrospective</li>
		<li>Focus your energy on delivering and testing your team’s sprint 8 backlog stories</li>
		<li>Make sure that your project is sustainable and well documented so that a future team could pick up where you left off</li>


		{StandardActivitiesClosing(Complete_FinalProjectSprint8())}
	</ol>
	{Closing()}
</div>

	)
}

// Todo: Update Final Project Presentation assignment to match other classes. Maybe update all the other assignments?
