// Depreciated: 06/27/2022
// Update to utilize AL0000Sprint00.js

import React from 'react'
import { estimated } from './AL00000Sprint01'
import { programmingTogether, ExampleCode, internalLink, gitCommands, codingStandards, calendarLink, scheduleLink } from '../DataAndAPIs/Links'
import { getFinalExamDateAndTime } from '../DataAndAPIs/Classes'
import { sprintEndDateWithoutTime } from '../CalendarAndSchedule/SprintDates'

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
		<li><em>Review sprint {sprint} assignments including Discussion, Quiz, Lab, Reflection, and Lab Demo</em></li>
		{checkExcludingPreviousSprintReviewTopics(excludePreviousTopics)}
		<li>Start working on {programmingAssignmentLink}</li>
	</div> )
}

export const StandardActivitiesClosingWithLinkAndSprint = (sprint, programmingAssignmentLink, programmingAssignmentEstimate) => { 
	if (sprint === 8) {
		return (<div>
			<li>Submit your Final Project Presentation assignment at least two hours before to your scheduled presentation time</li>
			<li><em style={{color:'red'}}>Deliver your Final Project Presentation <u>in person</u> on <u>{getFinalExamDateAndTime()}</u></em></li>
			<li>Complete {programmingAssignmentLink}{estimated(programmingAssignmentEstimate)}</li>
			<li><em style={{color:'red'}}>Submit <u>all assignments</u> by the end of the day <u>{sprintEndDateWithoutTime(sprint-1)}</u>... no late assignments</em></li> 
		</div>)
	}
	else {
		return (<div>
			<li>Complete {programmingAssignmentLink}{estimated(programmingAssignmentEstimate)}</li>
			<li><em>Submit sprint {sprint} assignments including Discussion, Quiz, Lab, and Reflection</em></li>
		</div>)
	}
}

export const Closing = () => { 
	return ( <div>
		<p>Remember to periodically check for new {programmingTogether()} tutorials. Also, take a minute to consider if 
		you are you getting what you hoped to get out of this course. If not, let’s sit down and talk for a few minutes 
		to see if we can make the course something special for you.</p> 
	</div> ) 
}

export const ClosingSprint08 = () => { return ( <p>Let’s finish strong. It has been a sincere pleasure.</p>	) }
