import React from 'react'
import { NavLink } from 'react-router-dom';

import { MatchmakerWithJava, start, complete } from './ProgrammingAssignments'
const programmingAssignment = MatchmakerWithJava

export const al24500Sprint01 = (syllabusURL) => {
	return (

<div>
<h4>Object-Oriented Programming </h4>
<h5>Sprint 1: Getting Started, Concepts, Patterns, and Java Programming</h5>

<p><em>Welcome to Object-Oriented Programming!</em> By this point in your software development journey I’m sure that 
you are confident in writing basic software programs. You’ve learned about structured programming techniques like 
sequence, selection, and repetition. You've learned how to break complicated programs down into more manageable pieces 
by using functions. That’s great, but to create modern programs you need to master some additional skills. These 
additional skills are what object-oriented programming give us.</p>

<p>You likely noticed that I am using the term “sprint 1” to describe our first set of course activities. Sprints are 
part of the Scrum software development process. The term is used to describe a unit of work which we have committed to
delivering by a given date. We will be learning more about sprints and Scrum in the coming days. For now it is 
sufficient to know that our sprint 1 activities will take approximately 20 hours of focused effort to complete, and we 
need to complete the activities by the sprint 1 end date listed on our course calendar <NavLink to='/calendar/1'>[link]</NavLink>.</p>

<p>Let's start with our sprint 1 Learning Objectives. By the end of sprint 1 we will be able to:</p>
<ul style={{ listStyleType: 'square' }}>
	<li>Effectively participate in a blended classroom environment and as part of a Scrum team</li>
	<li>Identify and understand key object-oriented programming concepts</li>
	<li>Identify, define, and discuss object-oriented programming patterns</li>
	<li>Utilize important developer tools to create and update basic software applications</li>
</ul>

<p>Below is our sprint 1 activities list. Although you are welcome to pursue the activities in any order, they are
listed in the order I think will be the most efficient to complete. Expect each item to take 20 to 40 minutes of 
focused time unless otherwise noted. <em>Bold</em> items are graded assignments.</p>
<ol>
	<li>Maintain laser focus on due dates by reviewing our sprint calendar <NavLink to='/calendar/1'>[link]</NavLink></li>
	<li>Review course syllabus <a href={syllabusURL}>[link]</a></li>
	<li>Understand Blended Learning by reviewing “Blended Learning &amp; Flipped Classroom” <NavLink to='/activity/blended-learning'>[video]</NavLink></li>
	<li>Be prepared to participate in a Scrum team by watching “Introduction to Scrum in 7 Minutes” <NavLink to='/activity/scrum-in-7-minutes'>[video]</NavLink></li>
	<li><em>Review sprint 1 assignments including Introduction, Lab 1, Quiz 1, Discussion 1, and Reflection 1</em></li>
	<li>Start working on “Tools of the Trade” <NavLink to='/activity/tools'>[link]</NavLink> by setting up Discord and O’Reilly Books</li>
	<li><em>Complete the Introduction assignment by making your post and responding to at least two of your classmates</em></li>
	<li>{start(programmingAssignment)}</li>
	{/* The above items should be consistent and complete by the end of the second class session. */ }

	<li>Complete “Object-Oriented Programming Concepts and Practices” <NavLink to='/activity-oop/concepts-and-practices'>[video]</NavLink></li>
	<li>Review O’Reilly Books<a href='https://www.oreilly.com' target='_blank' rel='noopener noreferrer'>[link]</a>and 
		read “Learning Java, 5th Edition” chapters 1 and 2<a href='https://learning.oreilly.com/library/view/learning-java-5th/9781492056263/' target='_blank' rel='noopener noreferrer'>[link]</a></li>

	<li>Add a representative photo of yourself to your Blackboard and Zoom profiles <NavLink to='/activity/photo-to-blackboard'>[video]</NavLink></li>
	<li><em>Make your initial Discussion 1 post by the middle of the sprint</em></li>

	<li>Complete “Tools of the Trade” including Java <NavLink to='/activity/tools'>[link]</NavLink><sup> ~2 hours</sup></li>
	<li>Complete “Hello World with Python” <NavLink to='/activity/hello-world-python'>[link]</NavLink></li>
	<li>Complete “Hello World with Java” <NavLink to='/activity/hello-world-java'>[link]</NavLink></li>

	{/* The items below should be consistent across classes. */ }
	<li>{complete(programmingAssignment)}</li>
	<li><em>Complete Discussion 1 by responding to at least two of your classmates’ posts</em></li>
	<li><em>Submit Lab 1, Quiz 1, and Reflection 1</em></li>
</ol>

<p>The best advise that I can give you for this class is to start assignments early and to always submit something. If 
you do these two things, I believe your success is virtually guaranteed.</p>

<p>Additional references:</p>
	<ul style={{ listStyleType: 'square' }}>
		<li>Git/GitHub Cheat Sheet
			<a href='https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf'
			target='_blank' rel='noopener noreferrer'>[link]</a></li> 
	</ul> 
</div>

	)
}