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

// Certified for FA22 (10/06/2022) 
// Certified for SP22 (02/12/2022)
// Certified for FA23 (10/17/2023)

// Todo: Add production web link to lab 4 question 2.

// Consider adding back <li>Within {oreillyPlaylistSE()} scan “Essential Scrum” Chapters 1 and 2</li>
// Todo: Update to reflect Zac’s fix (see related announcement). 
// Todo: Move Whatever Happened to Ruby to earlier sprints.
// Todo: Consider reviewing and enhancing Quiz 3.

// Todo: Consider moving  some of the Waterfall Project Management video and assignment from Sprint 5 to sprint 3.
// Todo: Consider moving something related to “Dogs, JavaScript & An API 🐶 Fetch, Promises & Async Await” from sprint 4 to sprint 3

// Todo: Review https://www.geeksforgeeks.org/egg-dropping-puzzle-dp-11/
// Todo: Identify where quiz answers originate from. 
// Todo: Fix the end of the Fox Preface video.
// Todo: Review https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository
// Todo: Consider adding W3C Validator VS code add-in to several classes. 

// Todo: Consider updating and adding the following Architecture videos back into the class:
//	import { architecturePart1, architecturePart2 } from '../DataAndAPIs/Links'
// <li>Complete {architecturePart1()}</li>
// <li>Scan {architecturePart2()}</li>
// Consider adding https://www.youtube.com/watch?v=A-H-xZ5ZXgo
// Todo: Consider adding back in Architecture lecture or removing SQL questions from quiz.
// Todo: Make sure that in sprints 7 & 8 that “individual” lab questions are identified. 
// Todo: Review Zac’s quiz and update quiz 7. 
// Todo: Consider '<li>Complete {AzureFunctionsWithVSCodeAndJavaScript()} and build your <em>personal</em> serverless function</li>'
// Todo: Consider '<li>Within {oreillyPlaylistSE()} search for “Azure Functions” and “Serverless Computing” and document the best resources</li>'
// Todo: Consider moving final project proposals to sprint 4. 
// Todo: Consider updating Lab 4 in that the spike doesn’t seem like a totally natural fit.  
// Todo: Move some of the Waterfall Project Management video and assignment from Sprint 5 to sprint 4.
// Todo: Add something to lab 4 to validate Dogs, JavaScript & An API 🐶 Fetch, Promises & Async Await.
// Todo: Move Final Project Proposal from sprint 5 to sprint 4.
// Todo: Verify the length of the videos and see if they are really 4 hours (per Nathan) and consider breaking them up between sprints.




