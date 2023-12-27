import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, standardActivitiesClosing, closing } from './AL00000Sprint00'
import { finalProjectSprint8Link } from '../Activities/FinalProject'
import { oreillyPlaylistSE } from '../DataAndAPIs/Links'
import { getModuleDescription } from '../DataAndAPIs/ClassSections'

export const al44000Sprint08 = () => {
	const sprint = 8
	return ( <div>
		<h5>Sprint 8: {getModuleDescription(sprint-1)}</h5>

		<p>You made it. Very well done! Thank you for your dedication, support, and participation. All that’s left is to finish 
		strong and deliver a Final Project that makes you proud. Don’t do it for the grade, don’t do it for me, do this one for 
		yourself.</p> 

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Bring closure to your class project by presenting it to your classmates and instructor</li>
			<li>Complete all transitioning activities for current and upcoming class products</li>
			<li>Understand Design Patterns</li>
		</ul>

		{list44000Sprint08(sprint)}
		{closing(sprint)}
	</div> )
}

export const list44000Sprint08 = (sprint) => {

	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, finalProjectSprint8Link(), oreillyPlaylistSE())}
			{standardActivitiesClosing(sprint, finalProjectSprint8Link(), '4 hours')}
		</ol>
	</div>)
}

// Certified for FA22 (12/03/2022)
// Certified for SP23 (04/23/2023)
// Certified for FA23 (11/19/2023)



