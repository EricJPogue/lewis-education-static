import React from 'react'

import { LearningObjectivesIntro, ActivitiesListIntro } from './AL00000Sprint03'
import { StandardActivitiesWithLinkAndSprint, StandardActivitiesClosingWithLinkAndSprint, ClosingSprint08 } from './AL00000Sprint05'
import { oreillyPlaylistOOP, architecturePart2 } from '../data/Links'
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

// Certified for SP22 (Monday, April 18, 2022)

// BugBug: Review activities list link to make sure that the course ID is correct in Blackboard.
// Todo: Consider adding https://www.youtube.com/watch?v=bB340S0tGf8.
