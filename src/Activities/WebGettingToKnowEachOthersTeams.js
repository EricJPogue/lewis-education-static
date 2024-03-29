import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeInternalURL } from './ActivityRouter';

const NAME = 'Getting to Know Each Other Teams'
export const GETTING_TO_KNOW_EACH_OTHER_TEAMS_ROUTE = 'getting-to-know-each-other-teams'
export const gettingToKnowEachOthersTeamsLink = () => {return (<NavLink to={makeInternalURL(GETTING_TO_KNOW_EACH_OTHER_TEAMS_ROUTE)}>{NAME}</NavLink>)}
export const gettingToKnowEachOthersTeams = () => {
	return ( <div>
		<br />
		<h4>{NAME}</h4>
		<h5>Summary: <em>As a team</em> create an HTML page dedicated to your scrum team</h5>
		<h5>Prerequisites: Windows 10 or MacOS, VS Code, FireFox, Chrome, HTML, and CSS</h5>
					
		<p>In this activity you will work as a scrum team to create a static HTML, CSS, and JavaScript based web page for your 
		team. Everyone on the team will participate in the creation of deployment of this site through a shared GitHub 
		repository and Assure static website that is linked to the GitHub repository.</p>

		<em>Requirement 1</em>
		<p>Create a GitHub organization, a public GitHub repository in the organization, and at least two Azure static websites that:</p>
		<ol>
			<li>Includes all team members in the organization</li>
			<li>Allows each team members to add, edit, and update source code in the GitHub repository</li>
			<li>Include Azure static website hosted by at least two separate team members</li>
			<li>Automatically updates the two or more associated static Azure website when GitHub is updated</li>
		</ol>

		<em>Requirement 2</em>
		<p>Create an aesthetically pleasing web page in HTML, CSS, and JavaScript that includes:</p>
		<ol>
			<li>A large centered picture of your scrum team that is an image map linked to each team member’s Getting To Know Each Other page</li>
			<li>A list of team members that also includes links to each team member’s Getting To Know Each Other page</li>
			<li>An area that will serve as your team’s assignment portfolio</li>
			<li>A GitHub history that demonstrates each team member updating their own image map section and own membership information</li>
		</ol>
	</div> )
}