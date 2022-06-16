import React from 'react'
import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated } from './AL00000Sprint00'
import { oreillyPlaylistWeb, internalLink } from '../Links'
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

const list24700Sprint06 = (sprint) => {
	const sebestaChapter9Lecture = () => { return internalLink('lecture', '/activity/sebesta-chapter-09') }
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, amazerifficFullStackLink(), oreillyPlaylistWeb())}
			<li>Within {oreillyPlaylistWeb()} read “Learning Web Development” Chapter 7 The Data Store while updating Amazeriffic</li>

			{initialPost(sprint)}
			<li>Continue to update and enhance your {assignmentPortfolioLink()}</li>
			<li>Within {oreillyPlaylistWeb()} read “Learning Web Development” Chapters 8 &amp; 9</li>
			<li>Scan Sebesta chapter 9 and review our PHP {sebestaChapter9Lecture()}</li>
			<li>Review and update {finalProjectProposalLink()}{estimated('2 hours')}</li>
			{standardActivitiesClosing(sprint, amazerifficFullStackLink(), '12 hours')}
		</ol>
	</div> )
}