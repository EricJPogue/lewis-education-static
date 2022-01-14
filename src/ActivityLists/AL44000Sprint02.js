import React from 'react'
import { makeEstimateString } from './AL00000Sprint01'

import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivitiesWithLink, InitialDiscussionPost, StandardActivitiesClosingWithLink, Closing } from './AL00000Sprint02'
import { HTMLW3C, CSSW3C, JavaScriptW3C, RegularExpressionsW3C, internalLink } from '../Links'
import { FoxHTML, FoxCSS, FoxCookies, FoxAttributes, FoxRubyMVC } from '../Links'

import { assignmentPortfolioLink } from '../Activities/WebAssignmentPortfolio'
import { azureWebsiteLink } from '../Activities/AzureWebsite'
import { webResumeLink } from '../Activities/WebResume'

const foxChapter6Lecture = () => { return internalLink('lecture', '/activity/fox-chapter-06')}
const foxChapter3Lecture = () => { return internalLink('lecture', '/activity/fox-chapter-03')}

export const al44000Sprint02 = () => {
	return ( <div>

<h5>Sprint 2: Node.js, JavaScript, Ruby on Rails, and Azure</h5>

<p><em>Welcome to sprint 2.</em> We covered a lot of material in sprint 1. However, we didn't get a chance to write 
much code. This sprint get your text editors out. We are going to start practicing some of the concepts we learned.</p>

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Write simple HTML, CSS, Javascript, and Node.js applications and install them to Azure</li>
	<li>Understand simple Ruby programs using basic control structures and data structures</li>
	<li>Understand has Saas applications are developed in JavaScript using AJAX and JSON</li>
	<li>Comfortably be able to utilize single-developer workflow with Git and GitHub</li>
</ul>

{ActivitiesListIntro()}
<ol>
	{StandardActivitiesWithLink(assignmentPortfolioLink())}
	<li>Read “Engineering Software as a Service” chapter 6 and review our chapter 6 {foxChapter6Lecture()}</li>
	<li>Complete {azureWebsiteLink()}{makeEstimateString('2 hours')}</li>
	<li>Scan “Engineering Software as a Service” chapters 3 through 5 and review the associated {foxChapter3Lecture()}</li>
	<li>Read “Engineering Software as a Service” sections A.6 and A.7</li>
	<li>Implement your {webResumeLink()} while completing the W3Schools {HTMLW3C()} and {CSSW3C()} tutorials{makeEstimateString('6 hours')}</li>
	<li>{InitialDiscussionPost(2)}</li>

	<li>Complete {JavaScriptW3C()} tutorial including {RegularExpressionsW3C()}</li>
	<li>Scan the following “Engineering Software as a Service” videos on {FoxHTML()}, {FoxCSS()}, {FoxCookies()}, {FoxAttributes()}, and {FoxRubyMVC()}</li>

	{StandardActivitiesClosingWithLink(assignmentPortfolioLink(), '2 hours')}
</ol>
{Closing()}

</div> )
}

// Todo: Add lots of links from the Agile Alliance to various activity lists.
// Todo: Integrate Software Maintenance, Support, and Metrics into all appropriate classes.
// Todo: Consider doing the same thing for testing.
// Todo: Where should mediaatoz/software-engineering/* videos go? Are they already included?
