import React from 'react'
import { NavLink } from 'react-router-dom'

import { AzureWebsite, start, complete } from './ProgrammingAssignments'
const programmingAssignment = AzureWebsite

export const al20000Sprint03 = () => {
	return (

<div>
<h4>Introduction to Computer Science</h4>
<h5>Sprint 3: Gates and Circuits, Computing Components, and Hosting Web Application is Azure</h5>

<p>Welcome to sprint 3. I hope you enjoyed our work with HTML and CSS because we are going to be continuing that journey
by enhancing our web applications and hosting them in Microsoft Azure. We will also be learning about gates, circuits, 
and computing components.</p>

<p>Let's start with what we hope to be able to do by the end of sprint 3:</p>
<ul style={{ listStyleType:'square' }}>
	<li>Enhance our web applications and host them in Microsoft Azure</li>
	<li>Understand and discuss gates and circuits</li>
	<li>Understand and discuss computing components</li>
	<li>Understand variables and expressions</li>
</ul>

<p>Below is our sprint 3 activities list:</p>
<ol>
	<li>Stay focused on the due dates by reviewing our course calendar <NavLink to='/calendar/3'>[link]</NavLink></li>
	<li><em>Review sprint 3 assignments including Lab 3, Quiz 3, Discussion 3, Reflection 3, and Lab Demo</em></li>
	<li>{start(programmingAssignment)}</li>
	<li>Review the CAMS Study Table tutoring options <NavLink to='/activity/study-table'>[link]</NavLink></li>
	<li>Review our class example code <NavLink to='/activity/example-code'>[link]</NavLink></li>
	<li>Review our coding standards <NavLink to='/activity/coding-standards'>[link]</NavLink></li>
	{/* The above items should be consistent across classes. */ }

	<li>Read Dale chapter 4 Gates and Circuits <a href='https://learning.oreilly.com/library/view/computer-science-illuminated/9781284055917/' target='_blank' rel='noopener noreferrer'>[link]</a>
		and review our chapter 4 lecture <NavLink to='/activity-dale/4'>[video]</NavLink></li>
	<li>Complete “HTML Programming - Part 2” from W3C <NavLink to='/activity/html'>[link]</NavLink><sup>~4 hours</sup></li>
	<li><em>Complete your initial Discussion 3 post by the middle of the sprint</em></li>
	<li>Read Dale chapter 5 Computing Components <a href='https://learning.oreilly.com/library/view/computer-science-illuminated/9781284055917/' target='_blank' rel='noopener noreferrer'>[link]</a>
		and review our chapter 5 lecture <NavLink to='/activity-dale/5'>[video]</NavLink></li>
	<li>Review Git Cheat Sheet from GitHub <a href='https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf'
		target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Review, test, and <em>enhance</em> “Getting to Know Each Other” <NavLink to='/activity/getting-to-know-each-other'>[link]</NavLink></li>
	<li>Deploy “Getting to Know Each Other" <NavLink to='/activity/getting-to-know-each-other'>[link]</NavLink> from 
		last sprint to an Azure website <NavLink to='/activity/azure-website'>[link]</NavLink><sup>~4 hours</sup></li>

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

// Todo: Change discussion three from “low level languages” to “Gates and Circuits” topic.
// Todo: Fix quiz question on Unicode characters (not 64K but millions).
// Todo: Modify or delete “Which of the following are considered secondary storage devices?” question (partial credit).

const extras = () => {
	return (null)
}

// Todo: Consider moving chapter 5 to next sprint and moving each subsequent chapter out so that we have a chapter to 
//     review in sprint 8. 