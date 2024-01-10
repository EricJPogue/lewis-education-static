import React from 'react'

import { scrumIntro, learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, estimated, closing } from './AL00000Sprint00'
import { getModuleDescription } from '../DataAndAPIs/ClassSections'
import { internalLink } from '../DataAndAPIs/Links'

import { matchMakerGoLink } from '../Activities/Matchmaker'
import { toolsOfTheTradeLink } from '../Activities/ToolsOfTheTrade'
import { HelloWorldWebLink } from '../Activities/HelloWorld' 
import { HelloWorldGoLink } from '../Activities/HelloWorld'

import { oreillyPlaylistAF } from '../DataAndAPIs/Links'


export const al44500Sprint01 = () => { 
	const sprint = 1
	return ( <div>
		<h5>Sprint {sprint}: {getModuleDescription(sprint-1)}</h5>
		
		<p>Does the potential of building beautiful and inspirational software intrigue you? Have you ever wondered how 
		to elevate your software development skills beyond basic classes and functions? If these questions excite you,
		you are in the right place.</p>

		<p><em>Welcome to Application Frameworks!</em> This course builds on the software development basics you 
		already know while introducing you to the world of application frameworks and modern development techniques. 
		Over the coming weeks you will master functional programming principles, delve into cloud-native application 
		development, and harness the power of popular frameworks like React to create exciting new software 
		applications.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Effectively participate in a blended classroom environment and as part of a Scrum team</li>
			<li>Compare and contrast key software development language and environment features</li>
			<li>Explain why agile development and scrum have impacted our choice of programming techniques and languages</li>
			<li>Explain why the prevalence and complexity of multithreaded programming has impacted our choice of techniques and languages</li>
			<li>Understand the Go language and how it compares with other languages</li>
		</ul>

		{scrumIntro()}

		{list44000Sprint01(sprint)}
		{closing(sprint)}	
	</div> )
}

export const list44000Sprint01 = (sprint) => {
	const conceptsAndPractices = () => { return internalLink('Object-Oriented Programming Concepts and Practices', '/activity-oop/concepts-and-practices') }

	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, matchMakerGoLink())}
			<li>Complete {HelloWorldWebLink()}</li>
			<li><em>Complete the Introduction assignment by making your post and responding to at least two of your classmates</em></li>

			<li>Review {conceptsAndPractices()}</li>
			<li>Within {oreillyPlaylistAF()} read “Introducing Go” chapters 1 though 6 </li>
			
			{initialPost(sprint)}
			<li>Complete {toolsOfTheTradeLink()} including Go{estimated('2 hours')}</li>
			<li>Complete {HelloWorldGoLink()}</li> 

			{standardActivitiesClosing(sprint, matchMakerGoLink(), '6 hours')}
		</ol>
	</div> )
}


// BugBug: There is no Programming Together playlist for this class so the closing link does not work. 