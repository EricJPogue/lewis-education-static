import React from 'react'
import { estimated } from './AL00000Sprint01'

import { oreillyPlaylistSC, externalLink } from '../Links'

import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivities, InitialDiscussionPost, StandardActivitiesClosing } from './AL00000Sprint02'
import { gettingToKnowEachOtherAbbreviatedLink } from '../Activities/WebGettingToKnowEachOtherAbbreviated'
import { gettingToKnowEachOthersTeamsLink } from '../Activities/WebGettingToKnowEachOthersTeams'
import { azureWebsiteLink } from '../Activities/AzureWebsite'
import { classProductSprint2Link } from '../Activities/ClassProduct'

import { HTMLW3C, CSSW3C, JavaScriptW3C } from '../Links'

const cICDArticle = () => { return externalLink('What is CI/CD? Continuous integration and continuous delivery explained', 'https://www.infoworld.com/article/3271126/what-is-cicd-continuous-integration-and-continuous-delivery-explained.html') }
const jira = () => { return externalLink('Jira', 'https://www.atlassian.com/software/jira/guides/getting-started' )}
const trello = () => { return externalLink('Trello', 'https://trello.com')}

export const al49200Sprint02 = () => {
	return ( <div>
		
<h5>Sprint 2: Continuous Integration and Continuous Deployment (CI/CD)</h5>

<p><em>Welcome to sprint 2.</em> Now that we know our product teams, it’s time to focus on delivering a product. Our 
first step in delivering a product is to implement continuous integration / continuous delivery (CI/CD). CI/CD is often 
much harder than it sounds. Done well, CI/CD allows a team to consistently release new functionality development, 
test, and production environments. How will you implement and demonstrate this functionality?</p>

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Continuous Integration and Continuous Deployment (CI/CD)</li>
	<li>Implement, document, and demonstrate CI/CD for your product team’s development, test, and productions environments</li>
	<li>Implement, document, and demonstrate CI/CD for your customer’s access to test, and productions environments</li>
</ul>

{ActivitiesListIntro()}
<ol>
	{StandardActivities(classProductSprint2Link())}
	<li>Read {cICDArticle()}</li>
	<li>Within {oreillyPlaylistSC()} read “Essential Scrum” chapters 7 through 10</li>

	<li>As needed review {HTMLW3C()}, {CSSW3C()}, and {JavaScriptW3C()} tutorials</li>
	<li>Individually complete {azureWebsiteLink()} to publish your {gettingToKnowEachOtherAbbreviatedLink()} on Microsoft Azure{estimated('2 hours')}</li>
	<li>With your team complete {gettingToKnowEachOthersTeamsLink()}{estimated('3 hours')}</li> 
	<li>{InitialDiscussionPost(2)}</li>

	<li>Within {oreillyPlaylistSC()} read “Essential Scrum” chapters 11 and 12</li>
	<li>Review {jira()} and {trello()} as potential tools to assist you in your Agile Scrum planning</li>
	{StandardActivitiesClosing(classProductSprint2Link(), estimated('8 hours per team member'))}
</ol>
<p>If you are struggling, remember to reach out to your Scrum teammates early and often for help.</p>

</div> )
}

// Node.js in sprint 3?

