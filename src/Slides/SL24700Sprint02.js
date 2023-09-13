import { list24700Sprint01 } from '../ActivityLists/AL24700Sprint01'
import { list24700Sprint02 } from '../ActivityLists/AL24700Sprint02'

import { xyz_n_1of6_lists, xyz_n_1of6 } from './SL00000Sprint00'
import { xyz_2_1of6_sprintPlanning } from './SL00000Sprint02'

import { checklistAnnouncementsPreworkAndAgenda, completeDeck, tReviewDemoSchedule, tLab } from './SL00000Sprint00'
import { bulletListSlide, tDiscussionBreakout, tPrework } from './SLSprint00'

//  Web & Distributed Programming (WEB) sprint 2 shared values.
const sprint = 2
const activityListPrevious = () => { return list24700Sprint01(sprint-1) }
const activityList = () => { return list24700Sprint02(sprint) }
	
// Session 1 of 6: Monday
export const web_2_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const web_2_1of6 = () => { return xyz_n_1of6(sprint, web_2_1of6_PAaA.prework, activityListPrevious, web_2_1of6_PAaA.agenda, web_2_2of6_PAaA.prework, activityList, xyz_2_1of6_sprintPlanning(sprint)) }

// Session 2 of 6: Wednesday
const web_2_2of6_PAaA = {
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

export const web_2_2of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(web_2_2of6_PAaA, sprint, activityList)
	const qAndA = () => { return bulletListSlide(`Sprint ${sprint} Planning Questions & Answers`, `What questions do you have about sprint ${sprint}?`, [ ]) }
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const preworkNext = () => { return tPrework('Prework For Next Class', web_2_3of6_PAaA.prework, sprint, activityList) }
	const introducingDemos = () => {
		return bulletListSlide('Foreshadowing Friday’s Sprint Demos', 
			'Sprint demos are a key part of Agile software development and Scrum.', [
			'They occur at the beginning of each new sprint ',
			'They are an opportunity to show what was completed in the previous sprint',
			'They are intended to be an **easy** and rewarding experience to show off your work',
			'Also a chance to see how others solved a problem and to see some of the challenges they faces',
			'We will each be doing at least on sprint demo during the semester during class' ])
	}

	return completeDeck(slideDeck, [ qAndA, discussionBreakout, introducingDemos, tReviewDemoSchedule, preworkNext, tLab ])
}

// Session 3 of 6: Friday
const web_2_3of6_PAaA = {
	'prework': [
		'Complete through activity 9 prior to next class', '',
		'Be prepared to discuss “The Information Layer”' ],
	'announcements':[ 
		'Any announcements?' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}