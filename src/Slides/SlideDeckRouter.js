import { getClassNumber } from '../DataAndAPIs/ClassSections'

import { checklist } from './SLSprint00' // Shared slide decks.
	
import { tutorialRouter } from './Tutorials'

import { ics_1_1of6, ics_1_2of6, ics_1_3of6, ics_1_4of6, ics_1_5of6, ics_1_6of6 } from './SL20000Sprint01'
import { ics_2_1of6, ics_2_2of6, ics_2_3of6, ics_2_4of6, ics_2_5of6, ics_2_6of6 } from './SL20000Sprint02'
import { ics_3_1of6, ics_3_2of6, ics_3_3of6, ics_3_4of6, ics_3_5of6, ics_3_6of6 } from './SL20000Sprint03'
import { ics_4_1of6, ics_4_2of6, ics_4_3of6, ics_4_4of6, ics_4_5of6, ics_4_6of6 } from './SL20000Sprint04'
import { ics_5_1of6, ics_5_2of6, ics_5_3of6, ics_5_4of6, ics_5_5of6, ics_5_6of6 } from './SL20000Sprint05'
import { ics_6_1of6, ics_6_2of6, ics_6_3of6, ics_6_4of6, ics_6_5of6, ics_6_6of6 } from './SL20000Sprint06'
import { ics_7_1of6, ics_7_2of6, ics_7_3of6, ics_7_4of6, ics_7_5of6, ics_7_6of6, ics_7_7of6, ics_7_8of6, ics_7_9of6 } from './SL20000Sprint07' 
import { ics_8_7of6 } from './SL20000Sprint08'

import { se_1_1of6, se_1_2of6, se_1_3of6, se_1_4of6, se_1_5of6, se_1_6of6 } from './SL44000Sprint01'
import { se_2_1of6, se_2_2of6, se_2_3of6, se_2_4of6, se_2_5of6, se_2_6of6 } from './SL44000Sprint02'
import { se_3_1of6, se_3_2of6, se_3_3of6, se_3_4of6, se_3_5of6, se_3_6of6 } from './SL44000Sprint03'
import { se_4_1of6, se_4_2of6, se_4_3of6, se_4_4of6, se_4_5of6, se_4_6of6 } from './SL44000Sprint04'
import { se_5_1of6, se_5_2of6, se_5_3of6, se_5_4of6, se_5_5of6, se_5_6of6 } from './SL44000Sprint05'
import { se_6_1of6, se_6_2of6, se_6_3of6, se_6_4of6, se_6_5of6, se_6_6of6 } from './SL44000Sprint06'
import { se_7_1of6, se_7_2of6, se_7_3of6, se_7_4of6, se_7_5of6, se_7_6of6, se_7_7of6, se_7_8of6, se_7_9of6 } from './SL44000Sprint07'
import { se_8_7of6 } from './SL44000Sprint08'

import { af_1_3of6, af_1_4of6, af_1_5of6, af_1_6of6 } from './SL44500Sprint01'
import { af_2_1of6, af_2_2of6, af_2_3of6, af_2_4of6, af_2_5of6, af_2_6of6 } from './SL44500Sprint02'
import { af_3_1of6, af_3_2of6, af_3_3of6, af_3_4of6, af_3_6of6 } from './SL44500Sprint03'
import { af_4_1of6, af_4_2of6, af_4_3of6, af_4_4of6, af_4_5of6, af_4_6of6 } from './SL44500Sprint04'
import { af_5_1of6, af_5_2of6, af_5_3of6, af_5_4of6, af_5_5of6, af_5_6of6 } from './SL44500Sprint05'
import { af_6_2of6, af_6_3of6, af_6_4of6, af_6_5of6, af_6_6of6 } from './SL44500Sprint06'
import { af_7_1of6, af_7_2of6, af_7_3of6, af_7_4of9, af_7_5of9, af_7_6of9, af_7_7of9, af_7_8of9, af_7_9of9 } from './SL44500Sprint07'
import { af_8_1of1 } from './SL44500Sprint8'

import { ssc_1_1of4, ssc_1_2of4, ssc_1_3of4, ssc_1_4of4 } from './SL49200Sprint01' 
import { ssc_2_1of4, ssc_2_3of4 } from './SL49200Sprint02'
import { ssc_3_1of1 } from './SL49200Sprint03'

import { ssc_4_1of1 } from './SL49200Sprint04'

import { ssc_5_1of1 } from './SL49200Sprint05'
import { ssc_6_1of4 } from './SL49200Sprint06'
import { ssc_7_1of4 } from './SL49200Sprint07'
import { ssc_8_1of4 } from './SL49200Sprint08'

// Routing constants are defined by the class number followed by the sprint number and session. Note that sessions are
// identified by the session number without consideration for missed classes. For example a week 2 Friday session for a 
// MWF class would still be considered session 6 even if the preceding Monday was a holiday. For example, is sprint 1
// the second Monday is Labor day so the final Friday of the sprint for Software Engineering would have a rout of 
// '44000-1-6' which implies the integrated slide deck is for Software Engineering sprint 1 session 6.

export const slideDeckRouter = (route) => {
	// Todo: Make sprint3Router the only slide router.
	let currentSlideDeck = sprintRouter(route)
	if (currentSlideDeck === null) {
		currentSlideDeck = tutorialRouter(route)
	}
	if (currentSlideDeck === null) {
		currentSlideDeck = checklist()
	}
	return currentSlideDeck
}

const sprintRouter = (route) => {
	const courseNumberPlusRoute = getClassNumber() + '-' + route

	switch(courseNumberPlusRoute) {
		case '20000-1-1': return ics_1_1of6()
		case '20000-1-2': return ics_1_2of6()
		case '20000-1-3': return ics_1_3of6()
		case '20000-1-4': return ics_1_4of6()
		case '20000-1-5': return ics_1_5of6()
		case '20000-1-6': return ics_1_6of6()

		case '20000-2-1': return ics_2_1of6()
		case '20000-2-2': return ics_2_2of6()
		case '20000-2-3': return ics_2_3of6()
		case '20000-2-4': return ics_2_4of6()
		case '20000-2-5': return ics_2_5of6()
		case '20000-2-6': return ics_2_6of6()

		case '20000-3-1': return ics_3_1of6()
		case '20000-3-2': return ics_3_2of6()
		case '20000-3-3': return ics_3_3of6()
		case '20000-3-4': return ics_3_4of6()
		case '20000-3-5': return ics_3_5of6()
		case '20000-3-6': return ics_3_6of6()

		case '20000-4-1': return ics_4_1of6()
		case '20000-4-2': return ics_4_2of6()
		case '20000-4-3': return ics_4_3of6()
		case '20000-4-4': return ics_4_4of6()
		case '20000-4-5': return ics_4_5of6()
		case '20000-4-6': return ics_4_6of6()

		case '20000-5-1': return ics_5_1of6()
		case '20000-5-2': return ics_5_2of6()
		case '20000-5-3': return ics_5_3of6()
		case '20000-5-4': return ics_5_4of6()
		case '20000-5-5': return ics_5_5of6()
		case '20000-5-6': return ics_5_6of6()

		case '20000-6-1': return ics_6_1of6()
		case '20000-6-2': return ics_6_2of6()
		case '20000-6-3': return ics_6_3of6()
		case '20000-6-4': return ics_6_4of6()
		case '20000-6-5': return ics_6_5of6()
		case '20000-6-6': return ics_6_6of6()

		case '20000-7-1': return ics_7_1of6()
		case '20000-7-2': return ics_7_2of6()
		case '20000-7-3': return ics_7_3of6()
		case '20000-7-4': return ics_7_4of6()
		case '20000-7-5': return ics_7_5of6()
		case '20000-7-6': return ics_7_6of6()
		case '20000-7-7': return ics_7_7of6()
		case '20000-7-8': return ics_7_8of6()
		case '20000-7-9': return ics_7_9of6()

		case '20000-8-7': return ics_8_7of6()

		case '44000-1-1': return se_1_1of6()
		case '44000-1-2': return se_1_2of6()
		case '44000-1-3': return se_1_3of6()
		case '44000-1-4': return se_1_4of6()
		case '44000-1-5': return se_1_5of6()
		case '44000-1-6': return se_1_6of6() 
		case '44000-2-1': return se_2_1of6()
		case '44000-2-2': return se_2_2of6()
		case '44000-2-3': return se_2_3of6()
		case '44000-2-4': return se_2_4of6()
		case '44000-2-5': return se_2_5of6()
		case '44000-2-6': return se_2_6of6()

		case '44000-3-1': return se_3_1of6() 
		case '44000-3-2': return se_3_2of6()
		case '44000-3-3': return se_3_3of6()
		case '44000-3-4': return se_3_4of6()
		case '44000-3-5': return se_3_5of6()
		case '44000-3-6': return se_3_6of6()

		case '44000-4-1': return se_4_1of6()
		case '44000-4-2': return se_4_2of6()
		case '44000-4-3': return se_4_3of6()
		case '44000-4-4': return se_4_4of6()
		case '44000-4-5': return se_4_5of6()
		case '44000-4-6': return se_4_6of6()

		case '44000-5-1': return se_5_1of6()
		case '44000-5-2': return se_5_2of6()
		case '44000-5-3': return se_5_3of6()
		case '44000-5-4': return se_5_4of6()
		case '44000-5-5': return se_5_5of6()
		case '44000-5-6': return se_5_6of6()

		case '44000-6-1': return se_6_1of6()
		case '44000-6-2': return se_6_2of6()
		case '44000-6-3': return se_6_3of6()
		case '44000-6-4': return se_6_4of6()
		case '44000-6-5': return se_6_5of6()
		case '44000-6-6': return se_6_6of6()

		case '44000-7-1': return se_7_1of6()
		case '44000-7-2': return se_7_2of6()
		case '44000-7-3': return se_7_3of6()
		case '44000-7-4': return se_7_4of6()
		case '44000-7-5': return se_7_5of6()
		case '44000-7-6': return se_7_6of6()
		case '44000-7-7': return se_7_7of6()
		case '44000-7-8': return se_7_8of6()
		case '44000-7-9': return se_7_9of6()

		case '44000-8-7': return se_8_7of6() 

		case '44500-1-3': return af_1_3of6()
		case '44500-1-4': return af_1_4of6()
		case '44500-1-5': return af_1_5of6()
		case '44500-1-6': return af_1_6of6()

		case '44500-2-1': return af_2_1of6()
		case '44500-2-2': return af_2_2of6()
		case '44500-2-3': return af_2_3of6()
		case '44500-2-4': return af_2_4of6()
		case '44500-2-5': return af_2_5of6()
		case '44500-2-6': return af_2_6of6()

		case '44500-3-1': return af_3_1of6()
		case '44500-3-2': return af_3_2of6()
		case '44500-3-3': return af_3_3of6()
		case '44500-3-4': return af_3_4of6()
		case '44500-3-6': return af_3_6of6()

		case '44500-4-1': return af_4_1of6()
		case '44500-4-2': return af_4_2of6()
		case '44500-4-3': return af_4_3of6()
		case '44500-4-4': return af_4_4of6()
		case '44500-4-5': return af_4_5of6()
		case '44500-4-6': return af_4_6of6()

		case '44500-5-1': return af_5_1of6()
		case '44500-5-2': return af_5_2of6()
		case '44500-5-3': return af_5_3of6()
		case '44500-5-4': return af_5_4of6()
		case '44500-5-5': return af_5_5of6()
		case '44500-5-6': return af_5_6of6()

		case '44500-6-2': return af_6_2of6()
		case '44500-6-3': return af_6_3of6()
		case '44500-6-4': return af_6_4of6()
		case '44500-6-5': return af_6_5of6()		
		case '44500-6-6': return af_6_6of6()

		case '44500-7-1': return af_7_1of6()
		case '44500-7-2': return af_7_2of6()
		case '44500-7-3': return af_7_3of6()
		case '44500-7-4': return af_7_4of9()
		case '44500-7-5': return af_7_5of9()
		case '44500-7-6': return af_7_6of9()
		case '44500-7-7': return af_7_7of9()
		case '44500-7-8': return af_7_8of9()
		case '44500-7-9': return af_7_9of9()

		case '44500-8-7': return af_8_1of1()
		
		case '49200-1-1': return ssc_1_1of4()
		case '49200-1-2': return ssc_1_2of4()
		case '49200-1-3': return ssc_1_3of4()
		case '49200-1-4': return ssc_1_4of4()

		case '49200-2-1': return ssc_2_1of4()
		case '49200-2-2': return ssc_2_1of4()
		case '49200-2-3': return ssc_2_3of4()
		case '49200-2-4': return ssc_2_3of4()

		case '49200-3-1': return ssc_3_1of1()
		case '49200-4-1': return ssc_4_1of1()

		case '49200-5-1': return ssc_5_1of1()
		case '49200-6-1': return ssc_6_1of4()
		case '49200-7-1': return ssc_7_1of4()
		case '49200-8-1': return ssc_8_1of4()

		default: return null
	}
}