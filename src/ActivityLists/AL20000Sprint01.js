import React from 'react'

import { getClass } from '../DataAndAPIs/Classes'
import { CommandLine, internalLink } from '../DataAndAPIs/Links'
import { scrumIntro, learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated } from './AL00000Sprint00'
import { HelloWorldWebLink } from '../Activities/HelloWorld'
import { toolsOfTheTradeLink } from '../Activities/ToolsOfTheTrade'

export const al20000Sprint01 = () => {
	const classSection = getClass()
	const sprint = 1
	return ( <div>
		<h5>Sprint 1: {classSection.class.modules[sprint-1]}</h5>

		<p>Welcome to Introduction to Computer Science! In this course we will be exploring the field of computer 
		science. The course will cover computer architecture, software engineering, data organization, 
		networking, and security. We will also explore algorithms, abstractions, computational 
		problem-solving, and programming.</p>

		{scrumIntro()}

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Effectively participate in a blended classroom environment and as part of a scrum team</li>
		    <li>Understand the basics of Computer Science</li>
			<li>Define and utilize files, files systems, and Zip files</li>
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
			{standardActivities(sprint, HelloWorldWebLink())}
			<li>Read “Computer Science Illuminated” chapter 11 File Systems and Directories</li>
			<li>Review our “Computer Science Illuminated” {daleChapter11Lecture()} and be prepared for a scrum team discussion</li>
			<li>Complete {toolsOfTheTradeLink()}{estimated('3 hours')}</li>

			<li>Review {CommandLine()}</li>
			{initialPost(sprint)}

			<li>Read Computer Science Illuminated chapter 1, review our {daleChapter1Lecture()}, and be prepared for a scrum team discussion</li>
			{standardActivitiesClosing(sprint, HelloWorldWebLink(), '3 hours')}
		</ol>
	</div> )
}

// Certified for FA22 (08/27/22)
// Certified for SP23 (01/02/23)
// Certified for FA23 (08/23/23)

// Todo: Add good feedback a	nswer to lab 1 question 5 to see if we can do this on other important questions. 



