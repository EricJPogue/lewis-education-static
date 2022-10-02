import React from 'react'

import { estimated } from './AL00000Sprint00'
import { LearningObjectivesIntro, ActivitiesListIntro, InitialPost } from './AL00000Sprint03'
import { StandardActivitiesWithLinkAndSprint, StandardActivitiesClosingWithLinkAndSprint, Closing } from './AL00000Sprint04'

import { oreillyPlaylistICS, SequenceSelectionAndRepetition, IntroducingPythonSampleCode, internalLink } from '../DataAndAPIs/Links'
import { numberingSystemsLink} from '../Activities/PythonNumberingSystems'
import { matchmakerPythonLink } from '../Activities/Matchmaker'

export const al20000Sprint04 = () => {
	let sprint = 4
	return ( <div>
		<h5>Sprint 4: More Python including Sequences, Selections, and Loops (Repetition), Strings, Lists, and Dictionaries</h5>

		<p>Sprint 4. Let’s write some Python code. <span style={{color: "red"}}> &#10084;&#10084;&#10084;</span> Matchmaker <span style={{color: "red"}}>&#10084;&#10084;&#10084; </span> 
		for Python will be challenging application but I think you will enjoy it. 
		</p>

		{LearningObjectivesIntro()}
		<ul style={{ listStyleType:'square' }}>
			<li>Master {SequenceSelectionAndRepetition()}</li>
			<li>Develop a basic understanding of artificial intelligence</li>
			<li>Create, update, and test Python applications</li>
			<li>Understand variables, strings, expressions, functions, lists, and dictionaries</li>
		</ul>

		{list20000Sprint04(sprint)}
		{Closing()}
		<br />
		<p>Programming Together: “MatchmakerLite - Part 1” and “MatchmakerLite - Part 2”</p>
	</div> )
}

export const list20000Sprint04 = (sprint) => {
	const pythonW3CPart1 = () => { return internalLink('Python Programming - Part 1', '/activity/python-w3c') }
	const pythonW3CPart2 = () => { return internalLink('Python Programming - Part 2', '/activity/python-w3c') }
	const daleArtificialIntelligenceLecture = () => { return internalLink('lecture', '/activity-dale/13' )}

	return ( <div>
{ActivitiesListIntro(sprint)}
<ol>
	{StandardActivitiesWithLinkAndSprint(sprint, matchmakerPythonLink(), oreillyPlaylistICS())}
	<li>Complete {numberingSystemsLink()}{estimated('2 hours')}</li>
	<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” Artificial Intelligence and review our associated {daleArtificialIntelligenceLecture()}</li>
	<li>Within {oreillyPlaylistICS()} read “Introducing Python” Chapters 3 and 4 while reviewing associated {IntroducingPythonSampleCode()}</li>

	{InitialPost(sprint)}
	<li>Review {pythonW3CPart1()} from W3C</li>
	<li>Master {SequenceSelectionAndRepetition()}</li>
	<li>Within {oreillyPlaylistICS()} read “Introducing Python” Chapters 5 and 6 while reviewing associated {IntroducingPythonSampleCode()}</li>
	<li>Review {pythonW3CPart2()} from W3C</li>
	{StandardActivitiesClosingWithLinkAndSprint(sprint, matchmakerPythonLink(), '6 hours' )}
</ol>
	</div> )
}

// Todo: Review quiz 4 for "All of the above" type answers and check indentation of Python coding question. 
// Todo: Add zipped source code requirement to all Final Project presentation assignments.
