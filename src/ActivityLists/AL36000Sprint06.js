import React from 'react'
import { NavLink } from 'react-router-dom';

import { FinalProjectProposal, MosaicWithReact, start, complete, reviewAndUpdate } from './ProgrammingAssignments'
const programmingAssignment = MosaicWithReact

export const al36000Sprint06 = () => {
	return (

<div>
<h4>Applied Programming Languages</h4>
<h5>Sprint 6: Continuous Integration and Continuous Deployment (CI/CD), React, and React on Azure</h5>
<p>Let’s develop some React web applications on Microsoft Azure.</p>

<p>By the end of the sprint we will be able to:</p>
<ul style={{listStyleType:'square'}}>
	<li>Understand and implement CI/CD</li>
	<li>Develope moderately complex React web applications</li>
	<li>Call a web service from a React web application</li>
	<li>Host React web applications using Azure</li>
</ul>

<p>Below is our activities list:</p>
<ol>
	<li>Stay focused on the due dates by reviewing our course calendar <NavLink to='/calendar/6'>[link]</NavLink></li>
	<li><em>Review Lab, Quiz, Discussion, Reflection, and Lab Demo</em></li>
	<li>{start(programmingAssignment)}</li>
	{/* The above items should be consistent across classes. */ }

	<li>Read “What is CI/CD? Continuous integration and continuous delivery explained” <a href='https://www.infoworld.com/article/3271126/what-is-cicd-continuous-integration-and-continuous-delivery-explained.html' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Focus on CI/CD by briefly reviewing “Create your fist React app” from “Azure Static Web Apps” <a href='https://aka.ms/swadocs' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Review React.org <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>[link]</a> focusing on 
		the “Getting Started” section</li>
	<li>Read “Learning React, 2nd Edition” by Eve Porcello and Alex Banks chapters 1, 2, and 3 <a href='https://learning.oreilly.com/library/view/learning-react-2nd/9781492051718/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Review the React tutorial from W3C <a href='https://www.w3schools.com/react/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Focus on CI/CD by completing the following tutorials from “Azure Static Web Apps” <a href='https://aka.ms/swadocs' target='_blank' rel='noopener noreferrer'>[link]</a>:
	<ul style={{listStyleType:'square'}}>
		<li>“Build and deploy a static web app” from the “Video” section</li>
		<li>”Create your first app (no framework)” from the “Getting started” section</li>
		<li>“Create your fist React app” from the “Getting started” section</li>
	</ul></li>
	<li>Complete “React on Azure” programming together <NavLink to='/activity-config/react-on-azure'>[video]</NavLink></li>
	<li><em>Make your initial Discussion post by the middle of the sprint</em></li>
	<li>Complete “React - The Complete Guide” by Maximilian Schwarzmüller chapters 1 and 2 <a href='https://learning.oreilly.com/videos/react-the/9781789132229/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Review “Azure Website” <NavLink to='/activity/azure-website'>[link]</NavLink></li>
 
	{/* The items below should be consistent across classes. */ }
	<li>{reviewAndUpdate(FinalProjectProposal)}</li>
	<li>{complete(programmingAssignment)}</li>
	<li><em>Complete Discussion, Lab, Quiz, and Reflection</em></li>
</ol>
<p>If you are struggling, remember to reach out to your Scrum teammates early and often for help. Also, be sure to 
periodically check for new programming together tutorials <NavLink to='/activity/programming-together'>[link]</NavLink>.</p>
{extras()}
</div>
	)
}

const extras = () => {
	return (<div>	
		<p>Additional suggested activities:</p>
		<ul style={{listStyleType:'square'}}>
			<li>Complete “Intro to React - Tic-Tac-Toe” <a href='https://reactjs.org/tutorial/tutorial.html' target='_blank' rel='noopener noreferrer'>[link]</a></li>
		</ul>
	</div>)
}