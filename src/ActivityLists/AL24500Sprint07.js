import React from 'react'
import { NavLink } from 'react-router-dom'

import { internalLink } from '../Links'
import { estimated } from './AL00000Sprint01'

import { LearningObjectivesIntro, ActivitiesListIntro, InitialPost, Closing } from './AL00000Sprint03'
// import { StandardActivitiesWithLinkAndSprint, StandardActivitiesClosingWithLinkAndSprint } from './AL00000Sprint05'
// import { finalProjectSprint7Link } from '../Activities/FinalProject'
// import { oreillyPlaylistSE, internalLink } from '../Links'

import { ThunderbirdWithJava, FinalProjectProposal, FinalProjectSprint7, start, complete, reviewAndUpdate } from './ProgrammingAssignments'

export const al24500Sprint07 = ( props ) => {
	return ( <div>
		<h5>Sprint 7: Thunderbird, Final Project version 1, and Application Architecture</h5>

		<p><em>Welcome to sprint 7.</em> How time flies. We have two separate programming activities this sprint. The first 
		assignment is Thunderbird. Thunderbird is different than previous assignments in that we will be enhancing an existing
		application rather than creating a new application from scratch. This is more like what you would expect day-to-day in an
		entry level professional programming position. I think you will enjoy learning about and enhancing an existing 
		application.</p>

		<p>The second half of the sprint will be focused on completing version 1 of your Final Project.</p>

		{LearningObjectivesIntro()}
		<ul style={{ listStyleType:'square'}}>
			<li>Develop and enhance intermediate level graphical, distributed, multi-threaded Java applications</li>
			<li>Create View and Model classes that conform to the model-view-controller pattern</li>
			<li>Begin to understand Application Architecture and its relationship to Object-Oriented Programming</li>
		</ul>

		<p>Notice that in this sprint we have two programming assignments. I encourage you to complete Thunderbird by the 
		middle of the sprint so that you can be 100% focused on your final project during the second half of the sprint.</p>

		{list24500Sprint07()}
		{Closing()}
	</div> )
}

const list24500Sprint07 = () => {
	const thunderbirdLite = () => { return internalLink('ThunderbirdLite', '/activity-oop/java-thunderbird-lite')}
	const sprint = 7
	return ( <div>
		{ActivitiesListIntro(sprint)}
		<ol>
			<li>Stay focused on the due dates by reviewing our course calendar <NavLink to='/calendar/7'>[link]</NavLink></li>
			<li><em>Review Lab 7, Quiz 7, Discussion 7, Reflection 7, and Lab Demo</em></li>
			{/* The above items should be consistent across classes. */ }
			<li>{start(ThunderbirdWithJava)}</li>

			<li>Complete {thunderbirdLite()}{estimated('2 hours')}</li>
			<li>Complete “Application Architectures, Object-Oriented Programming, and Databases - Part 1” <NavLink to='/activity-architecture/application-architecture-part1'>[video]</NavLink></li>
			<li>{complete(ThunderbirdWithJava)}</li>

			{InitialPost()}		
			<li>{reviewAndUpdate(FinalProjectProposal)}</li>
			<li>{complete(FinalProjectSprint7)}</li>

			{/* The items below should be consistent across classes. */ }
			<li><em>Complete Discussion 7, Lab 7, Quiz 7, Reflection 7, and Lab Demo</em></li>
		</ol>
	</div> )
}


// Todo: Add Final Project proposals to assignments. 
// Todo: Fix quiz 7 question 'Identify the Python statement that computes the average of the values stored in exam1, 
//     exam2 and exam3" so it does not include 'All of the above.'
// Todo: Remove duplicate quiz 7 question, 'Confidentiality is.'