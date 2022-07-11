// Depreciated: 06/27/2022
// Update to utilize AL0000Sprint00.js

import React from 'react'
import { NavLink } from 'react-router-dom'

import { ExampleCode } from '../Links'

export const StandardActivities = (activity, playlist, sprint) => {
	let scheduleLink = '/schedule/'+sprint
	let calendarLink = '/calendar/'+sprint

	return ( <div>
		<li>Focus on due dates by reviewing our <NavLink to={calendarLink}>calendar</NavLink> and <NavLink to={scheduleLink}>schedule</NavLink></li>
		<li><em>Review assignments including Discussion, Quiz, Lab, Reflection, and Lab Demo</em></li>
		<li>From previous sprints review {ExampleCode()}, <NavLink to='/activity/git-commands'>Git commands</NavLink>, <NavLink to='/activity/coding-standards'>coding standards</NavLink>, <NavLink to='/activity/study-table'>tutoring options</NavLink>, and {playlist}</li>
		<li>{activity}</li>
	</div> )
}

export const StandardActivitiesClosing = (activity) => { 
	return ( <div>
		<li>{activity}</li>
		<li><em>Complete Lab Demo if you have not already</em></li>
		<li><em>Submit Discussion, Quiz, Lab, and Reflection</em></li>
	</div> ) 
}