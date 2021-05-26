import React from 'react'
import { NavLink } from 'react-router-dom';

import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivities, InitialPost, StandardActivitiesClosing, ScrumIntro, Closing } from './AL00000Sprint01'
import { ProgrammingActivity, ToolsOfTheTradePart1, HTMLProgrammingPart1, GettingToKnowEachOther, HelloWorldWithPython  } from './ProgrammingAssignments'

export const al24700Sprint01 = (syllabusURL) => {
	return (

<div>
<h5>Sprint 1: The Internet, the Web, Programming with HTML, and Tools of the Trade</h5>

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
	<li>Review our “Programming The World Wide Web” (Sebesta) lecture <NavLink to='/activity/sebesta-chapter-02'>[video]</NavLink> 
		and be prepared for a scrum team discussion</li>
	{ProgrammingActivity(ToolsOfTheTradePart1)}
	{ProgrammingActivity(HTMLProgrammingPart1)}

	{InitialPost()}

	<li>Read chapter 1 of Sebesta and review the associated lecture <NavLink to='/activity/sebesta-chapter-01'>[video]</NavLink></li>
	{ProgrammingActivity(HelloWorldWithPython, 2)}

	{StandardActivitiesClosing(GettingToKnowEachOther)}
</ol>

{Closing()}
</div>

	)
}

