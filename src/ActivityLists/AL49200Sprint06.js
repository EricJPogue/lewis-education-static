import React from 'react'
import { oreillyPlaylistSC } from '../data/Links'

import { LearningObjectivesIntro, ActivitiesListIntro, InitialPost } from './AL00000Sprint03'
import { StandardActivitiesWithLinkAndSprint, StandardActivitiesClosingWithLinkAndSprint, Closing } from './AL00000Sprint05'

import { lectureRecordingPlaylist } from './AL49200Sprint04'
import { classProductSprint6Link } from '../Activities/ClassProduct'

export const al49200Sprint06 = () => {
	const sprint = 6
	return ( <div>
		
<h5>Sprint {sprint}: Stay focused on delivering your minimum viable product (MVP)</h5>
<p><em>Welcome to sprint {sprint}.</em></p> 
<p>Now that we have:</p>
<ul style={{listStyleType:'square'}}>
	<li>Delivered our minimum viable product (MVP)</li>
	<li>Delivered many important features that real users will find valuable</li>
	<li>And spent the last ten weeks optimizing how we work as a team in a scrum environment</li>
</ul>
<p>we need to continue to enhance our product with additional features that real users can use. What will you be able 
to show potential customers at the end of this sprint?</p>

<p>Stay focused on delivering stories to your production environment that add the most value for customers, and always 
remember that being “done” with a something small and delivering it to production is <em>immensely</em> more valuable 
than being “almost done” with something great.</p>

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Continuously improve sprint planning by successfully completing sprint {sprint} planning within the first three days of the sprint</li>
	<li>Continuously improve your MVP plan and implementation{sprint}</li>
	<li>Continuously improve “done” and keep it in mind at all times while you are working on features</li>
	<li>Continuously improve sprint reviews (demos) and sprint retrospectives as you complete them for sprint {sprint-1}</li>
</ul>

{ActivitiesListIntro(sprint)}
<ol>
	{StandardActivitiesWithLinkAndSprint(sprint, classProductSprint6Link(), oreillyPlaylistSC(), true)}
	<li>Review our sprint {sprint} planning {lectureRecordingPlaylist()}</li>
	<li>Within {oreillyPlaylistSC()} review “Essential Scrum” looking for topics that your team can focus on improving</li>

	{InitialPost(sprint)}
	{StandardActivitiesClosingWithLinkAndSprint(sprint, classProductSprint6Link(),'14 hours per team member')}
</ol>
{Closing()}

</div> )
}

// Certified for SP22 (03/27/2022)


