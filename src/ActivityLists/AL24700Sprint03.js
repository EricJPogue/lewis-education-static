import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, 
	closing } from './AL00000Sprint00'

import { oreillyPlaylistWeb, JavaScriptW3C, jsonArticle, jsonW3CTutorial, ajaxW3CTutorial, internalLink } from '../Links'
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