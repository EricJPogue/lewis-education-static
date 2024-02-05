import React from 'react'

import { getModuleDescription } from '../DataAndAPIs/ClassSections'
import { oreillyPlaylistICS, SequenceSelectionAndRepetition, CSSW3C, internalLink, JavaScriptW3C } from '../DataAndAPIs/Links'
import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated } from './AL00000Sprint00'

import { htmlLink } from '../Activities/HTML'
import { GetCommandsLink } from '../Activities/GitCommands'
import { continuousIntegration } from '../DataAndAPIs/Links'
import { gettingToKnowEachOtherWebLink } from '../Activities/WebGettingToKnowEachOther'

export const al20000Sprint03 = () => {
	const sprint = 3
	return ( <div>
		<h5>Sprint {sprint}: {getModuleDescription(sprint-1)}</h5>

		<p>Welcome to sprint 3. I hope you enjoyed our work with HTML and your introduction to CSS because we are going to be 
		continuing that journey by enhancing our web applications with more sophisticated HTML and CSS while introducing making 
		them interactive with JavaScript. We will also get back into the habit of hosting our web applications with GitHub Pages
		so that the whole world can see them.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{ listStyleType:'square' }}>
			<li>Understand and discuss data representation</li>
			<li>Understand and discuss gates and circuits</li>
			<li>Understand and discuss computing components</li>
			<li>Utilize more sophisticated HTML, CSS, and JavaScript to develop Web applications</li>
		</ul>

		{list20000Sprint03(sprint)}
		{closing(sprint)}
	</div> )
}

export const list20000Sprint03 = (sprint) => {
	const daleChapter3Lecture = () => { return internalLink('lecture', '/activity-dale/3') }
	const daleChapter4Lecture = () => { return internalLink('lecture', '/activity-dale/4') }

	return ( <div>
		{activitiesListIntro(sprint)}
			<ol>
				{standardActivities(sprint, gettingToKnowEachOtherWebLink(), oreillyPlaylistICS())}
				<li>Read “Computer Science Illuminated” Data Representation and review our associated {daleChapter3Lecture()}</li>

				<li>Read {continuousIntegration()}</li>
				<li>Review {htmlLink()} Part 1 and complete {htmlLink()} Part 2{estimated('1 hour maximum')}</li>
				<li>Within {oreillyPlaylistICS()} review “Learning Web Development” Chapter 2 on HTML and read Chapter 3 on CSS</li>
				<li>Study and consistently utilize the basic {GetCommandsLink()}</li>
				<li>Review {SequenceSelectionAndRepetition()}</li>

				{initialPost(sprint)}
				<li>Read “Computer Science Illuminated” Gates and Circuits and review our associated {daleChapter4Lecture()}</li>
				<li>Complete {CSSW3C()} tutorial{estimated('2 hours')}</li>
				<li>Start {JavaScriptW3C()} tutorial {estimated('2 hours')}</li>
				{standardActivitiesClosing(sprint, gettingToKnowEachOtherWebLink(), '6 hours')}
			</ol>
	</div> )
}

// Certified for FA22 (09/20/2022)
// Certified for SP22 (01/29/2022)
// Certified for FA23 (09/23/2023)
// Todo: Assignments with GitHub and JavaScript turning text red very challenging given that Friday was a holiday.

// Certified for SP24 (10/05/2024)




