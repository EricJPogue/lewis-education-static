import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing } from './AL00000Sprint00'

import { oreillyPlaylistICS, programmingTogether, internalLink } from '../DataAndAPIs/Links'
import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'

import { getModuleDescription } from '../DataAndAPIs/ClassSections'
import { turtledrawLink } from '../Activities/PythonTurtleDraw'
import { PythonTurtleLibrary } from '../DataAndAPIs/Links'
import { IntroducingPythonSampleCode } from '../DataAndAPIs/Links'

export const al20000Sprint06 = () => {
	const sprint = 6
	return ( <div>
		<h5>Sprint {sprint}: {getModuleDescription(sprint-1)}</h5>

		<p>Welcome to sprint 6. What is {PythonTurtleLibrary()} you ask? Why Turtle Graphics is a popular Python drawing library 
		that we will be using to create our {turtledrawLink()} application. In fact one of the main reasons for Python’s vast 
		popularity is the availability of soooo many useful libraries.  </p>

		{learningObjectivesIntro(sprint)}
		<ul style={{ listStyleType:'square' }}>
			<li>Understand Artificial Intelligence and Machine Learning</li>
			<li>Utilize Python to create an interactive drawing application</li>
			<li>Update our web hosted Final Project proposals</li>
		</ul>

		{list20000Sprint06(sprint)}
		{closing(sprint)}
	</div> )
}

export const list20000Sprint06 = (sprint) => {
	// const daleWWWLecture = () => { return internalLink('lecture', '/activity-dale/16' )}
	const pythonW3CPart1 = () => { return internalLink('Python Programming - Part 1', '/activity/python-w3c') }
	const pythonW3CPart2 = () => { return internalLink('Python Programming - Part 2', '/activity/python-w3c') }
	const daleArtificialIntelligenceLecture = () => { return internalLink('lecture', '/activity-dale/13' )}

	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, turtledrawLink(), oreillyPlaylistICS())}
			<li>Complete {programmingTogether()} with TurtleDrawLite part 1</li>
			<li>Review {pythonW3CPart1()} and {pythonW3CPart2()}</li>
			<li>Within {oreillyPlaylistICS()} read “Introducing Python” Chapter 2 while reviewing “quotes.py” from the {IntroducingPythonSampleCode()}</li>
			<li>Complete {programmingTogether()} with TurtleDrawLite part 2</li>
			<li>Read “Computer Science Illuminated” Artificial Intelligence and review our associated {daleArtificialIntelligenceLecture()}</li>
			<li>Update {finalProjectProposalLink()}</li>
			{initialPost(sprint)}
			<li>Complete {programmingTogether()} with TurtleDrawLite Part 3</li>
			<li>Within {oreillyPlaylistICS()} read “Introducing Python” Chapters 3 and 4 while reviewing associated {IntroducingPythonSampleCode()}</li>
			<li>Within {oreillyPlaylistICS()} read “Introducing Python” Chapters 5 and 6 while reviewing associated {IntroducingPythonSampleCode()}</li>
			{standardActivitiesClosing(sprint, turtledrawLink(), '8 hours')}
		</ol>
	</div> )
}

// Certified for SP24 on 03/22/2024. EJP
// Consider adding Optional activity of MatchMaker for Python
