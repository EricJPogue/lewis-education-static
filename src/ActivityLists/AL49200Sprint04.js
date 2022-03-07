import React from 'react'
import { estimated } from './AL00000Sprint01'

import { oreillyPlaylistSC, externalLink } from '../Links'

import { LearningObjectivesIntro, ActivitiesListIntro, InitialPost } from './AL00000Sprint03'
import { StandardActivitiesWithLinkAndSprint, StandardActivitiesClosingWithLinkAndSprint, Closing } from './AL00000Sprint04'

import { classProductSprint4Link } from '../Activities/ClassProduct'

export const lectureRecordingPlaylist = () => { return externalLink('lecture', 'https://lewisu.hosted.panopto.com/Panopto/Pages/Viewer.aspx?pid=50ad011a-766e-43e7-8ec4-ae2301373d46')}

export const al49200Sprint04 = () => {
	const sprint = 4
	return ( <div>
		
<h5>Sprint 4: Stay focused on delivering your minimum viable product (MVP)</h5>
<p><em>Welcome to sprint 4.</em></p> 
<p>Now that we have:</p>
<ul style={{listStyleType:'square'}}>
	<li>Refined and updated our minimum viable product (MVP)</li>
	<li>Delivered a few features to our production application</li>
	<li>And spent the last six weeks optimizing how we work as a team in a scrum environment</li>
</ul>
<p>it’s time to deliver features that real users can use. Since the beginning of the semester we have tried to keep the 
goal of delivering an MVP product by the end of sprint 4. Now we are here. What can we do to have something to show 
potential customers? Maybe we were not able to commit to all the features of the MVP in our sprint 4 planning. That 
happens. Stay focused on delivering something of value to production. Always remember that being “done” with a 
something small and delivering it to production is <em>immensely</em> more valuable than being “almost done” with 
somethigng great.</p>

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Fully understand sprint planning while completing sprint {sprint} planning within the first two days of the sprint</li>
	<li>Fully understand MVP while staying laser focused on implementing your MVP by the end of sprint {sprint}</li>
	<li>Master ”done” and keep it in mind at all times while you are working on features</li>
	<li>Master sprint reviews (demos) and sprint retrospectives as you complete them for sprint {sprint-1}</li>
</ul>

{ActivitiesListIntro(sprint)}
<ol>
	{StandardActivitiesWithLinkAndSprint(sprint, classProductSprint4Link(), oreillyPlaylistSC(), true)}
	<li>Review our sprint {sprint} planning {lectureRecordingPlaylist()}</li>
	<li>Within {oreillyPlaylistSC()} review and fully implement “Essential Scrum” chapters 19 through 22</li>

	{InitialPost(sprint)}
	<li>Within {oreillyPlaylistSC()} rigorously read “Essential Scrum” chapters 14 through 18{estimated('2 hour')}</li>
	{StandardActivitiesClosingWithLinkAndSprint(sprint, classProductSprint4Link(),'12 hours per team member')}
</ol>
{Closing()}

</div> )
}

// Node.js in sprint 3?

