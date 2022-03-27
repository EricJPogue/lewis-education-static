import React from 'react'

import { LearningObjectivesIntro, ActivitiesListIntro, InitialPost, Closing } from './AL00000Sprint03'
import { StandardActivitiesWithLinkAndSprint, StandardActivitiesClosingWithLinkAndSprint } from './AL00000Sprint05'
import { oreillyPlaylistOOP, internalLink } from '../Links'
import { swissArmyKnifeV2Link } from '../Activities/SwissArmyKnife'
import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'
import { azureWebsiteLink } from '../Activities/AzureWebsite'

export const al24500Sprint06 = ( props ) => {
	const performanceAndMultithreading = () => { return internalLink('Performance and Multithreading', '/activity-oop/performance-and-multithreaded-programming') }
	const personalInformationJSONFiles = () => { return internalLink('Personal Information JSON Files', '/activity-oop/personal-info-json-to-azure')}
	const sleepFast = () => { return internalLink('SleepFast', '/activity-oop/java-sleep-fast')}
	const objectOrientedProgrammingLanguagesAndPlatforms = () => { return internalLink('Object-Oriented Programming Languages and Platforms', '/activity-oop/languages-and-platforms')}
	const bodyMassIndexWithJavaDocAndScanner = () => { return internalLink('BMI with JavaDoc and Scanner', '/activity-oop/bmi-calculator-add-javadoc-and-keyboard-input')}
	const sprint = 6
	return ( <div>

<h5>Sprint 6: Application Programming Interfaces and Multithreaded Programming</h5>

<p>This sprint offers a mix of the old and the new. Some things like creating application programming interfaces (APIs) 
on Microsoft Azure and enhancing the SwissArmyKnife application will build on what we have already learned. Other topic 
like learning how to write multithreaded Java applications will be new and likely challenging.</p>

{LearningObjectivesIntro()}
<ul style={{ listStyleType: 'square' }}>
	<li>Create and update application programming interfaces (APIs) on Microsoft Azure</li>
	<li>Develop multithreaded Java applications</li>
	<li>Create and automated API automated test applications in Java</li>
	<li>Understand JavaDoc and how it can create self-documenting source code</li>
</ul>

{ActivitiesListIntro(sprint)}
<ol>
	{StandardActivitiesWithLinkAndSprint(sprint, swissArmyKnifeV2Link(), oreillyPlaylistOOP())}
	<li>Review and update {finalProjectProposalLink()}</li>
	<li>Review {performanceAndMultithreading()}</li>
	<li>Review {azureWebsiteLink()}</li>
	<li>Complete {personalInformationJSONFiles()}</li>

	{InitialPost()}
	<li>Within {oreillyPlaylistOOP()} read “Learning Java” chapter 9 on Threads</li>
	<li>Complete {sleepFast()}</li>
	<li>Review {objectOrientedProgrammingLanguagesAndPlatforms()}</li>
	<li>Complete {bodyMassIndexWithJavaDocAndScanner()}</li>
	{StandardActivitiesClosingWithLinkAndSprint(sprint, swissArmyKnifeV2Link(), '8 hours')}
</ol>

{Closing()}

	</div> )
}

// Todo: Simplify SwissArmyKnife and SwissArmyKnife V2 activities. 

// Certified for SP22 (03/26/2022)

