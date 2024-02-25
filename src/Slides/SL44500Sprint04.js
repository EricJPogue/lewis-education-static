import { xyz_n_1of6_prework_list, xyz_n_1of6 } from './SL00000Sprint00'
import { xyz_n_1of6_agenda_list } from './SL00000Sprint00'

import { classProjects, substituteSprintPlanning } from './SL20000Sprint04'


import { list44500Sprint03 } from '../ActivityLists/AL44500Sprint03'
import { list44500Sprint04 } from '../ActivityLists/AL44500Sprint04'

// Constants
const sprint = 4
const activityList = () => { return list44500Sprint04(sprint) }
const activityListPrevious = () => { return list44500Sprint03(sprint-1) }

// Session 1 of 6: Monday
export const af_4_1of6_prework_list = xyz_n_1of6_prework_list(sprint)  
const af_4_1of6_agenda_list = xyz_n_1of6_agenda_list(sprint)
export const af_4_1of6 = () => { 
	let slides = xyz_n_1of6(sprint, af_4_1of6_prework_list, activityListPrevious, af_4_1of6_agenda_list, af_4_2of6_lists.prework, activityList, substituteSprintPlanning)
	slides.splice(4, 0, classProjects)
	return slides
}

// Session 2 of 6: Wednesday
const af_4_2of6_lists = {
	'announcements':[ 
		'Your team’s Sprint 5 Planning will be Monday, March 13th',
		'**Each of the remaining sprint planning sessions require in-person attendance' ],
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared for Lab & Programming Together' ],
	'agenda':[
		'Review Demo Schedule for Next Class',
		'Prework for Next Class',
		`Discussion Board ${sprint} as a scrum team`,
		'Lab: Complete a draft of your Final Project Proposal' ]
}