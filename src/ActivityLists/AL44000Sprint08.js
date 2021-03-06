import React from 'react'

import { LearningObjectivesIntro, ActivitiesListIntro } from './AL00000Sprint03'
import { StandardActivitiesWithLinkAndSprint, StandardActivitiesClosingWithLinkAndSprint, ClosingSprint08 } from './AL00000Sprint05'
import { finalProjectSprint8Link } from '../Activities/FinalProject'
import { oreillyPlaylistSE, architecturePart1, architecturePart2, externalLink } from '../DataAndAPIs/Links'

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
	const agileCoachInterview = () => { return externalLink('Interview with an Agile Coach', 'https://www.youtube.com/watch?v=bB340S0tGf8')}
	const sprint = 8
	return ( <div>
		{ActivitiesListIntro(sprint)}
		<ol>
			{StandardActivitiesWithLinkAndSprint(sprint, finalProjectSprint8Link(), oreillyPlaylistSE())}
			<li>Complete {architecturePart1()}</li>
			<li>Scan {architecturePart2()}</li>
			<li>Consider watching the very funny {agileCoachInterview()} Youtube video if you need 4 minutes to reflect and laugh</li>
			{StandardActivitiesClosingWithLinkAndSprint(sprint, finalProjectSprint8Link(), '10 hours')}
		</ol>
	</div>)
}

// Certified for SP22 (Monday, April 18, 2022)
// Todo: Consider expected number of hours as it was changed from 12 to 10 during sprint 8.
// Todo: Consider adding https://www.youtube.com/watch?v=bB340S0tGf8.
