import React from 'react'
import { oreillyPlaylistSC } from '../DataAndAPIs/Links'

import { LearningObjectivesIntro, ActivitiesListIntro, InitialPost } from './AL00000Sprint03'
import { StandardActivitiesWithLinkAndSprint, StandardActivitiesClosingWithLinkAndSprint, Closing } from './AL00000Sprint05'

import { lectureRecordingPlaylist } from './AL49200Sprint02'
import { classProductSprint7Link } from '../Activities/ClassProduct'

import { getModuleDescription } from '../DataAndAPIs/ClassSections'

export const al49200Sprint07 = () => {
	const sprint = 7
	return ( <div>	
		<h5>Sprint {sprint}: {getModuleDescription(sprint-1)}</h5>
		<p><em>Welcome to sprint {sprint}.</em></p> 

		<p>Stay focused on delivering stories to your production environment that add the most value for customers, and always 
		remember that being “done” with a something small and delivering it to production is <em>immensely</em> more valuable 
		than being “almost done” with something great.</p>

		<p>Most important of all is the successful transition of your product. All product assets need to be fully transitioned
		to the team that will own the product going forward. Do they have everything the need to make the product successful?</p>

		{LearningObjectivesIntro()}
		<ul style={{listStyleType:'square'}}>
			<li>Master sprint planning by successfully completing sprint {sprint} planning within the first three days of the sprint</li>
			<li>Master delivering valuable working code to the production environment</li>
			<li>Fully transition responsibility and ownership of the product to the team that will continue working on it going forward</li>
		</ul>

		{list49200Sprint07(sprint)}
		{Closing()}
	</div> )
}

export const list49200Sprint07 = (sprint) => {
	return ( <div>
		{ActivitiesListIntro(sprint)}
		<ol>
			{StandardActivitiesWithLinkAndSprint(sprint, classProductSprint7Link(), oreillyPlaylistSC(), true)}
			<li>Review our sprint {sprint} planning {lectureRecordingPlaylist()}</li>
			<li>Within {oreillyPlaylistSC()} review “Essential Scrum” looking for topics that your team can focus on improving</li>

			{InitialPost(sprint)}
			{StandardActivitiesClosingWithLinkAndSprint(sprint, classProductSprint7Link(),'20 hours per team member')}
		</ol>
	</div> )
}

// Certified for SP22 (04/11/2022)

// Todo: Consider updating Lab 7 question 4 as no one ever provides valuable comments to this question. 
// Todo: Update final project presentation assignment. Maybe move it to an activity?