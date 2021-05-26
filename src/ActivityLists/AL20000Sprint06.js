import React from 'react'
import { NavLink } from 'react-router-dom'

import { MatchmakerForTheWeb, start, complete } from './ProgrammingAssignments'
const programmingAssignment = MatchmakerForTheWeb

export const al20000Sprint06 = () => {
	return (

<div>
<h4>Introduction to Computer Science</h4>
<h5>Sprint 6: Networks, The Internet, Cloud Computing, and Updated Final Project Proposal</h5>

<p>Welcome to sprint 6. Sprint 6 is going to see you taking control and being more proactive exploring how to learn 
more about a topic. The new topic this sprint is JavaScript. We will utilize JavaScript along with HTML and CSS to 
create a <em>Web</em> version of <span style={{color: "red"}}> &#10084;&#10084;&#10084;</span> Matchmaker <span style={{color: "red"}}>&#10084;&#10084;&#10084;</span>.</p>

<p>Let's start with what we hope to learn in sprint 6:</p>
<ul style={{ listStyleType:'square' }}>
	<li>Understand and utilize The Internet and World Wide Web</li>
	<li>Understand and utilize Cloud Computing</li>
	<li>Utilize JavaScript to create interactive Web applications</li>
	<li>Update our Final Project proposals and host them on the Web</li>
</ul>

<p>Below is our sprint 6 activities list.</p>
<ol>
	<li>Stay focused on the due dates by reviewing our course calendar <NavLink to='/calendar/6'>[link]</NavLink></li>
	<li><em>Review Lab 6, Quiz 6, Discussion 6, Reflection 6, and Lab Demo</em></li>
	<li>{start(programmingAssignment)}</li>
	{/* The above items should be consistent across classes. */ }

	<li>Read Dale chapter 16 The World Wide Web <a href='https://learning.oreilly.com/library/view/computer-science-illuminated/9781284055917/' target='_blank' rel='noopener noreferrer'>[link]</a>
		and review our chapter 16 lecture <NavLink to='/activity-dale/16'>[video]</NavLink></li>
	<li>Review the following activities that you completed in previous sprints:<sup>~4 hours</sup></li>
	<ul style={{listStyleType:'square'}}>
		<li>“Website Creation with GitHub and Microsoft Azure” <NavLink to='/activity/azure-website'>[link]</NavLink></li>
		<li>“Matchmaker with Python” <NavLink to='/activity/matchmaker-python'>[link]</NavLink></li>
		<li>“HTML Programming - Parts 1 and 2” from W3C <NavLink to='/activity/html'>[link]</NavLink></li>
		<li>“Getting to Know Each Other” <NavLink to='/activity/getting-to-know-each-other'>[link]</NavLink></li>
		<li>Programming together “HelloWorld” and “HelloWorldPlus with Pictures”</li>
	</ul>

	<li>Complete Programming Together with MatchmakerLite for the Web - Part 1</li>
	<li>Update the content of your “Final Project Proposal” <NavLink to='/activity/final-project-proposal'>[link]</NavLink> 
			and host the updated web page in Azure</li>

	<li><em>Make your initial Discussion post by the middle of the sprint</em></li>
	<li>Review the JavaScript tutorial from W3C <a href='https://www.w3schools.com/js/'>[link]</a></li>
	<li>Complete Programming Together with MatchmakerLite for the Web - Part 2</li>

	{/* The items below should be consistent across classes. */ }
	<li>{complete(programmingAssignment)}</li>
	<li><em>Complete Discussion 6, Lab 6, Quiz 6, and Reflection 6</em></li>
</ol>
<p>If you are struggling, remember to reach out to your Scrum teammates early and often for help. Also, be sure to 
periodically check for new programming together tutorials< NavLink to='/activity/programming-together'>[link]</NavLink>.</p>
{extras()}
</div>

	)
}

const extras = () => {
	return (null)
}