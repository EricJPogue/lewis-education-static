import React from 'react'
import { NavLink } from 'react-router-dom'

import { oreillyPlaylist } from './AL20000Sprint01'
import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivities, InitialPost, StandardActivitiesClosing, Closing } from './AL00000Sprint02'
import { ProgrammingActivity, ReviewProgrammingActivity, ToolsOfTheTrade } from './ProgrammingAssignments'
import { GettingToKnowEachOther, HTMLProgrammingPart1 } from './ProgrammingAssignments'

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
	<li>Identify, define, and discuss data representation</li>
	<li>Identify and classify Internet, Web, and distributed applications</li>
	<li>Develop browser based HTML5 applications that utilize common HTML and CSS</li>
	<li>Utilize important developer tools and services create, update, and deploy basic software applications</li>
</ul> 

{ActivitiesListIntro()}
<ol>
	{StandardActivities(GettingToKnowEachOther)}

	<li>Review our {oreillyPlaylist()} playlist</li>
	<li>Within {oreillyPlaylist()} read “Computer Science Illuminated” The Information Layer and review our associated <NavLink to='/activity-dale/2'>lecture</NavLink></li>
	{ReviewProgrammingActivity(ToolsOfTheTrade)}
	{InitialPost(2)}
	<li>Within {oreillyPlaylist()} read “Computer Science Illuminated” Data Representation and review our associated <NavLink to='/activity-dale/3'>lecture</NavLink></li>
	{ProgrammingActivity(HTMLProgrammingPart1, '4')}

	{StandardActivitiesClosing(GettingToKnowEachOther)}
</ol>
{Closing()}

{/* Programming Together: “HelloWorld Plus for the Web” and “HelloWorldPlus with Pictures” */}
</div> )
};

// Todo: Add Git/GitHub activity / tutorial. 