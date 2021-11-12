import React from 'react';
import { NavLink } from 'react-router-dom';

const FinalProjectProposalName = 'Final Project Proposal'
const FinalProjectProposalLink = '/activity/final-project-proposal'
export const FinalProjectProposalNavLink = () => { return( <NavLink to={FinalProjectProposalLink}>{FinalProjectProposalName}</NavLink> )} 

export const FinalProjectProposal = () => {
	return (
	
<div>
<br />
<h4>{FinalProjectProposalName}</h4>
<h5>Summary: Create a final project proposal webpage.</h5>
<h5>Prerequisites:</h5>
<ul style={{listStyleType:'square'}}>
	<li><NavLink to='/activity/getting-to-know-each-other'>Getting to Know Each Other</NavLink></li>
	<li><NavLink to='/activity/azure-website'>Azure Free Static Website Tutorial</NavLink></li>
</ul>
			
<p>In this project you will create a final project proposal webpage and host in in Azure. If you will be delivering 
your final project as part of a team, there should be only one final project proposal webpage for the team.</p>

<em>Requirement</em>
<p>Create a final project proposal webpage that is hosted in Azure and includes the following sections:</p>
<ol>
	<li>Product Name... <em>give it a good name!</em></li>
	<li>Team Members</li>
	<li>Application Overview (overview from a end user perspective)</li>
	<li>Technology Overview (languages, libraries, platforms, hosting)</li>
	<li>Proposal Last Updated (the date the proposal was last updated) </li>
	<li>Feature List (prioritized list of features that can likely be delivered in the time allowed)</li>
	<li>Future Feature List (non-prioritized list of end user features that would be implemented if there was more time)</li>
	<li>Basic Technical Features (list of technical features being implemented that demonstrates things you have learned in the class)</li>
	<li>Advanced Technical Features (list of technical features being implemented that go beyond what we learned in class)</li>
</ol>

</div> )

}