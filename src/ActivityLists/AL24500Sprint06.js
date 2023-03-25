import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing } from './AL00000Sprint00'

import { oreillyPlaylistOOP, internalLink, externalLink } from '../DataAndAPIs/Links'
// import { swissArmyKnifeV2Link } from '../Activities/SwissArmyKnife'
import { swissArmyKnifeServerLink } from '../Activities/SwissArmyKnifeServer'
import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'
import { azureWebsiteLink } from '../Activities/AzureWebsite'
import { learningJavaExampleCode } from '../DataAndAPIs/Links'

export const al24500Sprint06 = ( props ) => {
	const sprint = 6

	return ( <div>
		<h5>Sprint 6: Oh my! Hang on tight. We are going to try something new.</h5>
		<p>We are going to be learning something new together this sprint. A vast majority of Java development job opportunities 
		today are for Java web development which takes the form of Java servlets. We have long wanted to integrate Web 
		development and Java servlet programming into our Object-Oriented Programming class. Now with your help and with the help
		of Jarad and Nick we are going to make that happen.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{ listStyleType: 'square' }}>
			<li>Understand Java distributed programming with a focus on Java servlets</li>
			<li>Create and update a Java servlet based web application using the Java servlet API</li>
			<li>Cloud hosting with a focus on hosting a Java servlet web application in Microsoft Azure</li>
			<li>Implement a JSON based application programming interfaces (APIs) on Microsoft Azure</li>
		</ul>
		{list24500Sprint06(sprint)}
		{closing(sprint)}
	</div> )
}

export const list24500Sprint06 = (sprint) => {
	const personalInformationJSONFiles = () => { return internalLink('Personal Information JSON Files', '/activity-oop/personal-info-json-to-azure')}
	const javaServletOnAzureQuickStart = () => { return externalLink('Quickstart: Create a Java app on Azure App Service', 
		'https://learn.microsoft.com/en-us/azure/app-service/quickstart-java?tabs=javase&pivots=platform-windows-development-environment-azure-portal')}
	const javaServletIntroduction = () => { return externalLink('Java Servlets Introduction', 'https://pithub.blob.core.windows.net/nvm4zqwm/jb85qsab-userstory14.pdf')}
	const javaServletOnAzure = () => { return externalLink('Creating a server website using azure', 'https://pithub.blob.core.windows.net/nvm4zqwm/jb85qsab-userstory10.pdf')}

	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, swissArmyKnifeServerLink(), oreillyPlaylistOOP())}
			<li>Read {javaServletIntroduction()} by Muhammad J Jarad</li>
			<li>Within {oreillyPlaylistOOP()} read “Learning Java” chapter 12 “Programming the Web” and review associated {learningJavaExampleCode()}</li>
			<li>Complete {javaServletOnAzure()} by Muhammad J Jarad</li>
			<li>Complete {javaServletOnAzureQuickStart()}</li>

			{initialPost(sprint)}
			<li>Review and update {finalProjectProposalLink()}</li>
			<li>Review {azureWebsiteLink()}</li>
			<li>Complete {personalInformationJSONFiles()}</li>
			{standardActivitiesClosing(sprint, swissArmyKnifeServerLink(), '6 hours')}
		</ol>
	</div> )
}

// Certified for SP22 (03/26/2022)