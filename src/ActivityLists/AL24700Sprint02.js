import React from 'react'
import { NavLink } from 'react-router-dom';

import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivities, InitialPost, StandardActivitiesClosing, Closing } from './AL00000Sprint02'
import { ProgrammingActivity, ReviewProgrammingActivity, AlternativeProgrammingActivity, AssignmentPortfolioWebsite, HTMLProgrammingParts1And2, AzureWebsite, ToolsOfTheTrade, FavoriteHobby, Resume } from './ProgrammingAssignments'

import { oreillyPlaylistWeb } from '../Links'

export const al24700Sprint02 = () => {
	return (

<div>
<h5>Sprint 2: Cascading Style Sheets, JavaScript, and the Azure Cloud</h5>

<p>Welcome to sprint 2 of Web and Distributed Programming. In sprint 2 we are going to take a look at the key
technologies that make up Internet and the Web. Our sprint activities will continue to build on our knowledge 
of HTML while adding new Web development capabilities by adding introducing Cascading Style Sheets (CSS) and 
JavaScript.</p>

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Compare and contrast Internet, Web, and distributed applications</li>
	<li>Implement Cascading Style Sheets to enhance web applications</li>
	<li>Understand the basics of JavaScript</li>
	<li>Utilize Git and GitHub along with Microsoft Azure to manage content and deploy web applications</li>
	<li>Begin to understand APIs and toolkits by reviewing the Google Maps JavaScript API</li>
</ul>  

{ActivitiesListIntro()}
<ol>
	{StandardActivities(FavoriteHobby)}
	<li>{AlternativeProgrammingActivity(Resume, FavoriteHobby)}</li>
	<li>Read Sebesta chapter 3 on Cascading Style Sheets (CSS) and review the associated <NavLink to='/activity/sebesta-chapter-03'>lecture</NavLink></li>
	<li>Review our {oreillyPlaylistWeb()} playlist</li>
	{ReviewProgrammingActivity(ToolsOfTheTrade, '1')}
	{ProgrammingActivity(AzureWebsite, '3')} 
	{ProgrammingActivity(AssignmentPortfolioWebsite, '3')}
	
	{InitialPost(2)}
	<li>Read chapter 4 of Sebesta on Basic JavaScript and review the associated lecture <NavLink to='/activity/sebesta-chapter-04'>[video]</NavLink></li>
	{ProgrammingActivity(HTMLProgrammingParts1And2, '3')} 
	<li>Review the Google Maps JavaScript API <a href='https://developers.google.com/maps/documentation/javascript/overview' target='blank' rel='noopener noreferrer'>[link]</a></li>
	{StandardActivitiesClosing(FavoriteHobby)}
</ol>
{Closing()}
</div>

	)
}
