import React from 'react'
import { NavLink } from 'react-router-dom'

import { HealthRiskCalculatorForTheWeb, start, complete } from './ProgrammingAssignments'
const programmingAssignment = HealthRiskCalculatorForTheWeb

export const al44000Sprint04 = () => {
	return (

<div>
<h4>Software Engineering</h4>
<h5>Sprint 4: Testing, Test-Driven Development, Express, Node.js, and Azure</h5>

<p>Welcome to sprint 4. This sprint we are going to be focused focused on learning about Testing and Test-Driven
Development while we add the Express library to our Node.js and Azure software as a service (Saas) platform.
We will continue to utilize the “Web Development with Node and Express, 2nd Edition” by Ethan Brown from O’Reilly Books 
to help prepare us for our final projects.</p>

<p>By the end of sprint 4 we will be able to:</p>
<ul style={{listStyleType:'square'}}>
	<li>Utilize client-side HTML, CSS, JavaScript, and Bootstrap to create client applications</li>
	<li>Create and modify basic Node.js, Express, and JavaScript to create server-side applications</li>
	<li>Effectively utilize Microsoft Azure to host Node.js applications</li>
	<li>Work as part of a team utilizing GitHub, Azure, Node.js, and Express</li>
</ul>
<p>Below is the list of activities that we will need to complete this sprint.</p>
<ol>
	<li>Stay focused on the due dates by reviewing our course calendar <NavLink to='/calendar/4'>[link]</NavLink></li>
	<li><em>Review sprint 4 assignments including Lab 4, Quiz 4, Discussion 4, Reflection 4, and Lab Demo</em></li>
	<li>{start(programmingAssignment)}</li>
	{/* The above items should be consistent across classes. */ }

	<li>Deliver “Health Insurance Risk Calculator” <em>as a team</em> using Node.js, Azure, and shared GitHub repository<NavLink to='/activity/repository'>[link]</NavLink></li>
	<li>Read Chapter 8 of Fox on Test-Driven Development and review the associated class lecture <NavLink to='/activity/fox-chapter-08'>[video]</NavLink></li>

	<li>Briefly scan “Web Development with Node and Express” chapters 5 through 14 <a href='https://learning.oreilly.com/library/view/web-development-with/9781492053507/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Read “Web Development with Node and Express” chapter 15 <a href='https://learning.oreilly.com/library/view/web-development-with/9781492053507/ch15.html' target='_blank' rel='noopener noreferrer'>[link]</a></li>

	<li><em>Complete discussion board initial DB4 post by the middle of the sprint</em></li>
	<li>Migrate all previous HTML, CSS, and JavaScript applications to Node.js in Azure<sup>~3 hours</sup></li>

	{/* The items below should be consistent across classes. */ }
	<li>{complete(programmingAssignment)}</li>
	<li><em>Complete Discussion 4 by responding to at least two of your classmates’ posts</em></li>
	<li><em>Submit Lab 4, Quiz 4, and Reflection 4</em></li>
</ol>
<p>If you are struggling, remember to reach out to your Scrum teammates early and often for help. Also, be sure to 
periodically check for new programming together tutorials <NavLink to='/activity/programming-together'>[link]</NavLink>.</p>
{extras()}
</div>
	)
}

const extras = () => {
	return (null)
}

// Todo: Consider moving from sprint 5 the activity and lab 4 question to move all applications to NodeJS and Azure.
// Todo: Add the instructions for team names if I leave it as a group assignment next semester.
// Todo: From Stephanie: There wasn't really anywhere to take off points if the health app did not work properly, except 
//     for the question where they copy/paste the url. I took off half of those points if it didn't work since it was only 
//     6 pts. Adding a separate question about the requirements/functionality might be better. 
// Todo: Review quiz questions that Ren missed on attempt 3. 