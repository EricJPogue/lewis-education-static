import React from 'react'

import { scrumIntro, learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, estimated, closing } from './AL00000Sprint00'

import { internalLink } from '../DataAndAPIs/Links';
import { matchMakerJavaLink } from '../Activities/Matchmaker';

import { oreillyPlaylistOOP } from '../DataAndAPIs/Links';

import { GetCommandsLink } from '../Activities/GitCommands';
import { toolsOfTheTradeLink } from '../Activities/ToolsOfTheTrade';
import { HelloWorldPythonLink, HelloWorldJavaLink } from '../Activities/HelloWorld';

export const al24500Sprint01 = () => {
	const sprint = 1
	return ( <div>
		<h5>Sprint 1: Getting Started, Concepts, Patterns, and Java Programming</h5>

		<p><em>Welcome to Object-Oriented Programming!</em> By this point in your software development journey I’m sure that 
		you are confident in writing basic software programs. You’ve learned about structured programming techniques like 
		sequence, selection, and repetition. You've learned how to break complicated programs down into more manageable pieces 
		by using functions. That’s great, but to create modern programs you need to master some additional skills. These 
		additional skills are what object-oriented programming give us.</p>

		{scrumIntro()}

		{learningObjectivesIntro(sprint)}
		<ul style={{ listStyleType: 'square' }}>
			<li>Effectively participate in a blended classroom environment and as part of a Scrum team</li>
			<li>Identify and understand key object-oriented programming concepts</li>
			<li>Identify, define, and discuss object-oriented programming patterns</li>
			<li>Utilize important developer tools to create and update basic software applications</li>
		</ul>

		{list24500Sprint01(sprint)}
		{closing(sprint)}
	</div> )
}

const list24500Sprint01 = (sprint) => {
	const conceptsAndPractices = () => { return internalLink('Object-Oriented Programming Concepts and Practices', '/activity-oop/concepts-and-practices') }
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, matchMakerJavaLink())}

			<li>Complete {conceptsAndPractices()}{estimated('2 hours')}</li>
			<li>Within {oreillyPlaylistOOP()} read “Learning Java, 5th Edition” chapters 1, 2, and 3{estimated('2 hours')}</li>

			{initialPost(sprint)}
			<li>Complete {toolsOfTheTradeLink()}{estimated('2 hours')}</li>
			<li>Review {GetCommandsLink()}</li>
			<li>Complete {HelloWorldPythonLink()}</li>
			<li>Complete {HelloWorldJavaLink()}</li>

			{standardActivitiesClosing(sprint, matchMakerJavaLink(), '6 hours')}
		</ol>
	</div> )
}


// Certified for SP23 (01/06/23)