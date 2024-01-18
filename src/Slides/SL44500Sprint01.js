
import { list44500Sprint01 } from "../ActivityLists/AL44500Sprint01"
import { sprint1_class_2_PAaA, sprint1_class_2 } from "./SL00000Sprint00"

// Application Frameworks sprint 1 global values.
const sprint = 1
const activityList = () => { return list44500Sprint01(sprint) }

// Session 3 of 6: Friday
const af_1_3of6_PAaA = sprint1_class_2_PAaA
export const af_1_3of6 = () => { return sprint1_class_2(sprint, activityList, af_1_3of6_PAaA, af_1_4of6_PAaA.prework) }

// Session 4 of 6: Wednesday
const af_1_4of6_PAaA = {
	'prework':[
		'Complete through activity 8 prior to next class', '',
		'Be prepared to complete Discussion 1'],
	'announcements':[ 
		'' ],
	'agenda':[ 
		'Progress Polling' ]
} 