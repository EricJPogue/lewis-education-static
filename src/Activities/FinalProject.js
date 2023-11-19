import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeActivityLink } from './ActivityLink'
import { makeInternalURL } from './ActivityRouter'

import { makeNavigationLink } from './Thunderbird';

import { agileAlliance, agileAllianceAgile101, backlogGrooming, epic, iNVEST, productBacklog, scrum, userStory, userStoryTemplate, externalLink, fullStackJavaScriptW3C } from '../DataAndAPIs/Links';

import { finalProjectProposalLink } from './FinalProjectProposal'
import { amazerifficFullStackLink } from './AmazerifficFullStack';
import { capacityCommittedEffortDeliveredLink } from './CapacityCommittedEffortDelivered'

export const Start_FinalProject = () => { return (<div>Start working on your <NavLink to='/activity/final-project'>Final Project</NavLink></div>) }
export const Complete_FinalProject = () => { return (<div>Complete your <NavLink to='/activity/final-project'>Final Project</NavLink></div>) }

export const FinalProject = () => {
	return ( <div>
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

const FINAL_PROJECT_DISTRIBUTED_NAME = 'Class Project'
export const FINAL_PROJECT_DISTRIBUTED_ROUTE = 'final-project-distributed'
export const finalProjectDistributedLink = () => { return makeActivityLink(FINAL_PROJECT_DISTRIBUTED_NAME, FINAL_PROJECT_DISTRIBUTED_ROUTE) }
export const finalProjectDistributed = () => { 
	const continuousIntegration = () => { return externalLink('CI/CD', 'https://www.infoworld.com/article/3271126/what-is-cicd-continuous-integration-and-continuous-delivery-explained.html') }
	return ( <div>
		<br />
		<h4>{FINAL_PROJECT_DISTRIBUTED_NAME}</h4>
		<h5>Summary: Based on your {finalProjectProposalLink()}, deliver version 1 of your final project while focusing on {continuousIntegration()}.</h5>
		<h5>Prerequisites:</h5>
		<ul style={{listStyleType:'square'}}>
			<li>{finalProjectProposalLink()}</li>
			<li>{amazerifficFullStackLink()}</li>
		</ul>
		<p>In this activity you will create something uniquely your own by delivering version 1 of your final project. 
		What you create should leverage the concept of {continuousIntegration()} to implement key features identified 
		in your final project proposal that demonstrate you have successfully implemented and deployed your
		final project Web application utilizing a hosted {fullStackJavaScriptW3C()} architecture.</p>

		<em>Requirement 1</em>
		<p>Create the initial version of your Web application by:</p>
		<ol>
			<li>Reviewing and updating your {finalProjectProposalLink()}</li>
			<li>Creating a <em>public</em> GitHub repository for your final project</li>
			<li>Creating a meaning README.md file that includes a link to your {finalProjectProposalLink()}</li>
			<li>Implement user instructions in your application that comes up when the application starts</li>
		</ol>

		<em>Requirement 2</em>
		<p>Implement at least two (2) meaningful interactive client-side features from your {finalProjectProposalLink()} utilizing 
		HTML, CSS, and JavaScript running in the browser.</p>
		<ol>
			<li>Utilizing HTML to lay out an intuitive user interface </li>
			<li>Utilizing CSS to style the interface visually appealing</li>
			<li>Utilizing JavaScript to make the features interactive</li>
			<li>Testing the Web service running hosted in Microsoft Azure</li>
		</ol>

		<em>Requirement 3</em>
		<p>Enhance your application by implementing a Web service to deliver at least one (1) meaningful server-side 
		feature from your {finalProjectProposalLink()} by:</p>
		<ol>
			<li>Initiating a Web service request from the Web client utilizing JavaScript, Fetch, and AJAX</li>
			<li>Responding to the Web service request on the Node.js Web server utilizing JavaScript and returning JSON</li>
			<li>Testing the Web service running locally</li>
			<li>Testing the Web service running hosted in Microsoft Azure</li>
		</ol>

		<em>Requirement 4</em>
		<p>Enhance your application so that it implements at least one (1) meaningful database feature 
		from your {finalProjectProposalLink()} by:</p>
		<ol>
			<li>Initiating a Web service request from the Web client utilizing JavaScript Fetch and AJAX</li>
			<li>Responding to the Web service request on the Node.js server utilizing JavaScript and returning JSON</li>
			<li>Accessing a MongoDB Atlas database from the Node.js server and return the MongoDB Atlas data to the client via JSON</li>
			<li>Testing the Web service running locally and hosted in Microsoft Azure</li>
		</ol>
	</div> )
}

const FINAL_PROJECT_DISTRIBUTED_V2_NAME = 'Class Project Sprint 8'
export const FINAL_PROJECT_DISTRIBUTED_V2_ROUTE = 'final-project-distributed-v2'
export const finalProjectDistributedV2Link = () => { return makeActivityLink(FINAL_PROJECT_DISTRIBUTED_V2_NAME, FINAL_PROJECT_DISTRIBUTED_V2_ROUTE) }
export const finalProjectDistributedV2 = () => { 
	const continuousIntegration = () => { return externalLink('CI/CD', 'https://www.infoworld.com/article/3271126/what-is-cicd-continuous-integration-and-continuous-delivery-explained.html') }
	return ( <div>
		<br />
		<h4>{FINAL_PROJECT_DISTRIBUTED_V2_NAME}</h4>
		<h5>Summary: Continue to enhance your Final Project by delivering version 2.</h5>
		<h5>Prerequisites:</h5>
		<ul style={{listStyleType:'square'}}>
			<li>{finalProjectProposalLink()}</li>
			<li>{finalProjectDistributedLink()}</li>
		</ul>
		<p>In this activity you will continue to enhance your Final Project by delivering version 2 of the application. 
		What you create should continue to leverage {continuousIntegration()} to implement key features from 
		your {finalProjectProposalLink()} while utilizing a hosted {fullStackJavaScriptW3C()} architecture.</p>

		<em>Requirement 1</em>
		<p>Create the initial version of your Web application by:</p>
		<ol>
			<li>Reviewing and updating your {finalProjectProposalLink()}</li>
			<li>Creating a <em>public</em> GitHub repository for your final project</li>
			<li>Creating a meaning README.md file that includes a link to your {finalProjectProposalLink()}</li>
			<li>Implement user instructions in your application that comes up when the application starts</li>
		</ol>

		<em>Requirement 2</em>
		<p>Implement at least four (4) meaningful features that are of <em>similar complexity</em> to 
		features we delivered in previous applications.</p>

		<em>Requirement 3</em>
		<p>Enhance your application so that it implements at least two (2) meaningful features that 
		are <em>greater in complexity</em> than features we delivered in previous applications.</p>

		<em>Requirement 4</em>
		<p>Enhance your application so that it implements at least one (2) meaningful features that
		utilize all elements of the {fullStackJavaScriptW3C()} architecture including the Web browser, 
		server, and database by:</p>
		<ol>
			<li>Utilizing HTML, CSS, and JavaScript to create an interactive client interface</li>
			<li>Utilizing AJAX, Node.js, and JSON to create a Web service</li>
			<li>Utilizing MongoDB Atlas and Mongoose to create persistent storage a date</li>
			<li>Deploying and testing the features across the client, server, and database in Microsoft Azure</li>
		</ol>
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

<p>In this activity you will start your final project. Build something. Anything that makes you proud and shows 
that you invested an appropriate amount of time and effort. Maybe perform a technology spike to set up development,
test, and production environments?</p>

<em>Requirement 1</em>
<p>Create something that makes you proud showcases your idea by utilizing the CI/CD philosophy to :</p>
<ol>
	<li>Successfully deploying your product to a local development and test environment to you personal computer</li>
	<li>Successfully deploying your product to hosted test and production environments</li>
	<li>Review {scrum()} while focusing on Events, Artifacts, and Rolls</li>
	<li>Review {agileAllianceAgile101()} from {agileAlliance()}</li>
	<li>Understand and consistently utilize {userStory()}, {userStoryTemplate()}, {epic()}, {productBacklog()}, {backlogGrooming()} and {iNVEST()}</li>
	<li>Complete {backlogGrooming()} to create and update groom your {productBacklog()} while creating appropriate <em>artifacts</em></li>
</ol>

<h6>Requirement 2: Complete sprint 5 Planning by the end of the first class session</h6>
<h6>Requirement 3: Execute sprint 5</h6>
<h6>Requirement 4: Complete sprint 5 backlog grooming in preparation for sprint 6 planning</h6>
</div> )
}

const FINAL_PROJECT_SPRINT_6_NAME = 'Class Product Sprint 6'
export const FINAL_PROJECT_SPRINT_6_ROUTE = 'final-project-sprint-6'
export const finalProjectSprint6Link = () => {return (<NavLink to={makeInternalURL(FINAL_PROJECT_SPRINT_6_ROUTE)}>{FINAL_PROJECT_SPRINT_6_NAME}</NavLink>)}
export const finalProjectSprint6 = () => {
	return (
	
<div>
<br />
<h4>Class Product Sprint 6</h4>
<h5>Summary: Let’s deliver sprint 6 of our class product.</h5>
<h5>Prerequisites:</h5>
<ul style={{listStyleType:'square'}}>
	<li><NavLink to='/activity/final-project-proposal'>Final Project Proposal</NavLink></li>
	<li><NavLink to='/activity/final-project-sprint-5'>Final Project Sprint 5</NavLink></li>
</ul>

<p>We delivered something in sprint 5. Very well done! Now let’s focus on our sprint 6 work by completing Sprint 6 planning,
making our commitments, and focusing our delivering our stories.</p>

<p>Always remember the that in agile and scrum stories must be 100% complete in order to receive any credit for completing 
the story. There is no such thing as “almost complete” or even ”99% complete” in scrum.</p>

<p>Recall from sprint 5 that we worked to:</p>
<ol>
	<li>Successfully deploying your product to a local development and test environment to you personal computer</li>
	<li>Successfully deploying your product to hosted test and production environments</li>
	<li>Review {scrum()} while focusing on Events, Artifacts, and Rolls</li>
	<li>Review {agileAllianceAgile101()} from {agileAlliance()}</li>
	<li>Understand and consistently utilize {userStory()}, {userStoryTemplate()}, {epic()}, {productBacklog()}, {backlogGrooming()} and {iNVEST()}</li>
	<li>Complete {backlogGrooming()} to create and update groom your {productBacklog()} while creating appropriate <em>artifacts</em></li>
</ol>

<p>Now let’s focus on sprint 6, stay focused, and work toward delivering something that you will be proud of creating. 
Each requirement should have an artifact that includes participants and an activity summary at a minimum. Artifacts are 
preferred as PDF files.</p>
{sprintRequirements(6)}
</div> )
}

const sprintRequirements = (sprint) => {
	return ( <div>
		<h6>Requirement 1: Complete sprint {sprint-1} Review and Retrospective:</h6>
		<ol>
			<li>Complete Sprint {sprint-1} Review</li>
			<li>Complete Sprint {sprint-1} Retrospective</li>
		</ol>

		<h6>Requirement 2: Complete sprint {sprint} Planning:</h6>
		<ol>
			<li>Review and update your team’s definition of “done”</li>
			<li>Complete Sprint {sprint} Planning including the team’s immutable Sprint {sprint} Backlog</li>
			<li>Complete Sprint {sprint} initial Metrics including individual story commitments</li>
		</ol>

		<h6>Requirement 3: Execute sprint {sprint} by delivering and testing Sprint {sprint} Backlog commitments:</h6>
		<ol>
			<li>Deliver, test, and demo each story</li>
			<li>Promptly update Sprint {sprint} Backlog to reflect current story status including “done” throughout the sprint</li>
			<li>Complete final Sprint {sprint} Backlog including final story status including “done”</li>
			<li>Complete Sprint {sprint} Metrics</li>
		</ol>

		<h6>Requirement 4: Complete Product Backlog grooming in preparation for sprint {sprint+1} planning including:</h6>
		<ol>
			<li>Incorporates only valid stories in story format</li>
			<li>Immutable unique identifier for each story</li>    
			<li>Story point estimates for each “important” story based on “Done” and assuming that 1 story point ~ 1 hour effort</li>
			<li>More estimated and “ready” stories included than your team can get Done in the next sprint</li>
			<li>Each story must be deliverable in a single sprint</li>
			<li>Only a “small” percentage of spikes</li>
			<li>All stories must be force ranked</li>
		</ol>
	</div> )
}

const FINAL_PROJECT_SPRINT_7_NAME = 'Class Product Sprint 7'
export const FINAL_PROJECT_SPRINT_7_ROUTE = 'final-project-sprint-7'
export const finalProjectSprint7Link = () => {return (<NavLink to={makeInternalURL(FINAL_PROJECT_SPRINT_7_ROUTE)}>{FINAL_PROJECT_SPRINT_7_NAME}</NavLink>)}
export const finalProjectSprint7 = () => { 
	return ( <div>
		<br />
		<h4>{FINAL_PROJECT_SPRINT_7_NAME}</h4>
		<h5>Summary: Let’s keep building on we have already delivered.</h5>

		<p>We should be gaining a rhythm as we continue to work together as a team by now. Hopefully we delivered something 
		useful in sprint 6. Now it’s time to focus on continuous improvement and living up to our sprint 7 commitments.</p>

		<p>Part of that rhythm should include our requirements for the sprint.</p>
		{sprintRequirements(7)}
	</div> )
}

const FINAL_PROJECT_SPRINT_8_NAME = 'Class Product Sprint 8'
export const FINAL_PROJECT_SPRINT_8_ROUTE = 'final-project-sprint-8'
export const finalProjectSprint8Link = () => {return (<NavLink to={makeInternalURL(FINAL_PROJECT_SPRINT_8_ROUTE)}>{FINAL_PROJECT_SPRINT_8_NAME}</NavLink>)}
export const finalProjectSprint8 = () => { return FinalProjectSprint8() }

export const Start_FinalProjectSprint8 = () => { return (<div>Start working on <NavLink to='/activity/final-project-sprint-8'>Class Product Sprint 8</NavLink></div>) }
export const Complete_FinalProjectSprint8 = () => { return (<div>Complete <NavLink to='/activity/final-project-sprint-8'>Class Product Sprint 8</NavLink><sup>~12 hours per team member</sup></div>) }
export const FinalProjectSprint8 = () => {
	return ( <div>
		<br />
		<h4>Class Project Sprint 8</h4>
		<h5>Summary: This is it our final sprint. Let’s bring this development cycle to a successful closure, put a bow
		on our Product Backlog, deliver/test all committed stories, and <em>transition the product to the next team</em>.</h5>

		<p>We should be working with a solid cadence. Now it’s time to focus on sustainability and make it possible for 
		us or someone else to continue developing the product.</p>

		<h6>Requirement 1: Complete sprint 7 Review and Retrospective:</h6>
		<ol>
			<li>Complete Sprint 7 Review</li>
			<li>Complete Sprint 7 Retrospective</li>
		</ol>

		<h6>Requirement 2: Complete sprint 8 Planning:</h6>
		<ol>
			<li>**The theme for sprint 8 is to fully transition the product to the product’s ongoing delivery team</li>
			<li>Finalize and fully groom your single integrated Product Backlog</li>
			<li>Complete Sprint 8 Planning including the team’s immutable Sprint 8 Backlog... be very conservative</li>
			<li>Complete Sprint 8 initial Metrics including individual story commitments</li>
		</ol>

		<h6>Requirement 3: Execute sprint 8 by delivering and testing Sprint 8 Backlog commitments:</h6>
		<ol>
			<li>**Focus on completing the product’s transition to the ongoing delivery team</li>
			<li>List the ongoing Scrum Master and Product Owner</li>
			<li>Deliver, test, and demo each story</li>
			<li>Promptly update Sprint 8 Backlog to reflect current story status including “done” throughout the sprint</li>
			<li>Complete final Sprint 8 Backlog including final story status including “done”</li>
			<li>Complete Sprint 8 Metrics including	{capacityCommittedEffortDeliveredLink()}</li>
		</ol>

		<h6>Requirement 4: Complete Product Backlog grooming:</h6>
		<ol>
			<li>Incorporates only valid stories in story format</li>
			<li>Immutable unique identifier for each story</li>    
			<li>Story point estimates for each “important” story based on “Done” and assuming that 1 story point ~ 1 hour effort</li>
			<li>More estimated and “ready” stories included than your team can get Done in the next sprint</li>
			<li>Each story must be deliverable in a single sprint</li>
			<li>Only a “small” percentage of spikes</li>
			<li>All stories must be force ranked</li>
		</ol>

		<p>Once again, high performing scrum teams are able to consistently allocate 80% or more of their effort to Delivery of 
		current sprint stories while still effectively completing demo, release, reflect, and planning activities. We don’t need 
		to plan for the next sprint because this is it. You should plan on each team member allocating approximately 12 this 
		sprint.</p>
	</div> )
}

export const finalProject = { 'name':'Class Project', 'route':'final-project', 'function': FinalProject }
export const finalProjectLink = () => { return makeNavigationLink(finalProject) }