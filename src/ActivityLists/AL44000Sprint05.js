import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated, finalProjectsAndMoreResponsibility } from './AL00000Sprint00'

import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'

import { capacityCommittedEffortDeliveredLink } from '../Activities/CapacityCommittedEffortDelivered'
import { classProductSprint5Link } from '../Activities/ClassProduct'

import { oreillyPlaylistSE, externalLink } from '../DataAndAPIs/Links'
import { getModuleDescription } from '../DataAndAPIs/ClassSections'


export const al44000Sprint05 = () => {
	const sprint = 5
	return ( <div>
		<h5>Sprint 5: {getModuleDescription(sprint-1)}</h5>

		<p>Welcome to sprint 5. We will start this sprint by learning about software maintenance. Very quickly we will 
		come to understand that since Agile development has us shipping software to customers every few weeks, nearly all of 
		the work we do in scrum is essentially maintenance.</p>

		{finalProjectsAndMoreResponsibility()}
		{learningObjectivesIntro(sprint)}
		<ul style={{ listStyleType: 'square' }}>
			<li>Finalize and publish your team’s final project proposal</li>
			<li>Utilize Stories to create a Product Backlog and Sprint Backlog</li>
			<li>Setup your multiple SaaS final project environments</li>
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

// Certified for SP24 on 03/12/2024. EJP
// Toto: Consider updating and enhancing Quiz 5 as it is not very good. 
// Todo: Consider turning Health Insurance Risk Calculator into a sprint project that need to be reviewed in sprint 5. Maybe it could be a backlog? 



