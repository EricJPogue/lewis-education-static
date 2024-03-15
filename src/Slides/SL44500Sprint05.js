import { xyz_n_1of6, xyz_n_1of6_lists } from './SL00000Sprint00'
import { xyz_5_1of6SprintPlanning } from './SL20000Sprint05'

import { tUnderConstruction } from './SL00000Sprint00'
import { list44500Sprint04 } from '../ActivityLists/AL44500Sprint04'
import { list44500Sprint05 } from '../ActivityLists/AL44500Sprint05'

// Constants
const sprint = 5
const activityListPrevious = () => { return list44500Sprint04(sprint-1) }
const activityList = () => { return list44500Sprint05(sprint) }

// Sprint 5 session 1 of 6: Monday
export const af_5_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const af_5_1of6 = () => { return xyz_n_1of6(sprint, af_5_1of6_PAaA.prework, activityListPrevious, af_5_1of6_PAaA.agenda, af_5_2of6_PAaA.prework, activityList, xyz_5_1of6SprintPlanning) }


// Sprint 5 session 2 of 6: Wednesday
const af_5_2of6_PAaA = {
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared for Lab' ],
	'announcements':[],
	'agenda':[]
}

export const af_5_2of6 = () => { return [ tUnderConstruction ] }
export const af_5_3of6 = () => { return [ tUnderConstruction ] }
export const af_5_4of6 = () => { return [ tUnderConstruction ] }
export const af_5_5of6 = () => { return [ tUnderConstruction ] }
export const af_5_6of6 = () => { return [ tUnderConstruction ] }
