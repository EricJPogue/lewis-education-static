import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated, finalProjectsAndMoreResponsibility } from './AL00000Sprint00'
import { oreillyPlaylistICS, internalLink, externalLink, IntroducingPythonSampleCode } from '../DataAndAPIs/Links'
import { getModuleDescription } from '../DataAndAPIs/ClassSections'

import { matchmakerWebLink } from '../Activities/Matchmaker'
import { HelloWorldPythonLink } from '../Activities/HelloWorld'
import { numberingSystemsLink } from '../Activities/PythonNumberingSystems'
import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'
import { pythonAddCommitPushLink } from '../Activities/PythonAddCommitPush'

export const al20000Sprint05 = () => {
	const tiobeIndex = () => externalLink('TIOBE Index', 'https://www.tiobe.com/tiobe-index/')
	let sprint = 5

	return ( <div>
		<h5>Sprint {sprint}: {getModuleDescription(sprint-1)}</h5>
		<p><em>Wow!</em> Here we are in sprint 5. Very well done with {matchmakerWebLink()}.This sprint we switch gears 
		and focusing on Python the #1 most popular computing language in the world according to the {tiobeIndex()}.</p>

		{finalProjectsAndMoreResponsibility()}
		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Explore Networks</li>
			<li>Learn to program with Python</li>
			<li>Master Functions</li>
			<li>Utilize Python to automate repetitive activities</li>
			<li>Create your Final Project Proposal</li>
		</ul>

		{list20000Sprint05(sprint)}
		{closing(sprint)}
	</div> )
}

export const list20000Sprint05 = (sprint) => {
	const pythonW3CPart1 = () => { return internalLink('Python Programming - Part 1', '/activity/python-w3c') }
	const pythonW3CPart2 = () => { return internalLink('Python Programming - Part 2', '/activity/python-w3c') }
	const daleNetworks = () => { return internalLink('lecture', '/activity-dale/15' )}
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, pythonAddCommitPushLink(), oreillyPlaylistICS())}
			<li>Complete {HelloWorldPythonLink()}</li>
			<li>Review {pythonW3CPart1()} from W3C</li>
			<li>Start working on {finalProjectProposalLink()}</li>
			<li>Complete {numberingSystemsLink()}{estimated('2 hours')}</li>

			{initialPost(sprint)}
			<li>Within “Computer Science Illuminated” Networks and review our associated {daleNetworks()}</li>
			<li>Review {pythonW3CPart2()} from W3C</li>
			<li>Within {oreillyPlaylistICS()} read “Introducing Python” Preface through Chapter 1 while reviewing the {IntroducingPythonSampleCode()}</li>
			<li>Complete {finalProjectProposalLink()}{estimated('2 hours')}</li>
			{standardActivitiesClosing(sprint, pythonAddCommitPushLink(), '4 hours')}
		</ol>
	</div> )
}

// Certified for FA22 (10/21/2022)
// Certified for SP23 (02/28/2023)
// Certified for FA23 (10/22/2023)





