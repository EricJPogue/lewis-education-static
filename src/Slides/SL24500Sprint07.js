import { xyz_n_1of6_lists, xyz_n_1of6 } from './SL00000Sprint00'
import { tNoClassToday } from './SL00000Sprint00'
import { orderedListSlide } from './SLSprint00'

import { list24500Sprint06 } from '../ActivityLists/AL24500Sprint06'
import { list24500Sprint07 } from '../ActivityLists/AL24500Sprint07'

// Introduction to Computer Science (ICS) sprint 7 global values.
const sprint = 7
const activityListPrevious = () => { return list24500Sprint06(sprint-1) }
const activityList = () => { return list24500Sprint07(sprint) }

// Session 1 of 6: Monday
export const oop_7_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const oop_7_1of6 = () => { return [ tNoClassToday ] }

// Session 2 of 6: Wednesday
export const oop_7_2of6_PAaA = xyz_n_1of6_lists(sprint)
export const oop_7_2of6 = () => { 
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning as a Class', `Sprint ${sprint} Expectations:`, [
			'Similar to previous sprints with Discussion, Quiz, Lab, and Reflection',
			'We missed Monday due to the Easter Holiday recess which is challenging',
			'Demos will be occurring Friday... including Aidan',
			'We will complete our scrum team Discussion Board on Friday',
			`We will have sprint ${sprint-1} Retrospective on Friday also if possible` ])
	}

	return xyz_n_1of6(sprint, oop_7_1of6_PAaA.prework, activityListPrevious, oop_7_2of6_PAaA.agenda, oop_7_2of6_PAaA.prework, activityList, sprintPlanning) 
}