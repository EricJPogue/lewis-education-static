import { xyz_1_1of6 } from './SL00000Sprint01'

import { checklistAnnouncementsPreworkAndAgenda, completeDeck } from './SL00000Sprint00'
import { tPrework, bulletListSlide, basicSlideWithLogo } from './SLSprint00'

import { list49200Sprint01 } from '../ActivityLists/AL49200Sprint01'

// Software Systems Capstone (SSC) sprint 1 global values.
const sprint = 1
const activityList = () => { return list49200Sprint01(sprint) }

// Session 1 of 4: Tuesday (there are 4 potential sessions)
export const ssc_1_1of4 = () => { return xyz_1_1of6(activityList, ssc_1_3of4_PreworkAnnouncementsAndAgenda.prework) }

// Session 2 of 4: Thursday
const thursdayAnnouncement = () => { return basicSlideWithLogo('Announcement', ['Thursdays are reserved for teams that are not able to meet on Tuesday.']) }
export const ssc_1_2of4 = () => { return [ thursdayAnnouncement ] }

// Session 3 of 4: Tuesday of week 2
const ssc_1_3of4_PreworkAnnouncementsAndAgenda = {
	'prework':[
		'Team and product assignments complete', 
		'Discord, Product Organizations, and Repository Access complete' ],
	'announcements':[ 
		'Recall that Sprint Planning is provided as a recording',
		'All sprint 1 assignments are due Sunday!' ],
	'agenda':[
		'Review Team Assignments to GitHub organizations',
		'Lab' ]
}
export const ssc_1_3of4 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ssc_1_3of4_PreworkAnnouncementsAndAgenda, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', ssc_2_1of4_PreworkAnnouncementsAndAgenda.prework, sprint, activityList) }
	const lab = () => { 
		return bulletListSlide('Lab & Programming Together', 
			'Let’s focus on completing our activities and assignments by:', [
			'Discussing GitHub organizations and initial code',
			'Each team member adding one story to the Product Backlog ',
			'Deciding how we can best utilize our time today', 
			'Completing the most important activities and assignments together',
			'Identify sprint 3 Scrum Master and Product Owner (we will not change for sprint 2)',
			'** Confirm how your team will be meeting for next Tuesday... I will not be there.' ])
	}

	return completeDeck(slideDeck, [lab, preworkNext])
}

// Session 4 of 4: Thursday of week 2
export const ssc_1_4of4 = () => { return [ thursdayAnnouncement ] }
const ssc_2_1of4_PreworkAnnouncementsAndAgenda = {
	'announcements':[ 
		`${sprint} starts now.` ],
	'prework':[ 
		'Everything is due Sunday!', '',
		`Be prepared for Sprint ${sprint} Planning via recording early next week`,
		'Tuesday next week will be ' ],
}