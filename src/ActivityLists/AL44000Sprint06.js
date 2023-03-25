import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing } from './AL00000Sprint00'
import { ServerlessAzure, ServerlessGoogle, ServerlessAWS } from '../DataAndAPIs/Links'
import { oreillyPlaylistSE, externalLink } from '../DataAndAPIs/Links'

import { finalProjectSprint6Link } from '../Activities/FinalProject'
import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'
import { capacityCommittedEffortDeliveredLink } from '../Activities/CapacityCommittedEffortDelivered'

export const al44000Sprint06 = () => {
	const sprint = 6
	return ( <div>
		<h5>Sprint 6: Final Projects, Software Metrics, and Serverless Computing</h5>

		<p>Welcome to sprint 6. This sprint will see us splitting our time between our final project, understanding 
		software metrics and understanding serverless computing in the context of Azure Functions, Google Cloud 
		Functions, and AWS Lambda. Pay close attention to Azure Functions as we will each be implementing our own
		Azure Function next sprint.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Utilize your knowledge of Agile development and Saas to deliver Final Project stories/features</li>
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

			{initialPost(sprint)}
			<li>Within {oreillyPlaylistSE()} “Scaling Software Agility” read chapters 1 and 2 focussing on “Assumptions Underlying the Model”</li>
			<li>Review and analyze {ServerlessAzure()}, {ServerlessGoogle()}, and {ServerlessAWS()}</li>
			<li>Complete {capacityCommittedEffortDeliveredLink()}</li>
			{standardActivitiesClosing(sprint, finalProjectSprint6Link(), '6 hours')}
		</ol>
	</div> )
}

// Certified for SP22 (03/25/2022)
// Certified for FA22 (10/21/2022)
// Certified for SP23 (03/24/2023)
// Todo: Note that several activities were removed in SP23 and the expected capacity was reduced from 8 to 6 hours 
//     because of Easter Break. Consider adding some of these items back in FA23 as there will likely be more time. 




