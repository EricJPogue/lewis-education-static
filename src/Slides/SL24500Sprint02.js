import { xyz_n_1of6_lists, xyz_n_1of6 } from "./SL00000Sprint00"
import { xyz_2_1of6_sprintPlanning } from "./SL00000Sprint02"

import { list24500Sprint01 } from '../ActivityLists/AL24500Sprint01'
import { list24500Sprint02 } from '../ActivityLists/AL24500Sprint02'

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
const oop_2_2of6_PreworkAnnouncementsAndAgenda = {
	'prework': [
		'Complete through activity 6 prior to next class', '',
		'Be prepared for Lab & Programming Together Wednesday',
		'Demos and retrospectives will be Friday' ],
	'announcements':[
		'Procrastination is on the agenda',
		'Does everyone know where to find the class recordings?'],
	'agenda':['TBD' ]
}