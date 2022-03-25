import React from 'react'

import { LearningObjectivesIntro, ActivitiesListIntro, InitialPost } from './AL00000Sprint03'
import { FinalProjectsAndMoreResponsibility, StandardActivitiesWithLinkAndSprint, StandardActivitiesClosingWithLinkAndSprint, Closing  } from './AL00000Sprint05'

import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'
import { finalProjectSprint5Link } from '../Activities/FinalProject'
import { healthRiskCalculatorTeamWebLink } from '../Activities/HealthRiskCalculatorTeam'

import { oreillyPlaylistSE, externalLink } from '../Links'
import { estimated } from './AL00000Sprint01'

export const al44000Sprint05 = () => {
	const softwareMaintenanceAndSupport = () => { return externalLink('Software Maintenance and Support', 'https://lewiseducation.blob.core.windows.net/software-engineering/software-maintenance-and-support.mp4') }
	const softwareMetrics = () => { return externalLink('Software Metrics', 'https://lewiseducation.blob.core.windows.net/software-engineering/software-engineering-metrics.mp4')}
	const sprint = 5
	return ( <div>

<h5>Sprint 5: Software Maintenance, Final Project Proposal, and production Azure Site Setup</h5>

<p>Welcome to sprint 5. We will start this sprint by learning about software maintenance. Very quickly we will 
come to understand that since Agile development has us shipping software to customers every few weeks, nearly all of 
the work we do in scrum is essentially maintenance.</p>

{FinalProjectsAndMoreResponsibility()}

{LearningObjectivesIntro()}
<ul style={{ listStyleType: 'square' }}>
	<li>Successfully develop you team’s final project proposal</li>
	<li>Utilize Epics and Stories to create a product backlog</li>
	<li>Setup our multiple Saas final project environments</li>
	<li>Explain why change is inevitable for software systems and describe the processes of software evolution</li>
	<li>Assess whether a legacy system should be scrapped, maintained, re-engineered or replaced</li>
</ul>

{ActivitiesListIntro(sprint, null, oreillyPlaylistSE())}
<ol>
	{StandardActivitiesWithLinkAndSprint(sprint, finalProjectProposalLink(), oreillyPlaylistSE())}
	<li>Read Chapter 9 of Fox on Software Maintenance</li>
	<li>Review {softwareMaintenanceAndSupport()} lecture</li>
	<li>Review <a href='https://www.agilealliance.org/agile-essentials/' target='_blank' rel='noopener noreferrer'>Agile Alliance</a> by analyzing “Agile 101” and reviewing the “Agile Glossary”</li>

	{InitialPost()}	
	<li>Complete {finalProjectProposalLink()}{estimated('4 hours')}</li>
	<li>Start working on {finalProjectSprint5Link()}</li>
	<li>Review {softwareMetrics()} lecture</li>
	<li>Set up your team’s final project production site and deploy {healthRiskCalculatorTeamWebLink()}</li>
	{StandardActivitiesClosingWithLinkAndSprint(sprint, finalProjectSprint5Link(), '6 hours')}
</ol>
{Closing()}
<br />
<p>Programming Together: “Deploying Node.js on Azure (2022 Edition)”</p>

</div> )
}

// Todo: Consider moving Software Metrics to sprint 6
// Todo: Add multiple-choice question on refactoring vs re-engineering.
// Todo: Add multiple-choice question on “Describe the similarities and differences normally observed when maintaining a
//     software product using a Waterfall vs an Agile process.”


// Status: Signed off SP22.



