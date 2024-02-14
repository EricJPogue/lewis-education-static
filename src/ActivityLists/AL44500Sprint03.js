import React from 'react'

import { getModuleDescription } from '../DataAndAPIs/ClassSections';
import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing } from './AL00000Sprint00'

import { CSSW3C, HTMLW3C, JavaScriptW3C, externalLink, oreillyPlaylistAF } from '../DataAndAPIs/Links'
import { reactTicTacToeLink } from '../Activities/ReactTicTacToe';

export const al44500Sprint03 = () => {
	const sprint = 3
	return ( <div>
		<h5>Sprint {sprint}: {getModuleDescription(sprint-1)}</h5>
		<p><em>Welcome to sprint 3.</em> We have a quandary. We want to start developing with the very exiting React
		JavaScript framework. However, we likely have a wide variety of more basic web development skills in the class. 
		In order to balance bringing new web developers up to speed quick and keeping experienced web developers 
		motivated, the sprint will be a mix of HTML, CSS, and JavaScript topics and beginning React topics. </p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Deliver HTML and CSS web applications</li>
			<li>Effectively work with JavaScript</li>
			<li>Deploy React applications to Microsoft Azure</li>
			<li>Create basic React applications</li>
		</ul>

		{list44500Sprint03(sprint)}
		{closing(sprint)}
	</div> )
}

export const list44500Sprint03 = (sprint) => {
	const react = () => { return externalLink('React', 'https://react.dev/')}
	const reactQuickStart = () => { return externalLink('React Quick Start', 'https://react.dev/learn')}
	const reactTicTacToe = () => { return externalLink('Intro to React - Tic-Tac-Toe', 'https://reactjs.org/tutorial/tutorial.html')}
	const reactMax = () => { return externalLink('React - The Complete Guide” ', 'https://learning.oreilly.com/videos/react-the/9781789132229/')}
	const azureStaticWebApps = () => { return externalLink('Azure Static Web Apps', 'https://aka.ms/swadocs')}
	const azureStaticReactWithPortal = () => { return externalLink('Quickstart: Azure Static site with React and using Azure portal', 'https://learn.microsoft.com/en-us/azure/static-web-apps/getting-started')}
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
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




