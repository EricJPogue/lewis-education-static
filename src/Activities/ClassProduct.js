import React from 'react';
import { NavLink } from 'react-router-dom';

const name = 'Class Product Sprint 1'
export const classProductSprint1Route = 'class-product-sprint-1'
const classProductSprint1InternalURL = '/activity/class-product-sprint-1'
export const classProductSprint1Link = () => {return (<NavLink to={classProductSprint1InternalURL}>{name}</NavLink>)}
export const classProductSprint1 = () => {
	return (
	
<div>
<br />
<h4>{name}</h4>
<h5>Summary: Review available products, make team assignments, and self-organize into scrum teams, and start working.</h5>
<h5>Prerequisites: None</h5>

<p>In sprint 1 we will be requesting products, assigning ourselves to scrum teams, self-organizing within our assigned
teams, and starting to work.</p>

<p>Below are descriptions of the products that we will be working on for this semester. It is important to keep in 
mind that one of the more difficult priorities that you will be responsible for during the semester is to identify and 
work with real-world users of your product. This is challenging to find real-world users that are willing and able to 
work with you. You should keep this responsibility in mind when your are requesting a product.</p>


<em>Requirement 1</em>
<p>Send an email to your instructor that includes:</p>
<ol>
	<li>Your prioritized (forced ranked) list list of at least three products from above that you would like to work on this semester</li>
	<li>Any classmates that you would like to have on your team</li>
</ol>

<em>Requirement 2</em>
<p>Accept the invitation from your instructor to join the GitHub repository where you and your team will be developing 
your class product:</p>
<ol>
	<li>Successfully deploying your product to a local development and test environment to you personal computer</li>
	<li>Successfully deploying your product to hosted test and production environments</li>
	<li>Making the source code available for review</li>
</ol>

<em>Requirement 3</em>
<p>Accept the invitation from your instructor to join the GitHub repository where you and your team will be developing 
your class product:</p>
<ol>
	<li>Successfully deploying your product to a local development and test environment to you personal computer</li>
	<li>Successfully deploying your product to hosted test and production environments</li>
	<li>Making the source code available for review</li>
</ol>

<em>Requirement 4</em>
<p>Accept the invitation from your instructor to join the GitHub repository where you and your team will be developing 
your class product:</p>
<ol>
	<li>Successfully deploying your product to a local development and test environment to you personal computer</li>
	<li>Successfully deploying your product to hosted test and production environments</li>
	<li>Making the source code available for review</li>
</ol>
</div> )
}
