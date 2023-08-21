import React from 'react'
import { NavLink } from 'react-router-dom'

import { getClass } from '../DataAndAPIs/Classes'

import { oreillyPlaylistICS, CommandLine, IntroducingPythonSampleCode } from '../DataAndAPIs/Links'

import { scrumIntro, learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated } from './AL00000Sprint00'
import { HelloWorldPythonLink } from '../Activities/HelloWorld'
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
		<br />
		<p>Programming Together: “HelloWorld with Python”</p>
	</div> )
}

export const list20000Sprint01 = (sprint) => {
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, HelloWorldPythonLink())}

			<li>Read “Computer Science Illuminated” chapter 11 File Systems and Directories</li>
			<li>Review our “Computer Science Illuminated” <NavLink to='/activity-dale/11'>chapter 11 lecture</NavLink> and be prepared for a scrum team discussion</li>
			<li>Complete {toolsOfTheTradeLink()}{estimated('3 hours')}</li>

			<li>Review {CommandLine()}</li>
			{initialPost(sprint)}

			<li>Read Computer Science Illuminated chapter 1, review our <NavLink to='/activity-dale/1'>chapter 1 lecture</NavLink>, and be prepared for a scrum team discussion</li>
			<li>Within {oreillyPlaylistICS()} read “Introducing Python” Preface through Chapter 2 while reviewing “quotes.py” from the {IntroducingPythonSampleCode()}</li>
			{standardActivitiesClosing(sprint, HelloWorldPythonLink(), '3 hours')}
		</ol>
	</div> )
}

// Certified for FA22 (08/27/2022)
// Todo: Add good feedback answer to lab 1 question 5 to see if we can do this on other important questions. 

// Certified for SP23 (01/02/23)
// Todo: Strongly consider replacing hello world Python with hello world web so that students do not have to switch 
//     back and forth between languages so many times. 

// Todo: Strongly consider hiding blackboard sprint sections 24 hours after sprint is due. It seem like a good 
//     enforcement of no late assignments? Try it with one or two classes? Maybe 48 hours first time?




