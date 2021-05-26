
import React from 'react';
import { NavLink } from 'react-router-dom';

export const WebDiceRoller = () => {
	return (
	
<div>
<br />
<h4>Dice Roller</h4>
<h5>Summary: Create a website that simulates the rolling as part of a game</h5>
<h5>Prerequisites: </h5>
<ul style={{listStyleType:'square'}}>
	<li>“Getting to Know Each Other” <NavLink to='/activity/getting-to-know-each-other'>[link]</NavLink></li>
	<li>“Azure Free Static Website” <NavLink to='/activity/azure-website'>[link]</NavLink></li>
</ul>
			
<p><em>Instructions:</em> Many games require dice to be rolled to generate random numbers. This week you will create an 
application that rolls dice for a game of your choice. If you cannot come up with a game, you are welcome to create a 
dice roller that rolls dice for the Yahtzee game <a href='https://en.wikipedia.org/wiki/Yahtzee' target='blank' rel='noopener noreferrer'>[link]</a>
games which requires each player to roll five 6-sided dice.</p>
<p>Note that this is intended to be a fairly simple project that only provides the dices rolling aspect of the game. 
The project does not require you to implement additional game play.</p>
<em>Requirement 1</em>
<p>Create website that:</p>
<ol>
	<li>Utilizes separate HTML, CSS, and JavaScript files and is hosted in Microsoft Azure</li>
	<li>Has a simple yet an aesthetically pleasing user interface</li>
	<li>Includes instructions that succinctly describes the application and how to roll dice for the game</li>
	<li>Utilized random numbers to simulate rolling dice</li>
</ol>

<em>Requirement 2</em>
<p>The website should also:</p>
<ol>
	<li>Automatically roll the dice the first time when the page is first loaded (Hint: onload)</li>
	<li>Automatically focus the "roll" button so that pressing the enter key rolls the dice again (Hint: autofocus)</li>
	<li>Have meaningful field headers, all numbers right justified, and all random fields read only</li>
	<li>Have all numbers right justified and all random number fields implemented as read only</li>
</ol>
</div> )

}