import React from 'react'

import { scrumIntro, learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, estimated, closing } from './AL00000Sprint00'
import { oreillyPlaylistWeb } from '../DataAndAPIs/Links'
import { gettingToKnowEachOtherLink } from '../Activities/WebGettingToKnowEachOther'
import { toolsOfTheTradeLink } from '../Activities/ToolsOfTheTrade'
import { htmlLink } from '../Activities/HTML'

import { HelloWorldWebLink } from '../Activities/HelloWorld'

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
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, gettingToKnowEachOtherLink())}
			<li>Within {oreillyPlaylistWeb()} read “Learning Web Development” Preface, Chapter 1, and Chapter 2</li>
			<li>Complete {HelloWorldWebLink()}{estimated('2 hours')}</li>
			<li>Complete {toolsOfTheTradeLink()}{estimated('2 hours')}</li>
			
			{initialPost(sprint)}
			<li>Complete {htmlLink()} - Part 1</li>
			{standardActivitiesClosing(sprint, gettingToKnowEachOtherLink(), '4 hours')}
		</ol>
	</div> )
}

// Certified for FA22 (08/16/22)
// Certified for FA23 (08/24/23)

