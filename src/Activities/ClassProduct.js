import React from 'react'
import { NavLink } from 'react-router-dom'

import { makeInternalURL } from './ActivityRouter'
import { externalLink, agileAlliance, scrum, agileAllianceAgile101, productBacklog, sprintPlanning, sprintBacklog, userStory, userStoryTemplate, iNVEST, done } from '../DataAndAPIs/Links'

import { aidanLink } from './Aidan'
import { arduinoDroneLink } from './ArduinoDrone'
import { pitHubLink } from './PitHub'
import { quizMasterMERNLink } from './QuizMasterMERN'
import { seatSelectorMERNLink } from './SeatSelectorMERN'

const name1 = 'Class Product Sprint 1'
export const CLASS_PRODUCT_SPRINT_1_ROUTE = 'class-product-sprint-1'
export const classProductSprint1Link = () => {return (<NavLink to={makeInternalURL(CLASS_PRODUCT_SPRINT_1_ROUTE)}>{name1}</NavLink>)}
export const classProductSprint1 = () => {
	return (
	
<div>
<br />
<h4>{name1}</h4>
<h5>Summary: Review available products, request teams, make team assignments, self-organize into scrum teams, and 
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
	<li>{pitHubLink()}</li>
	<li>{quizMasterMERNLink()}</li>
	<li>{seatSelectorMERNLink()}</li>
	<li>{arduinoDroneLink()}</li>
</ul>

<p>Although it is possible to request to work on a product other that the products listed above, I encourage you to 
select one of the above products. It would be <em>**extremely**</em> rare for a professional developer to have the 
opportunity to start with a new application or to have the freedom to independently define what they were going to 
create. In real life, 99.9 percent of the software development products already exist, have real users, need to be 
supported while they are being enhanced, are complex with thousands or tens of thousand of lines of code, and not 
breaking the existing application functionality is the number one concern.</p>

<p>If you still feel you would like to propose to work on something else, please set up a time for us to discuss your 
proposal and come prepared with your proposal in hand and ready to discuss the above topics. </p>

<em>Requirement 1</em>
<p>Review each of the products above in detail and send an email to your instructor that includes:</p>
<ol>
	<li>Your prioritized (forced ranked) list of at least three products from above that you would like to work on this 
		semester</li>
	<li>A very brief summary of what interest you most about your top two prioritized products</li>
	<li>Your GitHub user name</li>
	<li>A list of any classmates that you would like to work together with on the same Scrum product team</li>
	<li>Confirmation that you will be available to meet regularly with your team each week on Tuesday from 2-3:15</li>
	<li>When you took Software Engineering (and your instructor) plus a description of your comfort level with Agile 
		and Scrum</li>
</ol>

<em>Requirement 2</em>
<p>Accept the invitation from your instructor to join the GitHub organization or repository where you and your team will 
be developing your class product:</p>
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

const name2 = 'Class Product Sprint 2'
export const CLASS_PRODUCT_SPRINT_2_ROUTE = 'class-product-sprint-2'
export const classProductSprint2Link = () => {return (<NavLink to={makeInternalURL(CLASS_PRODUCT_SPRINT_2_ROUTE)}>{name2}</NavLink>)}
export const classProductSprint2 = () => {
	return ( <div>
		
<br />
<h4>{name2}</h4>
<h5>Summary: Implement an initial version of your product with full continuous integration / continuous deployment (CI/CD)
functionality while creating a vision for your product’s minimum viable product.</h5>
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
	<li>Include <em>a review of and an initial plan for existing product code</em></li> 
	<li>Your direction paper needs to be very high quality from a content, clarity, format, and technical perspective</li>
	<li>Your final MVP paper must be:</li>
		<ul>
			<li>embraced by all team members</li>
			<li>maintained in the root of your GitHub product repository</li>
			<li>in {markdownOnGitHub()} format</li>
			<li>linked to your README.md</li>
		</ul>
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

const name3 = 'Class Product Sprint 3'
export const CLASS_PRODUCT_SPRINT_3_ROUTE = 'class-product-sprint-3'
export const classProductSprint3Link = () => {return (<NavLink to={makeInternalURL(CLASS_PRODUCT_SPRINT_3_ROUTE)}>{name3}</NavLink>)}
export const classProductSprint3 = () => {
	return ( <div>
		
<h5>{name3}</h5>
<p>Prerequisites: {classProductSprint2Link()} </p>
<p><em>Summary:</em> Deliver the most valuable features in your product’s MVP while continuing to enhance the  
continuous integration / continuous deployment (CI/CD) functionality in your product.</p>

<p>In sprint 3 you and your team will focus on implementing the most valuable features from your MVP. <em>Value should 
always be viewed from a customer perspective</em> by constantly asking the question, ”What feature would be 
most likely to entice a person to use this product?” It is expected that each team member will contribute approximately 
12 hours to the activity.</p>

<p>As your team completes each requirement, be sure to appropriately <em>document</em> each activity.</p>

<em>Requirement 1</em>
<p>Bring closure to sprint 2 by completing Review/Demos and Retrospective:</p>
<ol>
	<li>Review {scrum()} and complete your team’s Sprint 2 Review</li>
	<li>Make sure that each team member Demos the stories they completed</li>
	<li>Note that each team member will also need to demo at least one time during the semester their instructor</li>
	<li>Complete your team’s Sprint 2 Retrospective</li>
</ol>

<em>Requirement 2</em>
<p>Plan sprint 3:</p>
<ol>
	<li>Review {scrum()} while focusing on Events, Artifacts, and Rolls</li>
	<li>Review, understand, and utilize {userStory()}, {userStoryTemplate()}, and {iNVEST()}</li>
	<li>Review {agileAllianceAgile101()} from {agileAlliance()} while creating your {productBacklog()}</li>
	<li>Complete {sprintPlanning()} to finalize to the team’s {sprintBacklog()}</li>
	<li>Define {done()} for your team</li>
	<li>Assign each {userStory()} to a single team member and commit as a team to delivering the {sprintBacklog()}</li>
</ol>

<em>Requirement 3</em>
<p>Execute sprint 3:</p>
<ol>
	<li>Verify that each team member is committed to delivering User Stories that are estimated at lest 12 hours effort</li>
	<li>Develop, unit test, and deploy committed User Stories</li>
	<li>Verify that each story that is complete meets your team’s definition of {done()}</li>
	<li>Complete any production version upgrade conversions verifying that production data from previous version is not lost</li>
</ol>

<em>Requirement 4</em>
<p>Test stories, deploy to production, and update CI/CD documentation:</p>
<ol>
	<li>System test your stories in the development and production environments</li>
	<li>Acceptance test one other team members stories in the development and production environments</li>
	<li>Update CI/CD documentation so that it is verified current, maintained as MarkDown, and linked to README.md</li>
	<li>Do <em>not</em> break the production environment</li>
</ol>
</div> )
}

const name4 = 'Class Product Sprint 4'
export const CLASS_PRODUCT_SPRINT_4_ROUTE = 'class-product-sprint-4'
export const classProductSprint4Link = () => {return (<NavLink to={makeInternalURL(CLASS_PRODUCT_SPRINT_4_ROUTE)}>{name4}</NavLink>)}
export const classProductSprint4 = () => {
	const sprint = 4
	const effort = 12
	return ( <div>
		
<h5>{name4}</h5>
<p>Prerequisites: {classProductSprint3Link()} </p>
<p><em>Summary:</em> Complete your team’s MVP while continuing to enhance the continuous integration / continuous 
deployment (CI/CD) functionality in your product.</p>

<p>In sprint {sprint} you and your team will continue to focus on implementing the most valuable features from your 
MVP. <em>Value should always be viewed from a customer perspective</em> by constantly asking the question, ”What 
feature would be most likely to entice a person to use this product?” It is expected that each team member will contribute 
approximately {effort} hours to the activity.</p>

<p>As your team completes each requirement, be sure to appropriately <em>document</em> each activity.</p>

<em>Requirement 1</em>
<p>Bring closure to sprint {sprint-1} by completing Review/Demos and Retrospective:</p>
<ol>
	<li>Review {scrum()} and complete your team’s Sprint {sprint-1} Review</li>
	<li>Make sure that each team member Demos the stories they completed</li>
	<li>Note that each team member will also need to demo at least one time during the semester their instructor</li>
	<li>Complete your team’s Sprint {sprint-1} Retrospective</li>
</ol>

<em>Requirement 2</em>
<p>Plan sprint {sprint}:</p>
<ol>
	<li>Review {scrum()} while focusing on Events, Artifacts, and Rolls</li>
	<li>Review, understand, and utilize {userStory()}, {userStoryTemplate()}, and {iNVEST()}</li>
	<li>Review {agileAllianceAgile101()} from {agileAlliance()} while creating your {productBacklog()}</li>
	<li>Complete {sprintPlanning()} to finalize to the team’s {sprintBacklog()}</li>
	<li>Define {done()} for your team</li>
	<li>Assign each {userStory()} to a single team member and commit as a team to delivering the {sprintBacklog()}</li>
</ol>

<em>Requirement 3</em>
<p>Execute sprint {sprint}:</p>
<ol>
	<li>Verify that each team member is committed to delivering User Stories that are estimated at lest {effort} hours effort</li>
	<li>Develop, unit test, and deploy committed User Stories</li>
	<li>Verify that each story that is complete meets your team’s definition of {done()}</li>
	<li>Complete any production version upgrade conversions verifying that production data from previous version is not lost</li>
</ol>

<em>Requirement 4</em>
<p>Test stories, deploy to production, and update CI/CD documentation:</p>
<ol>
	<li>System test your stories in the development and production environments</li>
	<li>Acceptance test one other team members stories in the development and production environments</li>
	<li>Update CI/CD documentation so that it is verified current, maintained as MarkDown, and linked to README.md</li>
	<li>Do <em>not</em> break the production environment</li>
</ol>

	</div> )
}

export const name5Plus = (sprint) => { return `Class Product Sprint ${sprint}` }
export const CLASS_PRODUCT_SPRINT_5_ROUTE = 'class-product-sprint-5'
export const classProductSprint5Link = () => {return (<NavLink to={makeInternalURL(CLASS_PRODUCT_SPRINT_5_ROUTE)}>{name5Plus(5)}</NavLink>)}
export const classProductSprint5 = () => {
	const sprint = 5
	const effort = 14
	return ( <div>
		<h5>{name5Plus(5)}</h5>
		<p>Prerequisites: {classProductSprint4Link()} </p>
		{classProduct(sprint, effort)}
	</div> )
}

const classProduct = (sprint, effort ) => {
	return ( <div>

<p><em>Summary:</em> Stay focused on delivering and enhancing your team’s MVP.</p>

<p>In sprint {sprint} you and your team will continue to focus on implementing the most valuable features from your 
MVP. <em>Value should always be viewed from a customer perspective</em> by constantly asking the question, ”What 
feature would be most likely to entice a person to use this product?” It is expected that each team member will contribute 
approximately {effort} hours to the activity.</p>

<p>As your team completes each requirement, be sure to appropriately <em>document</em> each activity.</p>

<em>Requirement 1</em>
<p>Bring closure to sprint {sprint-1} by completing Review/Demos and Retrospective:</p>
<ol>
	<li>Review {scrum()} and complete your team’s Sprint {sprint-1} Review</li>
	<li>Make sure that each team member Demos the stories they completed</li>
	<li>Note that each team member will also need to demo at least one time during the semester their instructor</li>
	<li>Complete your team’s Sprint {sprint-1} Retrospective</li>
</ol>

<em>Requirement 2</em>
<p>Plan sprint {sprint}:</p>
<ol>
	<li>Review {scrum()} while focusing on Events, Artifacts, and Rolls</li>
	<li>Review, understand, and utilize {userStory()}, {userStoryTemplate()}, and {iNVEST()}</li>
	<li>Review {agileAllianceAgile101()} from {agileAlliance()} while creating your {productBacklog()}</li>
	<li>Complete {sprintPlanning()} to finalize to the team’s {sprintBacklog()}</li>
	<li>Define {done()} for your team</li>
	<li>Assign each {userStory()} to a single team member and commit as a team to delivering the {sprintBacklog()}</li>
</ol>

<em>Requirement 3</em>
<p>Execute sprint {sprint}:</p>
<ol>
	<li>Verify that each team member is committed to delivering User Stories that are estimated at lest {effort} hours effort</li>
	<li>Develop, unit test, and deploy committed User Stories</li>
	<li>Verify that each story that is complete meets your team’s definition of {done()}</li>
	<li>Complete any production version upgrade conversions verifying that production data from previous version is not lost</li>
</ol>

<em>Requirement 4</em>
<p>Test stories, deploy to production, and update CI/CD documentation:</p>
<ol>
	<li>System test your stories in the development and production environments</li>
	<li>Acceptance test one other team members stories in the development and production environments</li>
	<li>Update CI/CD documentation so that it is verified current, maintained as MarkDown, and linked to README.md</li>
	<li>Do <em>not</em> break the production environment</li>
</ol>

	</div>)
}

export const CLASS_PRODUCT_SPRINT_6_ROUTE = 'class-product-sprint-6'
export const classProductSprint6Link = () => {return (<NavLink to={makeInternalURL(CLASS_PRODUCT_SPRINT_6_ROUTE)}>{name5Plus(6)}</NavLink>)}
export const classProductSprint6 = () => {
	const sprint = 6
	const effort = 14
	return ( <div>
		<h5>{name5Plus(sprint)}</h5>
		<p>Prerequisites: {classProductSprint5Link()} </p>
		{classProduct(sprint, effort)}
	</div> )
}

export const CLASS_PRODUCT_SPRINT_7_ROUTE = 'class-product-sprint-7'
export const classProductSprint7Link = () => {return (<NavLink to={makeInternalURL(CLASS_PRODUCT_SPRINT_7_ROUTE)}>{name5Plus(7)}</NavLink>)}
export const classProductSprint7 = () => {
	const sprint = 7
	const effort = 12
	return ( <div>
		<h5>{name5Plus(sprint)}</h5>
		<p>Prerequisites: {classProductSprint6Link()} </p>
		{classProduct(sprint, effort)}
	</div> )
}

export const CLASS_PRODUCT_SPRINT_8_ROUTE = 'class-product-sprint-8'
export const classProductSprint8Link = () => {return (<NavLink to={makeInternalURL(CLASS_PRODUCT_SPRINT_8_ROUTE)}>{name5Plus(8)}</NavLink>)}
export const classProductSprint8 = () => {
	const sprint = 8
	const effort = 14
	return ( <div>
		<h5>{name5Plus(sprint)}</h5>
		<p>Prerequisites: {classProductSprint7Link()} </p>
		{classProduct(sprint, effort)}
	</div> )
}
