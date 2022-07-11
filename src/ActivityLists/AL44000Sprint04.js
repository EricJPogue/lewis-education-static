import React from 'react'

import { estimated } from './AL00000Sprint01'
import { LearningObjectivesIntro, ActivitiesListIntro, InitialPost } from './AL00000Sprint03'
import { StandardActivitiesWithLinkAndSprint, StandardActivitiesClosingWithLinkAndSprint, Closing } from './AL00000Sprint04'

import { oreillyPlaylistSE, internalLink, JSONWebServicesTutorial } from '../data/Links'
import { healthRiskCalculatorTeamWebLink } from '../Activities/HealthRiskCalculatorTeam'

export const al44000Sprint04 = () => {
	const foxChapter8Lecture = () => { return internalLink('lecture', '/activity/fox-chapter-08') }
	let sprint = 4
	return ( <div>

<h5>Sprint 4: Testing, Test-Driven Development, Express, Server-side Node.js, and working in teams</h5>

<p>Welcome to sprint 4. This sprint we are will be focused on learning about Testing and Test-Driven Development while 
we practice server-side Node.js programming. Although the features of {healthRiskCalculatorTeamWebLink()} are not 
very complicated, we will be challenged to implement the features as part of a team utilizing server-side programming
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

{ActivitiesListIntro(sprint)}
<ol>
	{StandardActivitiesWithLinkAndSprint(sprint, healthRiskCalculatorTeamWebLink(), oreillyPlaylistSE())}
	<li>Read Chapter 8 of Fox on Test-Driven Development and review the associated class {foxChapter8Lecture()}</li>
	<li>Within {oreillyPlaylistSE()} briefly scan “Web Development with Node and Express” chapters 5 through 14</li>

	{InitialPost(sprint)}
	<li>Migrate all previous HTML, CSS, and JavaScript applications to a personal Node.js website in Azure<sup>~3 hours</sup></li>
	<li>Within {oreillyPlaylistSE()} watch “Project Management” by Jeffrey Pinto Lessons 1 through 5 focussing on:{estimated('2 hours')}</li>
	<ul style={{listStyleType:'square'}}>
			<li>Lesson 1: Why Projects?</li>
			<li>Lesson 4: Creating the Project Network</li>
			<li>Lesson 5: Duration Estimation and Critical Path</li>
	</ul>
	{StandardActivitiesClosingWithLinkAndSprint(sprint, healthRiskCalculatorTeamWebLink(), '6 hours')}
</ol>
{Closing()}
{/*<p>Programming Together: “Deploying Node.js on Microsoft Azure”</p>*/}

{extras()}
</div> )
}

const extras = () => {
	return (<div>	
		<p>Additional suggested activities:</p>
		<ul style={{listStyleType:'square'}}>
			<li>Complete {JSONWebServicesTutorial()}</li>
		</ul>
	</div>)
}

// Todo: Consider sprint planning for sprint 5 and when is should occur.
// Todo: Review backlog grooming and sprint planning expectation for sprint 5. Consider making mandatory attendance for 
// sprint planning starting in sprint 5. Also, review expectations relative to MWF vs TTh classes.   

