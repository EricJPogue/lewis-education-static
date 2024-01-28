import { orderedListSlide } from './SLSprint00'
import { xyz_n_1of6_lists, xyz_n_1of6 } from './SL00000Sprint00'

import { list44500Sprint01 } from '../ActivityLists/AL44500Sprint01'
import { list44500Sprint02 } from '../ActivityLists/AL44500Sprint02'



// Application Frameworks sprint 2 shared values.
const sprint = 2
const activityListPrevious = () => { return list44500Sprint01(sprint) }
const activityList = () => { return list44500Sprint02(sprint) }

// Session 1 of 6: Monday
export const sprint2Planning = () => {
	return orderedListSlide('Sprint Planning as a Class', `Sprint ${sprint} Expectations:`, [
		'Similar to previous sprint with Discussion, Quiz, Lab, and Reflection',
		'We will complete our scrum team Discussion Board breakout session on Wednesday',
		`We will have sprint ${sprint-1} Demos and Retrospective on Friday`,
		`Sprint ${sprint} should be a little easier since we don’t have a holiday during the sprint` ])
}

const af_2_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const af_2_1of6 = () => { return xyz_n_1of6(sprint, af_2_1of6_PAaA.prework, activityListPrevious, af_2_1of6_PAaA.agenda, af_2_2of6_PAaA.prework, activityList, sprint2Planning) }

// Session 2 of 6: Wednesday
const af_2_2of6_PAaA = {
	'prework': [
		'Complete through activity 6 prior to next class', '',
		'Be prepared for Lab & Programming Together Wednesday',
		'Demos and retrospectives will be Friday' ],
	'announcements':[
		'Reducing procrastination is on the agenda',
		'Does everyone know where to find the class recordings?'],
	'agenda':[
		`Sprint ${sprint} Planning Questions & Answers`,
		`Discussion Board ${sprint} as a scrum team`,
		'Confirm Demos for Next Class',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}