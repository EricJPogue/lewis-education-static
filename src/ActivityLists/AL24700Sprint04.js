import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated } from './AL00000Sprint00'
import { oreillyPlaylistWeb, jsonW3CTutorial, ajaxW3CTutorial } from '../DataAndAPIs/Links'
import { assignmentPortfolioLink } from '../Activities/WebAssignmentPortfolio'
import { mapManiaVersion1Link } from '../Activities/MapMania'

export const al24700Sprint04 = () => {
	const sprint = 4
	return ( <div>
		<h5>Sprint 4: Application Programming Interfaces, Sophisticated User Interfaces, and more JavaScript</h5>

		<p>This sprint will be focused on creating more sophisticated interactive Web applications. Specifically, we will be 
		working on an application called Map Mania. In developing our <em>initial version of Map Mania</em> we and will be 
		have our first exposure to utilizing the Google Maps Application Programming Interface (API). Although the Google 
		Maps JavaScript API can be daunting at first, I think you will enjoy what you are able to create using the API.</p>

		<p>What’s the difference between an API and a Web Service you ask? You can think about a an API as being more
		powerful and more complex method of implementing Distributed Programming. It would be fair to say that a Web Service 
		is a relatively simple type of API.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Understand Application Programming Interfaces (APIs) and how the relate to Web Services</li>
			<li>Effectively utilize the Google Maps JavaScript API</li>
			<li>Build sophisticated interactive Web applications using JavaScript</li>
			<li>Build server-side Web Services utilizing Node.js, JavaScript, and JSON</li>
		</ul>  
		{list24700Sprint04(sprint)}
		{closing(sprint)}
	</div> )
}

export const list24700Sprint04 = (sprint) => {
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, mapManiaVersion1Link(), oreillyPlaylistWeb())}
			<li>Within {oreillyPlaylistWeb()} read “Learning Web Development” Chapter 6 The Server</li>
			<li>Complete {mapManiaVersion1Link()} requirements 1 and 2 {estimated('6 hours')}</li>

			{initialPost(sprint)}
			<li>Continue to update and enhance your {assignmentPortfolioLink()}</li>
			<li>Review “Learning Web Development” Chapter 5 on JSON and AJAX from last sprint</li>
			<li>Review {jsonW3CTutorial()} and {ajaxW3CTutorial()} tutorials from W3C from last sprint</li>
			{standardActivitiesClosing(sprint, mapManiaVersion1Link(), '6 hours')}
		</ol>
	</div> )
}

// Certified for SU22 (05/27/2022)

// Todo: And MERN to Discussion Board. 
// Todo: Consider updating wording in activities list so that everyone is sure that requirements 1-4 are all due.
// Todo: Consider removing Review “Learning Web Development” Chapter 5 on JSON and AJAX.

// Todo: Continue to refocus to Node.js on Azure for Azure Website activity.
// BugBug: Update Quiz 4 to include time limit plus verify data of answers being shown. 








