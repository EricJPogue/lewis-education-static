import React from 'react'

import { getModuleDescription } from '../DataAndAPIs/ClassSections';
import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing } from './AL00000Sprint00'

import { CSSW3C, HTMLW3C, JavaScriptW3C, externalLink, oreillyPlaylistAF } from '../DataAndAPIs/Links'
import { reactTicTacToeLink } from '../Activities/ReactTicTacToe'
import { reactTicTacToeLeaderBoardLink } from '../Activities/ReactTicTacToeLeaderBoard'

export const al44500Sprint04 = () => {
	const sprint = 4
	return ( <div>
		<h5>Sprint {sprint}: {getModuleDescription(sprint-1)}</h5>
		<p><em>Welcome to sprint 4.</em> So we want to build sophisticated meaningful web applications using our newly
		obtained knowledge of HTML, CSS, JavaScript, and React. To do that we need Web servers and databases. We have 
		this picked out in the form of Node.js, Express, and MongoDB. Great. However, every meaningful web application 
		also needs to be able to Authenticate and Authorize uses in order to be able to effectively leverage web 
		server and database capabilities. It turns out that methods for Authentication vary dramatically and that 
		Authorization is even more none standard. Let’s use this sprint to attempt to standardize this for our ourself
		and for users of the MERNa framework. Should the framework actually be called MERNaaa... MongoDB (M), Express (E),
		React (R), Node.js (N), Azure (a), Authentication (a), and Authorization (a)?</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Deliver HTML, CSS, and JavaScript web applications using Node.js and Express on Microsoft Azure</li>
			<li>Understand the concepts of Authentication and Authorization at both the user and API level</li>
			<li>Add Authentication to a HTML, CSS, JavaScript application running on Node.js and Azure</li>
			<li>Implement a public and secure API using Azure and Node.js using user level Authentication</li>
			<li>Call a Node.js and Azure public and secure API from a React application running on an Azure static website</li>
		</ul>

		{list44500Sprint04(sprint)}
		{closing(sprint)}
	</div> )
}

export const list44500Sprint04 = (sprint) => {
	const react = () => { return externalLink('React', 'https://react.dev/')}
	const reactQuickStart = () => { return externalLink('React Quick Start', 'https://react.dev/learn')}
	const reactTicTacToe = () => { return externalLink('Intro to React - Tic-Tac-Toe', 'https://reactjs.org/tutorial/tutorial.html')}
	const reactMax = () => { return externalLink('React - The Complete Guide” ', 'https://learning.oreilly.com/videos/react-the/9781789132229/')}
	const azureStaticWebApps = () => { return externalLink('Azure Static Web Apps', 'https://aka.ms/swadocs')}
	const azureStaticReactWithPortal = () => { return externalLink('Quickstart: Azure Static site with React and using Azure portal', 'https://learn.microsoft.com/en-us/azure/static-web-apps/getting-started')}
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			<li>{reactTicTacToeLeaderBoardLink()}</li>
			{standardActivities(sprint, reactTicTacToeLink())} 
			<li>Within {oreillyPlaylistAF()} read “Learning Web Development” Preface through Chapter 4</li>
			<li>Review {HTMLW3C()}, {CSSW3C()}, and {JavaScriptW3C()} all from W3C</li>
			<li>Review {react()} and complete {reactQuickStart()} </li>
			{initialPost(sprint)}
			<li>Within O’Reilly Books Complete {reactMax()} by Maximilian Schwarzmüller</li>
			<li>Focus on CI/CD with React by studying {azureStaticWebApps()}</li>
			<li>Complete {azureStaticReactWithPortal()} </li>
			<li>Complete {reactTicTacToe()}</li>
			{standardActivitiesClosing(sprint, reactTicTacToeLink(), '8 hours')}
		</ol>
	</div> )
}

// Certified for SP24 on February 24, 2024