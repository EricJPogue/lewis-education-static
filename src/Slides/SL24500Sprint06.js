import { xyz_n_1of6_lists, xyz_n_1of6, xyz_n_2of6, tLab } from './SL00000Sprint00'

import { submissionPercentage, orderedListSlide } from './SLSprint00'
import { xyz_n_3of6, xyz_n_6of6 } from './SL00000Sprint00'

import { list24500Sprint05 } from '../ActivityLists/AL24500Sprint05'
import { list24500Sprint06 } from '../ActivityLists/AL24500Sprint06'

// Sprint 6 Object-Oriented Programming (OOP) global values.
const sprint = 6
const activityList = () => { return list24500Sprint06(sprint) }
const activityListPrevious = () => { return list24500Sprint05(sprint) }

export const oop_6_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const oop_6_1of6 = () => { return xyz_n_1of6(sprint, oop_6_1of6_PAaA.prework, activityListPrevious, oop_6_1of6_PAaA.agenda, oop_6_2of6_PAaA.prework, activityList) }

// Session 2 of 6: Wednesday
const oop_6_2of6_PAaA = {
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared for Lab & Programming Together' ],
	'announcements':[ 
		'Registration for Fall 2023 starts April 11' ],
	'agenda':[
		`Discussion Board ${sprint} as a scrum team`,
		'Review Demo Schedule for Next Class',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}
export const oop_6_2of6 = () => { return xyz_n_2of6(sprint, oop_6_2of6_PAaA, oop_6_3of6_PAaA.prework, activityList) }

// Session 3 of 6: Friday
const oop_6_3of6_PAaA = {
	'prework':[
		'Complete through activity 7 prior to next class', '',
		`Be prepared sprint ${sprint-1} Demos and Retrospectives` ],
	'announcements':[ 
		'Any announcements' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class',
		'Lab' ]
}
export const oop_6_3of6 = () => {
	const metricsSubmissionPercentage = () => {
			return submissionPercentage([
				{ name: 'Discussion', due:17, submitted:15 },
				{ name: 'Quiz', due:17, submitted:15 },
				{ name: 'Lab', due:17, submitted:14 },
				{ name: 'Reflection', due: 17, submitted: 14 }
			])
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
		'Feedback from Assignments & Reflections', [
		'We are really struggling from a submission perspective',
		'All assignments graded and posted', 
		'Solid labs' ])
	}
	const lab = () => { return tLab(sprint) }

	let slides = xyz_n_3of6(sprint, oop_6_3of6_PAaA, oop_6_4of6_PAaA.prework, activityList, metricsSubmissionPercentage, retrospective)
	slides.splice(slides.length-1,0,lab)
	return slides
}

const oop_6_4of6_PAaA = {
	'prework':[
		'Complete through activity 7 prior to next class', '',
		`Be prepared for more servlet programming` ],
	'announcements':[ 
		'John Deere job openings' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}

// Session 5 of 6: Wednesday
const oop_6_5of6_PAaA = {
	'prework':[
		'Be prepared for Lab' ],
	'announcements':[ 
		`All sprint ${sprint} assignments due “Sunday”! ... grace period until Tuesday morning at 6 AM` ],
	'agenda':[
		'Lab' ]
}
export const oop_6_5of6 = () => { return xyz_n_6of6(sprint, oop_6_5of6_PAaA, oop_7_1of6_PAaA.prework, activityList) }

export const oop_7_1of6_PAaA = xyz_n_1of6_lists(sprint)