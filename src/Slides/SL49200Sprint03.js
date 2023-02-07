import { agendaSlide, basicSlideWithLogo, bulletListSlide, orderedListSlide, tPrework, tPreworkWithLogo } from './SLSprint00'
import { makeSlideDeck } from './SL00000Sprint00'

import { list49200Sprint01 } from '../ActivityLists/AL49200Sprint01'
import { list49200Sprint02 } from '../ActivityLists/AL49200Sprint02'

// Constants
const sprint = 3
const activityListPrevious = () => { return list49200Sprint01(sprint-1) }
const activityList = () => { return list49200Sprint02(sprint) }

// Session 1 of 4: Tuesday
const ssc_3_1of4_PAaA = {
	'prework':[ 
		`Sprint ${sprint-1} assignments were due Sunday`, '',
		`Be prepared for your Sprint ${sprint} Planning & Lab` ],
	'announcements':[ 
		'You should have received your “Sprint 3 planning video is now available” announcement',
		'Starting next week I would like to move our Lab time up to 12:30 or 1 pm' ],
	'agenda':[ 
		'Question and Answer Session',
		'Prework for Next Class',
		'Sprint Planning & Lab' ]
}
export const ssc_3_1of4 = () => { 
	const prework = () => { return tPreworkWithLogo('Prework For Today', ssc_3_1of4_PAaA.prework, sprint-1, activityListPrevious) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', ssc_3_1of4_PAaA.announcements) }
	const agenda = () => { return agendaSlide(ssc_3_1of4_PAaA.agenda) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ssc_3_2of4_PAaA.prework, sprint, activityList) }

	const qAndASession = () => {
		return orderedListSlide('Question and Answer Session', 'Questions:', [
			'Would it work for your team to meet earlier on Tuesdays? Maybe 12:30 or 1 pm?',
			'How would we like to approach Sprint Planning today? How will you delivery your sprint backlog?',
			`Any questions or comments relating to sprint ${sprint-1} activities or assignments?`,
			'How would you like to complete Sprint Planning today?',
			`Any ${sprint-1} questions or comments?`]
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

const ssc_3_2of4_PAaA = {
	'prework': [
		'What should we focus on for next week’s session?', '',
		'' ],
	'announcements':[],
	'agenda':[]
}