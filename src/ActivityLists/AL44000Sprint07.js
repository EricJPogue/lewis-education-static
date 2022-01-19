import React from 'react'
import { NavLink } from 'react-router-dom'

import { LearningObjectivesIntro, ActivitiesListIntro, InitialPost } from './AL00000Sprint03'
import { Closing } from './AL00000Sprint06'
import { StandardActivities, StandardActivitiesClosing } from './AL00000Sprint07'

import { oreillyPlaylistSE } from '../Links'
import { Start_FinalProjectSprint7, Complete_FinalProjectSprint7 } from '../Activities/FinalProject'


export const al44000Sprint07 = () => {
	const sprint = 7
	return (

<div>
	<h5>Sprint 7: Design Patterns, Model-View-Controller, Application Architecture, and Final Project</h5>

	<p>Welcome to sprint 7. This sprint will see us continuing to work on our final project, optimizing your team’s 
	Agile processes, leaning about React, and looking at Design Patterns.</p>

	{LearningObjectivesIntro()}
	<ul style={{listStyleType:'square'}}>
		<li>Utilize your knowledge of Agile development and Saas to deliver sprint backlog stories</li>
		<li>Understand Design Patterns with a particular focus on the Model-View-Controller pattern</li>
		<li>Delivery a basic React application in Azure</li>
		<li>Understand Application architecture particularly as it relates to Object-Oriented Programming and Databases</li>
	</ul>

	{ActivitiesListIntro()}
	<ol>
		{StandardActivities(Start_FinalProjectSprint7(), oreillyPlaylistSE(), sprint)}
		<li>Complete your team’s sprint 6 Review and Retrospective</li>
		<li>Focus your energy on delivering and testing your sprint 7 backlog stories</li>
		<li>Read Fox Chapter 11 on Design Patterns</li>
		<li>Within {oreillyPlaylistSE()} read “Design Patterns: Elements of Reusable Object-Oriented Software” through 
			chapter 1 focussing on “Guide to Readers” and “Model/View/Controller”</li>
			
		<li>Review the following resources on the basics of React:</li>
		<ul style={{listStyleType:'square'}}>
			<li>Scan <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>React.org</a></li>
			<li>Within {oreillyPlaylistSE()} scan “Learning React, 2nd Edition” chapters 1, 2, and 3</li>
			<li>Scan the <a href='https://www.w3schools.com/react/' target='_blank' rel='noopener noreferrer'>React tutorial</a> from W3C </li>
			<li>Review “Create your fist React app” from <a href='https://aka.ms/swadocs' target='_blank' rel='noopener noreferrer'>Azure Static Web Apps</a></li>
		</ul>
		<li>Individually complete Programming Together with <NavLink to='/activity-config/react-on-azure'>React on Azure</NavLink></li>
		
		{InitialPost()}			
		<li>Complete <NavLink to='/activity-architecture/application-architecture-part1'>Application Architectures, Object-Oriented Programming, and Databases - Part 1</NavLink></li>
		<li>Complete backlog grooming in preparation for sprint 8 planning</li>

		{StandardActivitiesClosing(Complete_FinalProjectSprint7())}
	</ol>
	{Closing()}
</div>

	)
}
