import React from 'react'
import { NavLink } from 'react-router-dom';

import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivities, InitialPost, StandardActivitiesClosing, Closing } from './AL00000Sprint02'
import { ProgrammingActivityPlus, AssignmentPortfolioWebsite, HTMLProgrammingParts1And2 } from './ProgrammingAssignments'
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
	{StandardActivities(AssignmentPortfolioWebsite)}

	<li>Read Sebesta chapter 3 on Cascading Style Sheets (CSS) and review the associated <NavLink to='/activity/sebesta-chapter-03'>lecture</NavLink></li>
	<li>Review the Sebesta HTML, CSS, and JavaScript examples <a href='http://sebesta-examples.azurewebsites.net/'>[link]</a></li>
	{oreillyPlaylistWeb()}
	<li>Within Safari Books Online execute searches for HTML, CSS, JavaScript, and Git and save review the results</li>
	<li>Complete “Tools of the Trade - Part 2” <NavLink to='/activity/tools'>[link]</NavLink>~3 hours </li>
	
	<li><em>Make your initial Discussion 2 post by the middle of the sprint</em></li>
	<li>Read chapter 4 of Sebesta on Basic JavaScript and review the associated lecture <NavLink to='/activity/sebesta-chapter-04'>[video]</NavLink></li>
	<li>Complete “HTML Programming - Part 2” from W3C <NavLink to='/activity/html'>[link]</NavLink>~3 hours</li>
	<li>Complete “Getting to Know Each Other” <NavLink to='/activity/getting-to-know-each-other'>[link]</NavLink></li>
	<li>Complete “Azure Free Static Website” <NavLink to='/activity/azure-website'>[link]</NavLink>~3 hours</li>
	<li>Review the Google Maps JavaScript API <a href='https://developers.google.com/maps/documentation/javascript/overview' target='blank' rel='noopener noreferrer'>[link]</a></li>
	<li><em>Complete Discussion 2 by responding to at least two of your classmates’ posts</em></li>
	<li><em>Submit Lab 2, Quiz 2, and Reflection 2</em></li>
</ol>
<p>If you are struggling, remember to reach out to your Scrum teammates early and often for help.</p>
{extras()}
</div>

	)
}

const extras = () => {
	return (<div>	
		<br />
		<p>Additional suggested activities:</p>
		<ul style={{listStyleType:'square'}}>
			<li>Review “Website Creation with GitHub and Microsoft Azure” as needed <NavLink to='/activity/azure-website'>[link]</NavLink></li>
			<li>Review Git Cheat Sheet from GitHub <a href='https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf'
				target='_blank' rel='noopener noreferrer'>[link]</a></li>
		</ul>
	</div>)
}
