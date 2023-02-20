import { xyz_n_1of6_lists, xyz_n_1of6 } from './SL00000Sprint00'
import { list24500Sprint03 } from '../ActivityLists/AL24500Sprint03'
import { list24500Sprint04 } from '../ActivityLists/AL24500Sprint04'

// Constants
const sprint = 4
const activityList = () => { return list24500Sprint04(sprint) }
const activityListPrevious = () => { return list24500Sprint03(sprint-1) }

// Session 1 of 6: Monday
export const oop_4_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const oop_4_1of6 = () => { return xyz_n_1of6(sprint, oop_4_1of6_PAaA.prework, activityListPrevious, oop_4_1of6_PAaA.agenda, oop_4_2of6_prework_list, activityList) }

// Session 2 of 6: Wednesday
const oop_4_2of6_prework_list = [
	'Complete through activity 4 and spend at least 30 minutes on activity 5 prior to next class', '',
	`Be prepared for team Discussion ${sprint} and Lab` ]