import React from 'react'
import { NavLink } from 'react-router-dom'

import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivities, InitialPost, StandardActivitiesClosing, Closing } from './AL00000Sprint02'
import { AssignmentPortfolioWebsite, Activity, Resume } from './ProgrammingAssignments'
import { HTMLW3C, CSSW3C, JavaScriptW3C, RegularExpressionsW3C } from '../Links'
import { FoxHTML, FoxCSS, FoxCookies, FoxAttributes, FoxRubyMVC } from '../Links'

export const al44000Sprint02 = () => {
	return (

<div>
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
	{StandardActivities(AssignmentPortfolioWebsite)}

	<li>Read “Engineering Software as a Service” chapter 6 and review our chapter 6 <NavLink to='/activity/fox-chapter-06'>lecture</NavLink></li>
	<li>Complete <NavLink to='/activity/azure-website'>Azure Website</NavLink><sup> ~2 hours </sup></li>

	<li>Scan “Engineering Software as a Service” chapters 3 through 5 and review the associated <NavLink to='/activity/fox-chapter-03'>lecture</NavLink></li>
	<li>Read “Engineering Software as a Service” sections A.6 and A.7</li>

	<li>Implement your {Activity(Resume)} while completing the W3Schools {HTMLW3C()} and {CSSW3C()} tutorials<sup> ~6 hours </sup></li>
	{InitialPost(2)}

	<li>Complete {JavaScriptW3C()} tutorial including {RegularExpressionsW3C()}</li>
	<li>Scan the following “Engineering Software as a Service” videos on {FoxHTML()}, {FoxCSS()}, {FoxCookies()}, {FoxAttributes()}, and {FoxRubyMVC()}</li>

	{StandardActivitiesClosing(AssignmentPortfolioWebsite)}
</ol>
{Closing()}


</div>
	)
}

// Todo: Add lots of links from the Agile Alliance to various activity lists.
// Todo: Integrate Software Maintenance, Support, and Metrics into all appropriate classes.
// Todo: Consider doing the same thing for testing.
// Todo: Where should mediaatoz/software-engineering/* videos go? Are they already included?
