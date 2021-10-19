import React from 'react';
import { NavLink } from 'react-router-dom';

export const FinalProjectProposal = () => {
	return (
	
<div>
<br />
<h4>Final Project Proposal</h4>
<h5>Summary: Create a final project proposal web page.</h5>
<h5>Prerequisites:</h5>
<ul style={{listStyleType:'square'}}>
	<li><NavLink to='/activity/getting-to-know-each-other'>Getting to Know Each Other</NavLink></li>
	<li><NavLink to='/activity/azure-website'>Azure Free Static Website Tutorial</NavLink></li>
</ul>
			
<p>In this project you will create a final project proposal web page. The web page should take the form of a single 
file named “index.html” The file should be self contained and include HTML, CSS, and any JavaScript associated 
with your proposal and should be hosted as a website in Azure.</p>

<em>Requirement</em>
<p>Create a descriptive and aesthetically pleasing final project proposal web page that includes:</p>
<ol>
	<li>Your application name... <em>give it a good name!</em></li>
	<li>The team delivering the application</li>
	<li>A last updated entry that includes the last sprint and date when the proposal was updated</li>
	<li>A brief description of the application from a end user perspective</li>
	<li>A prioritized list of desired features that you believe can be delivered in the time allowed</li>
	<li>A non-prioritized list of features that you would like to implement if there was more time</li>
	<li>The languages and platforms that will be utilized</li>
	<li>The technical features being implemented that demonstrates things you have learned in the class</li>
	<li>The technical features being implemented that go beyond what we learned in class</li>
</ol>

</div> )

}