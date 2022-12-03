import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, standardActivitiesClosing, closing } from './AL00000Sprint00'

import { finalProjectLink } from '../Activities/FinalProject'
import { oreillyPlaylistICS } from '../DataAndAPIs/Links'

export const al20000Sprint08 = () => {
	const sprint = 8
	return ( <div>
		<h5>Sprint 8: Final Project, Final Project, and more Final Project</h5>
		<p>You made it. Very well done! Thank you for your dedication, support, and participation. All that’s left is to finish 
		strong and deliver a Final Project that makes you proud. </p>  

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Independently deliver and present meaningful working software as part of your Final Project</li>
			<li>Present your Final Project to your classmates and instructor</li>
		</ul>

		{list20000Sprint08()}
		{closing(sprint)}
	</div> )
}

export const list20000Sprint08 = () => {
	const sprint = 8
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, finalProjectLink(), oreillyPlaylistICS())}
			{standardActivitiesClosing(sprint, finalProjectLink(), '8 hours')}
		</ol>
	</div>)
}

// Certified for SP22 (Monday, April 18, 2022)
// Certified for FA22 (12/03/2022)
