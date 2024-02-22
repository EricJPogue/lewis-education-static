import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing } from './AL00000Sprint00'

import { oreillyPlaylistSE, internalLink, JSONWebServicesTutorial } from '../DataAndAPIs/Links'
import { healthRiskCalculatorTeamWebLink } from '../Activities/HealthRiskCalculatorTeam'

import { ServerlessAzure, ServerlessGoogle, ServerlessAWS } from '../DataAndAPIs/Links'
import { externalLink } from '../DataAndAPIs/Links'
import { getModuleDescription } from '../DataAndAPIs/ClassSections'

export const al44000Sprint04 = () => {
	let sprint = 4
	return ( <div>
		<h5>Sprint 4: {getModuleDescription(sprint-1)}</h5>

		<p>Welcome to sprint 4. This sprint we are will be focused on learning about Testing and Test-Driven Development while 
		we practice server-side Node.js programming. Although the features of {healthRiskCalculatorTeamWebLink()} are not 
		very complicated, we will be challenged to implement the features as part of a team utilizing server-side programming
		techniques.</p>

		<p>It is important to remember that this is our final sprint before we become 100% focused on developing complex 
		software as a Agile team in sprints 5 through 8 utilizing our full software-as-a-service (Saas) architecture.</p>

		<p>What will your team be working on for the last half of the semester? Would you like to work with all or part of 
		your team on the same project for your capstone? How about working as a second scrum team on an existing capstone 
		product? Or maybe signing up individually to work with an existing capstone team?</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Understand testing and test-driven development</li>
			<li>Implement HTML, CSS, and JavaScript based client web applications that consume Application Programming Interfaces (APIs)</li>
			<li>Understand Serverless Computing and utilize Azure Functions to implement Application Programming Interfaces (APIs)</li>
			<li>Work as part of a software development team utilizing GitHub, Azure, and Node.js</li>
		</ul>

		{list44000Sprint04(sprint)}
		{closing(sprint)}
	</div> )
}

export const list44000Sprint04 = (sprint) => {
	const foxChapter8Lecture = () => { return internalLink('lecture', '/activity/fox-chapter-08') }
	const azureStaticWebApps = () => { return externalLink('Azure Static Web Apps', 'https://learn.microsoft.com/en-us/azure/static-web-apps/?WT.mc_id=build2020_swa-docs-cxa')}
	const azureFunctions = () => { return externalLink('Azure Functions', 'https://learn.microsoft.com/en-us/azure/azure-functions/')}
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, healthRiskCalculatorTeamWebLink(), oreillyPlaylistSE())}
			<li>Review {azureStaticWebApps()} and start “QUICKSTART: Deploy an app with no front-end framework” utilizing the “Azure portal” </li>
			<li>Read Chapter 8 of Fox on Test-Driven Development and review the associated class {foxChapter8Lecture()}</li>

			<li>Complete {JSONWebServicesTutorial()}</li>

			{initialPost(sprint)}
			<li>Review and understand Serverless Computing by analyzing {ServerlessAzure()}, {ServerlessGoogle()}, and {ServerlessAWS()}</li>
			<li>Review {azureStaticWebApps()} and complete “QUICKSTART: Deploy an app with no front-end framework” utilizing the “Azure portal” </li>
			<li>Review {azureFunctions()} and complete “QUICKSTART: JavaScript”</li>

			<li>Review {azureStaticWebApps()} and complete “QUICKSTART: Deploy an app with no front-end framework” utilizing the “Azure portal” </li>
			{standardActivitiesClosing(sprint, healthRiskCalculatorTeamWebLink(), '6 hours per team member')}
		</ol>
	</div> )
}

// Certified for SP24 on February 22, 2024





