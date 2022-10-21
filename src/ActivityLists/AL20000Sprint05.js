import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated, finalProjectsAndMoreResponsibility } from './AL00000Sprint00'
import { oreillyPlaylistICS, introducingPythonCodeExamples, programmingTogether, PythonW3C, internalLink } from '../DataAndAPIs/Links'

import { turtledrawLink } from '../Activities/PythonTurtleDraw'
import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'

export const al20000Sprint05 = () => {
	let sprint = 5
	return ( <div>
		<h5>Sprint 5: Networks, Encryption, Hashing, and Final Project Proposals</h5>

		<p><em>Wow!</em> We made it to the halfway point. I hope you enjoyed
		<span style={{color: "red"}}> &#10084;&#10084;&#10084;</span> Matchmaker <span style={{color: "red"}}>&#10084;&#10084;&#10084;</span>.
		This week we switch gears and move into graphical drawing using Python and the Turtle graphics library.</p>

		{finalProjectsAndMoreResponsibility()}
		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Explore Networks</li>
			<li>Master Functions</li>
			<li>Utilize Python to draw graphical lines and shapes</li>
			<li>Create your Final Project Proposal</li>
		</ul>

		{list20000Sprint05(sprint)}
		{closing(sprint)}
	</div> )
}

export const list20000Sprint05 = (sprint) => {
	const daleNetworks = () => { return internalLink('lecture', '/activity-dale/15' )}
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, turtledrawLink(), oreillyPlaylistICS())}
			<li>Start working on {finalProjectProposalLink()}</li>
			<li>Within “Computer Science Illuminated” Networks and review our associated {daleNetworks()}</li>
			<li>Complete {programmingTogether()} with TurtleDrawLite Parts 1 &amp; 2</li>

			{initialPost(sprint)}
			<li>Scan the {PythonW3C()} from W3C</li>
			<li>Within {oreillyPlaylistICS()} read “Introducing Python” Chapters 7 through 9 and review the associated {introducingPythonCodeExamples()}</li>
			<li>Complete {programmingTogether()} with TurtleDrawLite Part 3</li>
			<li>Complete {finalProjectProposalLink()}{estimated('2 hours')}</li>
			{standardActivitiesClosing(sprint, turtledrawLink(), '8 hours')}
		</ol>
	</div> )
}

// Certified for FA22 (10/21/2022)

// Todo: Review... Remove the programming together tutorials from the activity list to the Turtledraw activity itself, and then 
// remove the tutorials from the programming together. 

// Todo: Review... Remove T/F question "Everything connected to the Internet has an IP address."


