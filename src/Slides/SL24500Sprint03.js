
import { xyz_n_1of6_lists, xyz_n_1of6 } from './SL00000Sprint00'
import { list24500Sprint02 } from '../ActivityLists/AL24500Sprint02'
import { list24500Sprint03 } from '../ActivityLists/AL24500Sprint03'

// Constants
const sprint = 3
const activityList = () => { return list24500Sprint03(sprint) }
const activityListPrevious = () => { return list24500Sprint02(sprint-1) }

export const oop_3_1of6_PreworkAnnouncementsAndAgenda = {
	'prework': [
		'Everything is due Sunday!', '',
		`Be prepared for Sprint ${sprint} Planning` ],
	'announcements':[
		`All sprint ${sprint} assignments due Sunday!`],
	'agenda':[
		`Sprint ${sprint} Planning`,
		`Sprint ${sprint} Planning Breakout`,
		'Review Wednesday’s Demo Schedule',
		'Prework for Next Class' ]
}

// Session 1 of 6: Monday
export const oop_3_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const oop_3_1of6 = () => { return xyz_n_1of6(sprint, oop_3_1of6_PAaA.prework, activityListPrevious, oop_3_1of6_PAaA.agenda, oop_3_2of6_prework_list, activityList) }

// Session 2 of 6: Wednesday
const oop_3_2of6_prework_list = [
	'Complete through activity 4 prior to next class', '',
	`Be prepared for team Discussion ${sprint} and Lab` ]