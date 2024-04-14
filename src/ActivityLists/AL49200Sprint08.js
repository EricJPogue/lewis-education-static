import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, standardActivitiesClosing, closing } from './AL00000Sprint00'
import { oreillyPlaylistSC } from '../DataAndAPIs/Links'
import { lectureRecordingPlaylist } from './AL49200Sprint02'
import { classProductSprint8Link } from '../Activities/ClassProduct'

import { getModuleDescription } from '../DataAndAPIs/ClassSections'

export const al49200Sprint08 = () => {
	const sprint = 8
	return ( <div>	
		<h5>Sprint {sprint}: {getModuleDescription(sprint-1)}</h5>		
		<p><em>Welcome to sprint {sprint}.</em></p> 

		<p>Stay focused on delivering stories to your production environment that add the most value for customers. However, 
		this is the final sprint so we also want to add a new focus of making our efforts sustainable in a way that would 
		allow someone else to pick up where we left off. </p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Master sprint planning by successfully completing sprint {sprint} planning within the first three days of the sprint</li>
			<li>Master delivering working code to the production environment</li>
			<li>Implement a sustainable product that would allow someone else to continue development</li>
		</ul>

		{list49200Sprint08(sprint)}
		{closing(sprint)}
	</div> )
}

export const list49200Sprint08 = (sprint) => {
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, classProductSprint8Link(), oreillyPlaylistSC(), true)}
			<li>Review our sprint {sprint} planning {lectureRecordingPlaylist()}</li>
			<li>Within {oreillyPlaylistSC()} review “Essential Scrum” looking for topics that your team can focus on improving</li>
			{standardActivitiesClosing(sprint, classProductSprint8Link(),'4 hours per team member')}
		</ol>
	</div> )
}

// Certified for SP22 (Tuesday, April 19, 2022)
// Certified for SP23 (04/23/2023)