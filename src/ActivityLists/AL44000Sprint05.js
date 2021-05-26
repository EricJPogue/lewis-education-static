import React from 'react'
import { NavLink } from 'react-router-dom'

import { FinalProjectProposal, FinalProjectSprint0, start, complete } from './ProgrammingAssignments'
const programmingAssignment = FinalProjectSprint0

export const al44000Sprint05 = () => {
	return (

<div>
	<h4>Software Engineering</h4>
	<h5>Sprint 5: Software Maintenance, Final Project Proposal, and production Azure Site Setup</h5>

	<p>Welcome to sprint 5. This sprint marks the start of our final project. Think of this sprint as your final project
	sprint 0 (of 3). In this sprint you will be defining your final project in terms Epics and User Stories, submitting
	them as part of Lab 5, and sharing them with your classmates' as part of Discussion Board 5. If you would like to
	work on your final project with a partner, this will also be the time for you to find a partner.</p>

	<p>Now that we have demonstrated our ability to work in a HTML, CSS, JavaScript, Bootstrap, and Node.js software as
	a service (Saas) environment, we will be setting up the production environment for our final project and migrating
	all of our previous application/lab assignments to that new site.</p>

	<p>Finally, we will be continuing our software engineering process knowledge journey by studying software
	maintenance.</p>

	<p>By the end of sprint 5 we will be able to:</p>
	<ul style={{ listStyleType: 'square' }}>
		<li>Utilize our knowledge of Agile requirements to develop our final project proposal utilizing Epics and
		Stories</li>
		<li>Setup our production Azure Node.js site for our final project and migrate all of our previous application to
		the new site</li>
		<li>Fully test and verify our production site and its applications</li>
		<li>Explain why change is inevitable for software systems and describe the processes involved in software
		evolution</li>
		<li>Assess whether a legacy system should be scrapped, maintained, re-engineered or replaced</li>
	</ul>
	<p>Below is the list of activities that we will need to complete this sprint.</p>
	<ol>
		<li>Stay focused on the due dates by reviewing our course calendar <NavLink to='/calendar/5'>[link]</NavLink></li>
		<li><em>Review Lab 5, Quiz 5, Discussion 5, Reflection 5, and Lab Demo</em></li>
		<li>{start(FinalProjectProposal)}</li>
		<li>{start(programmingAssignment)}</li>
		{/* The above items should be consistent across classes. */ }

		<li>Read Chapter 9 of Fox on Software Maintenance</li>
		<li>Review the Agile Alliance site <a href='https://www.agilealliance.org/agile-essentials/' target='_blank' rel='noopener noreferrer'>[link]</a>, analyze
			“Agile 101”, and review the “Agile Glossary”</li>
		<li>Enhance you final project by providing Agile Epics and Stories that describe the application</li>
		<li><em>Make your initial Discussion post by the middle of the sprint</em></li>
		<li>Complete your personal Azure based Node.js website and migrate all of your previous application to the new site</li>
		<li>Set up your team’s final project production site and deploy your Final Project Proposal and “Health Insurance Risk Calculator”</li>
		<li>Create and execute a test plan on the site that verifies that the site and all applications</li>

		{/* The items below should be consistent across classes. */ }
		<li>{complete(FinalProjectProposal)}</li>
		<li>{complete(programmingAssignment)}</li>
		<li><em>Complete Discussion 5, Lab 5, Quiz 5, and Reflection 5</em></li>
	</ol>

	<p>If you are struggling, remember to reach out to your Scrum teammates early and often for help. Also, be sure to 
	periodically check for new programming together tutorials <NavLink to='/activity/programming-together'>[link]</NavLink>.</p>
	{extras()}
</div>

	)
}

// Todo: Add sprint planning participation points to lab.
// Todo: Fix or remove quiz question “Which of the following are advantages of software inspections over testing?”
// Todo: Fix quiz question “These are tests to show whether the software operates as the customer intended”... should be validate.
// Todo: Fix quiz question “Why do maintenance costs increase as software as maintained”... order of questions.
// Todo: Add multiple-choice question on refactoring vs re-engineering.
// Todo: Add multiple-choice question on “Describe the similarities and differences normally observed when maintaining a
//     software product using a Waterfall vs an Agile process.”
// Todo: Add lots of links from the Agile Alliance to various activity lists.
// Todo: Integrate Software Maintenance, Support, and Metrics into all appropriate classes.
// Todo: Consider doing the same thing for testing.

const extras = () => {
	return (<div>	
		<p>Additional suggested activities:</p>
		<ul style={{listStyleType:'square'}}>
			<li>Review “Software Maintenance &amp; Support” <a href='https://lewiseducation.blob.core.windows.net/software-engineering/software-maintenance-and-support.mp4' target='_blank' rel='noopener noreferrer'>[link]</a></li>
			<li>Review “Software Metrics” <a href='https://lewiseducation.blob.core.windows.net/software-engineering/software-engineering-metrics.mp4' target='_blank' rel='noopener noreferrer'>[link]</a></li>
		</ul>
	</div>)
}
