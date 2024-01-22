
import { checklistAnnouncementsPreworkAndAgenda, completeDeck, tLab } from "./SL00000Sprint00"
import { tPrework } from "./SLSprint00"
import { tRecap } from "./SLSprint00"

import { list44500Sprint01 } from "../ActivityLists/AL44500Sprint01"
import { sprint1_class_2_PAaA, sprint1_class_2 } from "./SL00000Sprint00"

// Application Frameworks sprint 1 global values.
const sprint = 1
const activityList = () => { return list44500Sprint01(sprint) }

// Session 3 of 6: Friday
const af_1_3of6_PAaA = sprint1_class_2_PAaA
export const af_1_3of6 = () => { return sprint1_class_2(sprint, activityList, af_1_3of6_PAaA, af_1_4of6_PAaA.prework) }

// Session 4 of 6: Monday
const af_1_4of6_PAaA = {
	'prework':[
		'Complete through activity 8 prior to next class', '',
		'Be prepared to complete Discussion 1', 
		'Be prepared for Lab'],
	'announcements':[ 
		'Any good weekend stories?' ],
	'agenda':[ 
		'Sprint Progress Poll',
		'Discussion 1',
		'Lab' ]
} 

export const af_1_4of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(af_1_4of6_PAaA, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', af_1_4of6_PAaA.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', af_1_5of6_PAaA.prework, sprint, activityList) }
	const recap = () => { return tRecap(af_1_4of6_PAaA.agenda.slice(1))}

	return completeDeck(slideDeck, [poll, preworkNext, tLab, recap])
}

// Session 5 of 6: Wednesday
const af_1_5of6_PAaA = {
	'prework':[
		'Complete through activity 10 prior to next class', '',
		'Be prepared to complete Quiz 1', 
		'Be prepared for Lab'],
	'announcements':[ 
		'' ],
	'agenda':[ 
		'Discussion 1',
		'Lab' ]
} 