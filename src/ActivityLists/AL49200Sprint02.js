import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated } from './AL00000Sprint00'
import { oreillyPlaylistSC, continuousIntegration, externalLink } from '../DataAndAPIs/Links'

import { gettingToKnowEachOtherAbbreviatedLink } from '../Activities/WebGettingToKnowEachOtherAbbreviated'
import { gettingToKnowEachOthersTeamsLink } from '../Activities/WebGettingToKnowEachOthersTeams'
import { azureWebsiteLink } from '../Activities/AzureWebsite'
import { classProductSprint2Link } from '../Activities/ClassProduct'

import { HTMLW3C, CSSW3C, JavaScriptW3C } from '../DataAndAPIs/Links'

// const cICDArticle = () => { return externalLink('What is CI/CD? Continuous integration and continuous delivery explained', 'https://www.infoworld.com/article/3271126/what-is-cicd-continuous-integration-and-continuous-delivery-explained.html') }
const jira = () => { return externalLink('Jira', 'https://www.atlassian.com/software/jira/guides/getting-started' )}
const trello = () => { return externalLink('Trello', 'https://trello.com')}
const lectureRecordingPlaylist = () => { return externalLink('lecture', 'https://lewisu.hosted.panopto.com/Panopto/Pages/Viewer.aspx?pid=50ad011a-766e-43e7-8ec4-ae2301373d46')}

export const al49200Sprint02 = () => {
	const sprint = 2
	return ( <div>
		<h5>Sprint 2: Continuous Integration and Continuous Deployment (CI/CD)</h5>

		<p><em>Welcome to sprint 2.</em> Now that we know our product teams, it’s time to focus on delivering a product. Our 
		first step in delivering a product is to implement continuous integration / continuous delivery (CI/CD). CI/CD is often 
		much harder than it sounds. Done well, CI/CD allows a team to consistently release new functionality development, 
		test, and production environments. How will you implement and demonstrate this functionality?</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Continuous Integration and Continuous Deployment (CI/CD)</li>
			<li>Implement, document, and demonstrate CI/CD for your product team’s development, test, and productions environments</li>
			<li>Implement, document, and demonstrate CI/CD for your customer’s access to test, and productions environments</li>
		</ul>

		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, classProductSprint2Link())}
			<li>Review our sprint 2 planning {lectureRecordingPlaylist()}</li>
			<li>Read {continuousIntegration() /*cICDArticle()*/}</li>
			<li>Within {oreillyPlaylistSC()} read “Essential Scrum” chapters 7 through 10</li>

			<li>As needed review {HTMLW3C()}, {CSSW3C()}, and {JavaScriptW3C()} tutorials</li>
			<li>Individually complete {azureWebsiteLink()} to publish your {gettingToKnowEachOtherAbbreviatedLink()} on Microsoft Azure{estimated('2 hours')}</li>
			<li>With your team complete {gettingToKnowEachOthersTeamsLink()}{estimated('3 hours')}</li> 
			{initialPost(sprint)}

			<li>Within {oreillyPlaylistSC()} read “Essential Scrum” chapters 11 and 12</li>
			<li>Review {jira()} and {trello()} as potential tools to assist you in your Agile Scrum planning</li>
			{standardActivitiesClosing(sprint, classProductSprint2Link(), '8 hours per team member')}
		</ol>
		{closing(sprint)}
	</div> )
}


