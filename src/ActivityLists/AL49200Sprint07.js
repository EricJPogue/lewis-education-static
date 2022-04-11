import React from 'react'
import { oreillyPlaylistSC } from '../Links'

import { LearningObjectivesIntro, ActivitiesListIntro, InitialPost } from './AL00000Sprint03'
import { StandardActivitiesWithLinkAndSprint, StandardActivitiesClosingWithLinkAndSprint, Closing } from './AL00000Sprint05'

import { lectureRecordingPlaylist } from './AL49200Sprint04'
import { classProductSprint7Link } from '../Activities/ClassProduct'

export const al49200Sprint07 = () => {
	const sprint = 7
	return ( <div>	
		<h5>Sprint {sprint}: Stay focused on delivering meaningful product enhancements</h5>
		<p><em>Welcome to sprint {sprint}.</em></p> 

		<p>Stay focused on delivering stories to your production environment that add the most value for customers, and always 
		remember that being “done” with a something small and delivering it to production is <em>immensely</em> more valuable 
		than being “almost done” with something great.</p>

		<p>Remember that sprint 7 is the last sprint that you can complete your Lab Demo. Email me if you have not demoed 
		something to me this semester so that we can schedule a time during sprint 7 to complete this activity.</p>

		{LearningObjectivesIntro()}
		<ul style={{listStyleType:'square'}}>
			<li>Master sprint planning by successfully completing sprint {sprint} planning within the first three days of the sprint</li>
			<li>Master delivering working code to the production environment</li>
		</ul>

		{list49200Sprint7(sprint)}
		{Closing()}
	</div> )
}

const list49200Sprint7 = (sprint) => {
	return ( <div>
		{ActivitiesListIntro(sprint)}
		<ol>
			{StandardActivitiesWithLinkAndSprint(sprint, classProductSprint7Link(), oreillyPlaylistSC(), true)}
			<li>Review our sprint {sprint} planning {lectureRecordingPlaylist()}</li>
			<li>Within {oreillyPlaylistSC()} review “Essential Scrum” looking for topics that your team can focus on improving</li>

			{InitialPost(sprint)}
			{StandardActivitiesClosingWithLinkAndSprint(sprint, classProductSprint7Link(),'14 hours per team member')}
		</ol>
	</div> )
}

