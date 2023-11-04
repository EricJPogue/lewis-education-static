import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated, finalProjectsAndMoreResponsibility } from './AL00000Sprint00'

import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'

import { capacityCommittedEffortDeliveredLink } from '../Activities/CapacityCommittedEffortDelivered'
import { classProductSprint5Link } from '../Activities/ClassProduct'

import { oreillyPlaylistSE, externalLink } from '../DataAndAPIs/Links'


export const al44000Sprint5Topics = 'Team Final Project utilizing Scrum Events, Artifacts, and Roles plus Software Maintenance'
export const al44000Sprint05 = () => {
	const sprint = 5
	return ( <div>
		<h5>Sprint 5: {al44000Sprint5Topics}</h5>

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
			{standardActivities(sprint, classProductSprint5Link(), oreillyPlaylistSE())}
			<li>Read Chapter 9 of Fox on Software Maintenance</li>
			<li>Review {softwareMaintenanceAndSupport()} lecture</li>
			<li>Complete on {finalProjectProposalLink()} and </li>
			<li>Review {capacityCommittedEffortDeliveredLink()}</li>

			{initialPost(sprint)}
			<li>Review {agileAlliance()} by analyzing “Agile 101” and reviewing the “Agile Glossary”</li>
			<li>Within {oreillyPlaylistSE()} briefly scan “Web Development with Node and Express” chapters 5 through 14</li>
			<li>Within {oreillyPlaylistSE()} read “Web Development with Node and Express” chapter 15</li>
			<li>Update and finalize your team’s {finalProjectProposalLink()}{estimated('2 hours per team member')}</li>
			<li>Complete {classProductSprint5Link()}{estimated('6 hours per team member')} </li>
			{standardActivitiesClosing(sprint, capacityCommittedEffortDeliveredLink(), '')}
		</ol>
	</div> )
}

// Certified for FA22 (10/21/2022)
// Certified for SP23 (02/28/2023)
// Certified for FA23 (10/21/2023)

// TODO: Update Quiz 5 and remove "tqb-quiz-05" test bank
// Todo: Add multiple-choice question on refactoring vs re-engineering.
// Todo: Add multiple-choice question on “Describe the similarities and differences normally observed when maintaining a
//     software product using a Waterfall vs an Agile process.”

// Todo: Integrate Software Maintenance, Support, and Metrics into all appropriate classes.
// Todo: Consider doing the same thing for testing.
// Todo: Where should mediaatoz/software-engineering/* videos go? Are they already included?

// Review GitHub Organization tutorials:
// https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch 
// https://www.youtube.com/watch?v=SUu6cmcC-3A
// https://developers.sap.com/tutorials/webide-github-creating-org.html 

// Toto: Consider updating and enhancing Quiz 5 as it is not very good. 
// Todo: Move capacityCommittedEffortDeliveredLink() to after finalProjectSprint5Link() like Software Systems Capstone.
// Todo: Add Support and Maintenance lecture video topics to Quiz 5. Are they already there?

