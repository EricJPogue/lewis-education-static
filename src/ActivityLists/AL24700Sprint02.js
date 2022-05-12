import React from 'react'
import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, 
	closing, estimated } from './AL00000Sprint00'

import { oreillyPlaylistWeb, internalLink } from '../Links'
import { webResumeLink } from '../Activities/WebResume';
import { azureWebsiteLink } from '../Activities/AzureWebsite';
import { assignmentPortfolioLink } from '../Activities/WebAssignmentPortfolio';
import { htmlLink } from '../Activities/HTML'

const sebestaChapter3Lecture = () => { return internalLink('lecture', '/activity/sebesta-chapter-03')}
const sebestaChapter4Lecture = () => { return internalLink('lecture', '/activity/sebesta-chapter-04')}

export const al24700Sprint02 = () => {
	const sprint = 2
	return ( <div>
		<h5>Sprint 2: Cascading Style Sheets, JavaScript, and the Azure Cloud</h5>

		<p>Welcome to sprint 2 of Web and Distributed Programming. In sprint 2 we are going to take a look at the key
		technologies that make up Internet and the Web. Our sprint activities will continue to build on our knowledge 
		of HTML while adding new Web development capabilities by adding introducing Cascading Style Sheets (CSS) and 
		JavaScript.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Compare and contrast Internet, Web, and distributed applications</li>
			<li>Implement Cascading Style Sheets to enhance web applications</li>
			<li>Understand the basics of JavaScript</li>
			<li>Utilize Git and GitHub along with Microsoft Azure to manage content and deploy web applications</li>
			<li>Begin to understand APIs and toolkits by reviewing the Google Maps JavaScript API</li>
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
			<li>Read Sebesta chapter 3 on Cascading Style Sheets (CSS) and review the associated {sebestaChapter3Lecture()}</li>
			<li>Complete {azureWebsiteLink()}{estimated('3 hours')}</li>
			<li>Complete {assignmentPortfolioLink()}{estimated('3 hours')}</li>
			{initialPost(sprint)}

			<li>Read chapter 4 of Sebesta on Basic JavaScript and review the associated {sebestaChapter4Lecture()}</li>
			<li>Within {oreillyPlaylistWeb()} read “Learning Web Development” Chapters 3 and 4</li>
			<li>Complete {htmlLink()} - Parts 2{estimated('2 hours')}</li>
			{standardActivitiesClosing(sprint, webResumeLink(), '6 hours')}
		</ol>
	</div> )
}

// Todo: Consider updating lectures to be topic specific (instead of Sebesta chapter specific) and removing Sebesta 
// for the fall session. 
// Todo: Consider adding a Git/GitHub activity / tutorial. 
// Todo: Figure out why when a link is clicked (i.e. Syllabus) the page scrolls to the same position on the page as
//     the current page is on. This is confusing because you would assume clicking on the link takes you to the top of
//     the destination page. 
