import React from 'react'

import { InitialPost,  } from './AL00000Sprint02'
import { LearningObjectivesIntro, ActivitiesListIntro } from './AL00000Sprint03'
import { FinalProjectsAndMoreResponsibility, StandardActivities, StandardActivitiesClosing, Closing  } from './AL00000Sprint05'

import { oreillyPlaylistSE } from '../Links'

import { FinalProjectSprint0 } from './ProgrammingAssignments'

export const al44000Sprint05 = () => {
	return (

<div>
	<h5>Sprint 5: Software Maintenance, Final Project Proposal, and production Azure Site Setup</h5>

	<p>Welcome to sprint 5. We will start this sprint by learning about software maintenance. Very quickly we will 
	come to understand that since Agile development has us shipping software to customers every few weeks, nearly all of 
	the work we do in scrum is essentially maintenance.</p>

	{FinalProjectsAndMoreResponsibility()}

	{LearningObjectivesIntro()}
	<ul style={{ listStyleType: 'square' }}>
		<li>Develop our final project proposal</li>
		<li>Utilize Epics and Stories to create a product backlog</li>
		<li>Setup our multiple Saas final project environments</li>
		<li>Explain why change is inevitable for software systems and describe the processes of software evolution</li>
		<li>Assess whether a legacy system should be scrapped, maintained, re-engineered or replaced</li>
	</ul>

	{ActivitiesListIntro()}
	<ol>
		{StandardActivities(FinalProjectSprint0, oreillyPlaylistSE(), 5 )}

		<li>Read Chapter 9 of Fox on Software Maintenance</li>
		<li>Review <a href='https://www.agilealliance.org/agile-essentials/' target='_blank' rel='noopener noreferrer'>Agile Alliance</a> by 
			analyzing “Agile 101” and reviewing the “Agile Glossary”</li>
		<li>Create your product backlog utilizing epics and stories</li>

		{InitialPost()}	
		<li>Review <a href='https://lewiseducation.blob.core.windows.net/software-engineering/software-maintenance-and-support.mp4' target='_blank' rel='noopener noreferrer'>Software Maintenance &amp; Support</a></li>
		<li>Review <a href='https://lewiseducation.blob.core.windows.net/software-engineering/software-engineering-metrics.mp4' target='_blank' rel='noopener noreferrer'>Software Metrics</a></li>
		<li>Set up your team’s final project production site and deploy your Final Project Proposal and “Health Insurance Risk Calculator”</li>
		<li>Create and execute a test plan on the site that verifies that the site and all applications</li>

		{StandardActivitiesClosing(FinalProjectSprint0)}
	</ol>
	{Closing()}
	{extras()}
</div>

	)
}

// Todo: **Update sprint 0 to sprint 5 with new content as well.**
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
// Todo: Where should mediaatoz/software-engineering/* videos go? Are they already included?
// Todo: Change estimated to actual capacity metric to actual over estimated so that it comes out to less than one generally. 

const extras = () => {
	return (<div>	
		<p>Additional suggested activities:</p>
		<ul style={{listStyleType:'square'}}>
			<li>Review “Software Maintenance &amp; Support” <a href='https://lewiseducation.blob.core.windows.net/software-engineering/software-maintenance-and-support.mp4' target='_blank' rel='noopener noreferrer'>[link]</a></li>
			<li>Review “Software Metrics” <a href='https://lewiseducation.blob.core.windows.net/software-engineering/software-engineering-metrics.mp4' target='_blank' rel='noopener noreferrer'>[link]</a></li>
		</ul>
	</div>)
}
