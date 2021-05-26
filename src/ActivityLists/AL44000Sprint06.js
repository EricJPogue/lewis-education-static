import React from 'react'
import { NavLink } from 'react-router-dom'

import { FinalProjectSprint1, start, complete } from './ProgrammingAssignments'
const programmingAssignment = FinalProjectSprint1

export const al44000Sprint06 = () => {
	return (

<div>
	<h4>Software Engineering</h4>
	<h5>Sprint 6: Project Management, Serverless Computing, and Final Project</h5>

	<p>Welcome to sprint 6. This sprint will see us splitting our time between working on sprint 1 of our final 
		project, implementing our first serverless computing services utilizing Azure Functions, and learning 
		more about project management.</p>

	<p>By the end of this sprint we will be able to:</p>
	<ul style={{listStyleType:'square'}}>
		<li>Utilize your knowledge of Agile development and Saas to deliver the first features of our final project</li>
		<li>Understand where serverless computing fits in to modern software architecture</li>
		<li>Write your first serverless computing application utilizing Azure Functions</li>
		<li>Understand Project Management, Scrum, Pairs, and Version Control Systems</li>
		<li>Understand the basics of Scaled Agile</li>
	</ul>
	<p>Below is the list of activities that we will need to complete this sprint.</p>
	<ol>
		<li>Stay focused on the due dates by reviewing our course calendar <NavLink to='/calendar/6'>[link]</NavLink></li>
		<li><em>Review Lab 6, Quiz 6, Discussion 6, Reflection 6, and Lab Demo</em></li>
		<li>{start(programmingAssignment)}</li>
		{/* The above items should be consistent across classes. */}

		<li>Compete your sprint 0 Review and Retrospective</li>
		<li>Read Chapter 10 of Fox on Project Management, Scrum, Pairs, and Version Control Systems</li>

		<li>Within O’Reilly Books do a search for “Azure Functions” and “Serverless Computing” and document the best resources</li>
		<li>Analyze the following cloud services material:
		<ul style={{listStyleType:'square'}}>
			<li>Azure Functions
				<a href='https://azure.microsoft.com/en-us/overview/serverless-computing/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
			<li>Google Cloud Functions
				<a href='https://cloud.google.com/functions' target='_blank' rel='noopener noreferrer'>[link]</a></li>
			<li>AWS Lambda 
				<a href='https://aws.amazon.com/lambda/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
		</ul></li>

		<li><em>Compete your initial Discussion post by the middle of the sprint</em></li>

		<li>Complete Programming Together with “Azure Functions with VS Code and JavaScript” and build your <em>personal</em> serverless function</li>
		<li>Within O’Reilly Books read “Scaling Software Agility: Best Practices for Large Enterprises” chapters 1 and 
			2 focussing on “Assumptions Underlying the Model”</li>
		<li>Complete sprint 2 planning</li>
		<li>Review Programming Together with “Deploying Node.js on Microsoft Azure”</li>

		{/* The items below should be consistent across classes. */ }
		<li>{complete(programmingAssignment)}</li>
		<li><em>Complete Discussion 6, Lab 6, Quiz 6, and Reflection 6</em></li>
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