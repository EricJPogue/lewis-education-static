import React from 'react'
import { NavLink } from 'react-router-dom';

import { CodingStandardsValidatorPart2, start, complete } from './ProgrammingAssignments'
const programmingAssignment = CodingStandardsValidatorPart2

export const al36000Sprint03 = () => {
	return (

<div>
<h4>Applied Programming Languages</h4>
<h5>Sprint 3: Testing and Programming Language Features</h5>
<p><em>Welcome to sprint 3.</em> This sprint we will be focused on working in small teams and using industry standard source 
code control and configuration management tools and patterns. We will continue to focus on programming “Coding Standards 
Validator - Part 2” as part of our team. Finally, testing will be a focus as we work within our teams to develop automated
and manual tests.</p>

<p>By the end of sprint 3 we will be able to:</p>
<ul style={{listStyleType:'square'}}>
	<li>Explain key language features like Constructors, Destructors, Exceptions, and Templates</li>
	<li>Compare and contrast the features of various popular programming languages</li>
	<li>Implement manual and automated testing with Go applications</li>
	<li>Utilize configuration management techniques that would be appropriate for large teams and complex applications</li>
</ul>

<p>Below is the list of activities that we will need to complete this sprint.</p>
<ol>
	<li>Stay focused on the due dates by reviewing our course calendar <NavLink to='/calendar/3'>[link]</NavLink></li>
	<li><em>Review sprint 3 assignments including Lab 3, Quiz 3, Discussion 3, Reflection 3, and Lab Demo</em></li>
	<li>{start(programmingAssignment)}</li>
	<li>Review the CAMS Study Table tutoring options <NavLink to='/activity/study-table'>[link]</NavLink></li>
	<li>Review our class example code <NavLink to='/activity/example-code'>[link]</NavLink></li>
	<li>Review our coding standards <NavLink to='/activity/coding-standards'>[link]</NavLink></li>
	{/* The above items should be consistent across classes. */ }

	<li>Read “Introducing Go” chapter 9 on Testing <a href='https://learning.oreilly.com/library/view/introducing-go/9781491941997/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Study and consistently utilize the Git commands and patterns used by professional development teams <NavLink to='/activity/git-commands'>[link]</NavLink></li>
	<li>Complete the “A Tour of Go” tutorial <a href='https://tour.golang.org/list' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li><em>Make your initial Discussion 3 post by the middle of the sprint</em></li>
	<li>Recall searching O’Reilly Books <a href='https://www.oreilly.com' target='_blank' rel='noopener noreferrer'>[link]</a> 
		for Golang, Git, and ReactJS</li>
	<li>Within O’Reilly Books <a href='https://www.oreilly.com' target='_blank' rel='noopener noreferrer'>[link]</a> 
		find the most interesting book on Golang, scan the contents, and be ready to discuss the book</li>

	{/* The items below should be consistent across classes. */ }
	<li>{complete(programmingAssignment)}</li>
	<li><em>Complete Discussion 3 by responding to at least two of your classmates’ posts</em></li>
	<li><em>Submit Lab 3, Quiz 3, and Reflection 3</em></li>
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