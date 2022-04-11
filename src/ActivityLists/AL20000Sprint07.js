import React from 'react'

import { LearningObjectivesIntro, ActivitiesListIntro, InitialPost, Closing } from './AL00000Sprint03'
import { StandardActivitiesWithLinkAndSprint, StandardActivitiesClosingWithLinkAndSprint } from './AL00000Sprint05'
import { healthRiskCalculatorWebOrPythonLink } from '../Activities/HealthRiskCalculator'
import { oreillyPlaylistICS, internalLink } from '../Links'
import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'
import { getFinalExamDateAndTime } from '../data/ClientDataAPIs'



export const al20000Sprint07 = () => {
	return ( <div>
		<h5>Sprint 7: Security, JavaScript, and you setting the direction</h5>

		<p>Welcome to sprint 7. Sprint 7 puts you in the driver’s seat. You get to decide if you would benefit more by focusing 
		on developing more sophisticated terminal applications using Python, or if your energy would be better spent mastering 
		Web development with HTML, CSS, and JavaScript. But never forget the legendary phrase:</p>

		<h5> 
		<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
		“With great power there must also come great responsibility”<br /></div>
		<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
		-Peter Parker (aka Spider-Man)</div>
		</h5>
		<br />

		<p><i>What will you do with all that power... and responsibility?</i></p>
		{LearningObjectivesIntro()}
		<ul style={{listStyleType:'square'}}>
			<li>Understand Computer Security</li>
			<li>Deliver more sophisticated Web applications using HTML, CSS, and JavaScript Website</li>
			<li>... Or deliver more sophisticated Python applications</li>
			<li>Finalize and commit to your Final Project</li> 
		</ul>

		{list20000Sprint07()}
		{Closing()}
	</div> )
}

export const list20000Sprint07 = () => {
	const daleSecurityLecture = () => { return internalLink('lecture', '/activity-dale/17' )}
	const sprint = 7
	return ( <div>
		{ActivitiesListIntro(sprint)}
		<ol>
			{StandardActivitiesWithLinkAndSprint(sprint, healthRiskCalculatorWebOrPythonLink(), oreillyPlaylistICS())}
			<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” Security and review our associated {daleSecurityLecture()}</li>
		
			{InitialPost()}	
			<li>Verify that you will be presenting your Final Project on <em>{getFinalExamDateAndTime()}</em></li>
			<li>Make and last updates to your {finalProjectProposalLink()}</li>
			{StandardActivitiesClosingWithLinkAndSprint(sprint, healthRiskCalculatorWebOrPythonLink(), '8 hours')}
		</ol>
	</div>)
}

// Certified for SP22 (04/05/2022)