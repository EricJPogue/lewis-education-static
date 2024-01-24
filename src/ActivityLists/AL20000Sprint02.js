import React from 'react'

import { getModuleDescription } from '../DataAndAPIs/ClassSections'
import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated, justinaPiwoniQuote } from './AL00000Sprint00'
import { SequenceSelectionAndRepetition, oreillyPlaylistICS, internalLink } from '../DataAndAPIs/Links'
import { gettingToKnowEachOtherLink } from '../Activities/WebGettingToKnowEachOther'
import { toolsOfTheTradeLink } from '../Activities/ToolsOfTheTrade'
import { htmlLink } from '../Activities/HTML'
import { HelloWorldWebLink } from '../Activities/HelloWorld'

export const al20000Sprint02 = () => {
	const sprint = 2
	return ( <div>
		<h5>Sprint {sprint}: {getModuleDescription(sprint-1)}</h5>

		<p>Welcome to sprint 2 of Introduction to Computer Science. In sprint 2 we are going to continue our journey 
		into data representation and also take look at some of the key technologies that make up the Web. Our sprint 
		activities will include a detailed look at two of those technologies by introducing HyperText Markup Language 
		(HTML) and Cascading Style Sheets (CSS).</p>

		{justinaPiwoniQuote()}<br />

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Understand the big picture of Computer Science</li>
			<li>Describe the concept of abstraction</li>
			<li>Develop browser-based HTML5 applications that utilize common HTML and CSS</li>
			<li>Utilize important software developer tools and services to create, update, and deploy basic software applications</li>
			<li>Understand and utilize numbering systems</li>
			<li>Begin to understand sequences, selections, and loops (repetition)</li>
		</ul> 

		{list20000Sprint02(sprint)}
		{closing(sprint)}
		<br />
		<p>Programming Together: “HelloWorld Plus for the Web” and “HelloWorldPlus with Pictures”</p>
	</div> )
}

export const list20000Sprint02 = (sprint) => {
	const daleChapter1Lecture = () => { return internalLink('chapter 1 lecture', '/activity-dale/1') }
	const daleChapter2Lecture = () => { return internalLink('lecture', '/activity-dale/2') }

	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>

			{standardActivities(sprint, gettingToKnowEachOtherLink())}
			<li>Read “Computer Science Illuminated” The Big Picture and review our {daleChapter1Lecture()}</li>

			<li>Review {toolsOfTheTradeLink()}</li>
			<li>Review {SequenceSelectionAndRepetition()}</li>
			{initialPost(sprint)}

			<li>Complete {HelloWorldWebLink()}</li>
			<li>Read “Computer Science Illuminated” The Information Layer and review our associated {daleChapter2Lecture()}</li>
			<li>Within {oreillyPlaylistICS()} read “Learning Web Development” Preface through Chapter 2 while focusing on Command Line functions</li>
			<li>Complete {htmlLink()} - Part 1{estimated('3 hours')}</li>
			{standardActivitiesClosing(sprint, gettingToKnowEachOtherLink(), '6 hours')}
		</ol>
	</div> )
}

// Certified for FA22 (08/27/2022)
// Certified for SP23 (01/15/2023)
// Certified for FA23 (09/09/2023)
// Certified for SP24 (01/24/2024)

// Todo: Consider adding licensing topic to all classes. 
// Todo: Consider adding HTML Quiz questions.
// Todo: Consider adding CSS Quiz questions.

