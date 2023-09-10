import React from 'react'

import { getClass } from '../DataAndAPIs/Classes'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated, justinaPiwoniQuote } from './AL00000Sprint00'
import { SequenceSelectionAndRepetition, oreillyPlaylistICS, internalLink } from '../DataAndAPIs/Links'

import { gettingToKnowEachOtherLink } from '../Activities/WebGettingToKnowEachOther'
import { toolsOfTheTradeLink } from '../Activities/ToolsOfTheTrade'
import { htmlLink } from '../Activities/HTML'
import { HelloWorldWebLink } from '../Activities/HelloWorld'

export const al20000Sprint02 = () => {
	const classSection = getClass()
	const sprint = 2
	return ( <div>
		<h5>Sprint 2: {classSection.class.modules[sprint-1]}</h5>

		<p>Welcome to sprint 2 of Introduction to Computer Science. In sprint 2 we are going to continue our journey 
		into data representation and also take look at some of the key technologies that make up the Web. Our sprint 
		activities will include a detailed look at two of those technologies by introducing HyperText Markup Language 
		(HTML) and Cascading Style Sheets (CSS).</p>

		{justinaPiwoniQuote()}<br />

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Describe the concept of abstraction</li>
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
	const ECaMSStudyTables = () => internalLink('ECaMS Study Tables', '/activity/study-table')
	const daleChapter2Lecture = () => { return internalLink('lecture', '/activity-dale/2') }
	const daleChapter3Lecture = () => { return internalLink('lecture', '/activity-dale/3') }

	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, gettingToKnowEachOtherLink())}
			<li>Read “Computer Science Illuminated” The Information Layer and review our associated {daleChapter2Lecture()}</li>
			<li>Visit the {ECaMSStudyTables()}, say “Hi,” and get the name of the ECaMS tutor</li>
			<li>Review {toolsOfTheTradeLink()}</li>
			<li>Review {SequenceSelectionAndRepetition()}</li>
			{initialPost(sprint)}

			<li>Complete {HelloWorldWebLink()}</li>
			<li>Read “Computer Science Illuminated” Data Representation and review our associated {daleChapter3Lecture()}</li>
			<li>Within {oreillyPlaylistICS()} read “Learning Web Development” Preface through Chapter 2 while focusing on Command Line functions</li>
			<li>Complete {htmlLink()} - Part 1{estimated('3 hours')}</li>
			{standardActivitiesClosing(sprint, gettingToKnowEachOtherLink(), '6 hours')}
		</ol>
	</div> )
}

// Certified for FA22 (08/27/2022)
// Certified for SP23 (01/15/2023)
// Certified for FA23 (09/09/2023)
// Todo: Add 30-by-30 master questions to quiz 2

