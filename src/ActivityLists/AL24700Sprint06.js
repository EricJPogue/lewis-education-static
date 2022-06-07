import React from 'react'
import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated } from './AL00000Sprint00'
import { oreillyPlaylistWeb, internalLink, externalLink } from '../Links'
import { assignmentPortfolioLink } from '../Activities/WebAssignmentPortfolio'
import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'

import { mustangLink } from '../Activities/MustangVersion1'

export const al24700Sprint06 = () => {
	const sprint = 6
	return ( <div>
		<h5>Sprint 6: Full Stack Web development including Web Browser, Web Server, and Database</h5>

		<p>Welcome to Sprint 6! It’s time for us to focus on Web server and Database development. While Node.js and MongoDB 
		will be the our tools of choice this sprint, it’s important for us to focus on the concepts of Web server and 
		database development more than the specific tools. This way we can feel comfortable with whatever set of tools 
		becomes important in the future.</p>   

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
	const fullStackW3C = () => { return externalLink('What is Full Stack?', 'https://www.w3schools.com/whatis/whatis_fullstack.asp') }
	const fullStackJavaScriptW3C = () => { return externalLink('What is Full stack JavaScript?', 'https://www.w3schools.com/whatis/whatis_fullstack.asp') }
	const nodeJS = () => { return externalLink('Node.js', 'https://www.w3schools.com/nodejs')}
	const nodeJSAndMySQL = () => { return externalLink('Node.js and MySQL', 'https://www.w3schools.com/nodejs/nodejs_mysql.asp')}
	const nodeJSAndMongoDB = () => { return externalLink('Node.js and MongoDB', 'https://www.w3schools.com/nodejs/nodejs_mongodb.asp')}
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, mustangLink() /* The actual assignment was Mustang V2 */, oreillyPlaylistWeb())}

			<li>Complete {fullStackW3C()} and {fullStackJavaScriptW3C()}</li>
			<li>Within {oreillyPlaylistWeb()} read “Learning Web Development” Chapters 7 The Data Store while updating Amazeriffic</li>
			<li>Update your Azure hosted Amazeriffic with MongoDB Atlas *** Programming Assignment Amazeriffic on Azure ***</li>


			<li>Complete {nodeJS()}, {nodeJSAndMySQL()}, and {nodeJSAndMongoDB()}</li>

			{initialPost(sprint)}
			<li>Continue to update and enhance your {assignmentPortfolioLink()}</li>
			<li>Within {oreillyPlaylistWeb()} review “Learning Web Development” Chapters 6 The Server</li>
			<li>Scan Sebesta chapter 9 and review our PHP {sebestaChapter9Lecture()}</li>
			<li>Review and update {finalProjectProposalLink()}{estimated('2 hours')}</li>

			{standardActivitiesClosing(sprint, mustangLink() /* The actual assignment was Mustang V2 */, '6 hours')}
		</ol>
	</div> )
}