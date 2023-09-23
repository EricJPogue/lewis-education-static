import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing } from './AL00000Sprint00'

import { oreillyPlaylistWeb, JavaScriptW3C, jsonArticle, jsonW3CTutorial, ajaxW3CTutorial } from '../DataAndAPIs/Links'
import { assignmentPortfolioLink } from '../Activities/WebAssignmentPortfolio'
import { azureWebsiteLink } from '../Activities/AzureWebsite'

import { lionsTigersAndBearsLink } from '../Activities/LionsTigerAndBears'
import { mapManiaVersion1Link } from '../Activities/MapMania'

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
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, lionsTigersAndBearsLink(), oreillyPlaylistWeb())}
			<li>Continue to update and enhance your {assignmentPortfolioLink()}</li>
			<li>Within {oreillyPlaylistWeb()} read “Learning Web Development” Chapters 4 on Interactivity while updating Amazeriffic</li>
			<li>Review {JavaScriptW3C()} tutorial from W3C</li>

			{initialPost(sprint)}
			<li>Read {jsonArticle()}</li>
			<li>Read “Learning Web Development” Chapter 5 on JSON and AJAX while updating Amazeriffic</li>
			<li>Utilize what we learned in {azureWebsiteLink()} to host your fully updated version of Amazeriffic</li>
			<li>Review {jsonW3CTutorial()} and {ajaxW3CTutorial()} tutorials from W3C </li>
			<li>Preview {mapManiaVersion1Link()} and complete Requirement 1</li>
			{standardActivitiesClosing(sprint, lionsTigersAndBearsLink(), '6 hours')}
		</ol>
	</div> )
}

// Certified for SU22 (05/20/2022)
// Certified for FA23 (09/23/2023)