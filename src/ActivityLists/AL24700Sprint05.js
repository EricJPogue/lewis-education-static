import React from 'react'
import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, 
	finalProjectsAndMoreResponsibility, closing, estimated } from './AL00000Sprint00'
import { oreillyPlaylistWeb, internalLink } from '../DataAndAPIs/Links'
import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'
import { mapManiaVersion2Link } from '../Activities/MapMania'

export const al24700Sprint05 = () => {
	const sprint = 5
	return ( <div>
		<h5>Sprint 5: User Experience, Intermediate JavaScript, Final Project Proposals, and Databases</h5>
		<p>Wow! We made it to the halfway point. I hope you enjoyed creating our initial version Map Mania. This sprint 
		we are going to focus on enhancing Map Mania by creating version 2 of the product that implements the remaining
		game playing features. It is impressive what you can create with a powerful application programming interface (API) 
		like Google Maps.</p>

		{finalProjectsAndMoreResponsibility()}
		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Understand User Experience and how it relates to User Interface Design</li>
			<li>Utilize Intermediate JavaScript to access Application Programming Interfaces (APIs)</li>
			<li>Create sophisticated Web applications using the Google Maps API</li>
			<li>Understand Relational Databases and the SQL language</li>
		</ul>  

		{list24700Sprint05(sprint)}
	</div> )
}

const list24700Sprint05 = (sprint) => {
	const sebestaChapter13Lecture = () => { return internalLink('lecture', '/activity/sebesta-chapter-13') }
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, mapManiaVersion2Link(), oreillyPlaylistWeb())}
			<li>Read Sebesta chapter 13 and review our Database Access through the Web {sebestaChapter13Lecture()}</li>
			<li>Complete {mapManiaVersion2Link()} requirement 5{estimated('6 hours')}</li>

			{initialPost(sprint)}
			<li>Complete {finalProjectProposalLink()}{estimated('2 hours')}</li>
			{standardActivitiesClosing(sprint, mapManiaVersion2Link(), '6 hours')}
		</ol>
		{closing(sprint)}
	</div> )
}

// Certified for SU22 (06/03/2022)

// Todo: Update and improve all Lab Demo assignments to include more appropriate content.
// Todo: Consider updating lectures to be topic specific (instead of Sebesta chapter specific) and removing Sebesta 
// for the fall session. 

// Todo: Review
// I have posted a recording of a conversation I had with Alex relating to MovieCRUD, MoveCRUDLite, and Amazeriffic. I believe that the conversation may be of value to many of you. The cording is available in our Web & Distributed Programming lecture playlist [link].
// https://lewisu.hosted.panopto.com/Panopto/Pages/Viewer.aspx?pid=d8b1bf37-6d9d-4197-8bd1-ae910153f36e

// I have also created a “MongoDB Atlas Movie CRUD” programming together tutorial and published it to the above playlist as well as to our programming together playlist [link].
// https://www.lewis.education/?cpsc=su22-cpsc-24700-lt1#/activity/programming-together

// Several Map Maker programming together tutorials are now available. The first tutorial I notified you about yesterday is focused on hosting your Map Mania application on Azure utilizing Note.js. The second tutorial also includes hosting your Map Mania on Azure with Node.js but focuses on creating a Web Service in Node.js that provides Favorite Places data.
// Both videos can be found by clicking on the Programming Together link at the bottom of our activities list and look something like this:

// Please find a programming together session that Analyn and I recorded earlier today on Node.js, Map Maker Lite, and Azure hosting. Thank you again, Analyn! The session is available on our normal Lecture recording playlist [link].
// https://lewisu.hosted.panopto.com/Panopto/Pages/Viewer.aspx?pid=d8b1bf37-6d9d-4197-8bd1-ae910153f36e
