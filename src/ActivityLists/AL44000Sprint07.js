import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing } from './AL00000Sprint00'

import { finalProjectSprint7Link } from '../Activities/FinalProject'
import { introductionToReactLink } from '../Activities/IntroductionToReact'
import { oreillyPlaylistSE, internalLink } from '../DataAndAPIs/Links'

export const al44000Sprint07 = () => {
	const sprint = 7
	return ( <div>
		<h5>Sprint 7: Final Project, Design Patterns, and React</h5>

		<p>Welcome to sprint 7. This sprint will see us continuing to work on our final project, optimizing your team’s 
		Agile processes, leaning about React, and looking at Design Patterns.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Utilize your knowledge of Agile development and Saas to deliver sprint backlog stories</li>
			<li>Understand Design Patterns with a particular focus on the Model-View-Controller pattern</li>
			<li>Delivery a basic React application in Azure</li>
			<li>Understand Application architecture particularly as it relates to Object-Oriented Programming and Databases</li>
		</ul>

		{list44000Sprint07(sprint)}
		{closing(sprint)}
	</div> )
}

export const list44000Sprint07 = (sprint) => {
	const reactProgrammingTogether = () => { return internalLink('React on Azure', '/activity-config/react-on-azure')}
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, finalProjectSprint7Link(), oreillyPlaylistSE())}
			<li>Read Chapter 10 of Fox on Project Management, Scrum, Pairs, and Version Control Systems</li>

			{initialPost(sprint)}
			<li>Complete Introduction to React {introductionToReactLink()}</li>	
			<li>Complete {reactProgrammingTogether()} programming together tutorial</li>
			{standardActivitiesClosing(sprint, finalProjectSprint7Link(), '8 hours')}
		</ol>
	</div> )
}

// Certified for SP22 (04/08/2022)

// Todo: Determine if 6, 8, or 10 hours would be the most appropriate to require on the final project. In SP22 I 
// reduced it to 8 hours based on the fact that Easter Break was in sprint 7 and consumed Thursday, Friday, and Monday.

// Todo: Consider adding back in Architecture lecture or removing SQL questions from quiz.
// Todo: Make sure that in sprints 7 & 8 that “individual” lab questions are identified. 