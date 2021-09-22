import React from 'react'
import { NavLink } from 'react-router-dom'

import { InitialPost,  } from './AL00000Sprint02'
import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivities, StandardActivitiesClosing, Closing } from './AL00000Sprint03'
import { oreillyPlaylistSE } from '../Links'

import { AssignmentPortfolioWebsite } from './ProgrammingAssignments'

export const al44000Sprint03 = () => {
	let playlist = oreillyPlaylistSE()
	return (

<div>
<h5>Sprint 3: Application Requirements, Behavior-Driven Design, Node.js, and Azure, </h5>

<p>Welcome to sprint 3. This sprint we will be focused on Node.js as a platform for Saas. We will be
utilizing a book from O’Reilly Books to learn more about the Node.js and Express platform. The book that we are 
utilizing is “Web Development with Node and Express, 2nd Edition” by Ethan Brown. You will also notice that starting 
with this sprint the assignments are becoming more open-ended and less prescriptive. I encourage you to collaborate 
with your classmates and scrum team members as you work through some of the open-ended topics.</p>

{LearningObjectivesIntro()}
<ul style={{ listStyleType:'square'}}>
	<li>Understand how client-side HTML, CSS, JavaScript, and Bootstrap applications can be hosted using Node.js and Express</li>
	<li>Create and modify basic Node.js utilizing server-side JavaScript applications</li>
	<li>Migrate all of your HTML, CSS, JavaScript, and Bootstrap applications over to a single Node.js hosted site running locally</li>
	<li>Create a basic Node.js application on Azure</li>
</ul>

{ActivitiesListIntro()}
<ol>
	{StandardActivities(AssignmentPortfolioWebsite, playlist)}

	<li>Review “Engineering Software as a Service” section 4.5 of Fox on Debugging</li>
	<li>Read “Engineering Software as a Service” chapter 7 on Requirements and review the associated class lecture <NavLink to='/activity/fox-chapter-07'>[video]</NavLink></li>

	<li>Within O’Reilly Books <a href='https://www.oreilly.com' target='_blank' rel='noopener noreferrer'>[link]</a> find “Web Development with Node and Express, 2nd Edition” by Ethan Brown</li>
	<li>Read “Web Development with Node and Express” chapters 1 and 2 <a href='https://learning.oreilly.com/library/view/web-development-with/9781492053507/' target='_blank' rel='noopener noreferrer'>[link]</a>
		while completing each of the exercises</li>
	<li>Review “web/node-js-on-azure” code in our class example code</li>

	{InitialPost(3)}
	<li>Read “Web Development with Node and Express” chapters 3 and 4 <a href='https://learning.oreilly.com/library/view/web-development-with/9781492053507/' target='_blank' rel='noopener noreferrer'>[link]</a>
		while completing each of the exercises</li>
	<li>Complete the “Node.js Tutorial” from W3C <a href='https://www.w3schools.com/nodejs/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Read <a href='https://www.infoworld.com/article/3222851/javascript/what-is-json-javascript-object-notation-explained.html' target='_blank' rel='noopener noreferrer'>What is JSON? JavaScript Object Notation explained</a> and 
		complete <a href='https://www.w3schools.com/js/js_json_intro.asp' target='_blank' rel='noopener noreferrer'>JSON Introduction</a></li> 

	{StandardActivitiesClosing(AssignmentPortfolioWebsite)}
</ol>
{Closing()}
</div>

	)
}

// Todo: Change assignment from AssignmentPortfolioWebsite.


