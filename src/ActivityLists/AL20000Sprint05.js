import React from 'react'
import { NavLink } from 'react-router-dom'

import { TurtleDraw, FinalProjectProposal, start, complete } from './ProgrammingAssignments'
const programmingAssignment = TurtleDraw

export const al20000Sprint05 = () => {
	return (

<div>
<h4>Introduction to Computer Science</h4>
<h5>Sprint 5: Networks, Encryption, Hashing, and Final Projects</h5>

<p><em>Wow!</em> We made it to the halfway point. I hope you enjoyed 
<span style={{color: "red"}}> &#10084;&#10084;&#10084;</span> Matchmaker <span style={{color: "red"}}>&#10084;&#10084;&#10084;</span>.
This week we switch gears and move into graphical drawing using Turtle graphics.</p>

<p>We will also start working on our Final Project proposals this sprint. How would you like to finishing the course by 
creating something that makes you proud? What type of a final project would you enjoy creating? Is there a final project 
that would both be interesting to create and be something you could add to your professional portfolio as you are 
looking for internships or jobs? How can I help?</p>

<p>You will also notice a continuing trend this sprint where assignments will become less prescriptive and you
will have more control <em>and responsibility</em> in determining what is done and how it is implemented.</p>

<p>Let's start with what we hope to learn in sprint 5:</p>
<ul style={{listStyleType:'square'}}>
	<li>Explore Networks</li>
	<li>Understand Functions</li>
	<li>Understand Encryption and Hashing</li>
	<li>Create your initial Final Project Proposal</li>
</ul>

<p>Below is our sprint 5 activities list. </p>
<ol>
	<li>Stay focused on the due dates by reviewing our course calendar <NavLink to='/calendar/5'>[link]</NavLink></li>
	<li><em>Review Lab 5, Quiz 5, Discussion 5, Reflection 5, and Lab Demo</em></li>
	<li>{start(programmingAssignment)}</li>
	<li>{start(FinalProjectProposal)}</li>
	{/* The above items should be consistent across classes. */ }

	<li>Read Dale chapter 15 Networks <a href='https://learning.oreilly.com/library/view/computer-science-illuminated/9781284055917/' target='_blank' rel='noopener noreferrer'>[link]</a>
		and review our chapter 15 lecture <NavLink to='/activity-dale/15'>[video]</NavLink></li>
	<li>Complete Programming Together with TurtleDrawLite Part 1</li>
	<li>Review the CAMS Study Table tutoring options <NavLink to='/activity/study-table'>[link]</NavLink></li>
	<li>Review “Python Programming - Part 1 &amp; Part 2” from W3C <NavLink to='/activity/python-w3c'>[link]</NavLink></li>
	<li>Review the Turtle graphics documentation <a href='https://docs.python.org/3/library/turtle.html#introduction'target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li><em>Make your initial Discussion post by the middle of the sprint</em></li>
	<li>Complete Programming Together with TurtleDrawLite Parts 2 and 3</li>
	<li>Review the “Introducing Python, 2nd Edition” example code utilizing “git clone https://github.com/madscheme/introducing-python"</li>
	<li>Read “Introducing Python, 2nd Edition” chapters 2 &amp; 3 and complete each of the exercises<a href='https://learning.oreilly.com/home/' target='_blank' rel='noopener noreferrer'>[link]</a></li>

	{/* The items below should be consistent across classes. */ }
	<li>{complete(FinalProjectProposal)}</li>
	<li>{complete(programmingAssignment)}</li>
	<li><em>Complete Discussion 5, Lab 5, Quiz 5, and Reflection 5</em></li>
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

// Final project proposals.
// Todo: Consider moving Networks to sprint 5. 