
import React from 'react'
import { NavLink } from 'react-router-dom'

import { ProgrammingActivity } from './ProgrammingAssignments'


export const StandardActivitiesClosing = (programmingAssignment, sprint) => { 
	return ( <div>

{ProgrammingActivity(programmingAssignment, sprint)}
<li><em>Submit Discussion {sprint}, Quiz {sprint}, Lab {sprint}, and Reflection {sprint}</em></li>

	</div> ) 
}

export const Closing = () => { return ( <p>Let me know if you are struggling and remember to regularly check for new <NavLink to='/activity/programming-together'>programming together tutorials</NavLink>.</p> ) }