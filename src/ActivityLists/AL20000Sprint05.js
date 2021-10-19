import React from 'react'
import { NavLink } from 'react-router-dom'

import { InitialPost,  } from './AL00000Sprint02'
import { LearningObjectivesIntro, ActivitiesListIntro } from './AL00000Sprint03'
import { StandardActivities, StandardActivitiesClosing, Closing  } from './AL00000Sprint05'

import { oreillyPlaylistICS, introducingPythonCodeExamples, programmingTogether, PythonW3C } from '../Links'
import { TurtleDraw, FinalProjectProposal, StartProgrammingActivity, complete } from './ProgrammingAssignments'

export const al20000Sprint05 = () => {
	let playlist = oreillyPlaylistICS()

	return (

<div>
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

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Explore Networks</li>
	<li>Master Functions</li>
	<li>Understand Encryption and Hashing</li>
	<li>Create your initial Final Project Proposal</li>
</ul>

{ActivitiesListIntro()}
<ol>
	{StandardActivities(TurtleDraw, playlist, 5 )}
	<li>{StartProgrammingActivity(FinalProjectProposal)}</li>

	<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” Networks and review our associated <NavLink to='/activity-dale/15'>lecture</NavLink></li>
	<li>Complete {programmingTogether()} with TurtleDrawLite Part 1</li>
	<li>Scan the {PythonW3C()} from W3C</li>

	{InitialPost()}	
	<li>Within {oreillyPlaylistICS()} scan “Introducing Python” Chapters 2 through 4</li>
	<li>Within {oreillyPlaylistICS()} read “Introducing Python” Chapters 5 through 9 and review the associated {introducingPythonCodeExamples()}</li>
	<li>Complete {programmingTogether()} with TurtleDrawLite Parts 2 &amp; 3</li>

	<li>{complete(FinalProjectProposal)}</li>
	{StandardActivitiesClosing(TurtleDraw )}
</ol>
{Closing()}
</div>

	)
}

//<p>Take a deep breath and consider if you are you getting what you hoped to get out of the course. If not, let's
//sit down and talk for a few minutes to see if we can make it something special for you.</p>