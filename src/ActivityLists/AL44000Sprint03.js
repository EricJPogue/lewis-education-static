import React from 'react'
import { NavLink } from 'react-router-dom'

import { AssignmentPortfolioWebsite, start, complete } from './ProgrammingAssignments'
const programmingAssignment = AssignmentPortfolioWebsite

export const al44000Sprint03 = () => {
	return (

<div>
<h4>Software Engineering</h4>
<h5>Sprint 3: Application Requirements, Behavior-Driven Design, Node.js, and Azure, </h5>

<p>Welcome to sprint 3. This sprint we will be focused on Node.js as a platform for Saas. We will be
utilizing a book from O’Reilly Books to learn more about the Node.js and Express platform. The book that we are 
utilizing is “Web Development with Node and Express, 2nd Edition” by Ethan Brown. You will also notice that starting 
with this sprint the assignments are becoming more open-ended and less prescriptive. I encourage you to collaborate 
with your classmates and scrum team members as you work through some of the open-ended topics.</p>

<p>By the end of sprint 3 we will be able to:</p>
<ul style={{ listStyleType:'square'}}>
	<li>Understand how client-side HTML, CSS, JavaScript, and Bootstrap applications can be hosted using Node.js and Express</li>
	<li>Create and modify basic Node.js utilizing server-side JavaScript applications</li>
	<li>Migrate all of your HTML, CSS, JavaScript, and Bootstrap applications over to a single Node.js hosted site running locally</li>
	<li>Create a basic Node.js application on Azure</li>
</ul>
<p>Below is the list of activities that we will need to complete this sprint.</p>
<ol>
	<li>Stay focused on the due dates by reviewing our course calendar <NavLink to='/calendar/3'>[link]</NavLink></li>
	<li><em>Review sprint 3 assignments including Lab 3, Quiz 3, Discussion 3, Reflection 3, and Lab Demo</em></li>
	<li>{start(programmingAssignment)}</li>
	<li>Review the CAMS Study Table tutoring options <NavLink to='/activity/study-table'>[link]</NavLink></li>
	<li>Review our class example code <NavLink to='/activity/example-code'>[link]</NavLink></li>
	<li>Review our coding standards <NavLink to='/activity/coding-standards'>[link]</NavLink></li>
	{/* The above items should be consistent across classes. */}

	<li>Review “Engineering Software as a Service” section 4.5 of Fox on Debugging</li>
	<li>Read “Engineering Software as a Service” chapter 7 on Requirements and review the associated class lecture <NavLink to='/activity/fox-chapter-07'>[video]</NavLink></li>

	<li>Within O’Reilly Books <a href='https://www.oreilly.com' target='_blank' rel='noopener noreferrer'>[link]</a>
		find “Web Development with Node and Express, 2nd Edition” by Ethan Brown</li>
	<li>Read “Web Development with Node and Express” chapters 1 and 2 <a href='https://learning.oreilly.com/library/view/web-development-with/9781492053507/' target='_blank' rel='noopener noreferrer'>[link]</a>
		while completing each of the exercises</li>
	<li>Review “web/node-js-on-azure” code in our class example code</li>
	<li><em>Make your initial Discussion 3 post by the middle of the sprint</em></li>
	<li>Read “Web Development with Node and Express” chapters 3 and 4 <a href='https://learning.oreilly.com/library/view/web-development-with/9781492053507/' target='_blank' rel='noopener noreferrer'>[link]</a>
		while completing each of the exercises</li>
	<li>Complete the “Node.js Tutorial” from W3C <a href='https://www.w3schools.com/nodejs/' target='_blank' rel='noopener noreferrer'>[link]</a></li>

	{/* The items below should be consistent across classes. */ }
	<li>{complete(programmingAssignment)}</li>
	<li><em>Complete Discussion 3 by responding to at least two of your classmates’ posts</em></li>
	<li><em>Submit Lab 3, Quiz 3, and Reflection 3</em></li>
</ol>
<p>If you are struggling, remember to reach out to your Scrum teammates early and often for help. Also, be sure to 
periodically check for new programming together tutorials <NavLink to='/activity/programming-together'>[link]</NavLink>.</p>
{extras()}
</div>

	)
}

// Todo: Remove question 9 from lab 3.
// Todo: Remove lab 3 final question.
// Todo: Change assignment from AssignmentPortfolioWebsite.
// Todo: Update "Spike are a story" quiz 3 question to be more clear.

const extras = () => {
	return (null)
}