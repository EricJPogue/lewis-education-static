import React from 'react'

import { makeNavigationLink } from './ActivityLink'
import { externalLink } from '../DataAndAPIs/Links'

const renderReactTicTacToe = () => {
	const reactTicTacToeTutorial = () => { return externalLink('Tutorial: Tic-Tac-Toe', 'https://react.dev/learn/tutorial-tic-tac-toe')}
	const azureStaticWebApps = () => { return externalLink('Azure Static Web App','https://learn.microsoft.com/en-us/azure/static-web-apps/?WT.mc_id=build2020_swa-docs-cxa')}
	return ( <div><br />
		<h3>{reactTicTacToe.name}</h3>
		<h5>Summary</h5>
		<p>Utilize React to create a Tic-Tac-Toe game and host it on Microsoft Azure</p>
		<h5>Prerequisites</h5>
		<p>Microsoft Azure and GitHub accounts</p>
		<h5>Instruction & Requirements</h5>
		<p>First, follow a React tutorial to create React version of Tic-Tac-Toe. Then host that application on Microsoft Azure. 
			Next, start with an Azure hosted React application and utilize CI/CD to implement a React version of Tic-Tac-Toe. It 
			seems like we are doing the same thing twice, are we?</p>
		<em>Requirement 1</em>
		<p>Create an application that:</p>
		<ol type='n'>
			<li>Follow the {reactTicTacToeTutorial()} to create a React web Tic-Tac-Toe application</li>
			<li>Utilize Functional Programming instead of Object-Oriented Programming when possible/convenient</li>
			<li>Rename the application to “Lewis-Tac-Toe” from a user perspective</li>
		</ol>

		<em>Requirement 2</em>
		<p>Enhance your application so that it also:</p>
		<ol type='n'>
			<li>Is hosted on Microsoft Azure with its source code Hosted in GitHub</li>
			<li>Document your progress or failure in getting it hosted with GitHub and Azure</li>
			<li>Time box your effort to no more than 3 hours</li>
		</ol>

		<em>Requirement 3</em>
		<p>Start again, but this time:</p>
		<ol type='n'>
			<li>Utilize CI/CD by hosting a simple React web application in GitHub and Azure</li>
			<li>Review {azureStaticWebApps()} and search for tutorials on hosting React apps as Azure static websites</li>
			<li>Start with a Azure via GitHub hosted React app</li>
		</ol>

		<em>Requirement 4</em>
		<p>Enhance your application so that it also:</p>
		<ol type='n'>
			<li>Build {reactTicTacToeTutorial()} by enhancing the simple Azure via Git hub hosted {azureStaticWebApps()}</li>
			<li>Rename the application to “Lewis-Tac-Azure” from a user perspective</li>
			<li>Document your progress and failures</li>
		</ol>
	</div> )
}

export const reactTicTacToe = { 'name':'Lewis-Tac-Toe', 'route':'lewis-toe', 'render':renderReactTicTacToe }
export const reactTicTacToeLink = () => { return makeNavigationLink(reactTicTacToe) }
