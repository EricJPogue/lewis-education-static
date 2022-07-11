import React from 'react'
import { NavLink } from 'react-router-dom'

import { BASE_ACTIVITY_ROUTE } from './ActivityRouter'
import { oreillyPlaylistSE, externalLink } from '../DataAndAPIs/Links'

const renderIntroductionToReact = () => {
	const reactOrg = () => { return externalLink('React.org', 'https://reactjs.org/') }
	const reactW3C = () => { return externalLink('React', 'https://www.w3schools.com/react/') }
	const reactAzure = () => { return externalLink('Azure Static Web Apps', 'https://aka.ms/swadocs')}

	return ( <div>
		<br />
		<h4>{introductionToReact.name}</h4>
		<h5>Summary: Learn the basics of React by completing a series of activities</h5>
		<h5>Prerequisites: Windows 10 or MacOS, Web Browser, VS Code, Azure, and GitHub</h5>
					
		<p>Complete the following activities to learn the basics of React:</p>
		<ul style={{ listStyleType:'square' }}>
			<li>Within {oreillyPlaylistSE()} read “Learning React, 2nd Edition” chapters 1, 2, and 3</li>
			<li>Review {reactOrg()}</li>
			<li>Scan the {reactW3C()} tutorial from W3C</li>
			<li>Review “Create your fist React app” from {reactAzure()}</li>

		</ul>

		<p>Be sure to save your work so that you can submit it as part of an assignment.</p>
	</div> )
}

export const introductionToReact = { 'name':'Introduction to React', 'route':'introduction-to-react', 'function': renderIntroductionToReact }
export const introductionToReactLink = () => { return makeNavigationLink(introductionToReact) }

const makeNavigationLink = (activity) => {
	return ( <NavLink to={BASE_ACTIVITY_ROUTE+introductionToReact.route}>{introductionToReact.name}</NavLink> )
}




