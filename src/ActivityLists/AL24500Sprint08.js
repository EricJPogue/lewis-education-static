import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, standardActivitiesClosing, closing } from './AL00000Sprint00'
import { oreillyPlaylistOOP } from '../DataAndAPIs/Links'
import { finalProjectLink } from '../Activities/FinalProject'

export const al24500Sprint08 = ( props ) => {
	const sprint = 8
	return ( <div>
		<h5>Sprint 8: Final Project, Application Architecture, and Databases</h5>

		<p>You made it. Very well done! Thank you for your dedication, support, and participation. All that’s left is to finish 
		strong and deliver a Final Project that makes you proud. Don’t do it for the grade, don’t do it for me, do this one for 
		yourself.</p> 

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Independently deliver and present meaningful working software</li>
			<li>Understand the basics of application architecture</li>
			<li>Understand how relational databases can support or hinder object-oriented programming practices</li>
		</ul>

		{list24500Sprint08(sprint)}
		{closing(sprint)}
	</div> )
}

export const list24500Sprint08 = (sprint) => {
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, finalProjectLink(), oreillyPlaylistOOP())}
			{standardActivitiesClosing(sprint, finalProjectLink(), '12 hours')}
		</ol>
	</div>)
}

// Certified for SP22 (Monday, April 18, 2022)
// Certified for SP23 (04/23/2023)

