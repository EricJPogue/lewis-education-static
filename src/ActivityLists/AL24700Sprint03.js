import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, 
	closing } from './AL00000Sprint00'

import { oreillyPlaylistWeb, JavaScriptW3C, jsonArticle, jsonW3CTutorial, ajaxW3CTutorial, internalLink } from '../DataAndAPIs/Links'
import { assignmentPortfolioLink } from '../Activities/WebAssignmentPortfolio'
import { azureWebsiteLink } from '../Activities/AzureWebsite'

import { lionsTigersAndBearsLink } from '../Activities/LionsTigerAndBears'

export const al24700Sprint03 = () => {
	const sprint = 3
	return ( <div>
		<h5>Sprint 3: Interactive Web Applications, Distributed Programming, JavaScript, and Web Services</h5>

		<p>Welcome to Sprint 3. We have covered a lot in our first two sprints. This sprint we will focus on adding 
		Javascript to our HTML and CSS to create interactive Web applications. We will also be honing our 
		distributed programming skills by using public application programming interfaces (APIs) to create compelling 
		software that leverages remote content.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Understand the importance and complexity of creating interactive programs</li>
			<li>Create interactive browser-based (client-side) applications using HTML, CSS, and JavaScript</li>
			<li>Understand Distributed Programming and the criticality of knowing where application code is executing</li>
			<li>Utilize web services technologies (APIs) including HTTP(s) and JSON to access remote content</li>
		</ul>  

		{list24700Sprint03(sprint)}
		{closing()}
	</div> )
}

export const list24700Sprint03 = (sprint) => {
	const sebestaChapter4Lecture = () => { return internalLink('lecture', '/activity/sebesta-chapter-04') }
	const sebestaChapter5Lecture = () => { return internalLink('lecture', '/activity/sebesta-chapter-05') }
	const sebestaChapter6Lecture = () => { return internalLink('lecture', '/activity/sebesta-chapter-06') }
	const sebestaChapter7Lecture = () => { return internalLink('lecture', '/activity/sebesta-chapter-07') }
	const sebestaChapter10Lecture = () => { return internalLink('lecture', '/activity/sebesta-chapter-10') }
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, lionsTigersAndBearsLink(), oreillyPlaylistWeb())}
			<li>Continue to update and enhance your {assignmentPortfolioLink()}</li>

			<li>Within {oreillyPlaylistWeb()} read “Learning Web Development” Chapters 4 on Interactivity while updating Amazeriffic</li>
			<li>Scan Sebesta chapter 4 on Basic JavaScript and review the associated {sebestaChapter4Lecture()}</li>
			<li>Briefly scan Sebesta chapter 5 &amp; 6 while reviewing the associated chapter 5 {sebestaChapter5Lecture()} &amp; chapter 6 {sebestaChapter6Lecture()} </li>
			<li>Review {JavaScriptW3C()} tutorial from W3C</li>

			{initialPost(sprint)}
			<li>Read {jsonArticle()}</li>
			<li>Read “Learning Web Development” Chapter 5 on JSON and AJAX while updating Amazeriffic</li>
			<li>Utilize what we learned in {azureWebsiteLink()} to host your fully updated version of Amazeriffic</li>
			<li>Review {jsonW3CTutorial()} and {ajaxW3CTutorial()} tutorials from W3C </li>
			<li>Scan Sebesta chapter 7 &amp; 10 while reviewing the associated chapter 7 {sebestaChapter7Lecture()} &amp; chapter 10 {sebestaChapter10Lecture()} </li>

			{standardActivitiesClosing(sprint, lionsTigersAndBearsLink(), '8 hours')}
		</ol>
	</div> )
}

// Certified for SU22 (05/20/2022)
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