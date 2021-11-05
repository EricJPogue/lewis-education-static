
import React from 'react'
import { NavLink } from 'react-router-dom'

import { ExampleCode } from '../Links'

export const StandardActivities = (assignmentLink, playlist, sprint) => {
	let scheduleLink = '/schedule/'+sprint
	let calendarLink = '/calendar/'+sprint

	return ( <div>
		<li>Focus on due dates by reviewing our <NavLink to={calendarLink}>calendar</NavLink> and <NavLink to={scheduleLink}>schedule</NavLink></li>
		<li><em>Review assignments including Discussion, Quiz, Lab, Reflection, and Lab Demo</em></li>
		<li>From previous sprints review {ExampleCode()}, <NavLink to='/activity/git-commands'>Git commands</NavLink>, <NavLink to='/activity/coding-standards'>coding standards</NavLink>, <NavLink to='/activity/study-table'>tutoring options</NavLink>, and {playlist}</li>
		<li>Start working on {assignmentLink}</li>
	</div> )
}