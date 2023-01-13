import { getClass } from '../DataAndAPIs/Classes'

import { checklist } from './SLSprint00' // Shared slide decks.
import { sprint1Router } from './SLSprint01'
import { sprint2Router } from './SLSprint02'
import { sprint4Router } from './SLSprint04'
import { sprint5Router } from './SLSprint05'
import { sprint6Router } from './SLSprint06'

import { tutorialRouter } from './Tutorials'

import { ics_1_1of6, ics_1_2of6, ics_1_3of6, ics_1_4of6, ics_1_5of6, ics_1_6of6 } from './SL20000Sprint01'
import { ics_3_1of6, ics_3_2of6, ics_3_3of6, ics_3_4of6, ics_3_5of6, ics_3_6of6 } from './SL20000Sprint03'
import { ics_4_1of6, ics_4_2of6, ics_4_3of6, ics_4_4of6, ics_4_5of6, ics_4_6of6 } from './SL20000Sprint04'
import { ics_5_1of6, ics_5_2of6, ics_5_3of6, ics_5_4of6, ics_5_5of6, ics_5_6of6 } from './SL20000Sprint05'
import { ics_6_1of6, ics_6_2of6, ics_6_3of6, ics_6_4of6, ics_6_5of6, ics_6_6of6 } from './SL20000Sprint06'
import { ics_7_1of6, ics_7_2of6, ics_7_3of6, ics_7_4of6, ics_7_5of6, ics_7_6of6 } from './SL20000Sprint07'
import { ics_8_1of6, ics_8_2of6, ics_8_3of6, ics_8_4of6, ics_8_5of6, ics_8_6of6, ics_8_7of6 } from './SL20000Sprint08'

import { oop_1_1of6, oop_1_2of6 } from './SL24500Sprint01'

import { web_3_1of6, web_3_2of6, web_3_3of6, web_3_4of6, web_3_5of6, web_3_6of6 } from './SL24700Sprint03'
import { web_4_1of6, web_4_2of6, web_4_3of6, web_4_4of6, web_4_5of6, web_4_6of6 } from './SL24700Sprint04'
import { web_5_1of6, web_5_2of6, web_5_3of6, web_5_4of6, web_5_5of6, web_5_6of6 } from './SL24700Sprint05'
import { web_6_1of6, web_6_2of6, web_6_3of6, web_6_4of6, web_6_5of6, web_6_6of6 } from './SL24700Sprint06'
import { web_7_1of6, web_7_2of6, web_7_3of6, web_7_4of6, web_7_5of6, web_7_6of6 } from './SL24700Sprint07'
import { web_8_1of6, web_8_2of6, web_8_3of6, web_8_4of6, web_8_5of6, web_8_6of6 } from './SL24700Sprint08'

import { se_1_1of6, se_1_2of6, se_1_3of6, se_1_4of6, se_1_5of6, se_1_6of6 } from './SL44000Sprint01'

import { se_3_1of6, se_3_2of6, se_3_3of6, se_3_4of6, se_3_5of6, se_3_6of6 } from './SL44000Sprint03'
import { se_4_1of6, se_4_2of6, se_4_3of6, se_4_4of6, se_4_5of6, se_4_6of6 } from './SL44000Sprint04'
import { se_5_1of6, se_5_2of6, se_5_3of6, se_5_4of6, se_5_5of6, se_5_6of6 } from './SL44000Sprint05A'
import { se_6_1of6, se_6_2of6, se_6_3of6, se_6_4of6, se_6_5of6, se_6_6of6 } from './SL44000Sprint06'
import { se_7_1of6, se_7_2of6, se_7_3of6, se_7_4of6, se_7_5of6, se_7_6of6 } from './SL44000Sprint07'
import { se_8_1of6, se_8_2of6, se_8_3of6, se_8_4of6, se_8_5of6, se_8_6of6, se_8_7of6 } from './SL44000Sprint08'

import { ssc_1_1of6 } from './SL49200Sprint01'

export const slideDeckRouter = (route) => {
	let currentSlideDeck = sprint1Router(route)
	if (currentSlideDeck === null) {
		currentSlideDeck = sprint2Router(route)
	}
	if (currentSlideDeck === null) {
		currentSlideDeck = sprint3Router(route)
	}
	if (currentSlideDeck === null) {
		currentSlideDeck = sprint4Router(route)
	}
	if (currentSlideDeck === null) {
		currentSlideDeck = sprint5Router(route)
	}
	if (currentSlideDeck === null) {
		currentSlideDeck = sprint6Router(route)
	}
	if (currentSlideDeck === null) {
		currentSlideDeck = tutorialRouter(route)
	}
	if (currentSlideDeck === null) {
		currentSlideDeck = checklist()
	}
	return currentSlideDeck
}

const sprint3Router = (route) => {
	const courseNumberPlusRoute = getClass().number + '-' + route
	switch(courseNumberPlusRoute) {
		case '20000-1-1': return ics_1_1of6()
		case '20000-1-2': return ics_1_2of6()
		case '20000-1-3': return ics_1_3of6()
		case '20000-1-4': return ics_1_4of6()
		case '20000-1-5': return ics_1_5of6()
		case '20000-1-6': return ics_1_6of6()

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

		case '20000-8-1': return ics_8_1of6()
		case '20000-8-2': return ics_8_2of6()
		case '20000-8-3': return ics_8_3of6()
		case '20000-8-4': return ics_8_4of6()
		case '20000-8-5': return ics_8_5of6()
		case '20000-8-6': return ics_8_6of6()
		case '20000-8-7': return ics_8_7of6()

		case '24500-1-1': return oop_1_1of6()
		case '24500-1-2': return oop_1_2of6()

		case '24700-3-1': return web_3_1of6()
		case '24700-3-2': return web_3_2of6()
		case '24700-3-3': return web_3_3of6()
		case '24700-3-4': return web_3_4of6()
		case '24700-3-5': return web_3_5of6()
		case '24700-3-6': return web_3_6of6()

		case '24700-4-1': return web_4_1of6()
		case '24700-4-2': return web_4_2of6()
		case '24700-4-3': return web_4_3of6()
		case '24700-4-4': return web_4_4of6()
		case '24700-4-5': return web_4_5of6()
		case '24700-4-6': return web_4_6of6()

		case '24700-5-1': return web_5_1of6()
		case '24700-5-2': return web_5_2of6()
		case '24700-5-3': return web_5_3of6()
		case '24700-5-4': return web_5_4of6()
		case '24700-5-5': return web_5_5of6()
		case '24700-5-6': return web_5_6of6()

		case '24700-6-1': return web_6_1of6()
		case '24700-6-2': return web_6_2of6()
		case '24700-6-3': return web_6_3of6()
		case '24700-6-4': return web_6_4of6()
		case '24700-6-5': return web_6_5of6()
		case '24700-6-6': return web_6_6of6()

		case '24700-7-1': return web_7_1of6()
		case '24700-7-2': return web_7_2of6()
		case '24700-7-3': return web_7_3of6()
		case '24700-7-4': return web_7_4of6()
		case '24700-7-5': return web_7_5of6()
		case '24700-7-6': return web_7_6of6()

		case '24700-8-1': return web_8_1of6()
		case '24700-8-2': return web_8_2of6()
		case '24700-8-3': return web_8_3of6()
		case '24700-8-4': return web_8_4of6()
		case '24700-8-5': return web_8_5of6()
		case '24700-8-6': return web_8_6of6()

		case '44000-1-1': return se_1_1of6()
		case '44000-1-2': return se_1_2of6()
		case '44000-1-3': return se_1_3of6()
		case '44000-1-4': return se_1_4of6()
		case '44000-1-5': return se_1_5of6()
		case '44000-1-6': return se_1_6of6()

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

		case '44000-8-1': return se_8_1of6()
		case '44000-8-2': return se_8_2of6()
		case '44000-8-3': return se_8_3of6()
		case '44000-8-4': return se_8_4of6()
		case '44000-8-5': return se_8_5of6()
		case '44000-8-6': return se_8_6of6()
		case '44000-8-7': return se_8_7of6()

		case '49200-1-1': return ssc_1_1of6()

		default: return null
	}
}