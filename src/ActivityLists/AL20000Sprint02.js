import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated } from './AL00000Sprint00'
import { SequenceSelectionAndRepetition, oreillyPlaylistICS, internalLink } from '../DataAndAPIs/Links'

import { gettingToKnowEachOtherLink } from '../Activities/WebGettingToKnowEachOther'
import { toolsOfTheTradeLink } from '../Activities/ToolsOfTheTrade'
import { htmlLink } from '../Activities/HTML'

export const al20000Sprint02 = () => {
	const sprint = 2
	return ( <div>
		<h5>Sprint 2: Numbering Systems, Data Representation, HyperText Markup Language (HTML), and Cascading Style Sheets (CSS)</h5>

		<p>Welcome to sprint 2 of Introduction to Computer Science. In sprint 2 we are going to continue our journey into data
		representation and also take look at some of the key technologies that make up the Web. Our sprint activities will 
		include a detailed look at two of those technologies by introducing HyperText Markup Language (HTML) and Cascading Style 
		Sheets (CSS).</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Develop browser-based HTML5 applications that utilize common HTML and CSS</li>
			<li>Utilize important software developer tools and services to create, update, and deploy basic software applications</li>
			<li>Understand and utilize numbering systems</li>
			<li>Understand sequences, selections, and loops (repetition)</li>
			<li>Identify, define, and discuss data representation, programming, and algorithmic thinking</li>
		</ul> 

		{list20000Sprint02(sprint)}
		{closing(sprint)}
		<br />
		<p>Programming Together: “HelloWorld Plus for the Web” and “HelloWorldPlus with Pictures”</p>
	</div> )
}

export const list20000Sprint02 = (sprint) => {
	const daleChapter2Lecture = () => { return internalLink('lecture', '/activity-dale/2') }
	const daleChapter3Lecture = () => { return internalLink('lecture', '/activity-dale/3') }

	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, gettingToKnowEachOtherLink())}
			<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” The Information Layer and review our associated {daleChapter2Lecture()}</li>
			<li>Review {toolsOfTheTradeLink()}</li>
			<li>Review {SequenceSelectionAndRepetition()}</li>
			{initialPost(sprint)}

			<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” Data Representation and review our associated {daleChapter3Lecture()}</li>
			<li>Within {oreillyPlaylistICS()} read “Learning Web Development” Preface through Chapter 2 while focusing on Command Line functions</li>
			<li>Complete {htmlLink()} - Part 1{estimated('3 hours')}</li>
			{standardActivitiesClosing(sprint, gettingToKnowEachOtherLink(), '6 hours')}
		</ol>
	</div> )
}

// Todo: Consider adding Git/GitHub activity / tutorial. 
// Todo: Consider lining up certain discussion topics with Friendly Conversation Topics.

// Certified for FA22 (08/27/2022)

// Todo: Review and possibly reword Lab 2 questions relating to zipping and submitting tools of the trade. Be sure to 
//     update "Part 1" naming as there is no longer a part 1 and part 2.
// Todo: Consider removing Office 365 from the tools of the trade? Maybe it should be left for any writing assignments?
