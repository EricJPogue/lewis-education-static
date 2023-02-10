import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated } from './AL00000Sprint00'
import { oreillyPlaylistSE, overcomingProcrastination, HTMLW3C, CSSW3C, JavaScriptW3C, RegularExpressionsW3C, internalLink } from '../DataAndAPIs/Links'

import { assignmentPortfolioLink } from '../Activities/WebAssignmentPortfolio'
import { azureWebsiteLink } from '../Activities/AzureWebsite'
import { webResumeLink } from '../Activities/WebResume'
import { webDiceRollerLink } from '../Activities/WebDiceRoller'

const foxChapter2Lecture = () => internalLink('lecture', '/activity/fox-chapter-02')
const foxChapter6Lecture = () => { return internalLink('lecture', '/activity/fox-chapter-06')}

export const al44000Sprint02 = () => {
	const sprint = 2
	return ( <div>
		<h5>Sprint 2: Node.js, JavaScript, Ruby on Rails, and Azure</h5>

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
			<li>Embrace the 30-for-30 plan {overcomingProcrastination()}</li>
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
// Todo: Consider adding lab 2 question relating to overcoming procrastination article. 
// Todo: Consider adding CSS and JavaScript example after reviewing if they are already available. 
// Todo: Review https://www.geeksforgeeks.org/egg-dropping-puzzle-dp-11/
// Todo: Consider Git centric topic sprint 2 
// Todo: Only go over Azure hosting once.
// Todo: Identify where quiz answers originate from. 


