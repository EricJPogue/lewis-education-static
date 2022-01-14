
import React from 'react'
import { NavLink } from 'react-router-dom'

import { StartProgrammingActivity, ProgrammingActivity } from './ProgrammingAssignments'
import { ExampleCode } from '../Links'

export const LearningObjectivesIntro = () => { return ( <p>Our Learning Objectives for this sprint include:</p> ) }
export const ActivitiesListIntro = () => { return ( <p>Below is our activities list:</p> ) }

export const StandardActivities = (programmingAssignment, playlist) => { 
	return ( <div>

<li>Focus on due dates by reviewing our <NavLink to='/calendar/3'>calendar</NavLink> and <NavLink to='/schedule/3'>schedule</NavLink></li>
<li><em>Review sprint 3 assignments including Discussion 3, Quiz 3, Lab 3, Reflection 3, and Lab Demo</em></li>
<li>From previous sprints review {ExampleCode()}, <NavLink to='/activity/coding-standards'>coding standards</NavLink>, <NavLink to='/activity/study-table'>tutoring options</NavLink>, {playlist}, and <NavLink to='/activity/programming-together'>programming together tutorials</NavLink></li>
{StartProgrammingActivity(programmingAssignment)}

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