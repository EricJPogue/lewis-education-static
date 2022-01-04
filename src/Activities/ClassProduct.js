import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeInternalURL } from './ActivityRouter';
import { aidanLink } from './Aidan';
import { seatSelectorMERNLink } from './SeatSelectorMERN';
import { quizMasterMERNLink } from './QuizMasterMERN';
import { pitHubLink } from './PitHub';

const name = 'Class Product Sprint 1'
export const CLASS_PRODUCT_SPRINT_1_ROUTE = 'class-product-sprint-1'
export const classProductSprint1Link = () => {return (<NavLink to={makeInternalURL(CLASS_PRODUCT_SPRINT_1_ROUTE)}>{name}</NavLink>)}
export const classProductSprint1 = () => {
	return (
	
<div>
<br />
<h4>{name}</h4>
<h5>Summary: Review available products, make team assignments, and self-organize into scrum teams, and start working.</h5>
<h5>Prerequisites: None</h5>

<p>In sprint 1 we will be requesting products, assigning ourselves to 3 to 5 person scrum teams, self-organizing within 
our assigned teams, and starting to work on our product.</p>

<p>Below are descriptions of the products that we will be working on this semester. While you are reviewing the 
products, it is important to keep in mind that the most difficult responsibility you will have during the semester is 
to identify, recruit, and work with real-world users of your product. It can be immensely challenging to find 
real-world users that are able and willing to effectively collaborate with you on your product. <em>Remember your team is
development, support, operations, product owner, and marketing for your product during the semester.</em></p>

<p>The products that are available for you to work on this semester are:</p>
<ul style={{listStyleType:'square'}}>
	<li>{aidanLink()}</li>
	<li>{pitHubLink()}</li>
	<li>{seatSelectorMERNLink()}</li>
	<li>{quizMasterMERNLink()}</li>
	
{/* Todo: Joint Delivery Drone project */}
{/* Todo: Consider Arduino drone Software project */}

</ul>

<em>Requirement 1</em>
<p>Review each of the products above in detail and send an email to your instructor that includes:</p>
<ol>
	<li>Your prioritized (forced ranked) list of at least three products from above that you would like to work on this semester</li>
	<li>A very brief summary of what interest you most about your top two prioritized products</li>
	<li>Any classmates that you would like to work together with on the same product and team</li>
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
