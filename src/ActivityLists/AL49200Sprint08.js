import React from 'react'
import { oreillyPlaylistSC } from '../data/Links'

import { LearningObjectivesIntro, ActivitiesListIntro, InitialPost } from './AL00000Sprint03'
import { StandardActivitiesWithLinkAndSprint, StandardActivitiesClosingWithLinkAndSprint, Closing } from './AL00000Sprint05'

import { lectureRecordingPlaylist } from './AL49200Sprint04'
import { classProductSprint8Link } from '../Activities/ClassProduct'

export const al49200Sprint08 = () => {
	const sprint = 8
	return ( <div>	
		<h5>Sprint {sprint}: Sustainability plus meaningful product enhancements</h5>
		<p><em>Welcome to sprint {sprint}.</em></p> 

		<p>Stay focused on delivering stories to your production environment that add the most value for customers. However, 
		this is the final sprint so we also want to add a new focus of making our efforts sustainable in a way that would 
		allow someone else to pick up where we left off. </p>

		{LearningObjectivesIntro()}
		<ul style={{listStyleType:'square'}}>
			<li>Master sprint planning by successfully completing sprint {sprint} planning within the first three days of the sprint</li>
			<li>Master delivering working code to the production environment</li>
			<li>Implement a sustainable product that would allow someone else to continue development</li>
		</ul>

		{list49200Sprint8(sprint)}
		{Closing()}
	</div> )
}

const list49200Sprint8 = (sprint) => {
	return ( <div>
		{ActivitiesListIntro(sprint)}
		<ol>
			{StandardActivitiesWithLinkAndSprint(sprint, classProductSprint8Link(), oreillyPlaylistSC(), true)}
			<li>Review our sprint {sprint} planning {lectureRecordingPlaylist()}</li>
			<li>Within {oreillyPlaylistSC()} review “Essential Scrum” looking for topics that your team can focus on improving</li>

			{InitialPost(sprint)}
			{StandardActivitiesClosingWithLinkAndSprint(sprint, classProductSprint8Link(),'14 hours per team member')}
		</ol>
	</div> )
}

// Certified for SP22 (Tuesday, April 19, 2022)