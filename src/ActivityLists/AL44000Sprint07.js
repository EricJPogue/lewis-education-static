import React from 'react'

import { LearningObjectivesIntro, ActivitiesListIntro, InitialPost, Closing } from './AL00000Sprint03'
import { StandardActivitiesWithLinkAndSprint, StandardActivitiesClosingWithLinkAndSprint } from './AL00000Sprint05'
import { finalProjectSprint7Link } from '../Activities/FinalProject'
import { introductionToReactLink } from '../Activities/IntroductionToReact'
import { oreillyPlaylistSE, internalLink } from '../Links'

export const al44000Sprint07 = () => {
	return ( <div>
		<h5>Sprint 7: Design Patterns, React, and Final Project</h5>

		<p>Welcome to sprint 7. This sprint will see us continuing to work on our final project, optimizing your team’s 
		Agile processes, leaning about React, and looking at Design Patterns.</p>

		{LearningObjectivesIntro()}
		<ul style={{listStyleType:'square'}}>
			<li>Utilize your knowledge of Agile development and Saas to deliver sprint backlog stories</li>
			<li>Understand Design Patterns with a particular focus on the Model-View-Controller pattern</li>
			<li>Delivery a basic React application in Azure</li>
			<li>Understand Application architecture particularly as it relates to Object-Oriented Programming and Databases</li>
		</ul>

		{list44000Sprint07()}
		{Closing()}
	</div> )
}

const list44000Sprint07 = () => {
	const reactProgrammingTogether = () => { return internalLink('React on Azure', '/activity-config/react-on-azure')}
	const sprint = 7
	return ( <div>
		{ActivitiesListIntro(sprint)}
		<ol>
			{StandardActivitiesWithLinkAndSprint(sprint, finalProjectSprint7Link(), oreillyPlaylistSE())}
			<li>Read Fox Chapter 11 on Design Patterns</li>
			<li>Within {oreillyPlaylistSE()} read “Design Patterns” through chapter 1</li>
			{InitialPost()}		
			<li>Complete Introduction to React {introductionToReactLink()}</li>	
			<li>Complete {reactProgrammingTogether()} programming together tutorial</li>
			{StandardActivitiesClosingWithLinkAndSprint(sprint, finalProjectSprint7Link(), '10 hours')}
		</ol>
	</div> )
}

// Todo: The following line was removed SP22. Consider if it should be re-add in some form. 
// <li>Complete <NavLink to='/activity-architecture/application-architecture-part1'>Application Architectures, Object-Oriented Programming, and Databases - Part 1</NavLink></li>
