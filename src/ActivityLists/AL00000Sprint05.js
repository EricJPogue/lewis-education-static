
import React from 'react'
import { NavLink } from 'react-router-dom'

import { startActivity, completeActivity, FinalProjectProposal } from './ProgrammingAssignments'

import { programmingTogether, ExampleCode, internalLink, gitCommands, codingStandards, calendarLink, scheduleLink } from '../Links'

export const FinalProjectsAndMoreResponsibility = () => {
	return ( <div>
		<p>We will also be creating our Final Project proposals this sprint. How would you like to finishing the course by 
		creating something that makes you proud? What type of a final project would you enjoy creating? Is there a final project 
		that would both be interesting to create and be something you could add to your professional portfolio as you are 
		looking for internships or jobs? How can I help?</p>

		<p>You will also notice a continuing trend this sprint where assignments will become less prescriptive and you
		will have more control <em>and responsibility</em> in determining what is done and how it is implemented.</p>
	</div> )
}

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
		<li><em>Review assignments including Discussion, Quiz, Lab, Reflection, and Lab Demo</em></li>
		<li>From previous sprints review {ExampleCode()}, <NavLink to='/activity/git-commands'>Git commands</NavLink>, <NavLink to='/activity/coding-standards'>coding standards</NavLink>, <NavLink to='/activity/study-table'>tutoring options</NavLink>, and {playlist}</li>
		<li>{startActivity(programmingAssignment)}</li>
		<li>{startActivity(FinalProjectProposal)}</li>
	</div> )
}

export const StandardActivitiesClosing = (programmingAssignment, sprint) => { 
	return ( <div>
		<li>{completeActivity(FinalProjectProposal)}</li>
		<li>{completeActivity(programmingAssignment)}</li>
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