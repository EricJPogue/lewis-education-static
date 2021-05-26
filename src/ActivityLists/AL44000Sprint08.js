import React from 'react'
import { NavLink } from 'react-router-dom'

import { FinalProjectSprint3, start, complete } from './ProgrammingAssignments'
const programmingAssignment = FinalProjectSprint3

export const al44000Sprint08 = () => {
	return (

<div>
	<h4>Software Engineering</h4>
	<h5>Sprint 8: Final project, Software Architecture, Performance, Releases, Reliability, and Security</h5>

<p>You made it. Very well done! Thank you for your dedication, support, and participation. All that’s left is to finish 
strong and deliver a Final Project that makes you proud. Don’t do it for the grade, don’t do it for me, do this one for 
yourself.</p> 

<p>Let's start with what we hope to learn in sprint 8:</p>
<ul style={{listStyleType:'square'}}>
	<li>Utilize your knowledge of Agile development and Saas to deliver a final project that you are proud of creating</li>
	<li>Understand Software Architecture including performance, releases, reliability, and security</li>
	<li>Enhance your understanding of application architecture, Object-Oriented Programming, and Databases</li>
</ul>

<p>In order to do my part if giving you time to build something exceptional, I am removing all non-essential items
this week's Activities List. As such, our list includes:</p>
<ol>
	<li><em style={{color:'red'}}>Stay laser focused on the due dates by reviewing our course calendar</em> <NavLink to='/calendar/8'>[link]</NavLink></li>
	<li><em>Confirm your Final Project presentation date &amp; time</em></li>
	<li><em>Review Lab 8, Quiz 8, Discussion 8, Reflection 8, and Final Project Presentation</em></li>

	<li>{start(programmingAssignment)}</li>

	<li>Complete “Application Architectures, Object-Oriented Programming, and Databases - Part 2” <NavLink to='/activity-architecture/application-architecture-part2'>[video]</NavLink></li>
	<li>Complete your team’s sprint 2 Review and Retrospective</li>
	<li>Focus your energy on delivering and testing your team’s sprint 3 backlog stories</li>

	<li>Read Fox Chapter 12 on Performance, Releases, Reliability, and Security</li>
	<li>{complete(programmingAssignment)}</li>
	<li>Complete your Final Project presentation</li>
	<li><em>Complete Discussion 8, Lab 8, Quiz 8, Reflection 8, and Final Project Presentation</em></li>
	<li><em style={{color:'red'}}> Submit all assignments at least two hours prior to your <u>scheduled presentation time</u></em></li>
</ol>

<p>Let's finish strong and deliver something that makes you proud.</p>
</div>

	)
}

// Todo: Consider having only one discussion topic in sprint 8. 
// Todo: Lab question 2 review and update for non-Python. 