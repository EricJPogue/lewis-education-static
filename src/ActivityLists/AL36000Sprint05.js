import React from 'react'
import { NavLink } from 'react-router-dom';

import { FinalProjectProposal, AssignmentPortfolioWebsite, start, complete } from './ProgrammingAssignments'
const programmingAssignment = AssignmentPortfolioWebsite

export const al36000Sprint05 = () => {
	return (

<div>
<h4>Applied Programming Languages</h4>
<h5>Sprint 5: Web Development with HTML, CSS, JavaScript, and a touch of React</h5>
<p>Sprint 5. Where does the time go?</p>
<p>Sprint 5 sees us working in the same teams but working with new technologies. We will be full speed ahead with web 
software development using HTML, CSS, and JavaScript hosted on Azure. We will also get our first look at React which
will be our focus going forward.</p>

<p>It’s also time for us to think about our final projects. How would you like to finish the class by creating 
something that makes you proud? What type of a final project would you enjoy creating? Is there a project that would 
both be interesting to create and be something you could add to your professional portfolio to show as you are looking 
for an internship or job? You have the power.</p>

<p>We will also be completing our initial Final Project proposal this sprint. How would you like to finish the class by 
creating something that makes you proud? What type of a final project would you enjoy creating? Is there a project that 
would both be interesting to create and be something you could add to your professional portfolio to show as you are 
looking for and internship or job? You have the power.</p>

<p>By the end of sprint 5 we will be able to:</p>
<ul style={{listStyleType:'square'}}>
	<li>Write basic web application utilizing HTML, CSS, and Javascript</li>
	<li>Host web applications using Azure static application hosting</li>
	<li>Understand the basics of React applications</li>
	<li>Call a web service from a web application</li>
</ul>

<p>Below is the list of activities that we will need to complete this sprint.</p>
<ol>
	<li>Stay focused on the due dates by reviewing our course calendar <NavLink to='/calendar/5'>[link]</NavLink></li>
	<li><em>Review Lab 5, Quiz 5, Discussion 5, Reflection 5, and Lab Demo</em></li>
	<li>{start(FinalProjectProposal)}</li>
	<li>{start(programmingAssignment)}</li>
	{/* The above items should be consistent across classes. */ }

	<li>Complete “Final Project Proposal” and “Assignment Portfolio” as a team</li>
	<li>Complete “HTML Programming - Parts 1 and 2” from W3C <NavLink to='/activity/html'>[link]</NavLink><sup>~2 hours</sup></li>
	<li>Complete “CSS Tutorial” from W3C <a href='https://www.w3schools.com/css/' target='_blank' rel='noopener noreferrer'>[link]</a><sup>~2 hours</sup></li>
	<li>Complete “Azure Website” <NavLink to='/activity/azure-website'>[link]</NavLink><sup>~2 hours </sup></li>
	<li>Complete “JavaScript Tutorial” from W3C <a href='https://www.w3schools.com/js/' target='_blank' rel='noopener noreferrer'>[link]</a><sup>~2 hours</sup></li>
	<li><em>Make your initial Discussion 5 post by the middle of the sprint</em></li>
	<li>Individually complete “Getting to Know Each Other” <NavLink to='/activity/getting-to-know-each-other'>[link]</NavLink> 
		and deploy it to Azure<sup>~3 hours</sup></li>
	<li>Individually complete “Dice Roller” <NavLink to='/activity/dice-roller'>[link]</NavLink>and deploy it to Azure<sup>~3 hours</sup></li>
	<li>Link your individual “Getting to Know Each Other” website to your team “Assignment Portfolio” and to your team “Final Project Proposal”</li>
	<li>Scan “Learning React, 2nd Edition” by Eve Porcello and Alex Banks preface and chapter 1 <a href='https://learning.oreilly.com/library/view/learning-react-2nd/9781492051718/' target='_blank' rel='noopener noreferrer'>[link]</a></li>

	{/* The items below should be consistent across classes. */ }
	<li>{complete(FinalProjectProposal)}</li>
	<li>{complete(programmingAssignment)}</li>
	<li><em>Complete Discussion 5, Lab 5, Quiz 5, and Reflection 5</em></li>
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