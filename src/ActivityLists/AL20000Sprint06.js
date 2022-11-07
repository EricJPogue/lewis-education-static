import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing } from './AL00000Sprint00'

import { oreillyPlaylistICS, JavaScriptW3C, programmingTogether, internalLink } from '../DataAndAPIs/Links'
import { matchmakerWebLink } from '../Activities/Matchmaker'
import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'
import { azureWebsiteLink } from '../Activities/AzureWebsite'
import { matchmakerPythonLink } from '../Activities/Matchmaker'
import { htmlLink } from '../Activities/HTML'
import { gettingToKnowEachOtherLink } from '../Activities/WebGettingToKnowEachOther'

export const al20000Sprint06 = () => {
	const sprint = 6
	return ( <div>
		<h5>Sprint 6: Networks, The Internet, Cloud Computing, and Updated Final Project Proposal</h5>

		<p>Welcome to sprint 6. Sprint 6 will the continuing trend of you taking more responsibility for learning new topics.  
		The new topic this sprint is JavaScript. We will utilize JavaScript along with HTML and CSS to 
		create a <em>Web</em> version of <span style={{color: "red"}}> &#10084;&#10084;&#10084;</span> Matchmaker <span style={{color: "red"}}>&#10084;&#10084;&#10084;</span>.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{ listStyleType:'square' }}>
			<li>Understand and utilize The Internet and World Wide Web</li>
			<li>Understand and utilize Cloud Computing</li>
			<li>Utilize JavaScript to create interactive Web applications</li>
			<li>Update our Final Project proposals and host them on the Web</li>
		</ul>

		{list20000Sprint06(sprint)}

		{closing(sprint)}
	</div> )
}

export const list20000Sprint06 = (sprint) => {
	const daleWWWLecture = () => { return internalLink('lecture', '/activity-dale/16' )}
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, matchmakerWebLink(), oreillyPlaylistICS())}
			<li>Complete {programmingTogether()} MatchmakerLite for the Web - Part 1</li>
			<li>Review and update {finalProjectProposalLink()}</li>
			<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” The World Wide Web and review our associated {daleWWWLecture()}</li>
			<li>Review the following activities that were completed previously:</li>
			<ul style={{listStyleType:'square'}}>
				<li>{azureWebsiteLink()}</li>
				<li>{matchmakerPythonLink()}</li>
				<li>{htmlLink()}</li>
				<li>{gettingToKnowEachOtherLink()}</li>
			</ul>

			{initialPost(sprint)}
			<li>Within {oreillyPlaylistICS()} read “Learning Web App Development” chapters 3 through 5</li>
			<li>Complete {JavaScriptW3C()} tutorial from W3C</li>
			<li>Complete {programmingTogether()} MatchmakerLite for the Web - Part 2</li>
			{standardActivitiesClosing(sprint, matchmakerWebLink(), '8 hours')}
		</ol>
	</div> )
}

// Certified for SP22 (03/24/2022)
// Certified for FA22 (10/21/2022)