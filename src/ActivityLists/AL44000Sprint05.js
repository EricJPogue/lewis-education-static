import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated, finalProjectsAndMoreResponsibility } from './AL00000Sprint00'

import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'
import { finalProjectSprint5Link } from '../Activities/FinalProject'
import { capacityCommittedEffortDeliveredLink } from '../Activities/CapacityCommittedEffortDelivered'

import { oreillyPlaylistSE, externalLink } from '../DataAndAPIs/Links'

export const al44000Sprint05 = () => {
	const sprint = 5
	return ( <div>
		<h5>Sprint 5: Software Maintenance, Final Project Proposal, and production Azure Site Setup</h5>

		<p>Welcome to sprint 5. We will start this sprint by learning about software maintenance. Very quickly we will 
		come to understand that since Agile development has us shipping software to customers every few weeks, nearly all of 
		the work we do in scrum is essentially maintenance.</p>

		{finalProjectsAndMoreResponsibility()}
		{learningObjectivesIntro(sprint)}
		<ul style={{ listStyleType: 'square' }}>
			<li>Finalize and publish your team’s final project proposal</li>
			<li>Utilize Stories to create a product backlog and sprint backlog</li>
			<li>Setup your multiple Saas final project environments</li>
			<li>Explain why change is inevitable for software systems and describe the processes of software evolution</li>
			<li>Assess whether a legacy system should be scrapped, maintained, re-engineered or replaced</li>
		</ul>

		{list44000Sprint05(sprint)}
		{closing(sprint)}
	</div> )
}

export const list44000Sprint05 = (sprint) => {
	const softwareMaintenanceAndSupport = () => { return externalLink('Software Maintenance and Support', 'https://lewiseducation.blob.core.windows.net/software-engineering/software-maintenance-and-support.mp4') }
	const agileAlliance = () => { return externalLink('Agile Alliance', 'https://www.agilealliance.org/agile-essentials/')}

	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, finalProjectProposalLink(), oreillyPlaylistSE())}
			<li>Start working on {finalProjectSprint5Link()}</li>
			<li>Read Chapter 9 of Fox on Software Maintenance</li>
			<li>Review {softwareMaintenanceAndSupport()} lecture</li>
			<li>Review {capacityCommittedEffortDeliveredLink()}</li>

			{initialPost(sprint)}
			<li>Review {agileAlliance()} by analyzing “Agile 101” and reviewing the “Agile Glossary”</li>
			<li>Update and finalize your team’s {finalProjectProposalLink()}{estimated('2 hours per team member')}</li>
			<li>Complete {capacityCommittedEffortDeliveredLink()}</li>
			{standardActivitiesClosing(sprint, finalProjectSprint5Link(), '6 hours per team member')}
		</ol>
	</div> )
}

// Certified for FA22 (10/21/2022)

// Todo: Add multiple-choice question on refactoring vs re-engineering.
// Todo: Add multiple-choice question on “Describe the similarities and differences normally observed when maintaining a
//     software product using a Waterfall vs an Agile process.”

// Todo: Integrate Software Maintenance, Support, and Metrics into all appropriate classes.
// Todo: Consider doing the same thing for testing.
// Todo: Add lots of links from the Agile Alliance to various activity lists.
// Todo: Where should mediaatoz/software-engineering/* videos go? Are they already included?

// Review GitHub Organization tutorials:
// https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch 
// https://www.youtube.com/watch?v=SUu6cmcC-3A
// https://developers.sap.com/tutorials/webide-github-creating-org.html 


// Certified for SP23 (02/28/2023)
// Todo: Move capacityCommittedEffortDeliveredLink() to after finalProjectSprint5Link() like Software Systems Capstone.
// Todo: Add Support and Maintenance lecture video topics to Quiz 5. Are they already there?

