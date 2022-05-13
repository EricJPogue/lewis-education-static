import React from 'react'
import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, 
	closing, estimated } from './AL00000Sprint00'

import { oreillyPlaylistWeb, continuousIntegration, CSSW3C, internalLink } from '../Links'
import { webResumeLink } from '../Activities/WebResume'
import { azureWebsiteLink } from '../Activities/AzureWebsite'
import { assignmentPortfolioLink } from '../Activities/WebAssignmentPortfolio'

const sebestaChapter3Lecture = () => { return internalLink('lecture', '/activity/sebesta-chapter-03')}


export const al24700Sprint02 = () => {
	const sprint = 2
	return ( <div>
		<h5>Sprint 2: Cascading Style Sheets, Web Servers, and Cloud Hosting</h5>

		<p>Welcome to sprint 2 of Web and Distributed Programming. In sprint 2 we are going to continue exploring key
		Web technologies including Cascading Style Sheets Web Servers (CSS). We will specifically be looking at the
		Node.js web server and Microsoft Azure for Cloud hosting.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Implement Cascading Style Sheets to enhance web applications</li>
			<li>Understand and utilize a web server</li>
			<li>Understand and utilize cloud hosting service to publish web applications</li>
			<li>Implement Continuous Integration / Continuous Delivery (CI/CD) utilizing Git, GitHub, and Microsoft Azure</li>
		</ul>  

		{list24700Sprint02(sprint)}

		{closing(sprint)}
	</div> )
}

export const list24700Sprint02 = (sprint) => {
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, webResumeLink())}
			<li>Read {continuousIntegration()}</li>
			<li>Implement CI/CD by implementing {assignmentPortfolioLink()} and hosting it on an {azureWebsiteLink()}{estimated('4 hours')}</li>
			{initialPost(sprint)}

			<li>Scan Sebesta chapter 3 on Cascading Style Sheets (CSS) and review the associated {sebestaChapter3Lecture()}</li>
			<li>Complete {CSSW3C()} Tutorial from W3C{estimated('2 hours')}</li>
			<li>Within {oreillyPlaylistWeb()} read “Learning Web Development” Chapter 3 on CSS while implementing Amazeriffic{estimated('2 hours')}</li>

			{standardActivitiesClosing(sprint, webResumeLink(), '6 hours')}
		</ol>
	</div> )
}

// Todo: Consider updating lectures to be topic specific (instead of Sebesta chapter specific) and removing Sebesta 
// for the fall session. 
// Todo: Figure out why when a link is clicked (i.e. Syllabus) the page scrolls to the same position on the page as
//     the current page is on. This is confusing because you would assume clicking on the link takes you to the top of
//     the destination page. 
