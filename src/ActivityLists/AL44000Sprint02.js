import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated } from './AL00000Sprint00'
import { oreillyPlaylistSE, HTMLW3C, CSSW3C, JavaScriptW3C, RegularExpressionsW3C, internalLink } from '../DataAndAPIs/Links'

import { assignmentPortfolioLink } from '../Activities/WebAssignmentPortfolio'
import { azureWebsiteLink } from '../Activities/AzureWebsite'
import { webResumeLink } from '../Activities/WebResume'
import { webDiceRollerLink } from '../Activities/WebDiceRoller'
import { getModuleDescription } from '../DataAndAPIs/ClassSections'

const foxChapter2Lecture = () => internalLink('lecture', '/activity/fox-chapter-02')
const foxChapter6Lecture = () => { return internalLink('lecture', '/activity/fox-chapter-06')}

export const al44000Sprint02 = () => {
	const sprint = 2
	return ( <div>
		<h5>Sprint 2: {getModuleDescription(sprint-1)}</h5>
		
		<p><em>Welcome to sprint 2.</em> We covered a lot of material in sprint 1. However, we didn't get a chance to write 
		much code. This sprint get your text editors out. We are going to start practicing some of the concepts we learned.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Write simple HTML, CSS, Javascript, and Node.js applications and install them to Azure</li>
			<li>Understand simple Ruby programs using basic control structures and data structures</li>
			<li>Understand has SaaS applications are developed in JavaScript using AJAX and JSON</li>
			<li>Comfortably be able to utilize single-developer workflow with Git and GitHub</li>
		</ul>

		{list44000Sprint02(sprint)}
		{closing()}
	</div> )
}

export const list44000Sprint02 = (sprint) => {
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, assignmentPortfolioLink())}
			<li>Read “Engineering Software as a Service” Chapter 2 of and review our associated {foxChapter2Lecture()}</li>
			<li>Complete {azureWebsiteLink()}{estimated('2 hours')}</li>
			<li>Review the Potpourri web application from our example code GitHub repository</li>
			<li>Within {oreillyPlaylistSE()} scan “Learning Web Development” Preface through Chapter 4</li>
			<li>Implement your {webResumeLink()} while completing the W3Schools {HTMLW3C()} and {CSSW3C()} tutorials{estimated('6 hours')}</li>
			{initialPost(sprint)}
			<li>Complete {webDiceRollerLink()}</li>
			<li>Read “Engineering Software as a Service” chapter 6 plus A.6 and A.7 and review our chapter 6 {foxChapter6Lecture()}</li>
			<li>Complete {JavaScriptW3C()} tutorial up to {RegularExpressionsW3C()}</li>
			{standardActivitiesClosing(sprint, assignmentPortfolioLink(), '2 hours')}
		</ol>
	</div> )
}

// Certified for FA22 (08/27/2022)
// Certified for SP23 (01/15/2023)
// Certified for FA23 (09/09/2023)

// Todo: Move client-server and architecture stuff to sprint 2
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





