import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing } from './AL00000Sprint00'

// import { AzureFunctionsWithVSCodeAndJavaScript } from '../DataAndAPIs/Links'

import { finalProjectSprint7Link } from '../Activities/FinalProject'
import { introductionToReactLink } from '../Activities/IntroductionToReact'
import { oreillyPlaylistSE, internalLink } from '../DataAndAPIs/Links'

import { externalLink } from '../DataAndAPIs/Links'
import { getModuleDescription } from '../DataAndAPIs/ClassSections'

export const al44000Sprint07 = () => {
	const sprint = 7
	return ( <div>
		<h5>Sprint 7: {getModuleDescription(sprint-1)}</h5>
		<p>Welcome to sprint 7. This sprint will bring closure to our class project. We will be delivering stories, 
		cleaning up our products, and transferring or accepting product ownership.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Utilize your knowledge of Agile development and SaaS to deliver a class product that you are proud of creating</li>
			<li>Understand Design Patterns with a particular focus on the Model-View-Controller pattern</li>
			<li>Understand basic React application in Azure</li>
		</ul>

		{list44000Sprint07(sprint)}
		{closing(sprint)}
	</div> )
}

export const list44000Sprint07 = (sprint) => {
	const reactProgrammingTogether = () => { return internalLink('React on Azure', '/activity-config/react-on-azure')}
	const agileCoachInterview = () => { return externalLink('Interview with an Agile Coach', 'https://www.youtube.com/watch?v=bB340S0tGf8')}
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, finalProjectSprint7Link(), oreillyPlaylistSE())}
			<li>Read Chapter 10 of Fox on Project Management, Scrum, Pairs, and Version Control Systems</li>
			<li>Review in detail {agileCoachInterview()}</li>

			{initialPost(sprint)}
			<li>Within {oreillyPlaylistSE()} read “Design Patterns” through chapter 1</li>
			<li>Scan Introduction to React {introductionToReactLink()}</li>	
			<li>Scan {reactProgrammingTogether()} programming together tutorial</li>
			{standardActivitiesClosing(sprint, finalProjectSprint7Link(), '20 hours')}
		</ol>
	</div> )
}

// Certified for SP24 on 04/14/2024. EJP



