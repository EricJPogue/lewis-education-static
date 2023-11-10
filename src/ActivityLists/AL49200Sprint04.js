import React from 'react'
import { estimated } from './AL00000Sprint00'

import { oreillyPlaylistSC } from '../DataAndAPIs/Links'
import { activitiesListIntro, closing, learningObjectivesIntro, standardActivities, standardActivitiesClosing, initialPost } from './AL00000Sprint00'
import { classProductSprint4Link } from '../Activities/ClassProduct'

import { lectureRecordingPlaylist } from './AL49200Sprint02'

export const al49200Sprint04 = () => {
	const sprint = 4
	return ( <div>
		<h5>Sprint {sprint}: Stay focused on delivering your minimum viable product (MVP)</h5>
		<p><em>Welcome to sprint 4.</em></p> 
		<p>Now that we have:</p>
		<ul style={{listStyleType:'square'}}>
			<li>Refined and updated our minimum viable product (MVP)</li>
			<li>Delivered a few features to our production application</li>
			<li>And spent the last six weeks optimizing how we work as a team in a scrum environment</li>
		</ul>
		<p>It’s time to deliver features that real users can use. Since the beginning of the semester we have tried to keep the 
		goal of delivering an MVP product by the end of sprint 4. Now we are here. What can we do to have something to show 
		potential customers? Maybe we were not able to commit to all the features of the MVP in our sprint 4 planning. That 
		happens. Stay focused on delivering something of value to production. Always remember that being “done” with a 
		something small and delivering it to production is <em>immensely</em> more valuable than being “almost done” with 
		something great.</p>

		<p>It is also time to start considering the longevity of your product. Who is going to continue the legacy? Is anyone on 
		your current team willing to recruit and guide a second team starting in sprint 5? Or is anyone from the team available 
		next semester for an independent project? Would someone on your team be willing to mentor and guide an additional team 
		member? All possibilities that I want you to discuss during sprint 4 planning.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Fully understand sprint planning while completing sprint {sprint} planning within the first two days of the sprint</li>
			<li>Fully understand MVP while staying laser focused on implementing your MVP by the end of sprint {sprint}</li>
			<li>Master ”done” and keep it in mind at all times while you are working on features</li>
			<li>Master sprint reviews (demos) and sprint retrospectives as you complete them for sprint {sprint-1}</li>
		</ul>

		{list49200Sprint04(sprint)}
		{closing(sprint)}
	</div> )
}

export const list49200Sprint04 = (sprint) => {
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, classProductSprint4Link())}
			<li>Review our sprint {sprint} planning {lectureRecordingPlaylist()}</li>
			<li>Within {oreillyPlaylistSC()} review and fully implement “Essential Scrum” chapters 19 through 22</li>
			{initialPost(sprint)}

			<li>Within {oreillyPlaylistSC()} rigorously read “Essential Scrum” chapters 14 through 18{estimated('2 hour')}</li>
			{standardActivitiesClosing(sprint, classProductSprint4Link(),'12 hours per team member')}
		</ol>
	</div> )
}

// Node.js in sprint 3?
// Todo: Add new team adoption activities and assignments. 
