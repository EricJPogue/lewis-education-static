import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing } from './AL00000Sprint00'
import { oreillyPlaylistICS, SequenceSelectionAndRepetition, internalLink, externalLink } from '../DataAndAPIs/Links'
import { getModuleDescription } from '../DataAndAPIs/ClassSections'
import { matchmakerWebLink } from '../Activities/Matchmaker'
import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'

export const al20000Sprint04 = () => {
	let sprint = 4
	return ( <div>
		<h5>Sprint {sprint}: {getModuleDescription(sprint-1)}</h5>
		<p>Let’s write some JavaScript.</p>
		<p><span style={{color: "red"}}> &#10084;&#10084;&#10084;</span> Matchmaker <span style={{color: "red"}}>&#10084;&#10084;&#10084; </span> 
		for the Web will be challenging assignment but I think you will enjoy it!</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{ listStyleType:'square' }}>
			<li>Master {SequenceSelectionAndRepetition()}</li>
			<li>Understand Computing Components</li>
			<li>Continue to enhance your understanding of the World Wide Web (WWW)</li>
			<li>Create, update, and test HTML, CSS, and JavaScript applications</li>
			<li>Understand variables, strings, expressions, and functions</li>
		</ul>

		{list20000Sprint04(sprint)}
		{closing(sprint)}
	</div> )
}

export const list20000Sprint04 = (sprint) => {
	const gitHubPages = () => externalLink('GitHub Pages', 'https://pages.github.com/')

	const daleChapter5Lecture = () => { return internalLink('lecture', '/activity-dale/5') }
	const daleWWWLecture = () => { return internalLink('lecture', '/activity-dale/16' )}

	return ( <div>

		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, matchmakerWebLink(), oreillyPlaylistICS())}
			<li>Read “Computer Science Illuminated” Computing Components and review our associated {daleChapter5Lecture()}</li>
			<li>Complete “Matchmaker Lite for the Web - Part 1” from our programming together tutorials</li>
			<li>Create a {gitHubPages()} themed website that will eventually host your {finalProjectProposalLink()}</li>

			{initialPost(sprint)}
			<li>Master {SequenceSelectionAndRepetition()}</li>
			<li>Read “Computer Science Illuminated” The World Wide Web and review our associated {daleWWWLecture()}</li>
			<li>Complete “Matchmaker Lite for the Web - Part 2” from our programming together tutorials</li>
			{standardActivitiesClosing(sprint, matchmakerWebLink(), '8 hours')}
		</ol>
	</div> )
}

// Certified for SP24 on 02/22/2024. EJP
// Todo: Consider where Networking should fit in relative to WWW as it feels more than a little awkward covering it in sprint 5 after
//     we have already covered the WWW here in sprint 4. Maybe add it here as a quick read? 






