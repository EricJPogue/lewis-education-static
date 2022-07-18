import React from 'react'
import { estimated } from './AL00000Sprint00'

import { oreillyPlaylistSC, externalLink } from '../DataAndAPIs/Links'

import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivitiesWithLink, InitialPost, StandardActivitiesClosingWithLink } from './AL00000Sprint03'
import { classProductSprint3Link } from '../Activities/ClassProduct'

export const al49200Sprint03 = () => {
	const lectureRecordingPlaylist = () => { return externalLink('lecture', 'https://lewisu.hosted.panopto.com/Panopto/Pages/Viewer.aspx?pid=50ad011a-766e-43e7-8ec4-ae2301373d46')}
	const sprint = 3
	return ( <div>
		
<h5>Sprint 3: Let’s get to work on products</h5>
<p><em>Welcome to sprint 3.</em></p> 
<p>Now that we have:</p>
<ul style={{listStyleType:'square'}}>
	<li>Defined our minimum viable product (MVP)</li>
	<li>Implemented, documented, and demonstrated continuous integration / continuous delivery (CI/CD) for our 
		development, test, and productions environments</li>
	<li>And implemented, documented, and demonstrated CI/CD for our customer’s access to test, and production 
		environments</li>
</ul>
<p>it’s time to focus on delivering our MVP. We know that the goal is to have our MVP done by the end of sprint 4. 
What can we do in sprint 3 to help us achieve that goal? We can start by making sure that we spend a majority of 
our time working on the most valuable features of our MVP. If we prioritize and focus, we should be able to spend 
at least 60% of our time focused developing MVP features.</p>

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Focus our time and energy on implementing the most valuable features of our MVP</li>
	<li>Complete and document our sprint reviews (demos) and sprint retrospectives for sprint 2</li>
	<li>Update your high level MVP delivery plan prioritizing the beginning of sprint 5 for delivery</li>
</ul>

{ActivitiesListIntro(sprint)}
<ol>
	{StandardActivitiesWithLink(classProductSprint3Link(), oreillyPlaylistSC(), true )}
	<li>Review our sprint 3 planning {lectureRecordingPlaylist()}</li>
	<li>Within {oreillyPlaylistSC()} scan “Essential Scrum” chapters 13 through 18{estimated('1 hour maximum')}</li>
	{InitialPost(sprint)}

	<li>Within {oreillyPlaylistSC()} read “Essential Scrum” chapters 19 through 22{estimated('2 hours')}</li>
	{StandardActivitiesClosingWithLink(classProductSprint3Link(),'12 hours per team member')}
</ol>
<p>If your team is struggling, remember to reach out to your instructor early and often for help.</p>

</div> )
}

// Node.js in sprint 3?

