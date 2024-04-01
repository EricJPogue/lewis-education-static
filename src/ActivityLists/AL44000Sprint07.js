import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing } from './AL00000Sprint00'

// import { AzureFunctionsWithVSCodeAndJavaScript } from '../DataAndAPIs/Links'

import { finalProjectSprint7Link } from '../Activities/FinalProject'
import { introductionToReactLink } from '../Activities/IntroductionToReact'
import { oreillyPlaylistSE, internalLink } from '../DataAndAPIs/Links'

import { externalLink } from '../DataAndAPIs/Links'
import { getModuleDescription } from '../DataAndAPIs/ClassSections'

export const al44000Sprint07 = () => {
	const sprint = 7
	return ( <div>
		<h5>Sprint 7: {getModuleDescription(sprint-1)}</h5>
		<p>Welcome to sprint 7. This sprint will bring closure to our class project. We will be delivering stories, 
		cleaning up our products, and transferring or accepting product ownership.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Utilize your knowledge of Agile development and SaaS to deliver a class product that you are proud of creating</li>
			<li>Understand Design Patterns with a particular focus on the Model-View-Controller pattern</li>
			<li>Understand basic React application in Azure</li>
		</ul>

		{list44000Sprint07(sprint)}
		{closing(sprint)}
	</div> )
}

export const list44000Sprint07 = (sprint) => {
	const reactProgrammingTogether = () => { return internalLink('React on Azure', '/activity-config/react-on-azure')}
	const agileCoachInterview = () => { return externalLink('Interview with an Agile Coach', 'https://www.youtube.com/watch?v=bB340S0tGf8')}
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, finalProjectSprint7Link(), oreillyPlaylistSE())}
			<li>Read Chapter 10 of Fox on Project Management, Scrum, Pairs, and Version Control Systems</li>
			<li>Review in detail {agileCoachInterview()}</li>

			{initialPost(sprint)}
			<li>Within {oreillyPlaylistSE()} read “Design Patterns” through chapter 1</li>
			<li>Scan Introduction to React {introductionToReactLink()}</li>	
			<li>Scan {reactProgrammingTogether()} programming together tutorial</li>
			{standardActivitiesClosing(sprint, finalProjectSprint7Link(), '20 hours')}
		</ol>
	</div> )
}

// Certified for SP22 (04/08/2022)
// Certified for FA23 (11/19/2023)


// Todo: Consider adding funny video https://www.youtube.com/watch?v=Uo3cL4nrGOk

// Todo: Integrate Software Maintenance, Support, and Metrics into all appropriate classes.
// Todo: Consider doing the same thing for testing.
// Todo: Where should mediaatoz/software-engineering/* videos go? Are they already included?

// Review GitHub Organization tutorials:
// https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch 
// https://www.youtube.com/watch?v=SUu6cmcC-3A
// https://developers.sap.com/tutorials/webide-github-creating-org.html 


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


