
import { xyz_n_1of6 } from './SL00000Sprint00'

import { list20000Sprint02 } from '../ActivityLists/AL20000Sprint02' 
import { list20000Sprint03 } from '../ActivityLists/AL20000Sprint03'

const sprint = 3
const activityListPrevious = () => { return list20000Sprint02(sprint-1) }
const activityList = () => { return list20000Sprint03(sprint) }

// Introduction to Computer Science Sprint 3 Session 1 of 6
export const ics_3_1of6_prework_list = [
	'Everything is due Sunday!', '',
	`Be prepared for Sprint ${sprint} Planning` ]
export const ics_3_1of6_agenda_list = [
	`Sprint ${sprint} Planning`,
	`Sprint ${sprint} Planning Breakout`,
	'Review Wednesday’s Demo Schedule',
	'Prework for Next Class' ]
export const ics_3_1of6 = () => { return xyz_n_1of6(sprint, ics_3_1of6_prework_list, activityListPrevious, ics_3_1of6_agenda_list, ics_3_2of6_prework_list, activityList) }

// Session 2 of 6
const ics_3_2of6_prework_list = [
	'Complete through activity 5 prior to next class', '',
	'Be prepared for sprint 1 demos and retrospectives',
	'Those scheduled to demo on Wednesday please be a couple of minutes early to class' ]
export const ics_3_2of6 = () => {
	return ics_3_1of6()
}