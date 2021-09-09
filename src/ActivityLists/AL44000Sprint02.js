import React from 'react'
import { NavLink } from 'react-router-dom'

import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivities, InitialPost, StandardActivitiesClosing, Closing } from './AL00000Sprint02'
import { ProgrammingActivityPlus, AssignmentPortfolioWebsite, HTMLProgrammingParts1And2 } from './ProgrammingAssignments'
import { FoxHTML, FoxCSS, FoxCookies, FoxAttributes, FoxRubyMVC, CSSW3C, JavaScriptW3C, RegularExpressionsW3C } from '../Links'

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

	{ProgrammingActivityPlus(HTMLProgrammingParts1And2, '4', 'while formatting either your resume or key sections of our course syllabus')} 
	{InitialPost(2)}

	<li>Complete {CSSW3C()} tutorial while enhancing the syllabus or resume you created above</li>
	<li>Complete {JavaScriptW3C()} tutorial including {RegularExpressionsW3C()}</li>
	<li>Scan the following “Engineering Software as a Service” videos on {FoxHTML()}, {FoxCSS()}, {FoxCookies()}, {FoxAttributes()}, and {FoxRubyMVC()}</li>

	{StandardActivitiesClosing(AssignmentPortfolioWebsite)}
</ol>
{Closing()}
{/* Programming Together: “Deploying Node.js on Microsoft Azure” */}

</div>
	)
}

// Todo: Update lab 2 question 6 so that it says to just deploy it to Azure instead of referencing specific sites.
// Todo: Where should mediaatoz/software-engineering/* videos go? Are they already included?
// Todo: Change estimated to actual capacity metric to actual over estimated so that it comes out to less than one generally. 