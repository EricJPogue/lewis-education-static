import React from 'react'
import { NavLink } from 'react-router-dom';

import { CodingStandardsValidatorPart1, start, complete } from './ProgrammingAssignments'
const programmingAssignment = CodingStandardsValidatorPart1

export const al36000Sprint02 = () => {
	return (

<div>
<h4>Applied Programming Languages</h4>
<h5>Sprint 2: Patterns, Principles, Interfaces, Packages, and Functional Programming, </h5>
<p><em>Welcome to sprint 2.</em> We covered a lot of material in sprint 1. We even did some programming by completing
Matchmaker with Go. Keep your Go compilers out for this sprint. We will be enhancing our knowledge of interfaces and 
packages while working to understand the similarities and differences between object-oriented programming and functional
programming.</p>

<p>By the end of sprint 2 we will be able to:</p>
<ul style={{listStyleType:'square'}}>
	<li>Compare and contrast object-oriented programming with functional programming</li>
	<li>Create, modify, compile, and execute Go applications using functional programming techniques</li>
	<li>Utilize moderately complex configuration management techniques to effectively work in small teams</li>
	<li>Utilize structs, interfaces, and packages to implement polymorphic and encapsulated programs</li>
</ul>

<p>Below is the list of activities that we will need to complete this sprint. Once again you are welcome to
pursue the activities in any order you prefer. However, they are listed in the order I think will be the most
beneficial for you to work through the topics. The time commitment for each line item is generally 20 to 40
minutes unless otherwise noted.</p>
<ol>
	<li>Stay focused on the due dates by reviewing our course calendar <NavLink to='/calendar/2'>[link]</NavLink></li>
	<li><em>Review sprint 2 assignments including Lab 2, Quiz 2, Discussion 2, Reflection 2, and Lab Demo</em></li>
	<li>Study and understand our “Coding Standards” <NavLink to='/activity/coding-standards'>[link]</NavLink></li>
	<li>{start(programmingAssignment)}</li>
	{/* The above items should be consistent across classes. */ }

	<li>Review Object-Oriented Programming Patterns<NavLink to='/activity-oop/patterns'>[video]</NavLink></li>
	<li>Review Object-Oriented Programming Principles <NavLink to='/activity-oop/principles'>[video]</NavLink></li>
	<li>Read “Introducing Go” chapters 7 on Structs and Interfaces <a href='https://learning.oreilly.com/library/view/introducing-go/9781491941997/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Read “Introducing Go” chapters 8 on Packages <a href='https://learning.oreilly.com/library/view/introducing-go/9781491941997/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Complete the “Create a Go module” tutorial <a href='https://golang.org/doc/tutorial/create-module' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Within O’Reilly Books <a href='https://www.oreilly.com' target='_blank' rel='noopener noreferrer'>[link]</a> 
		perform a searches for Golang, Git, and ReactJS</li>
	<li><em>Make your initial Discussion 2post by the middle of the sprint</em></li>

	{/* The items below should be consistent across classes. */ }
	<li>{complete(programmingAssignment)}</li>
	<li><em>Complete Discussion 2 by responding to at least two of your classmates’ posts</em></li>
	<li><em>Submit Lab 2, Quiz 2, and Reflection 2</em></li>
</ol>

<p>If you are struggling, remember to reach out to your Scrum teammates early and often for help. Also, be sure to 
periodically check for new programming together tutorials <NavLink to='/activity/programming-together'>[link]</NavLink>.</p>

</div>

	)
}

// Todo: Review https://www.educba.com/functional-programming-vs-oop/.