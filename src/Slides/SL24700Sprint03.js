import { xyz_n_1of6 } from './SL00000Sprint00'

import { list24700Sprint02 } from '../ActivityLists/AL24700Sprint02' 
import { list24700Sprint03 } from '../ActivityLists/AL24700Sprint03'

import { ics_3_1of6_prework_list, ics_3_1of6_agenda_list  } from './SL20000Sprint03'

const sprint = 3
const activityListPrevious = () => { return list24700Sprint02(sprint-1) }
const activityList = () => { return list24700Sprint03(sprint) }

export const web_3_1of6_prework_list = ics_3_1of6_prework_list
const web_3_1of6_agenda_list = ics_3_1of6_agenda_list
export const web_3_1of6 = () => { return xyz_n_1of6(sprint, web_3_1of6_prework_list, activityListPrevious, web_3_1of6_agenda_list, web_3_2of6_prework_list, activityList) }

const web_3_2of6_prework_list = [
	'Complete through activity 4 prior to next class', '',
	'Be prepared for sprint 1 demos and retrospectives',
	'Those scheduled to demo on Wednesday please be a couple of minutes early to class' ]
