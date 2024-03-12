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

// Certified for SP22 (03/25/2022)
// Certified for FA22 (10/21/2022)
// Certified for SP23 (03/24/2023)
// Certified for FA23 (11/04/2023)

// Todo: Consider adding funny video https://www.youtube.com/watch?v=Uo3cL4nrGOk

// Todo: Integrate Software Maintenance, Support, and Metrics into all appropriate classes.
// Todo: Consider doing the same thing for testing.
// Todo: Where should mediaatoz/software-engineering/* videos go? Are they already included?

// Review GitHub Organization tutorials:
// https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch 
// https://www.youtube.com/watch?v=SUu6cmcC-3A
// https://developers.sap.com/tutorials/webide-github-creating-org.html 


// Todo: Move capacityCommittedEffortDeliveredLink() to after finalProjectSprint5Link() like Software Systems Capstone.
// Todo: Add Support and Maintenance lecture video topics to Quiz 5. Are they already there?


// Consider adding back <li>Within {oreillyPlaylistSE()} scan “Essential Scrum” Chapters 1 and 2</li>
// Todo: Update to reflect Zac’s fix (see related announcement). 
// Todo: Move Whatever Happened to Ruby to earlier sprints.
// Todo: Consider moving  some of the Waterfall Project Management video and assignment from Sprint 5 to sprint 3.
// Todo: Consider moving something related to “Dogs, JavaScript & An API 🐶 Fetch, Promises & Async Await” from sprint 4 to sprint 3
// Todo: Review https://www.geeksforgeeks.org/egg-dropping-puzzle-dp-11/
// Todo: Identify where quiz answers originate from. 
// Todo: Fix the end of the Fox Preface video.
// Todo: Review https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository
// Todo: Consider adding W3C Validator VS code add-in to several classes. 

// Todo: Consider updating and adding the following Architecture videos back into the class:
//	import { architecturePart1, architecturePart2 } from '../DataAndAPIs/Links'
// <li>Complete {architecturePart1()}</li>
// <li>Scan {architecturePart2()}</li>
// Consider adding https://www.youtube.com/watch?v=A-H-xZ5ZXgo
// Todo: Consider adding back in Architecture lecture or removing SQL questions from quiz.
// Todo: Make sure that in sprints 7 & 8 that “individual” lab questions are identified. 
// Todo: Review Zac’s quiz and update quiz 7. 
// Todo: Consider '<li>Complete {AzureFunctionsWithVSCodeAndJavaScript()} and build your <em>personal</em> serverless function</li>'
// Todo: Consider '<li>Within {oreillyPlaylistSE()} search for “Azure Functions” and “Serverless Computing” and document the best resources</li>'
// Todo: Consider moving final project proposals to sprint 4. 
// Todo: Consider updating Lab 4 in that the spike doesn’t seem like a totally natural fit.  
// Todo: Move some of the Waterfall Project Management video and assignment from Sprint 5 to sprint 4.
// Todo: Add something to lab 4 to validate Dogs, JavaScript & An API 🐶 Fetch, Promises & Async Await.
// Todo: Move Final Project Proposal from sprint 5 to sprint 4.
// Todo: Verify the length of the videos and see if they are really 4 hours (per Nathan) and consider breaking them up between sprints.