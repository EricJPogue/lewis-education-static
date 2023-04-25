import { agendaSlide, basicSlideWithLogo, bulletListSlide, orderedListSlide, tPrework, tPreworkWithLogo } from './SLSprint00'
import { makeSlideDeck } from './SL00000Sprint00'


import { list49200Sprint07 } from '../ActivityLists/AL49200Sprint07'
import { list49200Sprint08 } from '../ActivityLists/AL49200Sprint08'

// Constants
const sprint = 8
const activityListPrevious = () => { return list49200Sprint07(sprint-1) }
const activityList = () => { return list49200Sprint08(sprint) }

// Session 1 of 4: Tuesday
const ssc_8_1of4_PAaA = {
	'prework':[ 
		`Sprint ${sprint-1} assignments were due Sunday`, '',
		`Be prepared for your Sprint ${sprint} Planning & Lab` ],
	'announcements':[ 
		`You have not received your “Sprint ${sprint} planning video is now available” announcement` ],
	'agenda':[ 
		'Question and Answer Session',
		'Prework for Next Class',
		'Confirm final project presentation times',
		'Sprint Planning & Lab' ]
}
export const ssc_8_1of4 = () => { 
	const prework = () => { return tPreworkWithLogo('Prework For Today', ssc_8_1of4_PAaA.prework, sprint-1, activityListPrevious) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', ssc_8_1of4_PAaA.announcements) }
	const agenda = () => { return agendaSlide(ssc_8_1of4_PAaA.agenda) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ssc_8_2of4_PAaA.prework, sprint, activityList) }

	const qAndASession = () => {
		return orderedListSlide('Question and Answer Session', 'Questions:', [
			`Will you complete your sprint ${sprint} planning by by the end of class today?`,
			'Has your MVP been delivered',
			`Will you be able to show me your sprint ${sprint} planning commitment?`,
			'Who is “trading” sprint 8 hours next semester hours?',
			`Will you be able to show me at least one MVP ${sprint-1} demo?` ]
		)
	}
	const lab = () => { 
		return bulletListSlide('Lab', 
			`Let’s focus on sprint ${sprint} activities and assignments by:`, [
			'Deciding how we can best utilize our time today', 
			'Utilizing your precious time together to complete the most valuable activities',
			'Confirm final project presentation times before you leave' ])
	}

	return makeSlideDeck([ prework, announcements, agenda, qAndASession, preworkNext, lab ])
}

const ssc_8_2of4_PAaA = {
	'prework': [
		'What will your team need to focus on for next week’s session?' ],
	'announcements':[],
	'agenda':[]
}