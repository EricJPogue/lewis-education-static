import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, standardActivitiesClosing, closing } from './AL00000Sprint00'
import { finalProjectSprint8Link } from '../Activities/FinalProject'
import { oreillyPlaylistSE, externalLink } from '../DataAndAPIs/Links'

export const al44000Sprint8Topics = 'Team Final Project, Design Patterns, and Security'
export const al44000Sprint08 = () => {
	const sprint = 8
	return ( <div>
		<h5>Sprint 8: {al44000Sprint8Topics}</h5>

		<p>You made it. Very well done! Thank you for your dedication, support, and participation. All that’s left is to finish 
		strong and deliver a Final Project that makes you proud. Don’t do it for the grade, don’t do it for me, do this one for 
		yourself.</p> 

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Utilize your knowledge of Agile development and Saas to deliver a final project that you are proud of creating</li>
			<li>Understand Design Patterns</li>
		</ul>

		{list44000Sprint08(sprint)}
		{closing(sprint)}
	</div> )
}

export const list44000Sprint08 = (sprint) => {
	const agileCoachInterview = () => { return externalLink('Interview with an Agile Coach', 'https://www.youtube.com/watch?v=bB340S0tGf8')}
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, finalProjectSprint8Link(), oreillyPlaylistSE())}
			<li>Watch the very funny {agileCoachInterview()} video when you need a few minutes to reflect and laugh</li>
			<li>Read Fox Chapter 11 on Design Patterns</li>
			<li>Within {oreillyPlaylistSE()} read “Design Patterns” through chapter 1</li>
			{standardActivitiesClosing(sprint, finalProjectSprint8Link(), '10 hours')}
		</ol>
	</div>)
}

// Certified for FA22 (12/03/2022)

// Todo: Consider updating and adding the following Architecture videos back into the class:
//	import { architecturePart1, architecturePart2 } from '../DataAndAPIs/Links'
// <li>Complete {architecturePart1()}</li>
// <li>Scan {architecturePart2()}</li>

// Consider adding https://www.youtube.com/watch?v=A-H-xZ5ZXgo

// Certified for SP23 (04/23/2023)

