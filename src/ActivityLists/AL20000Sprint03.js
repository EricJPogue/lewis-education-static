import React from 'react'

import { getClass } from '../DataAndAPIs/Classes'
import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated } from './AL00000Sprint00'
import { oreillyPlaylistICS, SequenceSelectionAndRepetition, CSSW3C, internalLink, JavaScriptW3C } from '../DataAndAPIs/Links'

import { htmlLink } from '../Activities/HTML'
import { GetCommandsLink } from '../Activities/GitCommands'
import { gettingToKnowEachOtherLink } from '../Activities/WebGettingToKnowEachOther'
import { continuousIntegration } from '../DataAndAPIs/Links'

import { gettingToKnowEachOtherWebLink } from '../Activities/WebGettingToKnowEachOther'
import { matchmakerWebLink } from '../Activities/Matchmaker'

export const al20000Sprint03 = () => {
	const classSection = getClass()
	const sprint = 3
	return ( <div>
		<h5>Sprint 3: {classSection.class.modules[sprint-1]}</h5>

		<p>Welcome to sprint 3. I hope you enjoyed our work with HTML and your introduction to CSS because we are going to be 
		continuing that journey by enhancing our web applications with more sophisticated HTML and CSS while hosting your 
		Web applications in Microsoft Azure so that the whole world can view your creations. We will also be learning about 
		gates, circuits, and computing components.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{ listStyleType:'square' }}>
			<li>Understand and discuss gates and circuits</li>
			<li>Understand and discuss computing components</li>
			<li>Utilize more more sophisticated HTML, plus CSS, and JavaScript to develop Web applications</li>
		</ul>

		{list20000Sprint03(sprint)}
		{closing(sprint)}
	</div> )
}

export const list20000Sprint03 = (sprint) => {
	const daleChapter4Lecture = () => { return internalLink('lecture', '/activity-dale/4') }
	const daleChapter5Lecture = () => { return internalLink('lecture', '/activity-dale/5') }

	return ( <div>
		{activitiesListIntro(sprint)}
			<ol>
				{standardActivities(sprint, gettingToKnowEachOtherWebLink(), oreillyPlaylistICS())}
				<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” Gates and Circuits and review our associated {daleChapter4Lecture()}</li>
				<li>Read {continuousIntegration()}</li>
				<li>Review {htmlLink()} Part 1 and complete {htmlLink()} Part 2{estimated('1 hour maximum')}</li>
				<li>Within {oreillyPlaylistICS()} review “Learning Web Development” Chapter 2 on HTML and read Chapter 3 on CSS</li>
				<li>Study and consistently utilize the basic {GetCommandsLink()}</li>
				<li>Review {SequenceSelectionAndRepetition()}</li>

				{initialPost(sprint)}
				<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” Computing Components and review our associated {daleChapter5Lecture()}</li>
				<li>Complete {CSSW3C()} tutorial{estimated('2 hours')}</li>
				<li>Start {JavaScriptW3C()} tutorial {estimated('1 hour')}</li>
				<li>Utilize what you learned about CSS and JavaScript to enhance and complete {gettingToKnowEachOtherLink()}{estimated('2 hours')}</li>
				<li>Review {matchmakerWebLink()} assignment and complete “Matchmaker for the Web - Part 1”{estimated('2 hours')}</li>
				{standardActivitiesClosing(sprint)}
			</ol>
	</div> )
}

// Certified for FA22 (09/20/2022)
// Certified for SP22 (01/29/2022)
// Certified for FA23 (09/23/2023)
// Todo: Verify that Unicode representation question fixed to more than 100,000 as best answer. This should be changed now. 



