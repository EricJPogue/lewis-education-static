import { list24500Sprint01 } from '../ActivityLists/AL24500Sprint01'
import { list24500Sprint02 } from '../ActivityLists/AL24500Sprint02'

import { xyz_n_1of6_lists, xyz_n_1of6, checklistAnnouncementsPreworkAndAgenda, completeDeck, tReviewDemoSchedule, tLab } from './SL00000Sprint00'
import { bulletListSlide, tDiscussionBreakout, tPrework } from './SLSprint00'
import { xyz_2_1of6_sprintPlanning } from './SL00000Sprint02'

// Object-Oriented Programming (OOP)sprint 2 global values.
const sprint = 2
const activityListPrevious = () => { return list24500Sprint01(sprint-1) }
const activityList = () => { return list24500Sprint02(sprint) }

// Session 1 of 6: Monday
export const oop_2_1of6_PreworkAnnouncementsAndAgenda = xyz_n_1of6_lists(sprint)
export const oop_2_1of6 = () => { 
	return xyz_n_1of6(sprint, oop_2_1of6_PreworkAnnouncementsAndAgenda.prework, activityListPrevious, oop_2_1of6_PreworkAnnouncementsAndAgenda.agenda, 
		oop_2_2of6_PreworkAnnouncementsAndAgenda.prework, activityList, xyz_2_1of6_sprintPlanning(sprint)) 
}

// Session 2 of 6: Wednesday
const oop_2_2of6_PreworkAnnouncementsAndAgenda = {
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
export const oop_2_2of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(oop_2_2of6_PreworkAnnouncementsAndAgenda, sprint, activityList)
	const qAndA = () => { return bulletListSlide(`Sprint ${sprint} Planning Questions & Answers`, `What questions do you have about sprint ${sprint}?`, [ ]) }
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const preworkNext = () => { return tPrework('Prework For Next Class', oop_2_3of6_PreworkAnnouncementsAndAgenda.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ qAndA, discussionBreakout, tReviewDemoSchedule, preworkNext, tLab ])
}

const oop_2_3of6_PreworkAnnouncementsAndAgenda = {
	'prework': [
		'Complete through activity 11 prior to next class', '',
		'Be prepared for Demos and Retrospectives Friday' ],
	'announcements':[ 'TBD' ],
	'agenda':[ 'TBD' ]
}

// Feedback:
// Remember to respond back to at least two of your classmates in Discussions
// I am impressed with how many of you have outside jobs

// Metric: Missing only 1 Reflection

// What do dentists cal their x-rays? Tooth pics.