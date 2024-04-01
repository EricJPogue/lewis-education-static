import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing } from './AL00000Sprint00'
import { oreillyPlaylistSE, externalLink } from '../DataAndAPIs/Links'
import { finalProjectSprint6Link } from '../Activities/FinalProject'
import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'
import { capacityCommittedEffortDeliveredLink } from '../Activities/CapacityCommittedEffortDelivered'
import { estimated } from './AL00000Sprint00'
import { getModuleDescription } from '../DataAndAPIs/ClassSections'

export const al44000Sprint06 = () => {
	const sprint = 6
	return ( <div>
		<h5>Sprint 6: {getModuleDescription(sprint-1)}</h5>

		<p>Welcome to sprint 6. This sprint will see us splitting our time between our final project, understanding 
		software metrics and understanding serverless computing in the context of Azure Functions, Google Cloud 
		Functions, and AWS Lambda. Pay close attention to Azure Functions as we will each be implementing our own
		Azure Function next sprint.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Utilize your knowledge of Agile development and Software-As-A-Service (Saas) to deliver Final Project stories</li>
			<li>Understand and work with Software Metrics</li>
			<li>Understand serverless computing</li>
		</ul>
		{list44000Sprint06(sprint)}
		{closing(sprint)}
	</div> )
}

export const list44000Sprint06 = (sprint) => {
	const softwareMetrics = () => { return externalLink('Software Metrics', 'https://lewiseducation.blob.core.windows.net/software-engineering/software-engineering-metrics.mp4')}
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, finalProjectSprint6Link(), oreillyPlaylistSE())}
			<li>Review and update {finalProjectProposalLink()}</li>
			<li>Review {softwareMetrics()} lecture</li>
			<li>Within {oreillyPlaylistSE()} “Scaling Software Agility” read chapters 1 and 2 focussing on “Assumptions Underlying the Model”</li>

			{initialPost(sprint)}
			<li>Within {oreillyPlaylistSE()} watch “Project Management” by Jeffrey Pinto Lessons 1 through 5 focussing on:{estimated('2 hours')}</li>
			<ul style={{listStyleType:'square'}}>
					<li>Lesson 1: Why Projects?</li>
					<li>Lesson 4: Creating the Project Network</li>
					<li>Lesson 5: Duration Estimation and Critical Path</li>
			</ul>
			<li>Complete {capacityCommittedEffortDeliveredLink()}</li>
			{standardActivitiesClosing(sprint, finalProjectSprint6Link(), '8 hours')}
		</ol>
	</div> )
}

// Certified for SP24 on 04/01/2024. EJP
