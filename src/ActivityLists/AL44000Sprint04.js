import React from 'react'
import { NavLink } from 'react-router-dom'

import { InitialPost,  } from './AL00000Sprint02'
import { LearningObjectivesIntro, ActivitiesListIntro } from './AL00000Sprint03'
import { StandardActivities, StandardActivitiesClosing, Closing  } from './AL00000Sprint04'

import { oreillyPlaylistSE } from '../Links'

import { HealthRiskCalculatorTeamForTheWeb } from './ProgrammingAssignments'

export const al44000Sprint04 = () => {
	return (

<div>
<h5>Sprint 4: Testing, Test-Driven Development, Express, Server-side Node.js, and working in teams</h5>

<p>Welcome to sprint 4. This sprint we are will be focused on learning about Testing and Test-Driven Development while 
we practice server-side Node.js programming. Although the features of “{HealthRiskCalculatorTeamForTheWeb.name}” are not 
very sophisticated, we will be challenged to implement the features as part of a team utilizing server-side programming
techniques.</p>

<p>It is important to remember that this is our final sprint before we become 100% focused on developing complex 
software as a Agile team in sprints 5 through 8 utilizing our full software-as-a-service (Saas) architecture.</p>

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Utilize client-side HTML, CSS, and JavaScript to create client applications</li>
	<li>Create and modify basic Node.js, Express, and JavaScript to create server-side applications</li>
	<li>Effectively utilize Microsoft Azure to host Node.js applications</li>
	<li>Work as part of a team utilizing GitHub, Azure, Node.js, and Express</li>
</ul>

{ActivitiesListIntro()}
<ol>
	{StandardActivities(HealthRiskCalculatorTeamForTheWeb, oreillyPlaylistSE(), 4)}
	<li>Review standard <NavLink to='/activity/git-commands'>Git commands</NavLink> and <NavLink to='/activity/repository'>Shared GitHub Repository</NavLink> requirements</li>
	<li>Read Chapter 8 of Fox on Test-Driven Development and review the associated class <NavLink to='/activity/fox-chapter-08'>lecture</NavLink></li>
	<li>Within {oreillyPlaylistSE()} briefly scan “Web Development with Node and Express” chapters 5 through 14</li>

	{InitialPost(4)}
	<li>Within {oreillyPlaylistSE()} read “Web Development with Node and Express” chapter 15</li>
	<li>Migrate all previous HTML, CSS, and JavaScript applications to Node.js in Azure<sup>~3 hours</sup></li>
	{StandardActivitiesClosing(HealthRiskCalculatorTeamForTheWeb, 4)}
</ol>
{Closing()}
{extras()}
</div>
	)
}

const extras = () => {
	return (<div>	
		<p>Additional suggested activities:</p>
		<ul style={{listStyleType:'square'}}>
			<li>Within {oreillyPlaylistSE()} watch “Project Management” by Pearson Lesson 1: Why Projects?</li>
			<li>Within {oreillyPlaylistSE()} watch “Project Management” by Pearson Lesson 4: Creating the Project Network</li>
			<li>Within {oreillyPlaylistSE()} watch “Project Management” by Pearson Lesson 5: Duration Estimation and Critical Path</li>
		</ul>
	</div>)
}

// Todo: Consider moving from sprint 5 the activity and lab 4 question to move all applications to NodeJS and Azure.
// Todo: Fix or remove “Use case diagram actors include” quiz 4 question
