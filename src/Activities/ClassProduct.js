import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeInternalURL } from './ActivityRouter';
import { externalLink } from '../Links';


import { aidanLink } from './Aidan';
import { arduinoDroneLink } from './ArduinoDrone';
import { deliveryDroneLink } from './DeliveryDrone';
import { pitHubLink } from './PitHub';
import { quizMasterMERNLink } from './QuizMasterMERN';
import { seatSelectorMERNLink } from './SeatSelectorMERN';

const name1 = 'Class Product Sprint 1'
export const CLASS_PRODUCT_SPRINT_1_ROUTE = 'class-product-sprint-1'
export const classProductSprint1Link = () => {return (<NavLink to={makeInternalURL(CLASS_PRODUCT_SPRINT_1_ROUTE)}>{name1}</NavLink>)}
export const classProductSprint1 = () => {
	return (
	
<div>
<br />
<h4>{name1}</h4>
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
	<li>Your GitHub user name</li>
	<li>A list of any classmates that you would like to work together with on the same Scrum product team</li>
	<li>A brief summary of when you would be available to meet regularly and synchronously with your Scrum team</li>
	<li>When you took Software Engineering (and your instructor) plus a description of your comfort level with Agile and Scrum</li>
</ol>

<em>Requirement 2</em>
<p>Accept the invitation from your instructor to join the GitHub repository where you and your team will be developing 
your class product:</p>
<ol>
	<li>Accept the GitHub invitation from your instructor</li>
	<li>Add your name and email address and GitHub user ID to the Credits section of the README.md file</li>
	<li>Review any code or documents currently</li>
	<li>Review how you and your team will submit and update all team assignments utilizing the product repository</li>
</ol>

</div> )
}

const markdownOnGitHub = () => { return externalLink('Markdown', 'https://docs.github.com/en/github/writing-on-github')}
const minimumViableProduct = () => { return externalLink('Minimum Viable Product', 'https://www.agilealliance.org/glossary/mvp/')}
const agileAlliance = () => { return externalLink('Agile Alliance', 'https://www.agilealliance.org/')}

const name2 = 'Class Product Sprint 2'
export const CLASS_PRODUCT_SPRINT_2_ROUTE = 'class-product-sprint-2'
export const classProductSprint2Link = () => {return (<NavLink to={makeInternalURL(CLASS_PRODUCT_SPRINT_2_ROUTE)}>{name2}</NavLink>)}
export const classProductSprint2 = () => {
	return ( <div>
		
<br />
<h4>{name2}</h4>
<h5>Summary: Implement an initial version of your product with full continuous integration / continuous deployment (CI/CD)
(CI/CD) functionality while creating a vision for your product’s minimum viable product.</h5>
<h5>Prerequisites: None</h5>

<p>In sprint 2 you and your team will be implementing a minimal version of your product with full CI/CD capabilities. 
At the same time, you will be consolidating and refining your various views on your minimum viable product (MVP) to create 
a shared MVP view that you will publish as a team in your team’s GitHub repository. </p>

<em>Requirement 1</em>
<p>Review each team member’s MVP proposal from sprint 1 and create a single shared team MVP direction paper:</p>
<ol>
	<li>Review the definition of {minimumViableProduct()} (MVP) from {agileAlliance()}</li>
	<li>Review each team member’s MVP proposal from sprint 1</li>
	<li>As a team create and publish a MVP direction paper for your product</li>
	<li>Your direction paper needs to be very high quality from a content, clarity, format, and technical perspective</li>
	<li>Your final MVP paper should be embraced by all team members, maintained in your GitHub repository utilizing 
		{markdownOnGitHub()}, and linked to the README.md file</li>
	<li>To appropriately cover the topics a 500 to 1500 word document would be expected (1 to 3 pages)</li>
</ol>

<em>Requirement 2</em>
<p>Implement CI/CD for product team:</p>
<ol>
	<li>Determine what your product’s development, test, and production architecture requires from a CI/CD perspective</li>
	<li>Configure your GitHub repository so that it support development, test, and production environments</li>
	<li>Configure each team member’s local development environment so that they develop and unit test</li>
	<li>Configure test and production environments so that they fully implement CI/CD</li>
</ol>

<em>Requirement 3</em>
<p>Implement CI/CD for customers (users):</p>
<ol>
	<li>Determine what your product’s architecture requires from a CI/CD customer (end user) perspective</li>
	<li>Configure customer (end user) environments for access to test and production environments</li>
</ol>

<em>Requirement 4</em>
<p>Sustainably document CI/CD team philosophy and detailed implementation:</p>
<ol>
	<li>Document the system process and configuration of product organization for repository, hosting, and deployment</li>
	<li>Document the individual developer process (new team member) process and configuration</li>
	<li>Document the new customer (user) process and configuration</li>
	<li>Maintain each of these document in {markdownOnGitHub()} in the product GitHub repository and link them to the README.md file</li>
</ol>

	</div> )
}
