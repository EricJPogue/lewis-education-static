import React from 'react'
import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated } from './AL00000Sprint00'
import { oreillyPlaylistWeb, internalLink } from '../DataAndAPIs/Links'
import { assignmentPortfolioLink } from '../Activities/WebAssignmentPortfolio'
import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'

import { amazerifficFullStackLink } from '../Activities/AmazerifficFullStack'

export const al24700Sprint06 = () => {
	const sprint = 6
	return ( <div>
		<h5>Sprint 6: Full Stack Web development including Web Browser, Web Server, and Database</h5>

		<p>Welcome to Sprint 6! We have done a lot of work creating interactive and sophisticated Web Browser client
		applications. We have even done work in our Node.js Web server. Now it’s time for us to focus on Database 
		development. And while Node.js and MongoDB will be the our tools of choice this sprint, it’s important for us 
		to focus on the concepts of Web server and database development more than the specific tools. This way we can 
		feel comfortable embracing whatever set of tools becomes important in the future.</p>   

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Understand the key concepts of Full Stack Web development including Web server and database software development</li>
			<li>Implement Web server features utilizing Node.js and JavaScript</li>
			<li>Develop databases functionality utilizing MongoDB</li>
			<li>Utilize Full Stack Development to implement features that require client, server, and database development</li>
		</ul>  

		{list24700Sprint06(sprint)}
		{closing(sprint)}
	</div> )
}

export const list24700Sprint06 = (sprint) => {
	const sebestaChapter9Lecture = () => { return internalLink('lecture', '/activity/sebesta-chapter-09') }
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, amazerifficFullStackLink(), oreillyPlaylistWeb())}
			<li>Within {oreillyPlaylistWeb()} review “Learning Web Development” chapter 7 and read chapter 8</li>
			<li>Complete “MongoDB Atlas Movie CRUD” programming together tutorial</li>

			{initialPost(sprint)}
			<li>Complete “MovieCRUD Lite” programming together tutorial </li>
			<li>Continue to update and enhance your {assignmentPortfolioLink()}</li>
			<li>Scan Sebesta chapter 9 and review our PHP {sebestaChapter9Lecture()}</li>
			<li>Within {oreillyPlaylistWeb()} read “Learning Web Development” Chapter 9</li>
			<li>Review and update {finalProjectProposalLink()}{estimated('2 hours')}</li>
			{standardActivitiesClosing(sprint, amazerifficFullStackLink(), '12 hours')}
		</ol>
	</div> )
}

// Certified for SU22 (06/17/2022)
// Certified for FA22 (10/21/2022)

// We have work to do during the sprint!

// Todo: Review
// I have posted a recording of a conversation I had with Alex relating to MovieCRUD, MoveCRUDLite, and Amazeriffic. I believe that the conversation may be of value to many of you. The cording is available in our Web & Distributed Programming lecture playlist [link].
// https://lewisu.hosted.panopto.com/Panopto/Pages/Viewer.aspx?pid=d8b1bf37-6d9d-4197-8bd1-ae910153f36e

// I have also created a “MongoDB Atlas Movie CRUD” programming together tutorial and published it to the above playlist as well as to our programming together playlist [link].
// https://www.lewis.education/?cpsc=su22-cpsc-24700-lt1#/activity/programming-together

// Several Map Maker programming together tutorials are now available. The first tutorial I notified you about yesterday is focused on hosting your Map Mania application on Azure utilizing Note.js. The second tutorial also includes hosting your Map Mania on Azure with Node.js but focuses on creating a Web Service in Node.js that provides Favorite Places data.
// Both videos can be found by clicking on the Programming Together link at the bottom of our activities list and look something like this:

// Please find a programming together session that Analyn and I recorded earlier today on Node.js, Map Maker Lite, and Azure hosting. Thank you again, Analyn! The session is available on our normal Lecture recording playlist [link].
// https://lewisu.hosted.panopto.com/Panopto/Pages/Viewer.aspx?pid=d8b1bf37-6d9d-4197-8bd1-ae910153f36e