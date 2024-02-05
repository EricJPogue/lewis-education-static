import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated } from './AL00000Sprint00'
import { oreillyPlaylistSE, internalLink, externalLink, gitCommands, jsonArticle, jsonW3CTutorial } from '../DataAndAPIs/Links'

import { assignmentPortfolioWithNodeJSLink } from '../Activities/WebAssignmentPortfolioWithNodeJS'
import { gettingToKnowEachOthersTeamsLink } from '../Activities/WebGettingToKnowEachOthersTeams'
import { getModuleDescription } from '../DataAndAPIs/ClassSections'

export const al44000Sprint03 = () => {
	const sprint = 3

	return ( <div>
		<h5>Sprint 3: {getModuleDescription(sprint-1)}</h5>

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
			<li>Create a Node.js applications on Azure</li>
		</ul>

		{list44000Sprint03(sprint)}
		{closing(sprint)}

		<p>Programming Together: “Deploying Node.js on Microsoft Azure”</p>
		{extras()}
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

const extras = () => {
	const whateverHappenedToRuby = () => externalLink('Whatever happened to Ruby?', 'https://www.infoworld.com/article/3687219/whatever-happened-to-ruby.html')
	const introToReactTicTacToeTutorial = () => externalLink('Intro to React - Tic-Tac-Toe', 'https://reactjs.org/tutorial/tutorial.html')
	const imageMap = () => externalLink('Image Map Generator', 'https://www.image-map.net/')
	return (<div>	
		<p>Additional suggested activities:</p>
		<ul style={{listStyleType:'square'}}>
			<li>Review {imageMap()} </li>
			<li>Read {whateverHappenedToRuby()}</li>
			<li>If you are looking for an interesting challenge, complete {introToReactTicTacToeTutorial()}</li>
		</ul>
	</div>)
}
// Certified for SU22 (05/20/2022)
// Certified for SP22 (01/29/2022)
// Certified for FA23 (09/23/2023)

// Modify "chapters 3 through 5" to "chapters 4 and 5" as chapter 4 has has been moved to sprint 2 for the SP24 semester already.



// Consider adding back <li>Within {oreillyPlaylistSE()} scan “Essential Scrum” Chapters 1 and 2</li>


// Todo: Update to reflect Zac’s fix (see related announcement). 
// Todo: Move Whatever Happened to Ruby to earlier sprints.
// Todo: Consider reviewing and enhancing Quiz 3.

// Todo: Where do these topics fit?
/*
Team discusses topics while the presenter summarizes the topics below:
Chapter 3 Introduction to Ruby… how do we create non-objects in Ruby?
Chapter 4 Introduction to Rails… how do we create a non-model-view-controller Rails application?
Chapter 5 Advanced Rails… authentication? Is the Ruby/Rails framework opinionated? Is that good or bad?
A.6 Git and Version Control and A.7 GitHub
ORM (Object-Relational-Mapper) and NoSQL Databases
*/

// Todo: Consider adding image mapper: https://www.image-map.net/
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