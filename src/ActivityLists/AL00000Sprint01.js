// Sprint 1 is focused on installing and configuring industry standard developer tools which is included in the  
// “Tools of the Trade” programming activity.

import React from 'react'
import { NavLink } from 'react-router-dom'

import { getSyllabusURL } from '../data/ClientDataAPIs'
import { ProgrammingAssignmentToLink, ProgrammingActivity } from './ProgrammingAssignments'
import { Blended, scrumIn7Min, blackboardChangePhoto, programmingTogether } from '../Links'
import { sprintEndDateWithoutTime } from '../SprintDates'
const sprintEndDate = (sprint) => {
	// SprintEndDateWithoutTime is base zero.
	return sprintEndDateWithoutTime(sprint-1)
}

export const ScrumIntro = () => {
	return ( <p>You likely noticed that I am using the term “sprint 1” to describe our first set of course activities. 
		Sprints are part of the scrum software development process and are used to describe a set of work that we have 
		committed to deliver by a given date. We will be learning more about sprints and scrum. For now, it is 
		sufficient to know that our sprint 1 activities will take approximately 18 hours of effort to complete, and that 
		we are committed to completing the activities by the end of sprint 1 which is <em>{sprintEndDate(1)}</em>.</p> )
}

export const LearningObjectivesIntro = () => {
	return ( <p>Let’s start with our sprint 1 learning objectives. By the end of sprint 1 we will be able to:</p> )
}

export const ActivitiesListIntro = () => {
	return (

<p>Below is our sprint 1 activities list. Although you are welcome to pursue the activities in any order, they are
listed in the order I think will be the most efficient to complete. Expect each item to take 20 to 40 minutes of 
focused time unless otherwise noted. <em>Bold</em> items are graded assignments.</p>

	)
}

const sprint1Calendar = () => {
	return ( <NavLink to='/calendar/1'>calendar</NavLink> )
}

const sprint1Schedule = () => {
	return ( <NavLink to='/schedule/1'>schedule</NavLink> )
}


export const StandardActivitiesPlus = (programmingAssignmentLink) => { 
	return ( <div>

<li>Maintain a laser focus on due dates by reviewing our class {sprint1Calendar(1)} and sprint 1 {sprint1Schedule()}</li>
<li>Review our course <a href={getSyllabusURL()}>syllabus</a></li>
<li>Understand blended learning by watching {Blended()}</li>
<li>Be prepared to participate in your scrum team by watching {scrumIn7Min()}</li>
<li><em>Review sprint 1 assignments including Lab 1, Quiz 1, Discussion 1, and Reflection 1</em></li>
<li>Start working on <NavLink to='/activity/tools'>Tools of the Trade</NavLink> by setting up Discord and O’Reilly Books</li>
<li>Start working on {programmingAssignmentLink}</li>

	</div> )
}

export const StandardActivities = (programmingAssignment) => { 
	return StandardActivitiesPlus(ProgrammingAssignmentToLink(programmingAssignment))
}

export const InitialPost = () => {
	return ( <li><em>Make your initial Discussion 1 post by the middle of the sprint</em></li> )
}

export const estimated = (estimate) => {
	if ((estimate === null) || (estimate === undefined) || (estimate === '')) {
		return null
	}
	return (<sup> ~{estimate}</sup>)
}

export const StandardActivitiesClosingPlus = (programmingAssignmentLink, programmingAssignmentEstimate) => { 
	console.log(programmingAssignmentEstimate)
	return ( <div>

<li>Add a representative photo of yourself to your {blackboardChangePhoto()} and Zoom profiles </li>
<li>Complete {programmingAssignmentLink}{estimated(programmingAssignmentEstimate)}</li>
<li><em>Complete Discussion 1 by responding to at least two of your classmates’ posts</em></li>
<li><em>Submit Lab 1, Quiz 1, and Reflection 1</em></li>

	</div> ) 
}

// Todo: This function should be replace by StandardActivitiesClosingPlus().
export const StandardActivitiesClosing = (programmingAssignment) => { 
	return ( <div>

<li>Add a representative photo of yourself to your {blackboardChangePhoto()} and Zoom profiles </li>
{ProgrammingActivity(programmingAssignment)}
<li><em>Complete Discussion 1 by responding to at least two of your classmates’ posts</em></li>
<li><em>Submit Lab 1, Quiz 1, and Reflection 1</em></li>

	</div> ) 
}

export const Closing = () => {
	return (

<p>The best advise that I can give you is to start assignments early, submit something for each assignment, and to 
attend class. If you do these things, I believe your success is virtually guaranteed. Finally, be sure to periodically 
check for updates to our {programmingTogether()} tutorials.</p>

	) 
}

