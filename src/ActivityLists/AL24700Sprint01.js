import React from 'react'

import { internalLink, oreillyPlaylistWeb } from '../Links'
import { scrumIntro, learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, 
	standardActivitiesClosing, estimated, closing } from './AL00000Sprint00'

import { gettingToKnowEachOtherLink } from '../Activities/WebGettingToKnowEachOther'
import { toolsOfTheTradeLink } from '../Activities/ToolsOfTheTrade'
import { htmlLink } from '../Activities/HTML'

export const al24700Sprint01 = () => {
	return ( <div>
		<h5>Sprint 1: The Internet, the Web, HTML, and Tools of the Trade</h5>
		<p><em>Welcome to Web and Distributed Programming!</em> I am looking forward to working with you in the coming 
		weeks to deliver high quality and interesting software applications.</p>

		{scrumIntro()}
		{learningObjectivesIntro()}
		<ul style={{listStyleType:'square'}}>
			<li>Effectively participate in a blended classroom environment and as part of a scrum team</li>
			<li>Identify, define, and discuss the Internet and the Web</li>
			<li>Develop browser based HTML5 applications that utilize common HTML elements</li>
			<li>Utilize important developer tools to create and update basic software applications</li>
		</ul>

		{list24700Sprint01()}
		{closing()}
	</div> )
}

export const list24700Sprint01 = () => {
	const sebestaChapter1Lecture = () => internalLink('lecture', '/activity/sebesta-chapter-01')
	const sebestaChapter2Lecture = () => internalLink('lecture', '/activity/sebesta-chapter-02')
	const sprint = 1
	return ( <div>
		{activitiesListIntro()}
		<ol>
			{standardActivities(sprint, gettingToKnowEachOtherLink())}
			<li>Read chapter 2 of “Programming The World Wide Web” (Sebesta)</li>
			<li>Review our “Programming The World Wide Web” (Sebesta) {sebestaChapter2Lecture()} and be prepared for a 
			scrum team discussion</li>
			<li>Complete {toolsOfTheTradeLink()}{estimated('3 hours')}</li>
			<li>Complete {htmlLink()} - Part 1{estimated('2 hours')}</li>

			{initialPost()}
			<li>Read chapter 1 of Sebesta and review the associated {sebestaChapter1Lecture()}</li>
			<li>Within {oreillyPlaylistWeb()} read “Learning Web Development” Preface through Chapter 2 while focusing 
			on Command Line functions</li>
			{standardActivitiesClosing(sprint, gettingToKnowEachOtherLink(), '6 hours')}
		</ol>
	</div>)
}

// BugBug: Verify that second discussion board is removed from sprint 1.
// Move Final Project Presentation assignment up so that it is between sprint 7 and sprint 8 (instead of after sprint 8).
// Remove last question in Lab 8.
// Todo: Add "grader" standards to Discussions. 
// Todo: Add Git/GitHub activity / tutorial. 
