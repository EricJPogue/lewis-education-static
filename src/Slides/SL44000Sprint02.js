import { list44000Sprint01 } from '../ActivityLists/AL44000Sprint01'
import { list44000Sprint02 } from '../ActivityLists/AL44000Sprint02'

import { xyz_n_1of6_lists, xyz_n_1of6, checklistAnnouncementsPreworkAndAgenda, completeDeck, tReviewDemoSchedule, tLab } from './SL00000Sprint00'
import { bulletListSlide, tDiscussionBreakout, tPrework } from './SLSprint00'
import { xyz_2_1of6_sprintPlanning } from './SL00000Sprint02'

// Software Engineering (SE) sprint 2 global values.
const sprint = 2
const activityListPrevious = () => { return list44000Sprint01(sprint-1) }
const activityList = () => { return list44000Sprint02(sprint) }

// SE Sprint 2 session 1 of 6: Monday
export const se_2_1of6_PreworkAnnouncementsAndAgenda = xyz_n_1of6_lists(sprint)
export const se_2_1of6 = () => { 
	return xyz_n_1of6(sprint, se_2_1of6_PreworkAnnouncementsAndAgenda.prework, activityListPrevious, se_2_1of6_PreworkAnnouncementsAndAgenda.agenda, 
		se_2_2of6_PreworkAnnouncementsAndAgenda.prework, activityList, xyz_2_1of6_sprintPlanning(sprint)) 
}

// Session 2 of 6: Wednesday
const se_2_2of6_PreworkAnnouncementsAndAgenda = {
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
		'Confirm scrum team Demos for Next Class',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}
export const se_2_2of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_2_2of6_PreworkAnnouncementsAndAgenda, sprint, activityList)
	const qAndA = () => { return bulletListSlide(`Sprint ${sprint} Planning Questions & Answers`, `What questions do you have about sprint ${sprint}?`, [ ]) }
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const preworkNext = () => { return tPrework('Prework For Next Class', se_2_3of6_PreworkAnnouncementsAndAgenda.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ qAndA, discussionBreakout, tReviewDemoSchedule, preworkNext, tLab ])
}

const se_2_3of6_PreworkAnnouncementsAndAgenda = {
	'prework': [
		'Complete through activity 11 prior to next class', '',
		'Be prepared for Demos and Retrospectives Friday' ],
	'announcements':[ 'TBD' ],
	'agenda':[ 'TBD' ]
}
/*
	const introducingDemos = () => {
		return bulletListSlide('Foreshadowing Wednesday’s Sprint Demos', 
			'Sprint demos are a key part of Agile software development and Scrum.', [
			'They occur at the beginning of each new sprint ',
			'They are an opportunity to show what was completed in the previous sprint',
			'They are intended to be an **easy** and rewarding experience to show off your work',
			'Also a chance to see how others solved a problem and to see some of the challenges they faces',
			'We will each be doing at least on sprint demo during the semester during class' ])
	}
*/