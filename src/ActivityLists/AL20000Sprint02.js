import React from 'react'
import { NavLink } from 'react-router-dom'

import { oreillyPlaylistICS } from '../Links'
import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivities, InitialPost, StandardActivitiesClosing, Closing } from './AL00000Sprint02'
import { ProgrammingActivity, ReviewProgrammingActivity, ToolsOfTheTrade } from './ProgrammingAssignments'
import { GettingToKnowEachOther, HTMLProgrammingPart1 } from './ProgrammingAssignments'
import { CommandLine, SequenceSelectionAndRepetition } from '../Links'

export const al20000Sprint02 = () => {
	return (

<div>
<h5>Sprint 2: Numbering Systems, Data Representation, HTML, Cascading Style Sheets, and more Tools of the Trade</h5>

<p>Welcome to sprint 2 of Introduction to Computer Science. In sprint 2 we are going to continue our journey into data
representation and also take look at some of the key technologies that make up the Web. Our sprint activities will 
include a detailed look at two of those technologies by introducing HyperText Markup Language (HTML) and Cascading Style 
Sheets (CSS).</p>

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Develop browser based HTML5 applications that utilize common HTML and CSS</li>
	<li>Utilize important software developer tools and services create, update, and deploy basic software applications</li>
	<li>Understand and utilize numbering systems</li>
	<li>Understand sequences, selections, and loops (repetition)</li>
	<li>Identify, define, and discuss data representation, programming, and algorithmic thinking</li>
</ul> 

{ActivitiesListIntro()}
<ol>
	{StandardActivities(GettingToKnowEachOther)}

	<li>Review our {oreillyPlaylistICS()} playlist</li>
	<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” The Information Layer and review our associated <NavLink to='/activity-dale/2'>lecture</NavLink></li>
	{ReviewProgrammingActivity(ToolsOfTheTrade, '1')}
	<li>Review {SequenceSelectionAndRepetition()}</li>
	{InitialPost(2)}
	<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” Data Representation and review our associated <NavLink to='/activity-dale/3'>lecture</NavLink></li>
	<li>Review {CommandLine()}</li>
	{ProgrammingActivity(HTMLProgrammingPart1, '4')}

	{StandardActivitiesClosing(GettingToKnowEachOther)}
</ol>
{Closing()}

{/* Programming Together: “HelloWorld Plus for the Web” and “HelloWorldPlus with Pictures” */}
</div> )
};

// Add Introducing Python Preface and Chapters 1 through 4
// Todo: Verify "final comments" were removed from all assignments.
// Todo: Add Git/GitHub activity / tutorial. 
// Update quiz question "The Unicode encoding scheme..."
// Update/fix quiz question "How many characters can be represented by the Unicode character set?"... it is a bad answer and a duplicate question for some. 
// Todo: Consider lining up certain discussion topics with Friendly Conversation Topics.