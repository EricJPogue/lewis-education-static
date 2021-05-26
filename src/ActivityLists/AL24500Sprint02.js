import React from 'react'
import { NavLink } from 'react-router-dom';

import { OvalDrawPlusWithJava, start, complete } from './ProgrammingAssignments'
const programmingAssignment = OvalDrawPlusWithJava

export const al24500Sprint02 = ( props ) => {
	return (

<div className='sprint-02'>
<h4>Object-Oriented Programming</h4>
<h5>Sprint 2: Patterns, Principles, UML, and more Java Programming</h5>

<p><em>Welcome to sprint 2.</em> We covered a lot of material in sprint 1. We even did some programming by completing
Matchmaker with Java. How did Matchmaker go? Keep your Java compilers out for this sprint. We are going to start 
practicing some of the concepts we learned while we continue to learn more about object-oriented programming (OOP) as 
we focus on OOP Patterns and Principles.</p>

<p>By the end of sprint 2 we will be able to:</p>
<ul style={{listStyleType:'square'}}>
	<li>Identify, define, and discuss object-oriented Patterns and Principles</li>
	<li>Create, modify, compile, and execute OOP based Java applications</li>
	<li>Manage and submit source code utilizing the GitHub and the Git command line client</li>
	<li>Utilize UML and JSON to represent program data</li>
</ul>

<p>Below is the list of activities that we will need to complete this sprint. Once again you are welcome to
pursue the activities in any order you prefer. However, they are listed in the order I think will be the most
beneficial for you to work through the topics. The time commitment for each line item is generally 20 to 40
minutes unless otherwise noted.</p>
<ol>

<li>Stay focused on the due dates by reviewing our course calendar <NavLink to='/calendar/2'>[link]</NavLink></li>
	<li><em>Review sprint 2 assignments including Lab 2, Quiz 2, Discussion 2, Reflection 2, and Lab Demo</em></li>
	<li>Study and understand our “Coding Standards”<NavLink to='/activity/coding-standards'>[link]</NavLink></li>
	<li>{start(programmingAssignment)}</li>
	{/* The above items should be consistent across classes. */ }

	<li>Complete “Object-Oriented Programming Patterns” <NavLink to='/activity-oop/patterns'>[video]</NavLink></li>
	<li>Complete “How To Be A Successful Programmer” <NavLink to='/activity/successful-programmer'>[link]</NavLink></li>
	<li>Read “Learning Java, 5th Edition” chapter 3 <a href='https://learning.oreilly.com/library/view/learning-java-5th/9781492056263/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Within O’Reilly Books <a href='https://www.oreilly.com' target='_blank' rel='noopener noreferrer'>[link]</a>
		execute searches for Object-Oriented Programming, OOP, Git, GitHub, and Java</li>
	<li>Complete “Shapes - Part 1” <NavLink to='/activity-oop/java-shapes-step1'>[video]</NavLink></li>
	<li><em>Make your initial Discussion 2 post by the middle of the sprint</em></li>
	<li>Complete “Shapes - Part 2” <NavLink to='/activity-oop/java-shapes-step2'>[video]</NavLink></li>
	<li>Complete “Object-Oriented Programming Principles” <NavLink to='/activity-oop/principles'>[video]</NavLink></li>
	<li>Review UML Class Diagrams <a href='https://www.youtube.com/watch/UI6lqHOVHic' target='_blank' rel='noopener noreferrer'>[link]</a></li>

	{/* The items below should be consistent across classes. */ }
	<li>{complete(programmingAssignment)}</li>
	<li><em>Complete Discussion 2 by responding to at least two of your classmates’ posts</em></li>
	<li><em>Submit Lab 2, Quiz 2, and Reflection 2</em></li>
</ol> 

<p>If you are struggling, remember to reach out to your Scrum teammates early and often for help.</p>
{extras()}
</div>

	)
}

const extras = () => {
	return (null)
}

// Todo:
// 1 - Remove duplicate question from quiz... Which concepts enable the Factory Pattern to be useful?
// 2 - Remove duplicate question from quiz... Which of the following statements about constructors is FALSE?
