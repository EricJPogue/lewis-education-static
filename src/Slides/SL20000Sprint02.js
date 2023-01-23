import { xyz_n_1of6_lists, xyz_n_1of6 } from "./SL00000Sprint00"
import { orderedListSlide } from './SLSprint00'

import { list20000Sprint01 } from '../ActivityLists/AL20000Sprint01'
import { list20000Sprint02 } from '../ActivityLists/AL20000Sprint02'

// Introduction to Computer Science (ICS) sprint 2 global values.
const sprint = 2
const activityListPrevious = () => { return list20000Sprint01(sprint-1) }
const activityList = () => { return list20000Sprint02(sprint) }

// Session 1 of 6: Monday
export const xyz_2_1of6_sprintPlanning = () => {
	return orderedListSlide(`Sprint Planning`, `Sprint ${sprint} Changes:`, [
		'Similar to previous sprint with Discussion, Quiz, Lab, and Reflection',
		'We have a new Demo assignment that will need to be submitted when you complete your lab demo',
		'To help reduce procrastination** demos and retrospectives will be Friday while and Lab will be Wednesday',
		'We will complete our first scrum team Breakout Discussion on Friday',
		`Sprint ${sprint} should be a little easier since we don’t have a holiday during the sprint`
	])
}
export const ics_2_1of6_PreworkAnnouncementsAndAgenda = xyz_n_1of6_lists(sprint)
export const ics_2_1of6 = () => { 
	return xyz_n_1of6(sprint, ics_2_1of6_PreworkAnnouncementsAndAgenda.prework, activityListPrevious, ics_2_1of6_PreworkAnnouncementsAndAgenda.agenda, 
		ics_2_2of6_PreworkAnnouncementsAndAgenda.prework, activityList, xyz_2_1of6_sprintPlanning()) 
}

const ics_2_2of6_PreworkAnnouncementsAndAgenda = {
	'prework': [
		'Complete through activity 6 prior to next class', '',
		'Be prepared for Lab & Programming Together Wednesday',
		'Demos and retrospectives will be Friday' ],
	'announcements':[
		'Procrastination is on the agenda.'],
	'agenda':['TBD' ]
}