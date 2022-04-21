import React from 'react'

import { estimated } from './AL00000Sprint01'
import { LearningObjectivesIntro, ActivitiesListIntro, InitialPost, Closing } from './AL00000Sprint03'
import { StandardActivitiesWithLinkAndSprint, StandardActivitiesClosingWithLinkAndSprint } from './AL00000Sprint05'
import { finalProjectSprint7Link } from '../Activities/FinalProject'
import { oreillyPlaylistOOP, architecturePart1, internalLink } from '../Links'
import { thunderbirdLink } from '../Activities/Thunderbird'
import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'
import { getFinalExamDateAndTime } from '../data/ClientDataAPIs'

export const al24500Sprint07 = ( props ) => {
	return ( <div>
		<h5>Sprint 7: Thunderbird, Final Project version 1, and Application Architecture</h5>
		<p><em>Welcome to sprint 7.</em> How time flies. We have two separate programming activities this sprint. The first 
		assignment is Thunderbird. Thunderbird is different than previous assignments in that we will be enhancing an existing
		application rather than creating a new application from scratch. This is more like what you would expect day-to-day in an
		entry level professional programming position. I think you will enjoy learning about and enhancing an existing 
		application.</p>

		<p>The second half of the sprint will be focused on completing version 1 of your Final Project.</p>

		{LearningObjectivesIntro()}
		<ul style={{ listStyleType:'square'}}>
			<li>Develop and enhance intermediate level graphical, distributed, multi-threaded Java applications</li>
			<li>Create View and Model classes that conform to the model-view-controller pattern</li>
			<li>Begin to understand Application Architecture and its relationship to Object-Oriented Programming</li>
		</ul>

		<p>Notice that in this sprint we have two programming assignments. I encourage you to complete Thunderbird by the 
		middle of the sprint so that you can be 100% focused on your final project during the second half of the sprint.</p>

		{list24500Sprint07()}
		{Closing()}
	</div> )
}

export const list24500Sprint07 = () => {
	const thunderbirdLite = () => { return internalLink('ThunderbirdLite', '/activity-oop/java-thunderbird-lite')}
	const sprint = 7
	return ( <div>
		{ActivitiesListIntro(sprint)}
		<ol>
			{StandardActivitiesWithLinkAndSprint(sprint, thunderbirdLink(), oreillyPlaylistOOP() )}
			<li>Complete {thunderbirdLite()}{estimated('2 hours')}</li>
			<li>Complete {architecturePart1()}</li>
			<li>Complete {thunderbirdLink()}</li>

			{InitialPost()}		
			<li>Verify that you will be presenting your Final Project on <em>{getFinalExamDateAndTime()}</em></li>
			<li>Review and update {finalProjectProposalLink()}</li>
			{StandardActivitiesClosingWithLinkAndSprint(sprint, finalProjectSprint7Link(), '10 hours')}
		</ol>
	</div> )
}

// Certified for SP22 (04/06/2022)

// Todo: Review how many times Coding Standards is is the sprint 7 assignments.
// Todo: Determine if 6, 8, or 10 hours would be the most appropriate to require on the final project. In SP22 I 
// reduced it to 6 hours based on the fact that Easter Break was in sprint 7 and consumed Thursday, Friday, and Monday.