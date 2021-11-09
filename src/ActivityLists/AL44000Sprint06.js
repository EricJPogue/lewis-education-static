import React from 'react'

import { InitialPost,  } from './AL00000Sprint02'
import { LearningObjectivesIntro, ActivitiesListIntro } from './AL00000Sprint03'
import { StandardActivities, StandardActivitiesClosing, Closing  } from './AL00000Sprint06'

import { oreillyPlaylistSE, NodeJSOnAzure, AzureFunctionsWithVSCodeAndJavaScript, ServerlessAzure, ServerlessGoogle, ServerlessAWS } from '../Links'
import { FinalProjectSprint6 } from './ProgrammingAssignments'

export const al44000Sprint06 = () => {
	return (

<div>
	<h5>Sprint 6: Project Management, Serverless Computing, and Final Project</h5>

	<p>Welcome to sprint 6. This sprint will see us splitting our time between our final project, implementing our 
	first serverless computing services utilizing Azure Functions, and learning more about project management.</p>

	{LearningObjectivesIntro()}
	<ul style={{listStyleType:'square'}}>
		<li>Utilize your knowledge of Agile development and Saas to deliver more features of our final project</li>
		<li>Understand where serverless computing fits in to modern software architecture</li>
		<li>Write your first serverless computing application utilizing Azure Functions</li>
		<li>Understand Project Management, Scrum, Pairs, and Version Control Systems</li>
		<li>Understand Scaled Agile</li>
	</ul>
	{ActivitiesListIntro()}
	<ol>
		{StandardActivities(FinalProjectSprint6, oreillyPlaylistSE(), 6 )}

		<li>Compete your sprint 5 Review and Retrospective</li>
		<li>Read Chapter 10 of Fox on Project Management, Scrum, Pairs, and Version Control Systems</li>

		<li>Within {oreillyPlaylistSE()} “Scaling Software Agility” read chapters 1 and 2 focussing on “Assumptions Underlying the Model”</li>

		{InitialPost()}	
		<li>Within {oreillyPlaylistSE()} search for “Azure Functions” and “Serverless Computing” and document the best resources</li>
		<li>Review and analyze {ServerlessAzure()}, {ServerlessGoogle()}, and {ServerlessAWS()}</li>
		<li>Complete {AzureFunctionsWithVSCodeAndJavaScript()} and build your <em>personal</em> serverless function</li>
		<li>Review {NodeJSOnAzure()} and consider how it could be used to create a “serverless” function</li>
		<li>Complete backlog grooming in preparation for sprint 7 planning</li>

		{StandardActivitiesClosing(FinalProjectSprint6, 6)}
	</ol>
	{Closing()}
	{extras()}
</div>
	)
}

const extras = () => {
	return (null)
}

// Todo: Change estimated to actual capacity metric to actual over estimated so that it comes out to less than one generally. 
// Todo: Add lots of links from the Agile Alliance to various activity lists.
// Todo: Integrate Software Maintenance, Support, and Metrics into all appropriate classes.
// Todo: Consider doing the same thing for testing.
// Todo: Where should mediaatoz/software-engineering/* videos go? Are they already included?