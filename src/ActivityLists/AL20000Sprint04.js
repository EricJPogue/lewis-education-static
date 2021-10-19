import React from 'react'
import { NavLink } from 'react-router-dom'

import { InitialPost,  } from './AL00000Sprint02'
import { LearningObjectivesIntro, ActivitiesListIntro } from './AL00000Sprint03'
import { StandardActivities, StandardActivitiesClosing, Closing  } from './AL00000Sprint04'

import { oreillyPlaylistICS, SequenceSelectionAndRepetition } from '../Links'
import { IntroducingPythonSampleCode } from '../Links'

import { MatchmakerWithPython } from './ProgrammingAssignments'

export const al20000Sprint04 = () => {
	let playlist = oreillyPlaylistICS()

	return (

<div>
<h5>Sprint 4: More Python including Sequences, Selections, and Loops (Repetition), Strings, Lists, and Dictionaries</h5>

<p>Sprint 4. Let’s write some Python code. <span style={{color: "red"}}> &#10084;&#10084;&#10084;</span> Matchmaker <span style={{color: "red"}}>&#10084;&#10084;&#10084; </span> 
for Python will be challenging application but I think you will enjoy it. 
</p>

{LearningObjectivesIntro()}
<ul style={{ listStyleType:'square' }}>
	<li>Create, update, and test Python applications</li>
	<li>Understand variables, strings, expressions, functions, lists, and dictionaries</li>
	<li>Master {SequenceSelectionAndRepetition()}</li>
	<li>Develop a basic understanding of artificial intelligence</li>
</ul>

{ActivitiesListIntro()}
<ol>
	{StandardActivities(MatchmakerWithPython, playlist, 4)}
	<li>Complete <NavLink to='/activity/python-w3c'>Python Programming - Part 1 &amp; Part 2</NavLink> from W3C</li>
	<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” Artificial Intelligence and review our associated <NavLink to='/activity-dale/13'>lecture</NavLink></li>
	<li>Complete Programming Together with MatchmakerLite - Part 1</li>

	{InitialPost(4)}
	<li>Within {oreillyPlaylistICS()} read “Introducing Python” Preface and Chapter 1 while completing “quotes.py” from the {IntroducingPythonSampleCode()}</li>
	<li>Complete Programming Together with MatchmakerLite - Part 2</li>
	{StandardActivitiesClosing(MatchmakerWithPython, 4)}
</ol>
{Closing()}
</div>

	)
}

// Todo: Consider updating Matchmaker to remove question weighting.
// Todo: Consider updating to include Introducing Python chapters 4 through 9


