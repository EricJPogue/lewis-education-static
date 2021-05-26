import React from 'react'
import { NavLink } from 'react-router-dom'

import { FinalProjectSprint2, start, complete } from './ProgrammingAssignments'
const programmingAssignment = FinalProjectSprint2

export const al44000Sprint07 = () => {
	return (

<div>
	<h4>Software Engineering</h4>
	<h5>Sprint 7: Design Patterns, Model-View-Controller, Application Architecture, and Final Project</h5>

	<p>Welcome to sprint 7. Or should I say sprint 2 of your final project? This sprint will see us continuing to work 
	on our final project, optimizing your team’s Agile processes, and looking at the important topic of Design Patterns.</p>

	<p>By the end of this sprint we will be able to:</p>
	<ul style={{listStyleType:'square'}}>
		<li>Utilize your knowledge of Agile development and Saas to deliver your sprint 2 backlog stories</li>
		<li>Understand Design Patterns with a particular focus on the Model-View-Controller pattern</li>
		<li>Delivery a basic React application in Azure</li>
		<li>Understand Application architecture particularly as it relates to Object-Oriented Programming and Databases</li>
	</ul>
	<p>Below is the list of activities that we will need to complete this sprint.</p>
	<ol>
		<li>Stay focused on the due dates by reviewing our course calendar <NavLink to='/calendar/7'>[link]</NavLink></li>
		<li><em>Review Lab 7, Quiz 7, Discussion 7, Reflection 7, and Lab Demo</em></li>
		<li>{start(programmingAssignment)}</li>
		{/* The above items should be consistent across classes. */ }

		<li>Complete your team’s sprint 1 Review and Retrospective</li>
		<li>Focus your energy on delivering and testing your sprint 2 backlog stories</li>

		<li>Read Fox Chapter 11 on Design Patterns</li>
		<li>Within O’Reilly Books read “Design Patterns: Elements of Reusable Object-Oriented Software” through 
			chapter 1 focussing on “Guide to Readers” and “Model/View/Controller”</li>
			
		<li>Invest 30 minutes to understand the basics of React:</li>
		<ul style={{listStyleType:'square'}}>
			<li>Briefly review React.org <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
			<li>Scan “Learning React, 2nd Edition” by Eve Porcello and Alex Banks chapters 1, 2, and 3<a href='https://learning.oreilly.com/library/view/learning-react-2nd/9781492051718/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
			<li>Scan the React tutorial from W3C <a href='https://www.w3schools.com/react/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
			<li>Briefly review “Create your fist React app” from “Azure Static Web Apps”<a href='https://aka.ms/swadocs' target='_blank' rel='noopener noreferrer'>[link]</a></li>
		</ul>
		<li>Individually complete Programming Together with “React on Azure” <NavLink to='/activity-config/react-on-azure'>[video]</NavLink></li>
		<li><em>Compete your initial Discussion post by the middle of the sprint</em></li>
		<li>Complete “Application Architectures, Object-Oriented Programming, and Databases - Part 1” <NavLink to='/activity-architecture/application-architecture-part1'>[video]</NavLink></li>

		<li>Complete sprint 3 planning with your final project team</li>

		{/* The items below should be consistent across classes. */ }
		<li>{complete(programmingAssignment)}</li>
		<li><em>Complete Discussion 7, Lab 7, Quiz 7, Reflection 7, and Lab Demo</em></li>
	</ol>
	
	<p>If you are struggling, remember to reach out to your Scrum teammates early and often for help. Also, be sure to 
	periodically check for new programming together tutorials <NavLink to='/activity/programming-together'>[link]</NavLink>.</p>
	{extras()}
</div>

	)
}

const extras = () => {
	return (null)
}

// Todo: Remove duplicate question “Which of the following is FALSE relating to Azure Functions”.