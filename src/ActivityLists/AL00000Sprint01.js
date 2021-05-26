// Sprint 1 is focused on installing and configuring industry standard developer tools which is included in the  
// “Tools of the Trade” programming activity.

import React from 'react'
import { NavLink } from 'react-router-dom'

import { classSyllabusURL } from '../URLParameters'
import { StartProgrammingActivity, ProgrammingActivity } from './ProgrammingAssignments'


export const ScrumIntro = () => {
	return ( 

<p>You likely noticed that I am using the term “sprint 1” to describe our first set of course activities. Sprints are 
part of the Scrum software development process. The term is used to describe a unit of work which we have committed to
delivering by a given date. We will be learning more about sprints and Scrum in the coming days. For now it is 
sufficient to know that our sprint 1 activities will take approximately 18 hours of focused effort to complete, and we 
need to complete the activities by the sprint 1 end date listed on our course calendar 
<NavLink to='/calendar/1'>[link]</NavLink>.</p> 

	)
}

export const LearningObjectivesIntro = () => {
	return (

<p>Let's start with our sprint 1 Learning Objectives. By the end of sprint 1 we will be able to:</p>

	)
}

export const ActivitiesListIntro = () => {
	return (

<p>Below is our sprint 1 activities list. Although you are welcome to pursue the activities in any order, they are
listed in the order I think will be the most efficient to complete. Expect each item to take 20 to 40 minutes of 
focused time unless otherwise noted. <em>Bold</em> items are graded assignments.</p>

	)
}

export const StandardActivities = (programmingAssignment) => { 
	return ( <div>

<li>Maintain laser focus on due dates by reviewing our class calendar <NavLink to='/calendar/1'>[link]</NavLink> and sprint 1 schedule <NavLink to='/schedule/1'>[link]</NavLink></li>
<li>Review our course syllabus <a href={classSyllabusURL()}>[link]</a></li>
<li>Understand Blended Learning by reviewing “Blended Learning &amp; Flipped Classroom” <NavLink to='/activity/blended-learning'>[video]</NavLink></li>
<li>Be prepared to participate in your Scrum team by watching “Introduction to Scrum in 7 Minutes” <NavLink to='/activity/scrum-in-7-minutes'>[video]</NavLink></li>
<li><em>Review sprint 1 assignments including Lab 1, Quiz 1, Discussion 1, and Reflection 1</em></li>
<li>Start working on “Tools of the Trade” <NavLink to='/activity/tools'>[link]</NavLink> by setting up Discord and O’Reilly Books</li>
{StartProgrammingActivity(programmingAssignment)}

	</div> )
}

export const InitialPost = () => {
	return ( <li><em>Make your initial Discussion 1 post by the middle of the sprint</em></li> )
}

export const StandardActivitiesClosing = (programmingAssignment) => { 
	return ( <div>

<li>Add a representative photo of yourself to your Blackboard and Zoom profiles <NavLink to='/activity/photo-to-blackboard'>[video]</NavLink></li>
{ProgrammingActivity(programmingAssignment)}
<li><em>Complete Discussion 1 by responding to at least two of your classmates’ posts</em></li>
<li><em>Submit Lab 1, Quiz 1, and Reflection 1</em></li>

	</div> ) 
}

export const Closing = () => {
	return (

<p>The best advise that I can give you for being successful this sprint is to attend class, start assignments early, and to submit 
something for each assignment. If you do these things, I believe your success is virtually guaranteed. Finally, be sure to 
periodically check for new programming together tutorials <NavLink to='/activity/programming-together'>[link]</NavLink>.</p>

	) 
}
