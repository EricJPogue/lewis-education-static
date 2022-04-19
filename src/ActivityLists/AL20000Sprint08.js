import React from 'react'

import { LearningObjectivesIntro, ActivitiesListIntro } from './AL00000Sprint03'
import { StandardActivitiesWithLinkAndSprint, StandardActivitiesClosingWithLinkAndSprint, ClosingSprint08 } from './AL00000Sprint05'
import { finalProjectLink } from '../Activities/FinalProject'
import { oreillyPlaylistICS } from '../Links'

export const al20000Sprint08 = () => {
	return ( <div>
		<h5>Sprint 8: Final Project, Final Project, and more Final Project</h5>
		<p>You made it. Very well done! Thank you for your dedication, support, and participation. All that’s left is to finish 
		strong and deliver a Final Project that makes you proud. </p>  

		{LearningObjectivesIntro()}
		<ul style={{listStyleType:'square'}}>
			<li>Independently deliver and present meaningful working software as part of your Final Project</li>
			<li>Present your Final Project to your classmates and instructor</li>
		</ul>

		{list20000Sprint08()}
		{ClosingSprint08()}
	</div> )
}

export const list20000Sprint08 = () => {
	const sprint = 8
	return ( <div>
		{ActivitiesListIntro(sprint)}
		<ol>
			{StandardActivitiesWithLinkAndSprint(sprint, finalProjectLink(), oreillyPlaylistICS())}
			{StandardActivitiesClosingWithLinkAndSprint(sprint, finalProjectLink(), '12 hours')}
		</ol>
	</div>)
}

// Certified for SP22 (Monday, April 18, 2022)
