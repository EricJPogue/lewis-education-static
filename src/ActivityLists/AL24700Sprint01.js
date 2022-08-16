import React from 'react'

import { scrumIntro, learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, estimated, closing } from './AL00000Sprint00'
import { internalLink, oreillyPlaylistWeb } from '../DataAndAPIs/Links'
import { gettingToKnowEachOtherLink } from '../Activities/WebGettingToKnowEachOther'
import { toolsOfTheTradeLink } from '../Activities/ToolsOfTheTrade'
import { htmlLink } from '../Activities/HTML'

export const al24700Sprint01 = () => {
	const sprint = 1
	return ( <div>
		<h5>Sprint 1: The Internet, the Web, HTML, and Tools of the Trade</h5>
		<p><em>Welcome to Web and Distributed Programming!</em> I am looking forward to working with you in the coming 
		weeks to deliver high quality and interesting software applications.</p>

		{scrumIntro()}

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Effectively participate in a blended classroom environment and as part of a scrum team</li>
			<li>Identify, define, and discuss the Internet and the Web</li>
			<li>Develop browser based HTML applications</li>
			<li>Utilize important developer tools to create and update basic Web software applications</li>
		</ul>

		{list24700Sprint01(sprint)}
		{closing(sprint)}
	</div> )
}

export const list24700Sprint01 = (sprint) => {
	const sebestaChapter1Lecture = () => internalLink('lecture', '/activity/sebesta-chapter-01')
	const sebestaChapter2Lecture = () => internalLink('lecture', '/activity/sebesta-chapter-02')
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, gettingToKnowEachOtherLink())}
			<li>Within {oreillyPlaylistWeb()} read “Learning Web Development” Preface, Chapter 1, and Chapter 2</li>
			<li>Complete {toolsOfTheTradeLink()}{estimated('3 hours')}</li>
			<li>Read chapter 2 of “Programming The World Wide Web” (Sebesta)</li>
			<li>Review our “Programming The World Wide Web” (Sebesta) chapter 2 {sebestaChapter2Lecture()}</li>

			{initialPost(sprint)}
			<li>Read chapter 1 of Sebesta and review the associated chapter 1 {sebestaChapter1Lecture()}</li>
			<li>Complete {htmlLink()} - Part 1</li>
			{standardActivitiesClosing(sprint, gettingToKnowEachOtherLink(), '6 hours')}
		</ol>
	</div> )
}

// Certified for SU22 (05/09/2022)

// Todo: Update syllabus with Activity List headers... or update Activity list headers. 
// Todo: Modify assignment order in Syllabus Course Schedule to be to match Activities List order (Discussion, Quiz, Lab, and Reflection).
// Todo: Consider removing Sebesta book while recreating any required material that is only available from the book (i.e. Internet and Web). 
