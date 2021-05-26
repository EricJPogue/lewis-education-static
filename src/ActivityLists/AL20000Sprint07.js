import React from 'react'
import { NavLink } from 'react-router-dom'

import { HealthRiskCalculatorForTheWeb, start, complete } from './ProgrammingAssignments'
const programmingAssignment = HealthRiskCalculatorForTheWeb

export const al20000Sprint07 = () => {
	return (

<div>
<h4>Introduction to Computer Science</h4>
<h5>Sprint 7: Security, JavaScript, and you setting the direction</h5>

<p>Welcome to sprint 7.</p>
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
<p>Let's start with what we need to learn in sprint 7:</p>
<ul style={{listStyleType:'square'}}>
	<li>Understand Computer Security</li>
	<li>Deliver more sophisticated HTML, CSS, and JavaScript Website or Python Terminal development</li>
	<li>Finalize and commit to your Final Project</li> 
</ul>

<p>Below is our sprint 7 activities list. </p>
<ol>
	<li>Stay focused on the due dates by reviewing our course calendar <NavLink to='/calendar/7'>[link]</NavLink></li>
	<li><em>Review Lab 7, Quiz 7, Discussion 7, Reflection 7, and Lab Demo</em></li>
	<li>{start(programmingAssignment)}</li>
	{/* The above items should be consistent across classes. */ }

	<li>... Or maybe you would prefer working in Python and create “Health Insurance Risk Calculator with Python” <NavLink to='/activity/health-risk-calculator-python'>[link]</NavLink></li>
	<li>Determine if you will be focusing on Web development or Python development in Sprints 7 and 8</li>
	<li>Read Dale chapter 17 Security <a href='https://learning.oreilly.com/library/view/computer-science-illuminated/9781284055917/' target='_blank' rel='noopener noreferrer'>[link]</a>
		and review our chapter 17 lecture <NavLink to='/activity-dale/17'>[video]</NavLink></li>
	<li><em>Make your initial Discussion post by the middle of the sprint</em></li>
	<li>Review, update, and finalize your Azure hosted “Final Project Proposal” <NavLink to='/activity/final-project-proposal'>[link]</NavLink></li>
	<li>Review your Final Project presentation date &amp; time</li>

	{/* The items below should be consistent across classes. */ }
	<li>{complete(programmingAssignment)}</li>
	<li>... Or complete “Health Insurance Risk Calculator with Python” <NavLink to='/activity/health-risk-calculator-python'>[link]</NavLink></li>
	<li><em>Complete Discussion 7, Lab 7, Quiz 7, Reflection 7, and Lab Demo</em></li>
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