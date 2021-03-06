import React from 'react'
import { NavLink } from 'react-router-dom'

import { oreillyPlaylistICS, CommandLine, IntroducingPythonSampleCode } from '../DataAndAPIs/Links'

import { scrumIntro, learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated } from './AL00000Sprint00'
import { HelloWorldPythonLink } from '../Activities/HelloWorld'
import { toolsOfTheTradeLink } from '../Activities/ToolsOfTheTrade'

export const al20000Sprint01 = () => {
	const sprint = 1
	return ( <div>
		<h5>Sprint 1: Getting Started, The Big Picture, Files Systems, and Tools of the Trade</h5>

		<p>Welcome to Introduction to Computer Science! In this course we will be exploring the field of computer 
		science. The course will include an overview of computer architecture, software engineering, data organization, 
		networking, and security. Together we will also explore algorithms, abstractions, computational 
		problem solving, and programming.</p>

		{scrumIntro()}

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Effectively participate in a blended classroom environment and as part of a scrum team</li>
			<li>Define and utilize files, files systems, and Zip files</li>
			<li>Understand the basics of Computer Science</li>
			<li>Describe the concept of abstraction</li>
			<li>Utilize important developer tools to create and update basic software applications</li>
		</ul>

		{list20000Sprint01(sprint)}
		{closing(sprint)}
		<br />
		<p>Programming Together: “HelloWorld with Python”</p>
	</div> )
}

export const list20000Sprint01 = (sprint) => {
	const computerScienceIlluminated = () => { return( <a href='https://learning.oreilly.com/playlists/c64af15a-7918-4898-9488-8d573674a2dc' target='_blank' rel='noopener noreferrer'>Computer Science Illuminated</a> ) }
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, HelloWorldPythonLink())}

			<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” chapter 11 File Systems and Directories</li>
			<li>Review our “Computer Science Illuminated” <NavLink to='/activity-dale/11'>chapter 11 lecture</NavLink> and be prepared for a scrum team discussion</li>
			<li>Complete {toolsOfTheTradeLink()}{estimated('3 hours')}</li>

			<li>Review {CommandLine()}</li>
			{initialPost(sprint)}

			<li>Read {computerScienceIlluminated()} chapter 1, review our <NavLink to='/activity-dale/1'>chapter 1 lecture</NavLink>, and be prepared for a scrum team discussion</li>
			<li>Within {oreillyPlaylistICS()} read “Introducing Python” Preface through Chapter 2 while reviewing “quotes.py” from the {IntroducingPythonSampleCode()}</li>
			{standardActivitiesClosing(sprint, HelloWorldPythonLink(), '3 hours')}
		</ol>
	</div> )
}

// BugBug: Remove second Discussion Board from sprint 1.
// Todo: Consider starting with Web development and then moving to Python. 
// BugBug: Fix true/false and duplicate questions in Quiz 8.
// Todo: Add zipped source code requirement to all Final Project presentation assignments.