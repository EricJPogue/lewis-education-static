import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeInternalURL } from './ActivityRouter'

import { agileAlliance, agileAllianceAgile101, backlogGrooming, epic, iNVEST, productBacklog, scrum, userStory, userStoryTemplate } from '../Links';

import { finalProjectProposalLink /* FinalProjectProposalNavLink */ } from './FinalProjectProposal';

export const Start_FinalProject = () => { return (<div>Start working on your <NavLink to='/activity/final-project'>Final Project</NavLink></div>) }
export const Complete_FinalProject = () => { return (<div>Complete your <NavLink to='/activity/final-project'>Final Project</NavLink></div>) }

export const FinalProject = () => {
	return (
	
<div>
<br />
<h4>Final Project</h4>
<h5>Summary: Based on your final project proposal, you are going to have the opportunity to deliver something uniquely 
your own.</h5>
<h5>Prerequisites:</h5>
<ul style={{listStyleType:'square'}}>
	<li>{finalProjectProposalLink()}</li>
</ul>

<p>In this activity you will deliver a final project that is uniquely your own. What you create should include the 
features defined in your final project proposal. As much as possible the features should be implemented in the priority 
order that you identified in your proposal.</p>

<p>It’s understandable that you may not be able to implement all of the features that you identified. However, you will
need to make sure that your finished product implements sufficient features to be a complete and usable product.</p>

<em>Requirement 1</em>
<p>Create a product based on your <NavLink to='/activity/final-project-proposal'>Final Project Proposal</NavLink> by:</p>
<ol>
	<li>Successfully deploying your application to an appropriate production environment</li>
	<li>Making the source code available for review</li>
	<li>Creating a simple yet visually pleasing user interface</li>
	<li>Including and help system and user instructions that succinctly describes the application and how it works</li>
</ol>

<em>Requirement 2</em>
<p>Implement at least four (4) meaningful features that are of <em>similar complexity</em> to 
features we delivered in previous applications.</p>

<em>Requirement 3</em>
<p>Enhance your application so that it implements at least two (2) meaningful features that 
are <em>greater in complexity</em> than features we delivered in previous applications.</p>

<em>Requirement 4</em>
<p>Update your <NavLink to='/activity/final-project-proposal'>Final Project Proposal</NavLink> and README.md file so they reflect:</p>
<ol>
	<li>What was originally planned for your final project</li>
	<li>What was delivered in your Final Project</li>
	<li>What would be the next feature(s) you would add if you had more time</li>
	<li>Contact information for yourself if someone wanted to contact you about continuing to enhance your application</li>
</ol>
</div> )
}

export const Start_FinalProjectDistributedV1 = () => { return (<div>Start working on version 1 of your <NavLink to='/activity/final-project-distributed'>Final Project</NavLink></div>) }
export const Complete_FinalProjectDistributedV1 = () => { return (<div>Complete version 1 of your <NavLink to='/activity/final-project-distributed'>Final Project</NavLink><sup> ~5 hours</sup></div>) }
export const Start_FinalProjectDistributed = () => { return (<div>Start working on your <NavLink to='/activity/final-project-distributed'>Final Project</NavLink></div>) }
export const Complete_FinalProjectDistributed = () => { return (<div>Complete your <NavLink to='/activity/final-project-distributed'>Final Project</NavLink> <sup> ~12 hours</sup></div>) }

export const FinalProjectDistributed = () => {
	return (
	
<div>
<br />
<h4>Final Project</h4>
<h5>Summary: Based on your final project proposal, you are going to deliver something uniquely your own.</h5>
<h5>Prerequisites:</h5>
<ul style={{listStyleType:'square'}}>
	<li><NavLink to='/activity/final-project-proposal'>Final Project Proposal</NavLink></li>
</ul>

<p>In this activity you will deliver a final project that is uniquely your own. What you create should include the 
features defined in your final project proposal. As much as possible the features should be implemented in the priority 
order that you identified in your proposal.</p>

<p>It’s understandable that you may not be able to implement all of the features that you identified. However, you will
need to make sure that your finished product implements sufficient features to be a complete and usable product.</p>

<em>Requirement 1</em>
<p>Create a product based on your <NavLink to='/activity/final-project-proposal'>Final Project Proposal</NavLink> by:</p>
<ol>
	<li>Successfully deploying your application to an appropriate production environment</li>
	<li>Making the source code available for review</li>
	<li>Creating a simple yet visually pleasing user interface</li>
	<li>Including and help system and user instructions that succinctly describes the application and how it works</li>
</ol>

<em>Requirement 2</em>
<p>Implement at least four (4) meaningful features that are of <em>similar complexity</em> to 
features we delivered in previous applications.</p>

<em>Requirement 3</em>
<p>Enhance your application so that it implements at least two (2) meaningful client features that 
are <em>greater in complexity</em> than features we delivered in previous applications.</p>

<em>Requirement 4</em>
<p>Enhance your application so that it implements at least two (2) server-side features that 
are <em>greater or equal in complexity</em> than features we delivered in previous applications.</p>
</div> )
}

const FINAL_PROJECT_SPRINT_5_NAME = 'Final Project Sprint 5'
export const FINAL_PROJECT_SPRINT_5_ROUTE = 'final-project-sprint-5'
export const finalProjectSprint5Link = () => {return (<NavLink to={makeInternalURL(FINAL_PROJECT_SPRINT_5_ROUTE)}>{FINAL_PROJECT_SPRINT_5_NAME}</NavLink>)}
export const finalProjectSprint5 = () => { 
	return ( <div>

<br />
<h4>{FINAL_PROJECT_SPRINT_5_NAME}</h4>
<h5>Summary: In addition to creating a final project proposal, we are going to utilize our technical capabilities and 
process knowledge to deliver something to a production environment.</h5>
<h5>Prerequisites:</h5>
<ul style={{listStyleType:'square'}}>
	<li>{finalProjectProposalLink()}</li>
</ul>

<p>In this activity you will start your final project. Build something. Anything that makes you feel good and shows 
that you invested an appropriate amount of time and effort. Maybe perform a technology spike to set up development,
test, and production environments?</p>

<em>Requirement</em>
<p>Create something pretty that showcases your idea by utilizing the CI/CD philosophy to :</p>
<ol>
	<li>Successfully deploying your product to a local development and test environment to you personal computer</li>
	<li>Successfully deploying your product to hosted test and production environments</li>
	<li>Review {scrum()} while focusing on Events, Artifacts, and Rolls</li>
	<li>Review {agileAllianceAgile101()} from {agileAlliance()}</li>
	<li>Understand and consistently utilize {userStory()}, {userStoryTemplate()}, {epic()}, {productBacklog()}, {backlogGrooming()} and {iNVEST()}</li>
	<li>Complete {backlogGrooming()} to create and update groom your {productBacklog()} while creating appropriate <em>artifacts</em></li>
</ol>

</div> )
}

const FINAL_PROJECT_SPRINT_6_NAME = 'Final Project Sprint 6'
export const FINAL_PROJECT_SPRINT_6_ROUTE = 'final-project-sprint-6'
export const finalProjectSprint6Link = () => {return (<NavLink to={makeInternalURL(FINAL_PROJECT_SPRINT_6_ROUTE)}>{FINAL_PROJECT_SPRINT_6_NAME}</NavLink>)}

export const finalProjectSprint6 = () => {
	return (
	
<div>
<br />
<h4>Final Project Sprint 6</h4>
<h5>Summary: Let’s deliver sprint 6 of our final project.</h5>
<h5>Prerequisites:</h5>
<ul style={{listStyleType:'square'}}>
	<li><NavLink to='/activity/final-project-proposal'>Final Project Proposal</NavLink></li>
	<li><NavLink to='/activity/final-project-sprint-5'>Final Project Sprint 5</NavLink></li>
</ul>

<p>This is our first full sprint for our final project. We delivered something in sprint 5, we completed sprint 6 
planning, and we have made our specific commitment for sprint 6.</p>

<p>Always remember the that in agile and scrum stories must be 100% complete in order to receive any credit for completing 
the story. There is no such thing as “almost complete” or even ”99% complete” in scrum. We often use the term <em>done</em> to 
describe a story that is 100% complete. At a minimum, our definitions of <em>done</em> in sprint 6
includes that a story is fully implemented the story’s user centric functionality, deployed tou the team’s production 
website, and is “demo-able” by every member of the team.</p>

<p>Create something that adds value and you can be proud of creating.</p>

<h6>Requirement 1: Complete sprint 5 Review and Retrospective</h6>
<h6>Requirement 2: Complete sprint 6 Planning by the end of the first class session</h6>
<h6>Requirement 3: Execute sprint 6</h6>
<h6>Requirement 4: Complete sprint 6 backlog grooming in preparation for sprint 7 planning</h6>
</div> )
}

export const Start_FinalProjectSprint7 = () => { return (<div>Start working on <NavLink to='/activity/final-project-sprint-7'>Final Project Sprint 7</NavLink></div>) }
export const Complete_FinalProjectSprint7 = () => { return (<div>Complete <NavLink to='/activity/final-project-sprint-7'>Final Project Sprint 7</NavLink><sup>~10 hours per team member</sup></div>) }
export const FinalProjectSprint7 = () => {
	return (
	
<div>
<br />
<h4>Final Project Sprint 7</h4>
<h5>Summary: Sprint 7. Let’s keep building on we have accomplished.</h5>
<h5>Prerequisites:</h5>
<ul style={{listStyleType:'square'}}>
	<li><NavLink to='/activity/final-project-proposal'>Final Project Proposal</NavLink></li>
	<li><NavLink to='/activity/final-project-sprint-6'>Final Project Sprint 6</NavLink></li>
</ul>

<p>We should be gaining a rhythm in our working together as a team by now. Hopefully we delivered something useful 
in sprint 6. Now it’s time to focus continuous improvement and living up sprint 7 commitments.</p>

<p>Part of our rhythm should include:</p>
<ul style={{listStyleType:'square'}}>
	<li>Demo, release, and reflect on what was delivered in the previous sprint</li>
	<li>Plan for the current sprint</li>
	<li>Deliver committed stories in current sprint</li>
	<li>Groom the story backlog for the next sprint</li>
</ul>

<p>High performing scrum teams are able to consistently allocate 80% or more of their effort to Delivery of current 
sprint stories while still effectively completing demo, release, reflect, and planning activities. We have 
approximately 10 hours per person to allocate to delivering something special. How can we stay focused and deliver
something special?</p>
</div> )
}

export const Start_FinalProjectSprint8 = () => { return (<div>Start working on <NavLink to='/activity/final-project-sprint-8'>Final Project Sprint 8</NavLink></div>) }
export const Complete_FinalProjectSprint8 = () => { return (<div>Complete <NavLink to='/activity/final-project-sprint-8'>Final Project Sprint 8</NavLink><sup>~12 hours per team member</sup></div>) }
export const FinalProjectSprint8 = () => {
	return (
	
<div>
<br />
<h4>Final Project Sprint 8</h4>
<h5>Summary: Sprint 8. This is it. Let’s build something special.</h5>
<h5>Prerequisites:</h5>
<ul style={{listStyleType:'square'}}>
	<li><NavLink to='/activity/final-project-proposal'>Final Project Proposal</NavLink></li>
	<li><NavLink to='/activity/final-project-sprint-7'>Final Project Sprint 7</NavLink></li>
</ul>

<p>We should be working with a solid cadence. Now it’s time to focus all of our energy on building something special.</p>

<p>Our cadence should include:</p>
<ul style={{listStyleType:'square'}}>
<li>Demo, release, and reflect on what was delivered in the previous sprint</li>
	<li>Plan for the current sprint</li>
	<li>Deliver committed stories in current sprint</li>
	<li>In the spirit of Agile we will not be grooming the backlog or planning for the next sprint</li>
</ul>

<p>Once again, high performing scrum teams are able to consistently allocate 80% or more of their effort to Delivery of 
current sprint stories while still effectively completing demo, release, reflect, and planning activities. We don’t need 
to plan for the next sprint because this is it. You should plan on each team member allocating approximately 12 this 
sprint.</p>
</div> )
}