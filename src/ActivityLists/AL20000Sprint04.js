import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated } from './AL00000Sprint00'

import { oreillyPlaylistICS, SequenceSelectionAndRepetition, IntroducingPythonSampleCode, internalLink } from '../DataAndAPIs/Links'
import { numberingSystemsLink} from '../Activities/PythonNumberingSystems'
import { matchmakerPythonLink } from '../Activities/Matchmaker'
import { HelloWorldWebLink } from '../Activities/HelloWorld'
import { gettingToKnowEachOtherLink } from '../Activities/WebGettingToKnowEachOther'

export const al20000Sprint04 = () => {
	let sprint = 4
	return ( <div>
		<h5>Sprint 4: Python including Sequences, Selections, and Loops (Repetition), Strings, Lists, and Dictionaries</h5>

		<p>Sprint 4. Let’s write some Python code. <span style={{color: "red"}}> &#10084;&#10084;&#10084;</span> Matchmaker <span style={{color: "red"}}>&#10084;&#10084;&#10084; </span> 
		for Python will be challenging application but I think you will enjoy it.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{ listStyleType:'square' }}>
			<li>Master {SequenceSelectionAndRepetition()}</li>
			<li>Develop a basic understanding of artificial intelligence</li>
			<li>Create, update, and test Python applications</li>
			<li>Understand variables, strings, expressions, functions, lists, and dictionaries</li>
		</ul>

		{list20000Sprint04(sprint)}
		{closing(sprint)}
		<br />
		<p>Programming Together: “MatchmakerLite - Part 1” and “MatchmakerLite - Part 2”</p>
	</div> )
}

export const list20000Sprint04 = (sprint) => {
	const pythonW3CPart1 = () => { return internalLink('Python Programming - Part 1', '/activity/python-w3c') }
	const pythonW3CPart2 = () => { return internalLink('Python Programming - Part 2', '/activity/python-w3c') }
	const daleArtificialIntelligenceLecture = () => { return internalLink('lecture', '/activity-dale/13' )}

	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			<li>Review {HelloWorldWebLink()} and utilize GitHub and GitHub Pages to create a new “Project site” with a theme of your choice</li>
			<li>Move your {gettingToKnowEachOtherLink()} content to your new themed GitHub site</li>
			{standardActivities(sprint, matchmakerPythonLink(), oreillyPlaylistICS())}
			<li>Complete {numberingSystemsLink()}{estimated('2 hours')}</li>
			<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” Artificial Intelligence and review our associated {daleArtificialIntelligenceLecture()}</li>
			<li>Within {oreillyPlaylistICS()} read “Introducing Python” Chapters 3 and 4 while reviewing associated {IntroducingPythonSampleCode()}</li>
			<li>Complete “Matchmaker Lite - Part 1” from our programming together tutorials</li>

			{initialPost(sprint)}
			<li>Review {pythonW3CPart1()} from W3C</li>
			<li>Master {SequenceSelectionAndRepetition()}</li>
			<li>Within {oreillyPlaylistICS()} read “Introducing Python” Chapters 5 and 6 while reviewing associated {IntroducingPythonSampleCode()}</li>
			<li>Review {pythonW3CPart2()} from W3C</li>
			<li>Complete “Matchmaker Lite - Part 2” from our programming together tutorials</li>
			{standardActivitiesClosing(sprint, matchmakerPythonLink(), '6 hours')}
		</ol>
	</div> )
}

// Certified for FA22 (10/06/2022)
// Certified for SP22 (02/12/2022)
// BugBug: Movie “Artificial Intelligence” up on the list so that it is before the breakout session which is on the first Wednesday.
// Todo: Consider adding MatchmakerLite tutorials to ActivityList (and/or the Matchmaker assignment) instead of just in the Programming Together section. 
// Todo: Make sure that Matchmaker expectations of Lite topics vs features to learn on your own. 

