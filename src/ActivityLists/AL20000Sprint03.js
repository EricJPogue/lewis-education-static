import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated } from './AL00000Sprint00'
import { oreillyPlaylistICS, SequenceSelectionAndRepetition, CSSW3C, internalLink } from '../DataAndAPIs/Links'

import { htmlLink } from '../Activities/HTML'
import { GetCommandsLink } from '../Activities/GitCommands'
import { gettingToKnowEachOtherLink } from '../Activities/WebGettingToKnowEachOther'
import { azureWebsiteLink } from '../Activities/AzureWebsite'

export const al20000Sprint03 = () => {
	const sprint = 3
	return ( <div>
		<h5>Sprint 3: Gates and Circuits, Computing Components, HTML, CSS, and Hosting Web Applications in Azure</h5>

		<p>Welcome to sprint 3. I hope you enjoyed our work with HTML and your introduction to CSS because we are going to be 
		continuing that journey by enhancing our web applications with more sophisticated HTML and CSS while hosting your 
		Web applications in Microsoft Azure so that the whole world can view your creations. We will also be learning about 
		gates, circuits, and computing components.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{ listStyleType:'square' }}>
			<li>Understand and discuss gates and circuits</li>
			<li>Understand and discuss computing components</li>
			<li>Utilize more more sophisticated HTML and CSS to develop enhanced Web applications</li>
			<li>Host those enhanced web applications in Microsoft Azure</li>
		</ul>

		{list20000Sprint03(sprint)}
		{closing()}
	</div> )
}

const list20000Sprint03 = (sprint) => {
	const daleChapter4Lecture = () => { return internalLink('lecture', '/activity-dale/4') }
	const daleChapter5Lecture = () => { return internalLink('lecture', '/activity-dale/5') }

	return ( <div>
		{activitiesListIntro(sprint)}
			<ol>
				{standardActivities(sprint, azureWebsiteLink(), oreillyPlaylistICS())}
				<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” Gates and Circuits and review our associated {daleChapter4Lecture()}</li>
				<li>Within {oreillyPlaylistICS()} review “Learning Web Development” Chapter 2 on HTML and read Chapter 3 on CSS</li>
				<li>Study and consistently utilize the basic {GetCommandsLink()}</li>
				<li>Review {SequenceSelectionAndRepetition()}</li>

				{initialPost(sprint)}
				<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” Computing Components and review our associated {daleChapter5Lecture()}</li>
				<li>Review {htmlLink()} Part 1 and complete {htmlLink()} Part 2{estimated('1 hour maximum')}</li>
				<li>Complete {CSSW3C()} tutorial{estimated('2 hours')}</li>
				<li>Utilize what you learned in “Learning Web Development” and W3C tutorials to enhance {gettingToKnowEachOtherLink()}{estimated('2 hours')}</li>
				<li>Deploy your enhanced version of {gettingToKnowEachOtherLink()} to an {azureWebsiteLink()}{estimated('2 hours')}</li>
				{standardActivitiesClosing(sprint)}
			</ol>
	</div> )
}

// Certified for FA22 (09/20/2022)

// Todo: Verify that Unicode representation question fixed to more than 100,000 as best answer.


