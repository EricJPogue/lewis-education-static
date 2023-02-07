import { agendaSlide, basicSlideWithLogo, bulletListSlide, orderedListSlide, tPrework, tPreworkWithLogo } from './SLSprint00'
import { makeSlideDeck } from './SL00000Sprint00'

import { list49200Sprint01 } from '../ActivityLists/AL49200Sprint01'
import { list49200Sprint02 } from '../ActivityLists/AL49200Sprint02'

// Introduction to Computer Science (ICS) sprint 2 global values.
const sprint = 2
const activityListPrevious = () => { return list49200Sprint01(sprint-1) }
const activityList = () => { return list49200Sprint02(sprint) }

// Session 1 of 4: Tuesday
const ssc_2_1of4_PAaA = {
	'announcements':[ 
		'You should have received your “Sprint 2 planning video is now available” announcement' ],
	'prework':[ 
		`Sprint ${sprint-1} assignments were due Sunday`, '',
		`Be prepared for Sprint ${sprint} Lab` ],
	'agenda':[ 
		'Question and Answer Session',
		'Prework for Next Class',
		'Lab' ]
}
export const ssc_2_1of4 = () => { 
	const prework = () => { return tPreworkWithLogo('Prework For Today', ssc_2_1of4_PAaA.prework, sprint-1, activityListPrevious) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', ssc_2_1of4_PAaA.announcements) }
	const agenda = () => { return agendaSlide(ssc_2_1of4_PAaA.agenda) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ssc_2_2of4_PAaA.prework, sprint, activityList) }

	const qAndASession = () => {
		return orderedListSlide('Question and Answer Session', 'As a individual or as a team:', [
			`Any questions or comments relating to sprint ${sprint-1} activities or assignments?`,
			`Any ${sprint-1} questions or comments?`]
		)
	}
	const lab = () => { 
		return bulletListSlide('Lab', 
			'Let’s focus on sprint 2 activities and assignments by:', [
			'Deciding how we can best utilize our time today', 
			'Utilizing your precious time together to complete the most valuable activities',
			'Do we want to try hosting a repository from your organization on Azure?' ])
	}

	return makeSlideDeck([ prework, announcements, agenda, qAndASession, preworkNext, lab ])
}

const ssc_2_2of4_PAaA = {
	'prework': [
		'Complete through activity 6 prior to next class', '',
		'Be prepared for Lab & Programming Together' ],
	'announcements':[],
	'agenda':[]
}

// Session 3 of 4: Tuesday
const ssc_2_3of4_PAaA = {
	'announcements':[ 
		`All sprint ${sprint} assignments due Sunday!` ],
	'prework':[ 
		`Be prepared for Sprint ${sprint} Lab session 2` ],
	'agenda':[ 
		`Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class',
		'Lab' ]
}
export const ssc_2_3of4 = () => { 
	const prework = () => { return tPreworkWithLogo('Prework For Today', ssc_2_3of4_PAaA.prework, sprint, activityList) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', ssc_2_3of4_PAaA.announcements) }
	const agenda = () => { return agendaSlide(ssc_2_1of4_PAaA.agenda) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ssc_2_4of4_PAaA.prework, sprint, activityList) }

	const qAndASession = () => {
		return orderedListSlide('Question and Answer Session', 'As a individual or as a team:', [
			`Any questions or comments relating to sprint ${sprint-1} or sprint ${sprint} activities or assignments?`,
			`Any sprint ${sprint-1} or sprint ${sprint}  questions or comments?`]
		)
	}
	const lab = () => { 
		return bulletListSlide('Lab', 
			`Let’s focus on sprint ${sprint} activities and assignments by:`, [
			'Deciding how we can best utilize our time today', 
			'Utilizing your precious time together to complete the most valuable activities',
			'Do we want to try hosting a repository from your organization on Azure?' ])
	}

	return makeSlideDeck([ prework, announcements, agenda, qAndASession, preworkNext, lab ])
}

// Session 4 of 4: Thursday
const ssc_2_4of4_PAaA = {
	'prework': [
		'Everything is due Sunday!', '',
		`Your sprint ${sprint+1} Planning video will be available Monday or Tuesday` ],
	'announcements':[],
	'agenda':[]
}