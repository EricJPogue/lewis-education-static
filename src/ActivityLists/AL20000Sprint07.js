import React from 'react'
import { NavLink } from 'react-router-dom'

import { InitialPost,  } from './AL00000Sprint02'
import { LearningObjectivesIntro, ActivitiesListIntro } from './AL00000Sprint03'
import { StandardActivitiesClosing, Closing  } from './AL00000Sprint06'
import { StandardActivities } from './AL00000Sprint07'

import { oreillyPlaylistICS } from '../Links'
import { HealthRiskCalculatorForTheWeb, complete } from './ProgrammingAssignments'
import { Start_HealthRiskCalculatorWebOrPython } from '../Activities/HealthRiskCalculator'

export const al20000Sprint07 = () => {
	return (

<div>
<h5>Sprint 7: Security, JavaScript, and you setting the direction</h5>

<p>Welcome to sprint 7. Sprint 7 puts you in the driver’s seat. You get to decide if you would benefit more by focusing 
on developing more sophisticated terminal applications using Python, or if your energy would be better spent mastering 
Web development with HTML, CSS, and JavaScript. But never forget the legendary phrase:</p>

<h5>
<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
“With great power there must also come great responsibility”<br /></div>
<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
-Peter Parker (aka Spider-Man)</div>
</h5>
<br />

<p>What will you do with all that power... and responsibility?</p>
{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Understand Computer Security</li>
	<li>Deliver more sophisticated HTML, CSS, and JavaScript Website or Python Terminal development</li>
	<li>Finalize and commit to your Final Project</li> 
</ul>

{ActivitiesListIntro()}
<ol>
	<li><em>!!! Start Here !!!</em></li>
	{StandardActivities(Start_HealthRiskCalculatorWebOrPython(), oreillyPlaylistICS(), 7)}
	<li>Determine if you will be focusing on Web development or Python development in Sprints 7 and 8</li>
	<li>... Or maybe you would prefer working in Python and to start working on <NavLink to='/activity/health-risk-calculator-python'>Health Insurance Risk Calculator with Python</NavLink></li>

<li></li>

	<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” Security and review our associated <NavLink to='/activity-dale/17'>lecture</NavLink></li>

	{InitialPost()}	
	<li>Review, update, and finalize your <NavLink to='/activity/final-project-proposal'>Final Project Proposal</NavLink></li>
	<li>Review your Final Project presentation date &amp; time</li>

	{StandardActivitiesClosing(HealthRiskCalculatorForTheWeb, 7)}
	{/* The items below should be consistent across classes. */ }
	<li>{complete(HealthRiskCalculatorForTheWeb)}</li>
	<li>... Or complete <NavLink to='/activity/health-risk-calculator-python'>Health Insurance Risk Calculator with Python</NavLink></li>
	<li><em>Complete Discussion 7, Lab 7, Quiz 7, Reflection 7, and Lab Demo</em></li>
</ol>
{Closing()}
</div>

	)
}