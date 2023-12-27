import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing } from './AL00000Sprint00'

import { oreillyPlaylistICS, internalLink } from '../DataAndAPIs/Links'
import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'
import { getFinalExamDateAndTime } from '../DataAndAPIs/ClassSections'

import { finalProjectLink } from '../Activities/FinalProject'

import { getModuleDescription } from '../DataAndAPIs/ClassSections'

export const al20000Sprint07 = () => {
	const sprint = 7
	return ( <div>
		<h5>Sprint {sprint}: {getModuleDescription(sprint-1)}</h5>

		<p>Welcome to sprint 7. Sprint 7 puts you in the driver’s seat. It is time for us to work on our Class Projects. 
		We each have <em>three weeks and 20 hours</em> to deliver something uniquely your own. There is time to build something 
		that makes you proud. The only requirement is that you demonstrate what you have learned in class and demonstrate 
		that you are able to extend that learning to something new.</p>
		<p>You have the	power.</p>

		<h5> 
		<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
		“With great power there must also come great responsibility”<br /></div>
		<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
		-Peter Parker (aka Spider-Man)</div>
		</h5>
		<br />

		<p><i>What will you do with all that power... and responsibility?</i></p>
		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Deliver something uniquely your own that makes you proud</li>
			<li>Understand Computer Security</li>
		</ul>

		{list20000Sprint07()}
		{closing(sprint)}
	</div> )
}

export const list20000Sprint07 = () => {
	const daleSecurityLecture = () => { return internalLink('lecture', '/activity-dale/17' )}
	const sprint = 7
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, finalProjectLink(), oreillyPlaylistICS())}
			<li>Verify that you will be presenting your Class Project on <em>{getFinalExamDateAndTime()}</em></li>
			<li>Review your {finalProjectProposalLink()}</li>
		
			{initialPost(sprint)}
			<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” Security and review our associated {daleSecurityLecture()}</li>
			<li>Class Project, Class Project, and more Class Project</li>
			{standardActivitiesClosing(sprint, finalProjectLink(), '20 hours')}
		</ol>
	</div>)
}

// Certified for SP22 (04/05/2022)
// Certified for FA22 (11/30/2022)
// Certified for FA23 (11/19/2023)


