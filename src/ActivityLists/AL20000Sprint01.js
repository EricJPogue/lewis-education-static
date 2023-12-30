import React from 'react'

import { getModuleDescription } from '../DataAndAPIs/ClassSections'
import { CommandLine, internalLink } from '../DataAndAPIs/Links'
import { scrumIntro, learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated } from './AL00000Sprint00'

import { HelloWorldWebPart1Link } from '../Activities/HelloWorld'
import { introductionsWebsiteLink } from '../Activities/IntroductionsWebsite'
import { toolsOfTheTradeLink } from '../Activities/ToolsOfTheTrade'

export const al20000Sprint01 = () => {
	const sprint = 1
	return ( <div>
		<h5>Sprint {sprint}: {getModuleDescription(sprint-1)}</h5>

		<p>Welcome to Introduction to Computer Science! In this course we will be exploring the field of computer 
		science. The course will cover software engineering, computer architecture, data organization, 
		networking, and security. We will also explore algorithms, abstractions, and computational 
		problem-solving.</p> 

		{scrumIntro()}

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Participate in a blended classroom environment and as part of a scrum team</li>
			<li>Utilize HTML to create a website</li>
			<li>Utilize important developer tools like GitHub to create and update software applications</li>
			<li>Effectively utilize files, file systems, and zip files</li>
			<li>Use both graphical and command line tools to manage files and file systems</li>
		</ul>

		{list20000Sprint01(sprint)}
		{closing(sprint)}
	</div> )
}

export const list20000Sprint01 = (sprint) => {
	const daleChapter11Lecture = () => { return internalLink('chapter 11 lecture', '/activity-dale/11') }
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, HelloWorldWebPart1Link())}
			<li>Get to know your scrum team by setting up a team Discord server</li>
			<li>Complete {HelloWorldWebPart1Link()}</li>
			{initialPost(sprint)}

			<li>Read “Computer Science Illuminated” chapter 11 File Systems and Directories and review the associated {daleChapter11Lecture()}</li>
			<li>Review {CommandLine()}</li>
			<li>Complete {toolsOfTheTradeLink()}{estimated('2 hours')}</li>
			{standardActivitiesClosing(sprint, introductionsWebsiteLink(), '3 hours')}
		</ol>
	</div> )
}

// Certified for FA22 on 08/27/22, SP23 on 01/02/23, and FA23 on 08/23/23.
// Certified for SP24 on 12/19/23

// Todo: Consider adding some more quiz bank questions for quiz 1 including topics like command line and tools of the trade.