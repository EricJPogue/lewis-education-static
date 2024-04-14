import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, standardActivitiesClosing, closing } from './AL00000Sprint00'

import { finalProjectLink } from '../Activities/FinalProject' 

import { getModuleDescription } from '../DataAndAPIs/ClassSections'

export const al44500Sprint08 = () => { 
	const sprint = 8
	return ( <div> 
		<h5>Sprint {sprint}: {getModuleDescription(sprint-1)}</h5>
		<p>You made it. Very well done! Thank you for your dedication, support, and participation. All that’s left is to finish 
		strong and bring closure to your Class Project and to present it to you classmates and instructor. </p>  

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Independently deliver and present meaningful working software as part of your Class Project</li>
			<li>Present your Class Project to your classmates and instructor</li>
		</ul>

		{list44500Sprint08(sprint)}
		{closing(sprint)}
	</div> )
}

export const list44500Sprint08 = (sprint) => {
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, finalProjectLink())}
			{standardActivitiesClosing(sprint, finalProjectLink(), '4 hours')}
		</ol>
	</div>)
}
