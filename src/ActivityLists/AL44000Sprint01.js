import React from 'react'

import { scrumIntro, learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, estimated, closing } from './AL00000Sprint00'

import { internalLink, externalLink } from '../DataAndAPIs/Links'
import { gettingToKnowEachOtherLink } from '../Activities/WebGettingToKnowEachOther'
import { toolsOfTheTradeLink } from '../Activities/ToolsOfTheTrade'
import { htmlLink } from '../Activities/HTML'
import { HelloWorldWebLink } from '../Activities/HelloWorld'
import { getModuleDescription } from '../DataAndAPIs/ClassSections'

export const al44000Sprint01 = () => {
	const sprint = 1
	return ( <div>
		<h5>Sprint 1: {getModuleDescription(sprint-1)}</h5>
		
		<p><em>Welcome to Software Engineering!</em> By this point in your software development journey I’m sure you are 
		confident in writing moderately complicated software programs. You’ve learned about structured programming techniques 
		like sequence, selection, and repetition. You've learned how to break complicated programs down into more manageable 
		pieces by using functions and classes. You even understand how Object-Oriented programming can help you develop more complex
		applications by utilizing encapsulation, inheritance, and polymorphism.</p>

		<p>That’s wonderful, however to create sophisticated modern programs we need to master some additional skills that 
		allow us to effectively work in and across teams to predictably develop, enhance, and maintain complex systems that 
		meet real users needs. These additional Software Engineering skills are included in what we call the Software 
		Development Life Cycle and include topics like Project Management, Application Architecture, Requirements, Testing, 
		Support, and Maintenance. These are some of the topics that we will be exploring as part of this Software Engineering 
		course.</p>

		{scrumIntro()}

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Effectively participate in a blended classroom environment and as part of a scrum team</li>
			<li>Compare and contrast the steps in leading Software Development Life Cycles</li>
			<li>Explain why agile development has become the preferred software development process</li>
			<li>Describe the benefits of application architectures including software as a service and cloud computing</li>
			<li>Describe client-server, three-tier and MVC design patterns</li>
			<li>Utilize leading developer tools to create and update software applications</li>
		</ul>

		{list44000Sprint01(sprint)}
		{closing(sprint)}
	</div> )
}

export const list44000Sprint01 = (sprint) => {
	const engineeringSoftwareAsAService = () => externalLink('Engineering Software as a Service','http://www.saasbook.info/')
	const foxChapter0Lecture = () => internalLink('lecture', '/activity/fox-chapter-00')
	const foxChapter1Lecture = () => internalLink('lecture', '/activity/fox-chapter-01')

	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, gettingToKnowEachOtherLink())}
			<li>Complete {HelloWorldWebLink()}</li>
			<li>Read {engineeringSoftwareAsAService()} Chapter 1 by Armando Fox and David Patterson and review the associated {foxChapter1Lecture()}{estimated('2 hours')}</li>
			<li>Begin to understand the software as a service architecture by completing {htmlLink()} - Part 1{estimated('2 hours')}</li>

			{initialPost(sprint)}
			<li>Complete {toolsOfTheTradeLink()}{estimated('2 hours')}</li>
			<li>Read {engineeringSoftwareAsAService()} Preface and review associated {foxChapter0Lecture()}</li>

			{standardActivitiesClosing(sprint, gettingToKnowEachOtherLink(), '6 hours')}
		</ol>
	</div> )
}

// Certified for FA23 on 08/24/23
// Certified for SP24 on 08-Jan-24

// Below are notes from the entire class and not just sprint 1. 

// Consider the following items for Software Engineering (04/14/24 EJP):
// 1 - Update all FinalProject links to ClassProduct links and unify Software Systems Capstone and Software Engineering (do it)
// 2 - Start Product work one sprint earlier in Software Engineering
// 3 - Assign team products earlier 
// 4 - Consider migrating books (that's going to be challenging)

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


