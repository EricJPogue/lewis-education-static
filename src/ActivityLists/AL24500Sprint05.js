import React from 'react'

import { estimated, finalProjectsAndMoreResponsibility } from './AL00000Sprint00'

import { LearningObjectivesIntro, ActivitiesListIntro, InitialPost } from './AL00000Sprint03'
import { StandardActivitiesWithLinkAndSprint, StandardActivitiesClosingWithLinkAndSprint, Closing  } from './AL00000Sprint05'
import { oreillyPlaylistOOP, learningJavaExampleCode, jsonArticle, jsonW3CTutorial, internalLink } from '../DataAndAPIs/Links';

import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'
import { swissArmyKnifeLink } from '../Activities/SwissArmyKnife'
import { htmlLink } from '../Activities/HTML'
import { azureWebsiteLink } from '../Activities/AzureWebsite'

// BugBug: “list24500Sprint05()” must be integrated into “al24500Sprint05()” replacing much of what is currently there. 

export const al24500Sprint05 = ( props ) => {
	const softwareTesting = () => { return internalLink('Software Testing', '/activity-oop/java-testing') }
	const sprint = 5
	return ( <div>
		<h5>Sprint 5: Network Programming, Testing, and the Cloud</h5>

		<p>Sprint 5. Do you feel your software development skills growing? Do you feel the power? As your skills grow you will 
		realize that you are in the driver’s seat. More and more you will need to be doing your own research and decision 
		making.</p>

		<h5>
		<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
		“With great power there must also come great responsibility”<br /></div>
		<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
		-Peter Parker (aka Spider-Man)</div>
		</h5>
		<br />

		{finalProjectsAndMoreResponsibility()}

		{LearningObjectivesIntro()}
		<ul style={{ listStyleType: 'square' }}>
			<li>Understand how to develop distributed network aware Java applications</li>
			<li>Create a web service API utilizing the Microsoft Azure cloud platform</li>
			<li>Understand software testing and the basics of software development life cycles</li>
			<li>Develop Java applications that read and write files including JSON files</li>
		</ul>

		{ActivitiesListIntro(sprint)}
		<ol>
			{StandardActivitiesWithLinkAndSprint(sprint, swissArmyKnifeLink(), oreillyPlaylistOOP())}
			<li>Start working on {finalProjectProposalLink()}</li>
			<li>Review {softwareTesting()} lecture</li>
			<li>Within {oreillyPlaylistOOP()} read “Learning Java” chapter 11 on Networking and I/O and review associated {learningJavaExampleCode()}</li>
			<li>Complete {htmlLink()} - Part 1</li>
			<li>Complete {azureWebsiteLink()}{estimated('2 hours')}</li>

			{InitialPost()}	
			<li>Within {oreillyPlaylistOOP()} read “Learning Java” chapter 12 on Programming the Web</li>
			<li>Read {jsonArticle()} and complete the W3C {jsonW3CTutorial()}</li>
			<li>Create an Azure website to host globally accessible JSON files</li>
			<li>Complete {finalProjectProposalLink()}{estimated('2 hours')}</li>
			{StandardActivitiesClosingWithLinkAndSprint(sprint, swissArmyKnifeLink(), '8 hours')}
		</ol>
		{Closing()}
	</div> )
}

export const list24500Sprint05 = (sprint) => {
	const softwareTesting = () => { return internalLink('Software Testing', '/activity-oop/java-testing') }
	return ( <div>
		{ActivitiesListIntro(sprint)}
		<ol>
			{StandardActivitiesWithLinkAndSprint(sprint, swissArmyKnifeLink(), oreillyPlaylistOOP())}
			<li>Start working on {finalProjectProposalLink()}</li>
			<li>Review {softwareTesting()} lecture</li>
			<li>Within {oreillyPlaylistOOP()} read “Learning Java” chapter 11 on Networking and I/O and review associated {learningJavaExampleCode()}</li>
			<li>Complete {htmlLink()} - Part 1</li>
			<li>Complete {azureWebsiteLink()}{estimated('2 hours')}</li>

			{InitialPost()}	
			<li>Within {oreillyPlaylistOOP()} read “Learning Java” chapter 12 on Programming the Web</li>
			<li>Read {jsonArticle()} and complete the W3C {jsonW3CTutorial()}</li>
			<li>Create an Azure website to host globally accessible JSON files</li>
			<li>Complete {finalProjectProposalLink()}{estimated('2 hours')}</li>
			{StandardActivitiesClosingWithLinkAndSprint(sprint, swissArmyKnifeLink(), '8 hours')}
		</ol>
	</div> )
}



// Status: Signed off SP22.

// Todo: Determine how to reusing and/or enhance Testing lecture.

// Certified for SP22 (02/28/2022)
// Todo: Update quiz 5... it sucks.