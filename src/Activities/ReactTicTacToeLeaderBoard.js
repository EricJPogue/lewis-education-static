import React from 'react'

import { makeNavigationLink } from './ActivityLink'
import { reactTicTacToeLink } from './ReactTicTacToe'

const renderReactTicTacToeLeaderBoard = () => {
	return ( <div><br />
		<h3>{reactTicTacToeLeaderBoard.name}</h3>
		<h5>Summary</h5>
		<p>Utilize React, Node.js, and Auth0 to implement a secure {reactTicTacToeLink()} Leader Board and host it on Microsoft Azure</p>
		<h5>Prerequisites</h5>
		<p>{reactTicTacToeLink()} and Auth0 account</p>
		<h5>Instruction & Requirements</h5>
		<p>Enhance the {reactTicTacToeLink()} application by creating a secure Lewis-Tac-Toe Leader Board. Be sure to utilize
			CI/CD throughout the implementation so that you don’t paint yourself into a corner.</p>
		<em>Requirement 1</em>
		<p>Create an application that:</p>
		<ol type='n'>
			<li>Utilized basic HTML, CSS, and JavaScript hosted on Microsoft Azure to implement a hardcoded Lewis-Tac-Toe Leader Board</li>
			<li>Enhance the Lewis-Tac-Toe Leader Board so that it shows the UserName and TotalWinsOrTies for the top 3 Lewis-Tac-Toe Player</li>
			<li>Implement the GetLewisTacToeLeaders public API on the Node.js server that returns JSON data of UserName and TotalWins</li>
			<li>Update the client Lewis-Tac-Toe Leader Board so that it pulls the data from the GetLewisTacToeLeaders API </li>
		</ol>

		<em>Requirement 2</em>
		<p>Enhance the application so that it also:</p>
		<ol type='n'>
			<li>Sign up for Auth0 and review how to utilize Auth0 with GitHub credential to implement user level Authentication on Node.js</li>
			<li>Implement a Node.js AddWinOrTie API that is secured by the user’s GitHub credential and adds a win or tie for the user’s total wins</li>
			<li>Update the Lewis-Tac-Toe Leader Board client with an “I Just Won (or Tied)” button that that calls the AddWin API</li>
			<li>Authentication is only required the first time the button is pressed in a given session</li>
		</ol>

		<em>Requirement 3</em>
		<p>Enhance the application so that it:</p>
		<ol type='n'>
			<li>Implements Lewis-Tac-Toe Leader Board in React by calling the GetLewisTacToeLeaders public API</li>
			<li>Calls the AddWinOrTie secure API each time a game is won (or tied)</li>
			<li>Be sure that you are able to successfully update and test your secure application locally</li>
			<li>Document the process for testing secure functions locally in your README.md file</li>
		</ol>

		<em>Requirement 4</em>
		<p>Enhance your application so that it also:</p>
		<ol type='n'>
			<li>Review Auth0 on how to add additional sources of Authentication credentials</li>
			<li>Add Google authentication credentials</li>
			<li>Add Office365 authentication credentials</li>
			<li>Add custom application specific email and password credentials</li>
		</ol>
	</div> )
}

export const reactTicTacToeLeaderBoard = { 'name':'Lewis-Tac-Toe Leader Board', 'route':'lewis-toe-leader-board', 'render':renderReactTicTacToeLeaderBoard }
export const reactTicTacToeLeaderBoardLink = () => { return makeNavigationLink(reactTicTacToeLeaderBoard) }
