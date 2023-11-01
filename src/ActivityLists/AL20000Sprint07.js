import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing } from './AL00000Sprint00'

import { healthRiskCalculatorWebOrPythonLink } from '../Activities/HealthRiskCalculator'
import { oreillyPlaylistICS, internalLink } from '../DataAndAPIs/Links'
import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'
import { getFinalExamDateAndTime } from '../DataAndAPIs/Classes'

export const al20000Sprint07 = () => {
	const sprint = 7
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
		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Understand Computer Security</li>
			<li>Deliver more sophisticated Web applications using HTML, CSS, and JavaScript Website</li>
			<li>... Or deliver more sophisticated Python applications</li>
			<li>Finalize and commit to your Final Project</li> 
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
			{standardActivities(sprint, healthRiskCalculatorWebOrPythonLink(), oreillyPlaylistICS())}
			<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” Security and review our associated {daleSecurityLecture()}</li>
		
			{initialPost(sprint)}
			<li>Verify that you will be presenting your Final Project on <em>{getFinalExamDateAndTime()}</em></li>
			<li>Make and last updates to your {finalProjectProposalLink()}</li>
			{standardActivitiesClosing(sprint, healthRiskCalculatorWebOrPythonLink(), '8 hours')}
		</ol>
	</div>)
}

// Certified for SP22 (04/05/2022)
// Certified for FA22 (11/30/2022)

// BugBug: Fix Quiz 7 question "This is a security attack that attempts to disrupt services of a host connected to the Internet by overwriting memory."
// BugBug: Fix Lab 7 final question as it should not be a repeat of "Coding Standards"

// Todo: Update syllabus with Activity List headers... or update Activity list headers. 
// Todo: Consider adding licensing topic to all classes. 
// Todo: Consider adding Git/GitHub activity / tutorial. 
// Todo: Where should the following go? Sprint 7?
//	   const daleArtificialIntelligenceLecture = () => { return internalLink('lecture', '/activity-dale/13' )}
//	   <li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” Artificial Intelligence and review our associated {daleArtificialIntelligenceLecture()}</li>
//     import { matchmakerPythonLink } from '../Activities/Matchmaker'
//// Todo: Cloud Computing from sprint 3? Move or remove (do we need this)?