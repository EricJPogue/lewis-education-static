import React from 'react'
import { NavLink } from 'react-router-dom'

import { FinalProject, start, complete } from './ProgrammingAssignments'

export const al24500Sprint08 = ( props ) => {
	return (

<div>
<h4>Object-Oriented Programming</h4>
<h5>Sprint 8: Final Project, Application Architecture, and Databases</h5>

<p>You made it. Very well done! Thank you for your dedication, support, and participation. All that’s left is to finish 
strong and deliver a Final Project that makes you proud. Don’t do it for the grade, don’t do it for me, do this one for 
yourself.</p> 

<p>Let's start with what we hope to learn in sprint 8:</p>
<ul style={{listStyleType:'square'}}>
	<li>Independently deliver and present meaningful working software</li>
	<li>Understand the basics of application architecture</li>
	<li>Understand how relational databases can support or hinder object-oriented programming practices</li>
</ul>

<p>In order to do my part if giving you time to build something exceptional, I am removing all non-essential items
this week's Activities List. As such, our list includes:</p>
<ol>
<li><em style={{color:'red'}}>Stay laser focused on the due dates by reviewing our course calendar</em> <NavLink to='/calendar/8'>[link]</NavLink></li>
	<li><em>Confirm your Final Project presentation date &amp; time</em></li>
	<li><em>Review Lab 8, Quiz 8, Discussion 8, Reflection 8, and Final Project Presentation</em></li>
	<li>{start(FinalProject)}</li>

	<li>Complete “Application Architectures, Object-Oriented Programming, and Databases - Part 2” <NavLink to='/activity-architecture/application-architecture-part2'>[video]</NavLink></li>

	<li>{complete(FinalProject)}</li>
	<li>Complete your Final Project presentation</li>
	<li><em>Complete Discussion 8, Lab 8, Quiz 8, Reflection 8, and Final Project Presentation</em></li>
	<li><em style={{color:'red'}}> Submit all assignments at least two hours prior to your <u>scheduled presentation time</u></em></li>
</ol>
<p>Let’s finish strong. It has been a sincere pleasure.</p>
</div>
	)
}

// Todo: Lab question 2 needs to be updated for Java project. 
