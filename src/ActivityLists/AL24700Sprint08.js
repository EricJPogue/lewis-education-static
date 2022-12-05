import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, standardActivitiesClosing, closing } from './AL00000Sprint00'
import { oreillyPlaylistWeb, architecturePart2 } from '../DataAndAPIs/Links'
import { finalProjectDistributedV2Link } from '../Activities/FinalProject';

export const al24700Sprint08 = () => {
	const sprint = 8
	return ( <div>
		<h5>Sprint 8: Final Project</h5>

		<p>You made it. Very well done! Thank you for your dedication, support, and participation. All that’s left is to finish 
		strong and deliver a Final Project that makes you proud. Don’t do it for me, don’t do it for the grade, do it for 
		yourself.</p>  

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Deliver a sophisticated Full Stack Web application utilizing HTML, CSS, JavaScript, Node.js, MongoDB, and Microsoft Azure</li>
			<li>Explore leading edge web development technology trends and determine where you would like to focus your future learning 
				efforts</li>
		</ul>  

		{list24700Sprint08(sprint)}
		{closing(sprint)}
	</div> )
}

export const list24700Sprint08 = (sprint) => {
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, finalProjectDistributedV2Link(), oreillyPlaylistWeb())}
			<li>Explore {architecturePart2()}</li>
			{standardActivitiesClosing(sprint, finalProjectDistributedV2Link(), '12 hours')}
		</ol>
	</div> )
}

// Certified for FA22 (12/03/2022)
// Todo: Consider adding programming together tutorials link to sprint 8 closing.
// Todo: Consider reviewing and improving quiz 8.