
import React from 'react'
import { NavLink } from 'react-router-dom'

import { StartProgrammingActivity, ProgrammingActivity } from './ProgrammingAssignments'
import { ExampleCode } from '../Links'

export const StandardActivities = (programmingAssignment, playlist, sprint) => { 
	return ( <div>

<li>Focus on due dates by reviewing our <NavLink to='/calendar/3'>calendar</NavLink> and <NavLink to='/schedule/3'>schedule</NavLink></li>
<li><em>Review sprint {sprint} assignments including Discussion {sprint}, Quiz {sprint}, Lab {sprint}, Reflection {sprint}, and Lab Demo</em></li>
<li>From previous sprints review {ExampleCode()}, <NavLink to='/activity/coding-standards'>coding standards</NavLink>, <NavLink to='/activity/study-table'>tutoring options</NavLink>, {playlist}, and <NavLink to='/activity/programming-together'>programming together tutorials</NavLink></li>
{StartProgrammingActivity(programmingAssignment)}

	</div> )
}

export const StandardActivitiesClosing = (programmingAssignment, sprint) => { 
	return ( <div>

{ProgrammingActivity(programmingAssignment)}
<li><em>Submit Discussion {sprint}, Quiz {sprint}, Lab {sprint}, and Reflection {sprint}</em></li>

	</div> ) 
}

export const Closing = () => { return ( <p>Let me know if you are struggling and remember to regularly check for new <NavLink to='/activity/programming-together'>programming together tutorials</NavLink>.</p> ) }