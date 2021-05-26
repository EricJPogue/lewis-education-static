import React from 'react'
import { NavLink } from 'react-router-dom'

import { ThunderbirdWithJava, FinalProjectProposal, FinalProjectSprint0, start, complete, reviewAndUpdate } from './ProgrammingAssignments'

export const al24500Sprint07 = ( props ) => {
	return (

<div>
<h4>Object-Oriented Programming</h4>
<h5>Sprint 7: Thunderbird, Final Project sprint 0, and Application Architecture</h5>

<p><em>Welcome to sprint 7.</em> How time flies. We have two separate programming activities this sprint. The first 
assignment is Thunderbird. Thunderbird is different than previous assignments in that we will be enhancing an existing
application rather than creating a new application from scratch. This is more like what you could expect in an
entry level professional programming position. I think you will enjoy it.</p>

<p>The second half of the sprint will be entirely focused on completing sprint 0 of your final project.</p>

<p>By the end of this sprint we will be able to:</p>
<ul style={{ listStyleType:'square'}}>
	<li>Develop and enhance intermediate level graphical, distributed, multi-threaded Java applications</li>
	<li>Create View and Model classes that conform to the model-view-controller pattern</li>
	<li>Begin to understand Application Architecture and its relationship to Object-Oriented Programming</li>
</ul>

<p>Notice that in this sprint we have two programming assignments. I encourage you to complete Thunderbird by the 
middle of the sprint so that you can be 100% focused on your final project during the second half of the sprint.</p>

<p>Below is our sprint 7 activities list. </p>
<ol>
	<li>Stay focused on the due dates by reviewing our course calendar <NavLink to='/calendar/7'>[link]</NavLink></li>
	<li><em>Review Lab 7, Quiz 7, Discussion 7, Reflection 7, and Lab Demo</em></li>
	{/* The above items should be consistent across classes. */ }
	<li>{start(ThunderbirdWithJava)}</li>

	<li>Complete “ThunderbirdLite” <NavLink to='/activity-oop/java-thunderbird-lite'>[video]</NavLink><sup>~2 hours</sup></li>
	<li>Complete “Application Architectures, Object-Oriented Programming, and Databases - Part 1” <NavLink to='/activity-architecture/application-architecture-part1'>[video]</NavLink></li>
	<li>{complete(ThunderbirdWithJava)}</li>

	<li><em>Make your initial Discussion post by the middle of the sprint</em></li>
	<li>{reviewAndUpdate(FinalProjectProposal)}</li>
	<li>{complete(FinalProjectSprint0)}</li>

	{/* The items below should be consistent across classes. */ }
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

// Todo: Add Final Project proposals to assignments. 
// Todo: Fix quiz 7 question 'Identify the Python statement that computes the average of the values stored in exam1, 
//     exam2 and exam3" so it does not include 'All of the above.'
// Todo: Remove duplicate quiz 7 question, 'Confidentiality is.'