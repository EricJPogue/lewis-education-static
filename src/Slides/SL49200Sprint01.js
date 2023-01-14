import { xyz_1_1of6 } from './SL00000Sprint01'

import { list49200Sprint01 } from '../ActivityLists/AL49200Sprint01'

// Introduction to Computer Science (ICS) sprint 1 global values.
const sprint = 1
const activityList = () => { return list49200Sprint01(sprint) }

// Todo: Integrate all sprint 1 session 1 of 6 slide decks as they are all the same. 

// Sprint 1 session 1 of 2: Tuesday
export const ssc_1_1of6 = () => { return xyz_1_1of6(activityList, ssc_1_2of6_PreworkAnnouncementsAndAgenda.prework) }

// Sprint 2 session 2 of 2: Tuesday (week 2)
const ssc_1_2of6_PreworkAnnouncementsAndAgenda = {
	'prework':[
		'Complete activity 1 (Class Product Sprint 1) by sending me an email before you leave today', 
		'Complete through activity 12 prior to next class' ],
	'announcements':[ 
		'TBD' ],
	'agenda':[
		'TBD' ]
}