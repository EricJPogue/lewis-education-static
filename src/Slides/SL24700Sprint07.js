import { xyz_n_1of6_lists, xyz_n_1of6, tNoClassToday } from './SL00000Sprint00'
import { orderedListSlide } from './SLSprint00'

import { tUnderConstruction } from './SL00000Sprint00'

import { list24700Sprint06 } from '../ActivityLists/AL24700Sprint06'
import { list24700Sprint07 } from '../ActivityLists/AL24700Sprint07'

// Introduction to Computer Science (ICS) sprint 6 global values.
const sprint = 7
const activityListPrevious = () => { return list24700Sprint06(sprint-1) }
const activityList = () => { return list24700Sprint07(sprint) }

// Sprint 7 session 1 of 6: Monday
export const web_7_1of6_lists = xyz_n_1of6_lists(sprint)
export const web_7_1of6 = () => { 
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning', `Sprint ${sprint} Expectations:`, [
			'Similar to previous sprint with Discussion, Quiz, Lab, and Reflection',
			'Not having class on Wednesday or Friday will be challenging',
			'We will complete our scrum team Discussion Board next Monday',
			`We will also have our sprint ${sprint-1} Demos and Retrospective next Monday` ])
	}

	return xyz_n_1of6(sprint, web_7_1of6_lists.prework, activityListPrevious, web_7_1of6_lists.agenda, web_7_4of6_lists.prework, activityList, sprintPlanning()) 
}

// Sprint 7 session 2 of 6: Wednesday
export const web_7_2of6 = () => { return [ tNoClassToday ] }

// Sprint 7 session 3 of 6: Friday
export const web_7_3of6 = () => { return [ tNoClassToday ] }

// Sprint 7 session 4 of 6: Monday
const web_7_4of6_lists = {
	'announcements':[ 
		'No class Wednesday or Friday this week in observance of Thanksgiving' ],
	'prework':[
		'Complete through activity 5 prior to next class', '',
		'Be prepared for Demos & Retrospectives',
		`Be prepared Discussion Board ${sprint}` ],
	'agenda':[
		`Discussion Board ${sprint} as a scrum team`,
		'Review Demo Schedule for Next Class',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}
export const web_7_4of6 = () => { return [tUnderConstruction ] }

// Sprint 7 session 5 of 6: Wednesday
export const web_7_5of6 = () => { return [tUnderConstruction ] }

// Sprint 7 session 6 of 6: Friday
export const web_7_6of6 = () => { return [tUnderConstruction ] }