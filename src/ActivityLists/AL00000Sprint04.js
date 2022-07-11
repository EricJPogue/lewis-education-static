// Depreciated: 06/27/2022
// Update to utilize AL0000Sprint00.js

import React from 'react'
import { NavLink } from 'react-router-dom'
import { estimated } from './AL00000Sprint01'

import { StartProgrammingActivity, ProgrammingActivity } from './ProgrammingAssignments'

import { calendarLink, scheduleLink, ExampleCode, codingStandards, gitCommands, internalLink } from '../data/Links'

export const StandardActivitiesWithLinkAndSprint = (sprint, programmingAssignmentLink, playlist, excludePreviousTopics) => { 
	const tutoringOptions = () => { return internalLink('tutoring options', '/activity/study-table') }

	const checkExcludingPreviousSprintReviewTopics = (excludePreviousTopics) => { 
		if (!excludePreviousTopics) return ( <div><li>From previous sprints review {ExampleCode()}, {gitCommands()}, {codingStandards()}, {tutoringOptions()}, and {playlist}</li></div>)
		else return null
	}
	
	return ( <div>
		<li>Focus on due dates by reviewing our {calendarLink(sprint)} and {scheduleLink(sprint)}</li>
		<li><em>Review sprint {sprint} assignments including Discussion {sprint}, Quiz {sprint}, Lab {sprint}, Reflection {sprint}, and Lab Demo</em></li>
		{checkExcludingPreviousSprintReviewTopics(excludePreviousTopics)}
		<li>Start working on {programmingAssignmentLink}</li>
	</div> )
}

export const StandardActivities = (programmingAssignment, playlist, sprint) => {
	let scheduleLink = '/schedule/'+sprint
	let calendarLink = '/calendar/'+sprint

	return ( <div>
		<li>Focus on due dates by reviewing our <NavLink to={calendarLink}>calendar</NavLink> and <NavLink to={scheduleLink}>schedule</NavLink></li>
		<li><em>Review sprint {sprint} assignments including Discussion {sprint}, Quiz {sprint}, Lab {sprint}, Reflection {sprint}, and Lab Demo</em></li>
		<li>From previous sprints review {ExampleCode()}, {gitCommands()}, <NavLink to='/activity/coding-standards'>coding standards</NavLink>, <NavLink to='/activity/study-table'>tutoring options</NavLink>, and {playlist}</li>
		{StartProgrammingActivity(programmingAssignment)}
	</div> )
}

export const StandardActivitiesClosingWithLinkAndSprint = (sprint, programmingAssignmentLink, programmingAssignmentEstimate) => { 
	return ( <div>
	<li>Complete {programmingAssignmentLink}{estimated(programmingAssignmentEstimate)}</li>
		<li><em>Submit Discussion {sprint}, Quiz {sprint}, Lab {sprint}, and Reflection {sprint}</em></li>
	</div> ) 
}


export const StandardActivitiesClosing = (programmingAssignment, sprint) => { 
	return ( <div>
		{ProgrammingActivity(programmingAssignment)}
		<li><em>Submit Discussion {sprint}, Quiz {sprint}, Lab {sprint}, and Reflection {sprint}</em></li>
	</div> ) 
}

export const Closing = () => { return ( <p>Remember to regularly check for new <NavLink to='/activity/programming-together'>programming together tutorials</NavLink>.</p> ) }