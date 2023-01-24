import { tPreworkWithLogo } from "./SLSprint00"
import { basicSlideWithLogo } from "./SLSprint00"
import { makeSlideDeck } from "./SL00000Sprint00"
import { agendaSlide } from "./SLSprint00"
import { tPrework } from "./SLSprint00"
import { bulletListSlide } from "./SLSprint00"
import { orderedListSlide } from "./SLSprint00"

import { list49200Sprint01 } from '../ActivityLists/AL49200Sprint01'
import { list49200Sprint02 } from '../ActivityLists/AL49200Sprint02'

// Introduction to Computer Science (ICS) sprint 2 global values.
const sprint = 2
const activityListPrevious = () => { return list49200Sprint01(sprint-1) }
const activityList = () => { return list49200Sprint02(sprint) }

// Session 1 of 4: TuesdayMonday
const ssc_2_1of4_PreworkAnnouncementsAndAgenda = {
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
	const prework = () => { return tPreworkWithLogo('Prework For Today', ssc_2_1of4_PreworkAnnouncementsAndAgenda.prework, sprint-1, activityListPrevious) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', ssc_2_1of4_PreworkAnnouncementsAndAgenda.announcements) }
	const agenda = () => { return agendaSlide(ssc_2_1of4_PreworkAnnouncementsAndAgenda.agenda) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ssc_2_2of4_PreworkAnnouncementsAndAgenda.prework, sprint, activityList) }

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

const ssc_2_2of4_PreworkAnnouncementsAndAgenda = {
	'prework': [
		'Complete through activity 6 prior to next class', '',
		'Be prepared for Lab & Programming Together' ],
	'announcements':[ 'TBD' ],
	'agenda':[ 'TBD' ]
}
