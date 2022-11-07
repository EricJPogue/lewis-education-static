import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing } from './AL00000Sprint00'

import { oreillyPlaylistSE, AzureFunctionsWithVSCodeAndJavaScript, ServerlessAzure, ServerlessGoogle, ServerlessAWS, externalLink } from '../DataAndAPIs/Links'
import { finalProjectSprint6Link } from '../Activities/FinalProject'
import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'

export const al44000Sprint06 = () => {
	const sprint = 6
	return ( <div>
		<h5>Sprint 6: Project Management, Serverless Computing, and Final Project</h5>

		<p>Welcome to sprint 6. This sprint will see us splitting our time between our final project, implementing our 
		first serverless computing services utilizing Azure Functions, and learning more about project management.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Utilize your knowledge of Agile development and Saas to deliver Final Project features</li>
			<li>Understand serverless computing</li>
			<li>Write serverless computing services utilizing Azure Functions</li>
			<li>Understand Project Management, Scrum, Pairs, and Version Control Systems</li>
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
			<li>Within {oreillyPlaylistSE()} search for “Azure Functions” and “Serverless Computing” and document the best resources</li>
			<li>Review and analyze {ServerlessAzure()}, {ServerlessGoogle()}, and {ServerlessAWS()}</li>
			<li>Complete {AzureFunctionsWithVSCodeAndJavaScript()} and build your <em>personal</em> serverless function</li>
			<li>Review “Deploying Node.js on Azure (2022 Edition)” and consider how it could be an alternative to serverless functions</li>
			{standardActivitiesClosing(sprint, finalProjectSprint6Link(), '8 hours')}
		</ol>
	</div> )
}

// Certified for SP22 (03/25/2022)
// Certified for FA22 (10/21/2022)




