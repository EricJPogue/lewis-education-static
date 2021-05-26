import React from 'react'
import { NavLink } from 'react-router-dom';

import { FinalProjectProposal, FinalProjectSprint0, MosaicV2WithReact, start, complete, reviewAndUpdate } from './ProgrammingAssignments'
const programmingAssignment = MosaicV2WithReact

export const al36000Sprint07 = () => {
	return (

<div>
<h4>Applied Programming Languages</h4>
<h5>Sprint 7: Application Architecture, Data Management, Application State, Security, React, and Azure</h5>
<p>Welcome to sprint 7. This sprint we are going to focus on understanding data management and how managing data fit’s 
into application architecture. The journey starts with understanding how to effectively manage application state across 
application features and the with managing data across user sessions. As we explore managing managing data across user 
sessions, we quickly find ourselves in need of effective application security including the best ways to authenticate 
and authorize users</p>
<p>Let’s focus on working as a team and developing some more React web applications on Microsoft Azure.</p>

<p>By the end of the sprint we will be able to:</p>
<ul style={{listStyleType:'square'}}>
	<li>Understand and implement Data Management through Application State</li>
	<li>Understand and implement Data Management through Persistent Data Storage</li>
	<li>Understand and implement Application Security utilizing React and Azure</li>
	<li>Actively develop our Final Project</li>
</ul>

<p>Below is our activities list:</p>
<ol>
	<li>Stay focused on the due dates by reviewing our course calendar <NavLink to='/calendar/7'>[link]</NavLink></li>
	<li><em>Review Lab 7, Quiz 7, Discussion 7, Reflection 7, and Lab Demo</em></li>
	<li>{start(programmingAssignment)}</li>
	{/* The above items should be consistent across classes.*/}

	<li>{reviewAndUpdate(FinalProjectProposal)}</li>
	<li>Complete “Application Architectures, Object-Oriented Programming, and Databases - Part 1” <NavLink to='/activity-architecture/application-architecture-part1'>[video]</NavLink></li>

	<li>Read “Authentication” <a href='https://en.wikipedia.org/wiki/Authentication' target='_blank' rel='noopener noreferrer'>[link]</a>
		and “Authorization” <a href='https://en.wikipedia.org/wiki/Authorization' target='_blank' rel='noopener noreferrer'>[link]</a>
		from Wikipedia</li>
	<li>Read “Authentication and authorization in Azure App Service and Azure Functions”<a href='https://docs.microsoft.com/en-us/azure/app-service/overview-authentication-authorization' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Complete “Restrict access” from “Azure Static Web Apps” <a href='https://aka.ms/swadocs' target='_blank' rel='noopener noreferrer'>[link]</a>
		while focusing on Authentication and Authorization</li>

	<li><em>Make your initial Discussion post by the middle of the sprint</em></li>
	<li>Read “Learning React, 2nd Edition” chapters 4, 5, and 6 <a href='https://learning.oreilly.com/library/view/learning-react-2nd/9781492051718/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Scan “Learning React, 2nd Edition” chapters 7 and 8 <a href='https://learning.oreilly.com/library/view/learning-react-2nd/9781492051718/' target='_blank' rel='noopener noreferrer'>[link]</a></li>

	<li>Complete “Add authentication to your web app running on Azure App Service” Tutorial <a href='https://docs.microsoft.com/en-us/azure/app-service/scenario-secure-app-authentication-app-service' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Complete “Access Azure Storage from a web app” Tutorial <a href='https://docs.microsoft.com/en-us/azure/app-service/scenario-secure-app-access-storage?tabs=azure-portal%2Ccommand-line' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>{complete(programmingAssignment)}</li>

	<li>{complete(FinalProjectSprint0)}</li>

	{/* The items below should be consistent across classes. */}
	<li><em>Complete Discussion 7, Lab 7, Quiz 7, Reflection 7, and Lab Demo</em></li>
</ol>
	
<p>If you are struggling, remember to reach out to your Scrum teammates early and often for help. Also, be sure to 
periodically check for new programming together tutorials <NavLink to='/activity/programming-together'>[link]</NavLink>.</p>
{extras()}
</div>
	)
}

// Todo: Figure out where Containers fit best in the course.

const extras = () => {
	return (<div>

<p>Additional suggested activities:</p>
<ul style={{listStyleType:'square'}}>
	<li>Review React.org <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>[link]</a> focusing on 
		“Stateful Components”</li>
	<li>Review the React tutorial from W3C <a href='https://www.w3schools.com/react/' target='_blank' rel='noopener noreferrer'>[link]</a> 
		focusing on Components, Props, and State</li>
	<li>Complete “React - The Complete Guide” chapters 3 and 4 <a href='https://learning.oreilly.com/videos/react-the/9781789132229/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
</ul>

	</div>)
}


