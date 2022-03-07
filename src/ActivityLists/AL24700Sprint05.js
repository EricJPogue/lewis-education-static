import React from 'react'
import { NavLink } from 'react-router-dom';

import { LearningObjectivesIntro, ActivitiesListIntro, InitialPost } from './AL00000Sprint03'
import { FinalProjectsAndMoreResponsibility, StandardActivitiesWithLinkAndSprint, StandardActivitiesClosingWithLinkAndSprint, Closing  } from './AL00000Sprint05'

import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'
import { mustangLink } from '../Activities/MustangVersion1';

import { oreillyPlaylistWeb } from '../Links'
import { estimated } from './AL00000Sprint01';

export const al24700Sprint05 = () => {
	const sprint = 5
	return (

<div>
<h5>Sprint 5: Distributed applications, JavaScript, Ajax, and JSON</h5>

<p><em>Wow!</em> We made it to the halfway point. I hope you enjoyed Map Mania. This week we switch gears and move into 
writing Distributed applications using JavaScript, Ajax, and JSON.</p>

{FinalProjectsAndMoreResponsibility()}

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Develop and test shared JSON files</li>
	<li>Implement Ajax calls utilizing JavaScript to access share JSON files</li>
	<li>Create interactive web applications utilizing HTML, CSS, and JavaScript</li>
    <li>Understand Relational Databases and the SQL language</li>
</ul>  

<p>This week’s  programming assignment is called Mustang and is a small contact manager will take several sprints to 
complete. In Mustang version 1 we will be utilizing the Azure to host personal information JSON files that we can 
utilize to create a simple distributed contact management web application.</p>

{ActivitiesListIntro(sprint)}
<ol>
	{StandardActivitiesWithLinkAndSprint(sprint, finalProjectProposalLink(), oreillyPlaylistWeb())}
	<li>Start working on {mustangLink()}</li>

	{/* Todo: Double-check and consider creating if there is a Mustang lite tutorial?*/}
	<li>Read Sebesta chapter 10 and review our Ajax <NavLink to='/activity/sebesta-chapter-10'>lecture</NavLink></li>

	{InitialPost(sprint)}	
	<li>Read Sebesta chapter 13 and review our Database Access through the Web <NavLink to='/activity/sebesta-chapter-13'>lecture</NavLink></li>

	<li>Complete {finalProjectProposalLink()}{estimated('2 hours')}</li>
	{StandardActivitiesClosingWithLinkAndSprint(sprint, mustangLink(), '8 hours' )}
</ol>
{Closing()}
</div>

	)
}
