import { getClass } from '../DataAndAPIs/Classes'

import { checklist } from './SLSprint00' // Shared slide decks.
import { sprint1Router } from './SLSprint01'
import { sprint2Router } from './SLSprint02'
import { sprint4Router } from './SLSprint04'
import { sprint5Router } from './SLSprint05'
import { sprint6Router } from './SLSprint06'

import { tutorialRouter } from './Tutorials'

import { ics_3_1of6, ics_3_2of6 } from './SL20000Sprint03'
import { web_3_1of6 } from './SL24700Sprint03'
import { se_3_1of6, se_3_2of6, se_3_3of6 } from './SL44000Sprint03'

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
		case '20000-3-1': return ics_3_1of6()
		case '20000-3-2': return ics_3_2of6()

		case '24700-3-1': return web_3_1of6()

		case '44000-3-1': return se_3_1of6()
		case '44000-3-2': return se_3_2of6()
		case '44000-3-3': return se_3_3of6()

		default: return null
	}
}