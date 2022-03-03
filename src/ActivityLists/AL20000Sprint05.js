import React from 'react'
import { NavLink } from 'react-router-dom'

import { LearningObjectivesIntro, ActivitiesListIntro, InitialPost } from './AL00000Sprint03'
import { FinalProjectsAndMoreResponsibility, StandardActivitiesWithLinkAndSprint, StandardActivitiesClosing, Closing  } from './AL00000Sprint05'

import { turtledrawLink } from '../Activities/PythonTurtleDraw'
import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'

import { oreillyPlaylistICS, introducingPythonCodeExamples, programmingTogether, PythonW3C } from '../Links'
import { TurtleDraw } from './ProgrammingAssignments'

export const al20000Sprint05 = () => {
	let sprint = 5
	return ( <div>

<h5>Sprint 5: Networks, Encryption, Hashing, and Final Project Proposals</h5>

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

{ActivitiesListIntro(sprint)}
<ol>
	{StandardActivitiesWithLinkAndSprint(sprint, turtledrawLink(), oreillyPlaylistICS())}
	<li>Start working on {finalProjectProposalLink()}</li>

	<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” Networks and review our associated <NavLink to='/activity-dale/15'>lecture</NavLink></li>
	<li>Complete {programmingTogether()} with TurtleDrawLite Parts 1 &amp; 2</li>
	<li>Scan the {PythonW3C()} from W3C</li>

	{InitialPost()}	
	<li>Within {oreillyPlaylistICS()} read “Introducing Python” Chapters 7 through 9 and review the associated {introducingPythonCodeExamples()}</li>
	<li>Complete {programmingTogether()} with TurtleDrawLite Part 3</li>

	{/* BugBug: Start here to replace closing!!! And then verify associated sprint 5 assignments. */}

	{StandardActivitiesClosing(TurtleDraw)}
</ol>
{Closing()}

</div> )
}

// Todo: Remove the programming together tutorials from the activity list to the Turtledraw activity itself, and then 
// remove the tutorials from the programming together.  
