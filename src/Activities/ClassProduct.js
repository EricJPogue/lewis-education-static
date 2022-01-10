import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeInternalURL } from './ActivityRouter';

import { aidanLink } from './Aidan';
import { arduinoDroneLink } from './ArduinoDrone';
import { deliveryDroneLink } from './DeliveryDrone';
import { pitHubLink } from './PitHub';
import { quizMasterMERNLink } from './QuizMasterMERN';
import { seatSelectorMERNLink } from './SeatSelectorMERN';

const name = 'Class Product Sprint 1'
export const CLASS_PRODUCT_SPRINT_1_ROUTE = 'class-product-sprint-1'
export const classProductSprint1Link = () => {return (<NavLink to={makeInternalURL(CLASS_PRODUCT_SPRINT_1_ROUTE)}>{name}</NavLink>)}
export const classProductSprint1 = () => {
	return (
	
<div>
<br />
<h4>{name}</h4>
<h5>Summary: Review available products, request teams, make team assignments, and self-organize into scrum teams, and 
start working.</h5>
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
	<li>{aidanLink()} (formerly known as Stadia)</li>
	<li>{deliveryDroneLink()} / {arduinoDroneLink()}</li>
	<li>{pitHubLink()}</li>
	<li>{quizMasterMERNLink()}</li>
	<li>{seatSelectorMERNLink()}</li>
</ul>

<p>Note that since the {deliveryDroneLink()} project is limited to two additional team members this semester, we will 
likely utilize the {arduinoDroneLink()} project as our “overflow” if we have additional drone interest.</p>

<em>Requirement 1</em>
<p>Review each of the products above in detail and send an email to your instructor that includes:</p>
<ol>
	<li>Your prioritized (forced ranked) list of at least three products from above that you would like to work on this semester</li>
	<li>A very brief summary of what interest you most about your top two prioritized products</li>
	<li>A list of any classmates that you would like to work together with on the same Scrum product team</li>
	<li>A brief summary of when you would be available to meet regularly and synchronously with your Scrum team</li>
	<li>When you took Software Engineering (and your instructor) plus a description of your comfort level with Agile and Scrum</li>
</ol>

<em>Requirement 2</em>
<p>Accept the invitation from your instructor to join the GitHub repository where you and your team will be developing 
your class product:</p>
<ol>
	<li>Accept the GitHub invitation from your instructor</li>
	<li>Add your name and email address to the Credits section of the README.md file</li>
	<li>Review any code or documents currently</li>
	<li>Review how you and your team will submit and update all team assignments utilizing the product repository</li>
</ol>

</div> )
}
