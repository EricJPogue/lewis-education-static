import React from 'react'
import { estimated } from './AL00000Sprint01'

import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivitiesWithLink, InitialPost, StandardActivitiesClosingWithLink, Closing } from './AL00000Sprint03'
import { oreillyPlaylistSE, internalLink, externalLink, gitCommands, jsonArticle, jsonW3CTutorial } from '../DataAndAPIs/Links'

import { assignmentPortfolioWithNodeJSLink } from '../Activities/WebAssignmentPortfolioWithNodeJS'
import { gettingToKnowEachOthersTeamsLink } from '../Activities/WebGettingToKnowEachOthersTeams'

export const al44000Sprint03 = () => {
	const foxChapter7Lecture = () => { return internalLink('lecture', '/activity/fox-chapter-07') }
	const nodeJSW3CTutorial = () => { return externalLink('Node.js Tutorial', 'https://www.w3schools.com/nodejs/') }
	let playlist = oreillyPlaylistSE()
	const sprint = 3

	return ( <div>

<h5>Sprint 3: Application Requirements, Node.js, and Azure, </h5>

<p>Welcome to sprint 3. This sprint we will be focused on Node.js as a platform for Saas. We will be
utilizing a book from O’Reilly Books to learn more about the Node.js and Express platform. The book that we are 
utilizing is “Web Development with Node and Express, 2nd Edition” by Ethan Brown. You will also notice that starting 
with this sprint the assignments are becoming more open-ended and less prescriptive. I encourage you to collaborate 
with your classmates and scrum team members as you work through some of the open-ended topics.</p>

{LearningObjectivesIntro()}
<ul style={{ listStyleType:'square'}}>
	<li>Understand how client-side HTML, CSS, JavaScript, and Bootstrap applications can be hosted using Node.js and Express</li>
	<li>Create and modify basic Node.js utilizing server-side JavaScript applications</li>
	<li>Migrate all of your HTML, CSS, JavaScript, and Bootstrap applications over to a single Node.js hosted site running locally</li>
	<li>Create a basic Node.js application on Azure</li>
</ul>

{ActivitiesListIntro(sprint)}
<ol>
	{StandardActivitiesWithLink(assignmentPortfolioWithNodeJSLink(), playlist)}
	<li>Read “Engineering Software as a Service” chapter 7 on Requirements and review the associated {foxChapter7Lecture()}</li>
	<li>Within {oreillyPlaylistSE()} read “Web Development with Node and Express” chapters 1 and 2 while completing each of the exercises</li>
	<li>Study and consistently utilize the {gitCommands()} and patterns used by professional development teams </li>

	{InitialPost(sprint)}
	<li>Within {oreillyPlaylistSE()} read “Web Development with Node and Express” chapters 3 and 4 while completing each of the exercises</li>
	<li>Complete the W3C {nodeJSW3CTutorial()}</li>
	<li>Complete {gettingToKnowEachOthersTeamsLink()}{estimated('4 hours')}</li>
	<li>Read {jsonArticle()}</li>
	<li>Complete the W3C {jsonW3CTutorial()}</li>
	{StandardActivitiesClosingWithLink(assignmentPortfolioWithNodeJSLink(), '4 hours')}
</ol>
{Closing()}<br />

<p>Programming Together: “Deploying Node.js on Microsoft Azure”</p>
</div> )
}




