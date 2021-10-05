import React from 'react'
import { NavLink } from 'react-router-dom'

import { InitialPost,  } from './AL00000Sprint02'
import { LearningObjectivesIntro, ActivitiesListIntro } from './AL00000Sprint03'
import { StandardActivities, StandardActivitiesClosing, Closing  } from './AL00000Sprint04'

import { oreillyPlaylistSE } from '../Links'

import { HealthRiskCalculatorForTheWeb } from './ProgrammingAssignments'

export const al44000Sprint04 = () => {
	return (

<div>
<h5>Sprint 4: Testing, Test-Driven Development, Express, Server-side Node.js, and working in teams</h5>

<p>Welcome to sprint 4. This sprint we are will be focused on learning about Testing and Test-Driven Development while 
we practice server-side Node.js programming. Although the features of “{HealthRiskCalculatorForTheWeb.name}” are not 
very sophisticated, we will be challenged to implement the features as part of a team utilizing server-side programming
techniques.</p>

<p>It is important to remember that this is our final sprint before we become 100% focused on developing complex 
software as a Agile team in sprints 5 through 8 utilizing our full software-as-a-service (Saas) architecture.</p>

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Utilize client-side HTML, CSS, JavaScript, and Bootstrap to create client applications</li>
	<li>Create and modify basic Node.js, Express, and JavaScript to create server-side applications</li>
	<li>Effectively utilize Microsoft Azure to host Node.js applications</li>
	<li>Work as part of a team utilizing GitHub, Azure, Node.js, and Express</li>
</ul>

{ActivitiesListIntro()}
<ol>
	{StandardActivities(HealthRiskCalculatorForTheWeb, oreillyPlaylistSE(), 4)}
	<li>Deliver “Health Insurance Risk Calculator” <em>as a team</em> using Node.js, Azure, and shared GitHub repository<NavLink to='/activity/repository'>[link]</NavLink></li>
	<li>Read Chapter 8 of Fox on Test-Driven Development and review the associated class lecture <NavLink to='/activity/fox-chapter-08'>[video]</NavLink></li>
	<li>Within {oreillyPlaylistSE()} briefly scan “Web Development with Node and Express” chapters 5 through 14</li>

	{InitialPost(4)}
	<li>Within {oreillyPlaylistSE()} read “Web Development with Node and Express” chapter 15</li>
	<li>Migrate all previous HTML, CSS, and JavaScript applications to Node.js in Azure<sup>~3 hours</sup></li>
	{StandardActivitiesClosing(HealthRiskCalculatorForTheWeb, 4)}
</ol>
{Closing()}
</div>
	)
}

// Todo: Create a new assignment that is Health Insurance Risk Calculator for Node.js and Teams
// Todo: Consider moving from sprint 5 the activity and lab 4 question to move all applications to NodeJS and Azure.
// Todo: Add the instructions for team names if I leave it as a group assignment next semester.
// Todo: From Stephanie: There wasn't really anywhere to take off points if the health app did not work properly, except 
//     for the question where they copy/paste the url. I took off half of those points if it didn't work since it was only 
//     6 pts. Adding a separate question about the requirements/functionality might be better. 
// Todo: Review quiz questions that Ren missed on attempt 3. 