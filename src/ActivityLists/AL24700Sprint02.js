import React from 'react'
import { estimated } from './AL00000Sprint01'

import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivities, InitialDiscussionPost, StandardActivitiesClosing, Closing } from './AL00000Sprint02'
import { oreillyPlaylistWeb, internalLink } from '../Links'
import { favoriteHobbyLink } from '../Activities/WebMyFavoriteHobby';
import { webResumeLink } from '../Activities/WebResume';
import { azureWebsiteLink } from '../Activities/AzureWebsite';
import { assignmentPortfolioLink } from '../Activities/WebAssignmentPortfolio';
import { htmlLink } from '../Activities/HTML'

const sebestaChapter3Lecture = () => { return internalLink('lecture', '/activity/sebesta-chapter-03')}
const sebestaChapter4Lecture = () => { return internalLink('lecture', '/activity/sebesta-chapter-04')}

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
	{StandardActivities(favoriteHobbyLink())}
	<li>Consider substituting {webResumeLink()} (preferred) for {favoriteHobbyLink()}</li>
	<li>Read Sebesta chapter 3 on Cascading Style Sheets (CSS) and review the associated {sebestaChapter3Lecture()}</li>
	<li>Complete {azureWebsiteLink()}{estimated('3 hours')}</li>
	<li>Complete {assignmentPortfolioLink()}{estimated('3 hours')}</li>
	<li>{InitialDiscussionPost(2)}</li>

	<li>Read chapter 4 of Sebesta on Basic JavaScript and review the associated {sebestaChapter4Lecture()}</li>
	<li>Within {oreillyPlaylistWeb()} read “Learning Web Development” Preface through Chapter 2 while focusing on Command Line functions</li>
	<li>Complete {htmlLink()} - Parts 1 and 2{estimated('3 hours')}</li>
	{StandardActivitiesClosing(favoriteHobbyLink())}
</ol>
{Closing()}
</div>

	)
}


