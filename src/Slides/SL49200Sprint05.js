import { ssc_n_1of1_lists, ssc_n_1of1 } from './SL00000Sprint00'

//import { agendaSlide, basicSlideWithLogo, bulletListSlide, orderedListSlide, tPrework, tPreworkWithLogo } from './SLSprint00'
//import { makeSlideDeck } from './SL00000Sprint00'

import { list49200Sprint04 } from '../ActivityLists/AL49200Sprint04'
import { list49200Sprint05 } from '../ActivityLists/AL49200Sprint05'

// Constants
const sprint = 5
const activityListPrevious = () => { return list49200Sprint04(sprint-1) }
const activityList = () => { return list49200Sprint05(sprint) }

// Session 1 of 1: Monday... even though this is a “Tuesday” class
export const ssc_5_1of1_PAaA = ssc_n_1of1_lists(sprint)
export const ssc_5_1of1 = () => { 
	return ssc_n_1of1(sprint, ssc_5_1of1_PAaA.prework, activityListPrevious, ssc_5_1of1_PAaA.agenda, ssc_5_2of4_PAaA.prework, activityList) 
}

const ssc_5_2of4_PAaA = {
	'prework': [
		'Everything is due at the end of the sprint', '',
		'Don’t forget your class Demos' ],
	'announcements':[],
	'agenda':[]
}


/*

// Session 1 of 4: Tuesday
const ssc_5_1of4_PAaA = {
	'prework':[ 
		`Sprint ${sprint-1} assignments were due Sunday`, '',
		`Be prepared for your Sprint ${sprint} Planning & Lab` ],
	'announcements':[ 
		`You should have received your “Sprint ${sprint} planning video is now available” announcement` ],
	'agenda':[ 
		'Question and Answer Session',
		'Prework for Next Class',
		'Sprint Planning & Lab' ]
}
export const ssc_5_1of4 = () => { 
	const prework = () => { return tPreworkWithLogo('Prework For Today', ssc_5_1of4_PAaA.prework, sprint-1, activityListPrevious) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', ssc_5_1of4_PAaA.announcements) }
	const agenda = () => { return agendaSlide(ssc_5_1of4_PAaA.agenda) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ssc_5_2of4_PAaA.prework, sprint, activityList) }

	const qAndASession = () => {
		return orderedListSlide('Question and Answer Session', 'Questions:', [
			`How will you complete your sprint ${sprint} planning by by the end of class today?`,
			`Do you still need to complete your sprint ${sprint-1} demos and/or retrospective?`, 
			`Will you be able to show me your sprint ${sprint} planning commitment?`,
			`Will you be able to show me at least one sprint ${sprint-1} demo?` ]
		)
	}
	const lab = () => { 
		return bulletListSlide('Lab', 
			`Let’s focus on sprint ${sprint} activities and assignments by:`, [
			'Deciding how we can best utilize our time today', 
			'Utilizing your precious time together to complete the most valuable activities' ])
	}

	return makeSlideDeck([ prework, announcements, agenda, qAndASession, preworkNext, lab ])
}

const ssc_5_2of4_PAaA = {
	'prework': [
		'What will your team need to focus on for next week’s session?' ],
	'announcements':[],
	'agenda':[]
}
*/