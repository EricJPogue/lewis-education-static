// Depreciated: 06/27/2022
// Update to utilize AL0000Sprint00.js

import React from 'react'
import { NavLink } from 'react-router-dom'

import { ExampleCode } from '../Links'

import { getFinalExamDateAndTime } from '../data/Classes'

export const StandardActivities = (activity, playlist, sprint) => {
	let scheduleLink = '/schedule/'+sprint
	let calendarLink = '/calendar/'+sprint

	return ( <div>
		<li>Stay laser focused on due dates by reviewing our course calendar <NavLink to={calendarLink}>calendar</NavLink> and <NavLink to={scheduleLink}>schedule</NavLink></li>
		<li><em>Review assignments including Discussion, Quiz, Lab, Reflection, and Final Project Presentation</em></li>
		<li>From previous sprints review {ExampleCode()}, <NavLink to='/activity/git-commands'>Git commands</NavLink>, <NavLink to='/activity/coding-standards'>coding standards</NavLink>, <NavLink to='/activity/study-table'>tutoring options</NavLink>, and {playlist}</li>
		<li>{activity}</li>

	</div> )
}

export const StandardActivitiesClosing = (activity) => { 
	return ( <div>
		<li>Submit your Final Project Presentation assignment at least two hours before to your scheduled presentation time</li>
		<li><em style={{color:'red'}}>Deliver your Final Project Presentation <u>in person</u> on <u>{getFinalExamDateAndTime()}</u></em></li>

		<li>{activity}</li>
		<li><em style={{color:'red'}}>Submit <u>all assignments</u> by the end of the day <u>Thursday, December 16, 2021</u>... no late assignments</em></li>
	</div> ) 
}

export const Closing = () => { return ( <p>Let’s finish strong. It has been a sincere pleasure.</p>	) }