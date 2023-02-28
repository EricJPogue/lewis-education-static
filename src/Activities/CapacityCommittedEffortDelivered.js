import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeInternalURL } from './ActivityRouter'
import { externalLink } from '../DataAndAPIs/Links';

const CAPACITY_COMMITTED_EFFORT_DELIVERED_NAME = 'Capacity, Committed, Effort, and Delivered Metric'
export const CAPACITY_COMMITTED_EFFORT_DELIVERED_ROUTE = 'capacity-committed-effort-delivered'
export const capacityCommittedEffortDeliveredLink = () => {return (<NavLink to={makeInternalURL(CAPACITY_COMMITTED_EFFORT_DELIVERED_ROUTE)}>{CAPACITY_COMMITTED_EFFORT_DELIVERED_NAME}</NavLink>)}

export const capacityCommittedEffortDelivered = () => {
	const template = () => { return externalLink('template', 'https://pithub.blob.core.windows.net/nvm4zqwm/ayy69n0u-ccedmt.xlsx') }
	return ( <div>
		<br />
		<h4>{CAPACITY_COMMITTED_EFFORT_DELIVERED_NAME}</h4>
		<h5>Summary: Create or update your team’s Capacity, Committed, Effort, and Delivered metric.</h5>
		<p>In this activity the Scrum Master and Product Owner with the help of all Team Members create or update your 
		team's Capacity, Committed, Effort, and Delivered metric. Definitions and expectations include:</p>
		<ol>
			<li>Update the team’s existing metric or if this is the first time by download the metric {template()}</li>
			<li>Estimated Capacity: Taken from the Activity List</li>
			<li>Story Points Committed: From the committed sprint backlog at sprint planning sign-off</li>
			<li>Hours Worked: Self-reported by each team member</li>
			<li>Story Points Delivered: From sprint backlog and calculated by summing the story point estimates that are “Done”</li>
			<li>Story Points Delivered should be entered and signed off by the Product Owner and signed off by the Scrum Master</li>
			<li>Preliminary sign-offs must occur before the end of a sprint</li>
			<li>Final sign-offs must occur before sprint planning for the next sprint and no later that three days after a sprint ends</li>
			<li>Capacity to Effort: Effort divided by Capacity as a percentage</li>
			<li>Committed to Delivered: Story Points Delivered divided by Story Points Committed as a percentage</li>
			<li>Capacity to Delivered: Delivered divided by Capacity as a percentage</li>
		</ol>
	</div> )
}