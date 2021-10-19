
import React from 'react'
import { NavLink } from 'react-router-dom'

import { StartProgrammingActivity, ProgrammingActivity } from './ProgrammingAssignments'
import { ExampleCode } from '../Links'
import { programmingTogether } from '../Links'

export const StandardActivities = (programmingAssignment, playlist, sprint) => {
	let scheduleLink = '/schedule/'+sprint
	let calendarLink = '/calendar/'+sprint

	return ( <div>
		<li>Focus on due dates by reviewing our <NavLink to={calendarLink}>calendar</NavLink> and <NavLink to={scheduleLink}>schedule</NavLink></li>
		<li><em>Review assignments including Discussion, Quiz, Lab, Reflection, and Lab Demo</em></li>
		<li>From previous sprints review {ExampleCode()}, <NavLink to='/activity/git-commands'>Git commands</NavLink>, <NavLink to='/activity/coding-standards'>coding standards</NavLink>, <NavLink to='/activity/study-table'>tutoring options</NavLink>, and {playlist}</li>
		{StartProgrammingActivity(programmingAssignment)}
	</div> )
}

export const StandardActivitiesClosing = (programmingAssignment, sprint) => { 
	return ( <div>
		{ProgrammingActivity(programmingAssignment)}
		<li><em>Submit Discussion, Quiz, Lab, and Reflection</em></li>
	</div> ) 
}

export const Closing = () => { 
	return ( <div>
		<p>Remember to periodically check for new {programmingTogether()} tutorials. Also, take a minute to consider if 
		you are you getting what you hoped to get out of this course. If not, let’s sit down and talk for a few minutes 
		to see if we can make the course something special for you.</p> 
	</div> ) 
}