import { xyz_n_1of6_lists, xyz_n_1of6, xyz_n_2of6, xyz_n_3of6 } from './SL00000Sprint00'

import { submissionPercentage, orderedListSlide } from './SLSprint00'

import { list24500Sprint03 } from '../ActivityLists/AL24500Sprint03'
import { list24500Sprint04 } from '../ActivityLists/AL24500Sprint04'

// Constants
const sprint = 4
const activityList = () => { return list24500Sprint04(sprint) }
const activityListPrevious = () => { return list24500Sprint03(sprint-1) }

// Session 1 of 6: Monday
export const oop_4_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const oop_4_1of6 = () => { return xyz_n_1of6(sprint, oop_4_1of6_PAaA.prework, activityListPrevious, oop_4_1of6_PAaA.agenda, oop_4_2of6_PAaA.prework, activityList) }

// Session 2 of 6: Wednesday
const oop_4_2of6_PAaA = {
	'prework':[
		'Complete through activity 4 and spend at least 30 minutes on activity 5 prior to next class', '',
		`Be prepared for team Discussion ${sprint} and Lab` ],
	'announcements':[ 
		'Sprint 5 Planning will be Monday, March 13th',
		'Last day to drop 16 week courses with a grade of “W” is March 24' ],
	'agenda':[
		`Discussion Board ${sprint} as a scrum team`,
		'Review Demo Schedule for Next Class',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}
export const oop_4_2of6 = () => { return xyz_n_2of6(sprint, oop_4_2of6_PAaA, oop_4_3of6_PAaA.prework, activityList) }

const oop_4_3of6_PAaA = {
	'prework':[
		'Complete through activity 8', '',
		`Be prepared for sprint ${sprint-1} demos and retrospectives`,
		'Those scheduled to demo please be a couple of minutes early to class' ],
	'announcements':[ 
		'Any announcements?' ],
	'agenda':[
			`Sprint ${sprint-1} Demos`,
			`Sprint ${sprint-1} Retrospective`,
			`Breakout for Sprint ${sprint-1} Retrospective`,
			'Prework for Next Class' ]
}

export const oop_4_3of6 = () => {
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:17, submitted:17 },
			{ name: 'Quiz', due:17, submitted:17 },
			{ name: 'Lab', due:17, submitted:17},
			{ name: 'Reflection', due: 17, submitted: 15 }])
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Fantastic submission percentage!',
			'All assignments are graded and posted', 
			'Can you see your scores?',
			'Can you see the answers to all quiz questions?',
			'Thank you for your reflection comments' ])
	}
	return xyz_n_3of6(sprint, oop_4_3of6_PAaA, oop_4_4of6_PAaA.prework, activityList, metricsSubmissionPercentage, retrospective)
}

// Session 4 of 6: Monday
const oop_4_4of6_PAaA = {
	'prework':[
		'Complete through activity 9', '',
		'Be prepared for a breakout session on “Learning Java: Desktop Applications”' ],
	'announcements':[ 
		'Any announcements?' ],
	'agenda':[
		'“Learning Java: Desktop Applications” breakout',
		'Prework for Next Class',
		'Lab' ]
}