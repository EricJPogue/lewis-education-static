import React from 'react'
import { oreillyPlaylistSC } from '../DataAndAPIs/Links'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated } from './AL00000Sprint00'

import { lectureRecordingPlaylist } from './AL49200Sprint02'
import { classProductSprint5Link } from '../Activities/ClassProduct'
import { capacityCommittedEffortDeliveredLink } from '../Activities/CapacityCommittedEffortDelivered'

export const al49200Sprint05 = () => {
	const sprint = 5
	return ( <div>		
		<h5>Sprint {sprint}: Stay focused on delivering your minimum viable product (MVP)</h5>
		<p><em>Welcome to sprint {sprint}.</em></p> 
		<p>Now that we have:</p>
		<ul style={{listStyleType:'square'}}>
			<li>Continued to refine and updated our minimum viable product (MVP)</li>
			<li>Delivered the most important features to our production application</li>
			<li>And spent the last eight weeks optimizing how we work as a team in a scrum environment</li>
		</ul>
		<p>we need to continue to deliver features that real users can use. Since the beginning of the semester we have tried 
		to keep the goal of delivering an MVP product by the end of sprint 4. We determined in sprint 4 that our goal was too 
		aggressive. That happens. Now we adjust, stay positive, and focus on our updated goal of delivering our MPV by the end 
		of sprint 5. What will you be able to show potential customers at the end of this sprint?</p>

		<p>Stay focused on delivering stories to your production environment that add the most value for customers, and always 
		remember that being “done” with a something small and delivering it to production is <em>immensely</em> more valuable 
		than being “almost done” with something great.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Master sprint planning by successfully completing sprint {sprint} planning within the first three days of the sprint</li>
			<li>Master MVP while staying laser focused on implementing your MVP by the end of sprint {sprint}</li>
			<li>Master ”done” and keep it in mind at all times while you are working on features</li>
			<li>Master sprint reviews (demos) and sprint retrospectives as you complete them for sprint {sprint-1}</li>
		</ul>

		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, classProductSprint5Link(), oreillyPlaylistSC(), false)}
			<li>Review our sprint {sprint} planning {lectureRecordingPlaylist()}</li>
			<li>Within {oreillyPlaylistSC()} review “Essential Scrum” looking for topics that your team can focus on improving</li>
			<li>Review {capacityCommittedEffortDeliveredLink()}</li>
			
			{initialPost(sprint)}
			<li>Complete {classProductSprint5Link()}{estimated('14 hours per team member')} </li>
			{standardActivitiesClosing(sprint, capacityCommittedEffortDeliveredLink(),'')}
		</ol>
		{closing(sprint)}
	</div> )
}
// Certified for SP23 (03/12/2023)


