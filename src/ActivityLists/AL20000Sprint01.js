// BugBug: Remove second Discussion Board from sprint 1.

import React from 'react'
import { NavLink } from 'react-router-dom'

import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivities, InitialPost, StandardActivitiesClosing, ScrumIntro, Closing } from './AL00000Sprint01'
import { ProgrammingActivity, ToolsOfTheTrade, HelloWorldWithPython } from './ProgrammingAssignments'
import { CommandLine } from '../Links'
import { oreillyPlaylistICS, SequenceSelectionAndRepetition } from '../Links'
import { IntroducingPythonSampleCode } from '../Links'

const computerScienceIlluminated = () => { return( <a href='https://learning.oreilly.com/playlists/c64af15a-7918-4898-9488-8d573674a2dc' target='_blank' rel='noopener noreferrer'>Computer Science Illuminated</a> ) }



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
	<li>Review {SequenceSelectionAndRepetition()}</li>
	<li>Review {CommandLine()} from W3C</li>
	{InitialPost()}

	<li>Read {computerScienceIlluminated()} chapter 1, review our <NavLink to='/activity-dale/1'>chapter 1 lecture</NavLink>, and be prepared for a scrum team discussion<sup> ~2 hours</sup></li>
	{ProgrammingActivity(HelloWorldWithPython)}
	<li>Within {oreillyPlaylistICS()} read “Introducing Python” Preface, Chapter 1, and Chapter 2 while reviewing “quotes.py” from the {IntroducingPythonSampleCode()}</li>

	{StandardActivitiesClosing()}
</ol>

{Closing()}
{Extras()}
</div> )
}

const Extras = () => {
	return (null)
}

// Todo: Consider moving Sequence... to sprint 2. Check assignment for impact.
// Todo: Spread readings out so that we have a reading assignment in sprint 8. Consider moving chapter 5, 13, 15,
// 16, and 17 each back one sprint and consider adding Python and Web development book reading up (possibly
// replacing W3C tutorials). Note that it likely does not make sense to move the Web development chapter before
// networks. I suggested that somewhere, but should reconsider. 
// Add Introducing Python Preface and Chapters 1 through 4
// Add Add something about creating zip files to tools of the trade. 
// Todo: Consider lining up certain discussion topics with Friendly Conversation Topics.