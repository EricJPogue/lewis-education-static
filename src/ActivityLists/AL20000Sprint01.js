// BugBug: Remove second Discussion Board from sprint 1.

import React from 'react'
import { NavLink } from 'react-router-dom'

import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivities, InitialPost, StandardActivitiesClosing, ScrumIntro, Closing } from './AL00000Sprint01'
import { ProgrammingActivity, ToolsOfTheTrade, HelloWorldWithPython, NumberingSystemsWithPython } from './ProgrammingAssignments'
import { CommandLine } from '../Links'
import { oreillyPlaylistICS } from '../Links'

const computerScienceIlluminated = () => { return( <a href='https://learning.oreilly.com/playlists/c64af15a-7918-4898-9488-8d573674a2dc' target='_blank' rel='noopener noreferrer'>Computer Science Illuminated</a> ) }


const sequenceSelectionAndRepetition = () => { return( <a href='https://edu.gcfglobal.org/en/computer-science/sequences-selections-and-loops/1/' target='_blank' rel='noopener noreferrer'>Sequences, selections, and loops (repetition)</a> ) }


export const al20000Sprint01 = () => {
	return ( <div>

<h5>Sprint 1: Getting Started, The Big Picture, Files Systems, and Tools of the Trade</h5>

<p>Welcome to Introduction to Computer Science! In this course we will be exploring the field of computer 
science. The course will include an overview of computer architecture, software engineering, data organization, 
networking, and security. Together we will also explore algorithms, abstractions, computational 
problem solving, and programming.</p>

{ScrumIntro()}

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Effectively participate in a blended classroom environment and as part of a scrum team</li>
	<li>Describe the concept of abstraction</li>
	<li>Identify, define, and discuss numbering systems</li>
	<li>Begin to understand representation, programming, algorithmic thinking, and design</li>
	<li>Utilize important developer tools to create and update basic software applications</li>
</ul>

{ActivitiesListIntro()}
<ol>
	{StandardActivities(HelloWorldWithPython)}

	<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” chapter 11 File Systems and Directories</li>
	<li>Review our “Computer Science Illuminated” <NavLink to='/activity-dale/11'>chapter 11 lecture</NavLink> and be prepared for a scrum team discussion</li>
	{ProgrammingActivity(ToolsOfTheTrade)}
	<li>Review {sequenceSelectionAndRepetition()}</li>

	{InitialPost()}

	<li>Read {computerScienceIlluminated()} chapter 1, review our <NavLink to='/activity-dale/1'>chapter 1 lecture</NavLink>, and be prepared for a scrum team discussion<sup> ~2 hours</sup></li>
	{ProgrammingActivity(HelloWorldWithPython)}
	{ProgrammingActivity(NumberingSystemsWithPython)}

	{StandardActivitiesClosing()}
</ol>

{Closing()}
{Extras()}

</div> )
}

const Extras = () => {
	return (<div>	
		<p>Additional suggested activities:</p>
		<ul style={{listStyleType:'square'}}>
			<li>{CommandLine()} from W3C</li>

		</ul>
	</div>)
}


