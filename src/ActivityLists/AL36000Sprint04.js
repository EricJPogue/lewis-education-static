import React from 'react'
import { NavLink } from 'react-router-dom';

import { QuizMaster, start, complete } from './ProgrammingAssignments'
const programmingAssignment = QuizMaster

export const al36000Sprint04 = () => {
	return (

<div>
<h4>Applied Programming Languages</h4>
<h5>Sprint 4: Concurrency, Serverless Computing, and Docker Containers</h5>
<p><em>Welcome to sprint 4.</em> This sprint we will continue to be focused on working in small teams and using industry standard source 
code control and configuration management tools and patterns. We will be expanding our configuration management knowledge into the hosting
area by developing a better understanding of cloud services, serverless computing, and containers.</p>

<p>By the end of sprint 4 we will be able to:</p>
<ul style={{listStyleType:'square'}}>
	<li>Explain and implement concurrency in Go</li>
	<li>Explain and implement serverless computing functions</li>
	<li>Understand Docker containers</li>
	<li>Understand important network protocols</li>
	<li>Understand and utilize cloud hosting services</li>
</ul>

<p>Below is the list of activities that we will need to complete this sprint.</p>
<ol>
	<li><em>Review sprint 4 assignments including Lab 4, Quiz 4, Discussion 4, Reflection 4, and Lab Demo</em></li>
	<li>{start(programmingAssignment)}</li>
	{/* The above items should be consistent across classes. */ }

	<li>Read “Introducing Go” chapter 10 on Concurrency <a href='https://learning.oreilly.com/library/view/introducing-go/9781491941997/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Within O’Reilly Books do a search for “Azure Functions” and “Serverless Computing” and document the best resources</li>
	<li>Analyze the following cloud services material:
	<ul style={{listStyleType:'square'}}>
		<li>Azure Functions
			<a href='https://azure.microsoft.com/en-us/overview/serverless-computing/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
		<li>Google Cloud Functions
			<a href='https://cloud.google.com/functions' target='_blank' rel='noopener noreferrer'>[link]</a></li>
		<li>AWS Lambda 
			<a href='https://aws.amazon.com/lambda/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	</ul></li>
	<li>Review “Azure Functions with JavaScript and VS Code” <NavLink to='/activity-config/azure-functions-with-javascript-and-vs-code'>[link]</NavLink></li>
	<li>Read “Introducing Go” chapter 11 Next Steps <a href='https://learning.oreilly.com/library/view/introducing-go/9781491941997/' target='_blank' rel='noopener noreferrer'>[link]</a></li>

	<li>Review and consistently utilize the Git commands and patterns used by professional development teams <NavLink to='/activity/git-commands'>[link]</NavLink></li>
	<li><em>Make your initial Discussion 4post by the middle of the sprint</em></li>

	{/* The items below should be consistent across classes. */ }
	<li>{complete(programmingAssignment)}</li>
	<li><em>Complete Discussion 4 by responding to at least two of your classmates’ posts</em></li>
	<li><em>Submit Lab 4, Quiz 4, and Reflection 4</em></li>
</ol>
<p>If you are struggling, remember to reach out to your Scrum teammates early and often for help. Also, be sure to 
periodically check for new programming together tutorials <NavLink to='/activity/programming-together'>[link]</NavLink>.</p>
{extras()}
</div>

	)
}

const extras = () => {
	return (null)
}

// Todo: Add API submission and testing criteria to lab 4.
// Todo: Review https://medium.com/analytics-vidhya/azure-functions-for-dummies-part-1-http-trigger-a95cd000bc62.
// Todo: Review https://www.reddit.com/r/golang/comments/ilytlu/using_go_on_azure_functions_article/.