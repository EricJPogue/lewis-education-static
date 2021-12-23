import React from 'react'
import { NavLink } from 'react-router-dom';

import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivities, InitialPost, StandardActivitiesClosing, ScrumIntro, Closing } from './AL00000Sprint01'
import { ProgrammingActivity, ToolsOfTheTrade, HTMLProgrammingPart1, GettingToKnowEachOther, HelloWorldWithPython  } from './ProgrammingAssignments'

export const al24700Sprint01 = () => {
	return (

<div>
<h5>Sprint 1: The Internet, the Web, HTML, and Tools of the Trade</h5>

<p><em>Welcome to Web and Distributed Programming!</em> I am looking forward to working with you to deliver high 
quality and interesting Internet software applications. We will be working with multiple software development 
languages in industry leading cloud environments to deliver Web applications.</p>

{ScrumIntro()}

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Effectively participate in a blended classroom environment and as part of a Scrum team</li>
	<li>Identify, define, and discuss the Internet and the Web</li>
	<li>Develop browser based HTML5 applications that utilize common HTML elements</li>
	<li>Utilize important developer tools to create and update basic software applications</li>
</ul>

{ActivitiesListIntro()}
<ol>
	{StandardActivities(GettingToKnowEachOther)}

	<li>Read chapter 2 of “Programming The World Wide Web” (Sebesta)</li>
	<li>Review our “Programming The World Wide Web” (Sebesta) <NavLink to='/activity/sebesta-chapter-02'>lecture</NavLink> and be prepared for a scrum team discussion</li>
	{ProgrammingActivity(ToolsOfTheTrade)}
	{ProgrammingActivity(HTMLProgrammingPart1)}

	{InitialPost()}

	<li>Read chapter 1 of Sebesta and review the associated <NavLink to='/activity/sebesta-chapter-01'>lecture</NavLink></li>
	{ProgrammingActivity(HelloWorldWithPython, 2)}

	{StandardActivitiesClosing(GettingToKnowEachOther)}
</ol>

{Closing()}
</div>

	)
}

// Move Final Project Presentation assignment up so that it is between sprint 7 and sprint 8 (instead of after sprint 8).
// Remove last question in Lab 8.
// Todo: Add "grader" standards to Discussions. 
// Todo: Add Git/GitHub activity / tutorial. 
