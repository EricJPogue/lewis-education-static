import React from 'react'

import { scrumIntro, learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, estimated, closing } from './AL00000Sprint00'
import { internalLink, oreillyPlaylistWeb } from '../DataAndAPIs/Links'
import { gettingToKnowEachOtherLink } from '../Activities/WebGettingToKnowEachOther'
import { toolsOfTheTradeLink } from '../Activities/ToolsOfTheTrade'
import { htmlLink } from '../Activities/HTML'

export const al24700Sprint1Topics = 'The Internet, World Wide Web, Web Applications, and HyperText Markup Language'
export const al24700Sprint01 = () => {
	const sprint = 1

	return ( <div>
		<h5>Sprint 1: {al24700Sprint1Topics}</h5>
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
	const sebestaChapter1Lecture = () => internalLink('chapter 1 lecture', '/activity/sebesta-chapter-01')
	const sebestaChapter2Lecture = () => internalLink('chapter 2 lecture', '/activity/sebesta-chapter-02')
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, gettingToKnowEachOtherLink())}
			<li>Within {oreillyPlaylistWeb()} read “Learning Web Development” Preface, Chapter 1, and Chapter 2</li>
			<li>Read chapter 2 of “Programming The World Wide Web” (Sebesta)</li>
			<li>Review our “Programming The World Wide Web” (Sebesta) {sebestaChapter2Lecture()}</li>
			<li>Complete {toolsOfTheTradeLink()}{estimated('3 hours')}</li>

			{initialPost(sprint)}
			<li>Read chapter 1 of Sebesta and review the associated {sebestaChapter1Lecture()}</li>
			<li>Complete {htmlLink()} - Part 1</li>
			{standardActivitiesClosing(sprint, gettingToKnowEachOtherLink(), '6 hours')}
		</ol>
	</div> )
}

// Certified for FA22 (08/16/22)
// Todo: Strongly consider removing Sebesta book by:
//     (1) recreating required material that is only available from the book and 
//     (2) by updating quizzes. 


