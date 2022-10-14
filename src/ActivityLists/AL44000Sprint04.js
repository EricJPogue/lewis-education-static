import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated } from './AL00000Sprint00'

import { oreillyPlaylistSE, internalLink, JSONWebServicesTutorial } from '../DataAndAPIs/Links'
import { healthRiskCalculatorTeamWebLink } from '../Activities/HealthRiskCalculatorTeam'

export const al44000Sprint04 = () => {
	let sprint = 4
	return ( <div>
		<h5>Sprint 4: Testing, Test-Driven Development, Application Programming Interfaces, and working in teams</h5>

		<p>Welcome to sprint 4. This sprint we are will be focused on learning about Testing and Test-Driven Development while 
		we practice server-side Node.js programming. Although the features of {healthRiskCalculatorTeamWebLink()} are not 
		very complicated, we will be challenged to implement the features as part of a team utilizing server-side programming
		techniques.</p>

		<p>It is important to remember that this is our final sprint before we become 100% focused on developing complex 
		software as a Agile team in sprints 5 through 8 utilizing our full software-as-a-service (Saas) architecture.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Understand testing and test-driven development</li>
			<li>Implement HTML, CSS, and JavaScript based client web applications that consume Application Programming Interfaces (APIs)</li>
			<li>Create Node.js base server-side applications that implement Application Programming Interfaces (APIs)</li>
			<li>Work as part of a software development team utilizing GitHub, Azure, and Node.js</li>
		</ul>

		{list44000Sprint04(sprint)}
		{closing(sprint)}
	</div> )
}

export const list44000Sprint04 = (sprint) => {
	const foxChapter8Lecture = () => { return internalLink('lecture', '/activity/fox-chapter-08') }
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, healthRiskCalculatorTeamWebLink(), oreillyPlaylistSE())}
			<li>Read Chapter 8 of Fox on Test-Driven Development and review the associated class {foxChapter8Lecture()}</li>
			<li>Within {oreillyPlaylistSE()} briefly scan “Web Development with Node and Express” chapters 5 through 14</li>
			<li>Complete {JSONWebServicesTutorial()}</li>

			{initialPost(sprint)}
			<li>Within {oreillyPlaylistSE()} watch “Project Management” by Jeffrey Pinto Lessons 1 through 5 focussing on:{estimated('2 hours')}</li>
			<ul style={{listStyleType:'square'}}>
					<li>Lesson 1: Why Projects?</li>
					<li>Lesson 4: Creating the Project Network</li>
					<li>Lesson 5: Duration Estimation and Critical Path</li>
			</ul>
			<li>Within {oreillyPlaylistSE()} read “Web Development with Node and Express” chapter 15</li>
			{standardActivitiesClosing(sprint, healthRiskCalculatorTeamWebLink(), '6 hours per team member')}
		</ol>
	</div> )
}

// Certified for FA22 (10/06/2022) 

// BugBug: Fix questions about submitting Node.js textbook work. 

