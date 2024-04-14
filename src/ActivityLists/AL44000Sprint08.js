import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, standardActivitiesClosing, closing } from './AL00000Sprint00'
import { oreillyPlaylistSE } from '../DataAndAPIs/Links'
import { getModuleDescription } from '../DataAndAPIs/ClassSections'

import { classProductSprint8Link } from '../Activities/ClassProduct'

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
			{standardActivities(sprint, classProductSprint8Link(), oreillyPlaylistSE())}
			{standardActivitiesClosing(sprint, classProductSprint8Link(), '4 hours')}
		</ol>
	</div>)
}

// Certified for SP24 on 04/14/2024. EJP



