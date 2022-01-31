import React from 'react'
import { NavLink } from 'react-router-dom'
import { estimated } from './AL00000Sprint01'

import { StartProgrammingActivity, ProgrammingActivity } from './ProgrammingAssignments'
import { calendarLink, scheduleLink, ExampleCode, codingStandards } from '../Links'

export const LearningObjectivesIntro = () => { return ( <p>Our Learning Objectives for this sprint include:</p> ) }
export const ActivitiesListIntro = () => { return ( <p>Below is our activities list:</p> ) }

export const StandardActivitiesWithLink = (programmingAssignmentLink, playlist) => { 
	return ( <div>

<li>Focus on due dates by reviewing our {calendarLink(3)} and {scheduleLink(3)}</li>
<li><em>Review sprint 3 assignments including Discussion 3, Quiz 3, Lab 3, Reflection 3, and Lab Demo</em></li>
<li>From previous sprints review {ExampleCode()}, {codingStandards()}, <NavLink to='/activity/study-table'>tutoring options</NavLink>, {playlist}, and <NavLink to='/activity/programming-together'>programming together tutorials</NavLink></li>
<li>Start working on {programmingAssignmentLink}</li>

	</div> )
}

// Todo: Remove following function.
export const StandardActivities = (programmingAssignment, playlist) => { 
	return ( <div>

<li>Focus on due dates by reviewing our {calendarLink(3)} and {scheduleLink(3)}</li>
<li><em>Review sprint 3 assignments including Discussion 3, Quiz 3, Lab 3, Reflection 3, and Lab Demo</em></li>
<li>From previous sprints review {ExampleCode()}, {codingStandards()}, <NavLink to='/activity/study-table'>tutoring options</NavLink>, {playlist}, and <NavLink to='/activity/programming-together'>programming together tutorials</NavLink></li>
{StartProgrammingActivity(programmingAssignment)}

	</div> )
}

// Todo: The following function should be removed. 
export const InitialPost = (sprint) => { return ( <li><em>Make your initial Discussion {sprint} post by the middle of the sprint</em></li> ) }

export const StandardActivitiesClosingWithLink = (programmingAssignmentLink, programmingAssignmentEstimate) => { 
	return ( <div>

<li>Complete {programmingAssignmentLink}{estimated(programmingAssignmentEstimate)}</li>
<li><em>Complete Discussion 3 by responding to at least two of your classmates’ posts</em></li>
<li><em>Submit Quiz 3, Lab 3, and Reflection 3</em></li>

	</div> ) 
}


export const StandardActivitiesClosing = (programmingAssignment) => { 
	return ( <div>

{ProgrammingActivity(programmingAssignment)}
<li><em>Complete Discussion 3 by responding to at least two of your classmates’ posts</em></li>
<li><em>Submit Quiz 3, Lab 3, and Reflection 3</em></li>

	</div> ) 
}

export const Closing = () => { return ( <p>Remember to tell your Scrum teammates how much you appreciate them and to 
	regularly check for updates to our <NavLink to='/activity/programming-together'>programming together</NavLink> tutorials.</p> ) }