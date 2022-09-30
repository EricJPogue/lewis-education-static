import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated } from './AL00000Sprint00'
import { oreillyPlaylistSE, HTMLW3C, CSSW3C, JavaScriptW3C, RegularExpressionsW3C, internalLink } from '../DataAndAPIs/Links'
import { FoxHTML, FoxCSS, FoxCookies, FoxAttributes, FoxRubyMVC } from '../DataAndAPIs/Links'

import { assignmentPortfolioLink } from '../Activities/WebAssignmentPortfolio'
import { azureWebsiteLink } from '../Activities/AzureWebsite'
import { webResumeLink } from '../Activities/WebResume'

const foxChapter2Lecture = () => internalLink('lecture', '/activity/fox-chapter-02')
const foxChapter6Lecture = () => { return internalLink('lecture', '/activity/fox-chapter-06')}

export const al44000Sprint02 = () => {
	const sprint = 2
	return ( <div>
		<h5>Sprint 2: Node.js, JavaScript, Ruby on Rails, and Azure</h5>

		<p><em>Welcome to sprint 2.</em> We covered a lot of material in sprint 1. However, we didn't get a chance to write 
		much code. This sprint get your text editors out. We are going to start practicing some of the concepts we learned.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Write simple HTML, CSS, Javascript, and Node.js applications and install them to Azure</li>
			<li>Understand simple Ruby programs using basic control structures and data structures</li>
			<li>Understand has SaaS applications are developed in JavaScript using AJAX and JSON</li>
			<li>Comfortably be able to utilize single-developer workflow with Git and GitHub</li>
		</ul>

		{list44000Sprint02(sprint)}
		{closing()}
	</div> )
}

export const list44000Sprint02 = (sprint) => {
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, assignmentPortfolioLink())}
			<li>Read “Engineering Software as a Service” Chapter 2 of and review our associated {foxChapter2Lecture()}</li>
			<li>Complete {azureWebsiteLink()}{estimated('2 hours')}</li>
			<li>Within {oreillyPlaylistSE()} scan “Learning Web Development” Preface through Chapter 4</li>
			<li>Implement your {webResumeLink()} while completing the W3Schools {HTMLW3C()} and {CSSW3C()} tutorials{estimated('6 hours')}</li>
			{initialPost(sprint)}
			<li>Read “Engineering Software as a Service” chapter 6 and review our chapter 6 {foxChapter6Lecture()}</li>
			<li>Read “Engineering Software as a Service” sections A.6 and A.7</li>
			<li>Complete {JavaScriptW3C()} tutorial including {RegularExpressionsW3C()}</li>
			<li>Briefly Scan the following “Engineering Software as a Service” videos on {FoxHTML()}, {FoxCSS()}, {FoxCookies()}, {FoxAttributes()}, and {FoxRubyMVC()}</li>
			{standardActivitiesClosing(sprint, assignmentPortfolioLink(), '2 hours')}
		</ol>
	</div> )
}

// Certified for FA22 (08/27/2022)

// BugBug: All Lab 2 applications need to be added to the activities list! 

// Todo: Keep improving Quiz 2.
// Todo: Strongly consider getting rid of "Briefly Scan the following “Engineering Software as a Service” videos..."

/* z
Fix Quiz 2 Question by verifying that the question should be "is TRUE":


Which of the following statements relating Service-Oriented Architecture (SOA) and Software Development Lifecycles is FALSE?

    SOA is desirable in Waterfall, RUP, and Agile
    Correct answer

    SOA is desirable in Waterfall and RUP but not in Agile

    SOA is desirable in Waterfall and Agile but not in RUP

    SOA is desirable in RUP and Agile but not in Waterfall
	
*/




