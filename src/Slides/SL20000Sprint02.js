import { list20000Sprint01 } from '../ActivityLists/AL20000Sprint01'
import { list20000Sprint02 } from '../ActivityLists/AL20000Sprint02'

import { xyz_n_1of6_lists, xyz_n_1of6, checklistAnnouncementsPreworkAndAgenda, completeDeck, tReviewDemoSchedule, tLab } from './SL00000Sprint00'
import { bulletListSlide, tDiscussionBreakout, tPrework } from './SLSprint00'
import { xyz_2_1of6_sprintPlanning } from './SL00000Sprint02'

// Introduction to Computer Science (ICS) sprint 2 global values.
const sprint = 2
const activityListPrevious = () => { return list20000Sprint01(sprint-1) }
const activityList = () => { return list20000Sprint02(sprint) }

// Session 1 of 6: Monday
export const ics_2_1of6_PreworkAnnouncementsAndAgenda = xyz_n_1of6_lists(sprint)
export const ics_2_1of6 = () => { 
	return xyz_n_1of6(sprint, ics_2_1of6_PreworkAnnouncementsAndAgenda.prework, activityListPrevious, ics_2_1of6_PreworkAnnouncementsAndAgenda.agenda, 
		ics_2_2of6_PreworkAnnouncementsAndAgenda.prework, activityList, xyz_2_1of6_sprintPlanning(sprint)) 
}

// Session 2 of 6: Wednesday
const ics_2_2of6_PreworkAnnouncementsAndAgenda = {
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
export const ics_2_2of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_2_2of6_PreworkAnnouncementsAndAgenda, sprint, activityList)
	const qAndA = () => { return bulletListSlide(`Sprint ${sprint} Planning Questions & Answers`, `What questions do you have about sprint ${sprint}?`, [ ]) }
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_2_3of6_PreworkAnnouncementsAndAgenda.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ qAndA, discussionBreakout, tReviewDemoSchedule, preworkNext, tLab ])
}

// Session 3 of 6: Friday

export const ics_3_2of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_2_2of6_PreworkAnnouncementsAndAgenda, sprint, activityList)
	const qAndA = () => { return bulletListSlide(`Sprint ${sprint} Planning Questions & Answers`, `What questions do you have about sprint ${sprint}?`, [ ]) }
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_2_3of6_PreworkAnnouncementsAndAgenda.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ qAndA, discussionBreakout, tReviewDemoSchedule, preworkNext, tLab ])
}

const ics_2_3of6_PreworkAnnouncementsAndAgenda = {
	'prework': [
		'Complete through activity 9 prior to next class', '',
		'Be prepared to discuss Chapter 2: The Architecture of Saas Applications' ],
	'announcements':[ 'TBD' ],
	'agenda':[ 'TBD' ]
}


// 100% submission
//What did the computer do at lunchtime?
// I don't know... let me Google...
// "HasAByte"... very nice :-)

// Youtube videos...
