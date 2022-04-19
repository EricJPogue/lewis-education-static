import React from 'react'

import { LearningObjectivesIntro, ActivitiesListIntro } from './AL00000Sprint03'
import { StandardActivitiesWithLinkAndSprint, StandardActivitiesClosingWithLinkAndSprint, ClosingSprint08 } from './AL00000Sprint05'
import { oreillyPlaylistOOP, internalLink } from '../Links'
import { finalProjectLink } from '../Activities/FinalProject'

export const al24500Sprint08 = ( props ) => {
	return ( <div>
		<h5>Sprint 8: Final Project, Application Architecture, and Databases</h5>

		<p>You made it. Very well done! Thank you for your dedication, support, and participation. All that’s left is to finish 
		strong and deliver a Final Project that makes you proud. Don’t do it for the grade, don’t do it for me, do this one for 
		yourself.</p> 

		{LearningObjectivesIntro()}
		<ul style={{listStyleType:'square'}}>
			<li>Independently deliver and present meaningful working software</li>
			<li>Understand the basics of application architecture</li>
			<li>Understand how relational databases can support or hinder object-oriented programming practices</li>
		</ul>

		{list24500Sprint08()}
		{ClosingSprint08()}
	</div> )
}

export const list24500Sprint08 = () => {
	const architecturePart2 = () => { return internalLink('Application Architectures, Object-Oriented Programming, and Databases - Part 2', 
		'/activity-architecture/application-architecture-part2')}
	const sprint = 8
	return ( <div>
		{ActivitiesListIntro(sprint)}
		<ol>
			{StandardActivitiesWithLinkAndSprint(sprint, finalProjectLink(), oreillyPlaylistOOP())}
			<li>Complete {architecturePart2()}</li>
			{StandardActivitiesClosingWithLinkAndSprint(sprint, finalProjectLink(), '12 hours')}
		</ol>
	</div>)
}


// Todo: Lab question 2 needs to be updated for Java project. 
