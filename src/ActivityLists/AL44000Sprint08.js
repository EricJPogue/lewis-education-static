import React from 'react'

import { LearningObjectivesIntro, ActivitiesListIntro } from './AL00000Sprint03'
import { StandardActivitiesWithLinkAndSprint, StandardActivitiesClosingWithLinkAndSprint, ClosingSprint08 } from './AL00000Sprint05'
import { finalProjectSprint8Link } from '../Activities/FinalProject'
import { oreillyPlaylistSE } from '../Links'

export const al44000Sprint08 = () => {
	return ( <div>
		<h5>Sprint 8: Final project, Software Architecture, Performance, Reliability, and Security</h5>

		<p>You made it. Very well done! Thank you for your dedication, support, and participation. All that’s left is to finish 
		strong and deliver a Final Project that makes you proud. Don’t do it for the grade, don’t do it for me, do this one for 
		yourself.</p> 

		{LearningObjectivesIntro()}
		<ul style={{listStyleType:'square'}}>
			<li>Utilize your knowledge of Agile development and Saas to deliver a final project that you are proud of creating</li>
			<li>Understand Software Architecture including Performance, Reliability, and Security</li>
			<li>Enhance your understanding of application architecture, Object-Oriented Programming, and Databases</li>
		</ul>

		{list44000Sprint08()}
		{ClosingSprint08()}
	</div> )
}

export const list44000Sprint08 = () => {
	const sprint = 8
	return ( <div>
		{ActivitiesListIntro(sprint)}
		<ol>
			{StandardActivitiesWithLinkAndSprint(sprint, finalProjectSprint8Link(), oreillyPlaylistSE())}
			{StandardActivitiesClosingWithLinkAndSprint(sprint, finalProjectSprint8Link(), '12 hours')}
		</ol>
	</div>)
}

// Todo: Update Final Project Presentation assignment to match other classes. Maybe update all the other assignments?
// Remove quiz question relating to Software Architecture
