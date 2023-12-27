import React from 'react'

import { getModuleDescription } from '../DataAndAPIs/ClassSections'
import { CommandLine, internalLink } from '../DataAndAPIs/Links'
import { scrumIntro, learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated } from './AL00000Sprint00'
import { HelloWorldWebPart1Link } from '../Activities/HelloWorld'
import { toolsOfTheTradeLink } from '../Activities/ToolsOfTheTrade'

export const al20000Sprint01 = () => {
	const sprint = 1
	return ( <div>
		<h5>Sprint 1: {getModuleDescription(sprint-1)}</h5>

		<p>Welcome to Introduction to Computer Science! In this course we will be exploring the field of computer 
		science. The course will cover computer architecture, software engineering, data organization, 
		networking, and security. We will also explore algorithms, abstractions, computational 
		problem-solving, and programming.</p> 

		{scrumIntro()}

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Effectively participate in a blended classroom environment and as part of a scrum team</li>
		    <li>Understand the basics of Computer Science</li>
			<li>Define and utilize files, file systems, and Zip files</li>
			<li>Utilize graphical and command line tools to manage files and file systems</li>
			<li>Utilize important developer tools to create and update basic software applications</li>
		</ul>

		{list20000Sprint01(sprint)}
		{closing(sprint)}
	</div> )
}

export const list20000Sprint01 = (sprint) => {
	const daleChapter11Lecture = () => { return internalLink('chapter 11 lecture', '/activity-dale/11') }
	const daleChapter1Lecture = () => { return internalLink('chapter 1 lecture', '/activity-dale/1') }

	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, HelloWorldWebPart1Link())}
			<li>Read “Computer Science Illuminated” chapter 11 File Systems and Directories</li>
			<li>Review our “Computer Science Illuminated” {daleChapter11Lecture()} and be prepared for a scrum team discussion</li>
			<li>Complete {toolsOfTheTradeLink()}{estimated('3 hours')}</li>

			<li>Review {CommandLine()}</li>
			{initialPost(sprint)}

			<li>Read Computer Science Illuminated chapter 1, review our {daleChapter1Lecture()}, and be prepared for a scrum team discussion</li>
			{standardActivitiesClosing(sprint, HelloWorldWebPart1Link(), '3 hours')}
		</ol>
	</div> )
}

// Certified for FA22 (08/27/22)
// Certified for SP23 (01/02/23)
// Certified for FA23 (08/23/23)

// Todo: Consider covering “The Web“ instead of the “The Big Picture”... or maybe it is still too much to cover in 
//     sprint 1 and we should also move “File Systems” to sprint 2. 
// Todo: Move some material to sprint 2. There is too much to cover in the first two weeks, particularly given that 
//     the second Monday is almost always a holiday.
// BugBug: Fix Hello World for the Web Part 1 so that the overall description does NOT include part 2 requirements. 
// Todo: Consider adding HTML Quiz questions.
// Todo: Consider adding CSS Quiz questions.
// Todo: Consider adding licensing topic to all classes. 
// Todo: Consider adding Git/GitHub activity / tutorial. 



