import { basicSlideWithLogo } from './SLSprint00'
import { breakoutStandard } from './SLSprint00'
import { list24700Sprint01 } from '../ActivityLists/AL24700Sprint01'

import { tPrework, tQuiz, tQuizExpectations } from './SLSprint00'
import { checklistAnnouncementsPreworkAndAgenda, completeDeck } from './SL00000Sprint00'

import { xyz_1_1of6  } from './SL00000Sprint01'
import { tLab } from './SL00000Sprint00'

// Web & Distributed Programming (WEB) sprint 1 global values.
const sprint = 1
const activityList = () => { return list24700Sprint01(sprint) }

export const web_1_1of6 = () => { return xyz_1_1of6(activityList, web_1_2of6_PAaA.prework) }

// Session 2 of 6: Wednesday
const web_1_2of6_PAaA = {
	'prework':[
		'Complete through activity 7 prior to next class', '',
		`Be prepared to complete sprint ${sprint} planning` ],
	'announcements':[ 
		'Friday’s class will be remote via Zoom' ],
	'agenda':[
		'Sprint Progress Polling', 
		'Introductions and Scrum Team Assignments (continued)',
		`Sprint ${sprint} Planning (continued)`,
		`Sprint ${sprint} Scrum Team Breakout` ]
}
export const web_1_2of6 = () => { 
	const laborDayAnnouncements =  () => { return basicSlideWithLogo('Announcements', [ 
		'Slide no longer available.']) }
	return [ laborDayAnnouncements ]
}

export const web_1_3of6 = () => {
	const laborDayAnnouncements =  () => { return basicSlideWithLogo('Announcements', [ 
		'Slide no longer available.']) }
	return [ laborDayAnnouncements ]
}


export const web_1_4of6 = () => { return shared1_4of6() }
const shared1_4of6 = () => { 
	const laborDayAnnouncements =  () => { return basicSlideWithLogo('Announcements', [ 
		'In recognition of Labor day there is no class.']) }
	return [ laborDayAnnouncements ]
}

// Session 5 of 6: Wednesday
const web_1_5of6_PAaA = {
	'prework':[
		'Complete through activity 12 prior to next class', '',
		'Make your initial post for Discussion 1',
		'Be prepared for “Hosting Dual: GitHub Pages vs. Azure Static Website”'],
	'announcements':[
		'Your initial Discussion 1 post is due... please submit it by the end of the day',
		'All sprint 1 activities and assignments due Sunday' ],
	'agenda':[
		'Sprint Progress Polling',
		'Hosting Dual: GitHub Pages vs. Azure Static Website',
		'Prework for Next Class',
		'Quiz 1']
}
export const web_1_5of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(web_1_5of6_PAaA, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', web_1_5of6_PAaA.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', web_1_6of6_PAaA.prework, sprint, activityList) }
	const quizExpectations = () => { return tQuizExpectations() }
	const quiz = () => { return tQuiz(sprint) }
	const hostingDual = () => { 
		return breakoutStandard(
			'Hosting Dual: GitHub Pages vs. Azure Static Website', 
			'After completing an Azure Static Website consider:', [
			'Rate each workflow on simplicity (1-5)?',
			'Rate each workflow on power of features (1-5)?',
			'Rate each workflow on prevalence in the industry (1-5)?' ])
	}

	return completeDeck(slideDeck, [poll, hostingDual, preworkNext, quizExpectations, quiz ])
}

// Session 6 of 6: Friday
const web_1_6of6_PAaA = {
	'announcements':[ 
		`All sprint ${sprint} assignments due Sunday!` ],
	'prework':[
		'Be at complete through activity 13 and working on activity 14 prior to next class', '',
		'Be prepared for Lab & Programming together' ],
	'agenda':[
		'Sprint Progress Polling',
		'Prework for Next Class',
		'Lab and Programming Together' ]
}
export const web_1_6of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(web_1_6of6_PAaA, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', web_1_6of6_PAaA.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ preworkNext, tLab ])
}



