import React from 'react'
import { NavLink } from 'react-router-dom';

import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivitiesWithLink, InitialPost, StandardActivitiesClosing, Closing } from './AL00000Sprint02'
import { ProgrammingActivity, AssignmentPortfolioWebsite, HTMLProgrammingParts1And2, AzureWebsite, FavoriteHobby } from './ProgrammingAssignments'

import { oreillyPlaylistWeb, internalLink } from '../Links'

import { favoriteHobbyLink } from '../Activities/WebMyFavoriteHobby';
import { ToolsOfTheTradeLink } from '../Activities/ToolsOfTheTrade';
import { webResumeLink } from '../Activities/WebResume';

const sebestaChapter3Lecture = () => { return internalLink('lecture', '/activity/sebesta-chapter-03')}

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
	{StandardActivitiesWithLink(favoriteHobbyLink())}
	<li>Consider substituting {webResumeLink()} (preferred) for {favoriteHobbyLink()}</li>
	<li>Read Sebesta chapter 3 on Cascading Style Sheets (CSS) and review the associated {sebestaChapter3Lecture()}</li>
	<li>Review our {oreillyPlaylistWeb()} playlist</li>
	<li>Review {ToolsOfTheTradeLink()}</li>

{/* START HERE!!!*/}

	{ProgrammingActivity(AzureWebsite, '3')} 
	{ProgrammingActivity(AssignmentPortfolioWebsite, '3')}
	
	{InitialPost(2)}
	<li>Read chapter 4 of Sebesta on Basic JavaScript and review the associated <NavLink to='/activity/sebesta-chapter-04'>lecture</NavLink></li>
	{ProgrammingActivity(HTMLProgrammingParts1And2, '3')} 
	<li>Review the <a href='https://developers.google.com/maps/documentation/javascript/overview' target='blank' rel='noopener noreferrer'>Google Maps JavaScript API</a></li>
	{StandardActivitiesClosing(FavoriteHobby)}
</ol>
{Closing()}
</div>

	)
}
