import React from 'react'
import { NavLink } from 'react-router-dom';

import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivities, InitialPost, StandardActivitiesClosing, ScrumIntro } from './AL00000Sprint01'
import { oreillyPlaylistOOP } from '../Links';

import { GetCommandsLink } from '../Activities/GitCommands';
import { toolsOfTheTradeLink } from '../Activities/ToolsOfTheTrade';
import { HelloWorldPythonLink, HelloWorldJavaLink } from '../Activities/HelloWorld';

import { MatchmakerWithJava } from './ProgrammingAssignments'

export const al24500Sprint01 = () => {
	return (

<div>
<h5>Sprint 1: Getting Started, Concepts, Patterns, and Java Programming</h5>

<p><em>Welcome to Object-Oriented Programming!</em> By this point in your software development journey I’m sure that 
you are confident in writing basic software programs. You’ve learned about structured programming techniques like 
sequence, selection, and repetition. You've learned how to break complicated programs down into more manageable pieces 
by using functions. That’s great, but to create modern programs you need to master some additional skills. These 
additional skills are what object-oriented programming give us.</p>

{ScrumIntro()}

{LearningObjectivesIntro()}
<ul style={{ listStyleType: 'square' }}>
	<li>Effectively participate in a blended classroom environment and as part of a Scrum team</li>
	<li>Identify and understand key object-oriented programming concepts</li>
	<li>Identify, define, and discuss object-oriented programming patterns</li>
	<li>Utilize important developer tools to create and update basic software applications</li>
</ul>

{ActivitiesListIntro()}
<ol>
	{StandardActivities(MatchmakerWithJava)}
	<li>Complete <NavLink to='/activity-oop/concepts-and-practices'>Object-Oriented Programming Concepts and Practices</NavLink><sup> ~2 hours</sup></li>
	<li>Within {oreillyPlaylistOOP()} read “Learning Java, 5th Edition” chapters 1, 2, and 3<sup> ~2 hours</sup></li>

	{InitialPost()}
	<li>Complete {toolsOfTheTradeLink()}<sup> ~2 hours</sup></li>
	<li>Review {GetCommandsLink()}</li>
	<li>Complete {HelloWorldPythonLink()}</li>
	<li>Complete {HelloWorldJavaLink()}</li>
	{StandardActivitiesClosing(MatchmakerWithJava)}
</ol>

<p>The best advise that I can give you is to start assignments early, submit something for each assignment, and to 
attend class. If you do these things, I believe your success is virtually guaranteed. </p>
</div>

	)
}



