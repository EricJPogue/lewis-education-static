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

const list24700Sprint04 = (sprint) => {
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
// Todo: Consider simplifying and reducing activities list.
// Todo: Update and improve all Lab Demo assignments to include more appropriate content.
// Todo: Update syllabus with Activity List headers... or update Activity list headers. 
// Todo: Consider updating lectures to be topic specific (instead of Sebesta chapter specific) and removing Sebesta 
// for the fall session. 

// Todo: Figure out why when a link is clicked (i.e. Syllabus) the page scrolls to the same position on the page as
//     the current page is on. This is confusing because you would assume clicking on the link takes you to the top of
//     the destination page. 

// Todo: Review
// I have posted a recording of a conversation I had with Alex relating to MovieCRUD, MoveCRUDLite, and Amazeriffic. I believe that the conversation may be of value to many of you. The cording is available in our Web & Distributed Programming lecture playlist [link].
// https://lewisu.hosted.panopto.com/Panopto/Pages/Viewer.aspx?pid=d8b1bf37-6d9d-4197-8bd1-ae910153f36e

// I have also created a “MongoDB Atlas Movie CRUD” programming together tutorial and published it to the above playlist as well as to our programming together playlist [link].
// https://www.lewis.education/?cpsc=su22-cpsc-24700-lt1#/activity/programming-together

// Several Map Maker programming together tutorials are now available. The first tutorial I notified you about yesterday is focused on hosting your Map Mania application on Azure utilizing Note.js. The second tutorial also includes hosting your Map Mania on Azure with Node.js but focuses on creating a Web Service in Node.js that provides Favorite Places data.
// Both videos can be found by clicking on the Programming Together link at the bottom of our activities list and look something like this:

// Please find a programming together session that Analyn and I recorded earlier today on Node.js, Map Maker Lite, and Azure hosting. Thank you again, Analyn! The session is available on our normal Lecture recording playlist [link].
// https://lewisu.hosted.panopto.com/Panopto/Pages/Viewer.aspx?pid=d8b1bf37-6d9d-4197-8bd1-ae910153f36e



