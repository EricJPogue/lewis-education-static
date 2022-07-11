// Depreciated: 06/27/2022
// Update to utilize AL0000Sprint00.js

import React from 'react'
import { NavLink } from 'react-router-dom'
import { estimated } from './AL00000Sprint01'
import { sprintEndDateWithoutTime } from '../SprintDates'
import { ExampleCode, programmingTogether, calendarLink, scheduleLink, codingStandards } from '../data/Links'

export const LearningObjectivesIntro = () => { return ( <p>Let’s start with our Learning Objectives. By the end of sprint 2 we will be able to:</p>	) }

export const ActivitiesListIntro = () => {
	return (
		<p>Below is our sprint 2 activities list. Activities are listed in the order that I think will be the most efficient 
			for them to be completed, the <em>bold</em> items are graded assignments, and everything is by the end of the sprint 
			which is <em>{sprintEndDateWithoutTime(1 /* base zero */)}</em>.</p>
	)
}

export const StandardActivities = (programmingAssignmentLink) => {
	return ( <div>
		<li>Maintain a laser focus on due dates by reviewing our class {calendarLink(2)} and sprint 2 {scheduleLink(2)}</li>
		<li><em>Review sprint 2 assignments including Lab 2, Quiz 2, Discussion 2, Reflection 2, and Lab Demo</em></li>
		<li>Study and understand our {codingStandards()}</li>
		<li>Start working on {programmingAssignmentLink}</li>
		<li>Review our class {ExampleCode()}</li>
	</div> )
}

export const InitialDiscussionPost = (sprint) => { return ( <em>Make your initial Discussion {sprint} post by the middle of the sprint</em> ) }

export const StandardActivitiesClosing = (programmingAssignmentLink, programmingAssignmentEstimate) => { 
	return ( <div>

<li>Verify that you added a representative photo of yourself to <NavLink to='/activity/photo-to-blackboard'>Blackboard</NavLink> and Zoom</li>
<li>Complete {programmingAssignmentLink}{estimated(programmingAssignmentEstimate)}</li>
<li><em>Complete Discussion 2 by responding to at least two of your classmates’ posts</em></li>

<li><em>Submit Lab 2, Quiz 2, and Reflection 2</em></li>

	</div> ) 
}

export const Closing = () => {
	return (

<p>If you are struggling, remember to reach out to your Scrum teammates early and often for help. Also, be sure to 
periodically check for updates to our {programmingTogether()} tutorials.</p>

	) 
}
