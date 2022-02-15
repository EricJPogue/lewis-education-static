import React from 'react'
import { NavLink } from 'react-router-dom'

import { LearningObjectivesIntro, ActivitiesListIntro, InitialPost } from './AL00000Sprint03'
import { FinalProjectsAndMoreResponsibility, StandardActivities, StandardActivitiesClosing, Closing  } from './AL00000Sprint05'

import { oreillyPlaylistICS, introducingPythonCodeExamples, programmingTogether, PythonW3C } from '../Links'
import { TurtleDraw } from './ProgrammingAssignments'

export const al20000Sprint05 = () => {
	let playlist = oreillyPlaylistICS()

	return (

<div>
<h5>Sprint 5: Networks, Encryption, Hashing, and Final Projects</h5>

<p><em>Wow!</em> We made it to the halfway point. I hope you enjoyed 
<span style={{color: "red"}}> &#10084;&#10084;&#10084;</span> Matchmaker <span style={{color: "red"}}>&#10084;&#10084;&#10084;</span>.
This week we switch gears and move into graphical drawing using Python and the Turtle graphics library.</p>

{FinalProjectsAndMoreResponsibility()}

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Explore Networks</li>
	<li>Master Functions</li>
	<li>Utilize Python to draw graphical lines and shapes</li>
	<li>Create your Final Project Proposal</li>
</ul>

{ActivitiesListIntro()}
<ol>
	{StandardActivities(TurtleDraw, playlist, 5 )}
	<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” Networks and review our associated <NavLink to='/activity-dale/15'>lecture</NavLink></li>
	<li>Complete {programmingTogether()} with TurtleDrawLite Parts 1 &amp; 2</li>
	<li>Scan the {PythonW3C()} from W3C</li>

	{InitialPost()}	
	<li>Within {oreillyPlaylistICS()} scan “Introducing Python” Chapters 2 through 4</li>
	<li>Within {oreillyPlaylistICS()} read “Introducing Python” Chapters 5 through 9 and review the associated {introducingPythonCodeExamples()}</li>
	<li>Complete {programmingTogether()} with TurtleDrawLite Part 3</li>

	{StandardActivitiesClosing(TurtleDraw)}
</ol>
{Closing()}
</div>

	)
}

// Todo: Consider updating to include Introducing Python chapters 4 through 9.