import React from 'react'
import { makeEstimateString } from './AL00000Sprint01'

import { oreillyPlaylistSC } from '../Links'

import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivitiesWithLink, InitialDiscussionPost, StandardActivitiesClosingWithLink } from './AL00000Sprint02'
import { gettingToKnowEachOthersTeamsLink } from '../Activities/WebGettingToKnowEachOthersTeams'
import { azureWebsiteLink } from '../Activities/AzureWebsite'

import { HTMLW3C, CSSW3C, JavaScriptW3C } from '../Links'

export const al49200Sprint02 = () => {
	return ( <div>
		
<h5>Sprint 2: UPDATE THIS!!! Node.js, JavaScript, Ruby on Rails, and Azure</h5>

<p><em>Welcome to sprint 2.</em> UPDATE THIS!!! We covered a lot of material in sprint 1. However, we didn't get a chance to write 
much code. This sprint get your text editors out. We are going to start practicing some of the concepts we learned.</p>

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>UPDATE THIS!!! Write simple HTML, CSS, Javascript, and Node.js applications and install them to Azure</li>
	<li>Describe the benefits of modern Web development stacks and frameworks including MERN</li>
	<li>Understand simple Ruby programs using basic control structures and data structures</li>
	<li>Understand has Saas applications are developed in JavaScript using AJAX and JSON</li>
	<li>Comfortably be able to utilize single-developer workflow with Git and GitHub</li>
</ul>

{ActivitiesListIntro()}
<ol>
	{StandardActivitiesWithLink(gettingToKnowEachOthersTeamsLink())}
	<li>Within {oreillyPlaylistSC()} read “Essential Scrum” chapters 7 through 10</li>
	<li>Complete {azureWebsiteLink()}{makeEstimateString('2 hours')}</li>
	<li>{InitialDiscussionPost(2)}</li>

	<li>As needed review {HTMLW3C()}, {CSSW3C()}, and {JavaScriptW3C()} tutorials</li>
	{StandardActivitiesClosingWithLink(gettingToKnowEachOthersTeamsLink())}
</ol>
<p>If you are struggling, remember to reach out to your Scrum teammates early and often for help.</p>

</div> )
}

// Node.js?
// Jira Tutorial https://www.atlassian.com/software/jira/guides/getting-started - Jira will be used to manage your team’s project.
