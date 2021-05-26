import React from 'react'
import { NavLink } from 'react-router-dom';

import { MatchmakerWithGo, start, complete } from './ProgrammingAssignments'

const programmingAssignment = MatchmakerWithGo

export const al36000Sprint01 = (syllabusURL) => {
	return (

<div>
<h4>Applied Programming Languages</h4>
<h5>Sprint 1: Getting Started, Programming Languages, Object-Oriented Programming, Go, and Matchmaker</h5>
<p><em>Welcome to Applied Programming Languages!</em> By this point in your software development journey I'm sure you 
are confident in writing moderately complicated software programs. You’ve learned about structured programming 
techniques like sequence, selection, and repetition. You've learned how to break complicated programs down into more 
manageable pieces by using functions, files, and modules. You even understand how Object-Oriented Programming can help 
you develop more complex applications by utilizing encapsulation, inheritance, and polymorphism.</p>

<p>That’s wonderful. However, is it possible that some things in software development are not as clear cut as we have 
made them out to be? Could it be that some of the things we learned in Object-Oriented Programming added unnecessary 
complexity? Could it be that the world of software development has changed <a href='https://youtu.be/4L_3JrRSMQ4?t=30' target='_blank' rel='noopener noreferrer'>[link]</a>?
Could it be that Scrum development techniques, iterative product releases, new web development technologies,
and the ever increasing power of multithreaded programming have elevated testing and concurrency to a level that makes 
new software development languages justifiable? These are just some of the topics that we will explore in our Applied 
Programming Languages class.</p>

<p>You likely noticed that I am using the term “sprint 1” to describe our first set of course activities. Sprints are 
part of the Scrum software development process. The term is used to describe a unit of work which we have committed to
delivering by a given date. We will be learning more about sprints and Scrum in the coming days. For now it is 
sufficient to know that our sprint 1 activities will take approximately 20 hours of focused effort to complete, and we 
need to complete the activities by the sprint 1 end date listed on our course calendar 
<NavLink to='/calendar/1'>[link]</NavLink>.</p>

<p>Let's start with our sprint 1 Learning Objectives. By the end of sprint 1 we will be able to:</p>
<ul style={{listStyleType:'square'}}>
	<li>Effectively participate in a blended classroom environment and as part of a Scrum team</li>
	<li>Compare and contrast key software development language and environment features</li>
	<li>Explain why agile development and scrum have impacted our choice of programming languages</li>
	<li>Explain why the prevalence of multithreaded programming has impacted our choice of programming languages</li>
	<li>Begin to understand the Go language and how it compares with other languages</li>
</ul>

<p>Below is our sprint 1 activities list. Although you are welcome to pursue the activities in any order, they are
listed in the order I think will be the most efficient to complete. Expect each item to take 20 to 40 minutes of 
focused time unless otherwise noted. <em>Bold</em> items are graded assignments.</p>
<ol>
	<li>Maintain laser focus on due dates by reviewing our sprint calendar <NavLink to='/calendar/1'>[link]</NavLink></li>
	<li>Review course syllabus<a href={syllabusURL}>[link]</a></li>
	<li>Understand Blended Learning by reviewing “Blended Learning &amp; Flipped Classroom” <NavLink to='/activity/blended-learning'>[video]</NavLink></li>
	<li>Be prepared to participate in a Scrum team by watching “Introduction to Scrum in 7 Minutes” <NavLink to='/activity/scrum-in-7-minutes'>[video]</NavLink></li>
	<li><em>Review sprint 1 assignments including Introduction, Lab 1, Quiz 1, Discussion 1, and Reflection 1</em></li>
	<li>Start “Tools of the Trade” <NavLink to='/activity/tools'>[link]</NavLink> by setting up Discord and O’Reilly Books</li>
	<li><em>Complete the Introduction assignment by making your post and responding to at least two of your classmates</em></li>
	<li>{start(programmingAssignment)}</li>
	{/* The above items should be consistent and complete by the end of the second class session. */ }

	<li>Review Object-Oriented Concepts <NavLink to='/activity-oop/concepts-and-practices'>[video]</NavLink></li>
	<li>Review O’Reilly Books <a href='https://www.oreilly.com' target='_blank' rel='noopener noreferrer'>[link]</a>and read “Introducing Go” chapters 1 though 6<a href='https://learning.oreilly.com/library/view/introducing-go/9781491941997/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Add a representative photo of yourself to your Blackboard and Zoom profiles<NavLink to='/activity/photo-to-blackboard'>[video]</NavLink></li>
	<li><em>Make your initial Discussion 1 post by the middle of the sprint</em></li>

	<li>Complete “Tools of the Trade” including Go <NavLink to='/activity/tools'>[link]</NavLink><sup> ~2 hours</sup></li>
	<li>Complete “Hello World with Python” <NavLink to='/activity/hello-world-python'>[link]</NavLink></li>
	<li>Complete “Hello World with Go” <NavLink to='/activity/hello-world-go'>[link]</NavLink></li>

	{/* Item below this line should be consistent across classes. */}
	<li>{complete(programmingAssignment)}</li>
	<li><em>Complete Discussion 1 by responding to at least two of your classmates’ posts</em></li>
	<li><em>Submit Lab 1, Quiz 1, and Reflection 1</em></li>
</ol>
<p>The best advise that I can give you for this class is to start assignments early and to always submit something. If 
you do these two things, I believe your success is virtually guaranteed.</p>
</div>

	)
}