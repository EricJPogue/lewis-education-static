import React from 'react'

import { getModuleDescription } from '../DataAndAPIs/ClassSections'
import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing } from './AL00000Sprint00'

import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'
import { MernaMaLink } from '../Activities/MERNaMa'

export const al44500Sprint06 = () => { 
	const sprint = 6
	return ( <div>
		<h5>Sprint {sprint}: {getModuleDescription(sprint-1)}</h5>

		<p><em>Welcome to sprint {sprint}.</em> Let’d pull it all together and make the MERNa Applications Framework 
		easy to set up. Let’s practice by setting up MERNa for a “real” application by configuring and deploying the
		starting point for the {MernaMaLink()} application.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Understand multiple Application Frameworks and where they apply</li>
			<li>Make it easy to set up a MERNa application</li>
			<li>Set up your MERNA framework infrastructure for your Class Product</li>
			<li>Understand how to automating MERNA setup</li>
		</ul>
		{list44500Sprint06(sprint)} 
		{closing(sprint)}
	</div> ) 
}

export const list44500Sprint06 = (sprint) => {
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, MernaMaLink())} 
			<li>Update {finalProjectProposalLink()}</li>
			{initialPost(sprint)}
			<li>Set up your MERNa application framework infrastructure for your {finalProjectProposalLink()}</li>
			{standardActivitiesClosing(sprint, MernaMaLink(), '12 hours')}
		</ol>
	</div> )
}

// Certified for SP24 on 04/01/2024. EJP 