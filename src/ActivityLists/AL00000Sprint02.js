// Sprint 2 utilizing industry standard developer tools to create simple software applications.

import React from 'react'
import { NavLink } from 'react-router-dom'

import { StartProgrammingActivity, ProgrammingActivity } from './ProgrammingAssignments'
import { ExampleCode } from '../Links'

export const LearningObjectivesIntro = () => {
	return (

<p>Once again let’s start with our Learning Objectives. By the end of sprint 2 we will be able to:</p>

	)
}

export const ActivitiesListIntro = () => {
	return (

<p>Below is our sprint 2 activities list. Once again they are provided in the order that I think will be the most
efficient for you and the <em>bold</em> items are graded assignments.</p>

	)
}

export const StandardActivities = (programmingAssignment) => { 
	return ( <div>

<li>Maintain laser focus on due dates by reviewing our class <NavLink to='/calendar/2'>Calendar</NavLink> and sprint 2 <NavLink to='/schedule/2'>Schedule</NavLink></li>
<li><em>Review sprint 2 assignments including Lab 2, Quiz 2, Discussion 2, Reflection 2, and Lab Demo</em></li>
<li>Study and understand our <NavLink to='/activity/coding-standards'>Coding Standards</NavLink></li>
{StartProgrammingActivity(programmingAssignment)}
<li>Review our class {ExampleCode()}</li>

	</div> )
}

export const InitialPost = (sprint) => {
	return ( <li><em>Make your initial Discussion {sprint} post by the middle of the sprint</em></li> )
}

export const StandardActivitiesClosing = (programmingAssignment) => { 
	return ( <div>

<li>Verify that you added a representative photo of yourself to <NavLink to='/activity/photo-to-blackboard'>Blackboard</NavLink> and Zoom</li>
{ProgrammingActivity(programmingAssignment)}
<li><em>Complete Discussion 2 by responding to at least two of your classmates’ posts</em></li>
<li><em>Complete Lab Demo if you demoed during sprint 2</em></li>
<li><em>Submit Lab 2, Quiz 2, and Reflection 2</em></li>

	</div> ) 
}

export const Closing = () => {
	return (

<p>If you are struggling, remember to reach out to your Scrum teammates early and often for help. Also, be sure to periodically check for new programming together <NavLink to='/activity/programming-together'>tutorials</NavLink>.</p>

	) 
}
