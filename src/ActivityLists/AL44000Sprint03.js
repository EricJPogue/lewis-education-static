import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated } from './AL00000Sprint00'
import { oreillyPlaylistSE, internalLink, externalLink, gitCommands, jsonArticle, jsonW3CTutorial } from '../DataAndAPIs/Links'

import { assignmentPortfolioWithNodeJSLink } from '../Activities/WebAssignmentPortfolioWithNodeJS'
import { gettingToKnowEachOthersTeamsLink } from '../Activities/WebGettingToKnowEachOthersTeams'

export const al44000Sprint3Topics = 'Application Requirements, Live Scrum Teams, Node.js, and Azure'
export const al44000Sprint03 = () => {
	const sprint = 3

	return ( <div>
		<h5>Sprint 3: {al44000Sprint3Topics}</h5>

		<p>Welcome to sprint 3. This sprint we will be focused on Node.js as a platform for Saas. We will be
		utilizing a book from O’Reilly Books to learn more about the Node.js and Express platform. The book that we are 
		utilizing is “Web Development with Node and Express, 2nd Edition” by Ethan Brown. You will also notice that starting 
		with this sprint the assignments are becoming more open-ended and less prescriptive. Finally, you will be working as 
		a scrum team on assignments.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{ listStyleType:'square'}}>
			<li>Understand how client-side HTML, CSS, JavaScript, and Bootstrap applications can be hosted using Node.js and Express</li>
			<li>Create and modify Node.js with server-side JavaScript applications</li>
			<li>Migrate all of your HTML, CSS, JavaScript, and Bootstrap applications over to a single Node.js hosted site running locally</li>
			<li>Create a Node.js application on Azure</li>
		</ul>

		{list44000Sprint03(sprint)}
		{closing(sprint)}

		<p>Programming Together: “Deploying Node.js on Microsoft Azure”</p>
	</div> )
}

export const list44000Sprint03 = (sprint) => {
	const foxChapter3Lecture = () => { return internalLink('lecture', '/activity/fox-chapter-03')}
	const foxChapter7Lecture = () => { return internalLink('lecture', '/activity/fox-chapter-07') }
	const nodeJSW3CTutorial = () => { return externalLink('Node.js Tutorial', 'https://www.w3schools.com/nodejs/') }
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, assignmentPortfolioWithNodeJSLink(), oreillyPlaylistSE(), false)}
			<li>Read “Engineering Software as a Service” chapter 7 on Requirements and review the associated {foxChapter7Lecture()}</li>
			<li>Within {oreillyPlaylistSE()} read “Web Development with Node and Express” chapters 1 and 2 while completing each of the exercises</li>
			<li>Study and consistently utilize the {gitCommands()} and patterns used by professional development teams </li>

			{initialPost(sprint)}
			<li>Within {oreillyPlaylistSE()} read “Web Development with Node and Express” chapters 3 and 4 while completing each of the exercises</li>
			<li>Scan “Engineering Software as a Service” chapters 3 through 5 and review the associated {foxChapter3Lecture()}</li>
			<li>Complete the W3C {nodeJSW3CTutorial()}</li>
			<li>Complete {gettingToKnowEachOthersTeamsLink()}{estimated('4 hours')}</li>
			<li>Read {jsonArticle()}</li>
			<li>Complete the W3C {jsonW3CTutorial()}</li>
			{standardActivitiesClosing(sprint, assignmentPortfolioWithNodeJSLink(), '4 hours' )}
		</ol>
	</div> )
}

// Certified for SU22 (05/20/2022)
// Todo: Consider reviewing and enhancing Quiz 3.
// Todo: Review and update activities and assignments with the understanding that we already did Assignment Portfolio in Node.js in sprint 2. 
// BugBug: Update activity list with everything that is included in Lab 3. 