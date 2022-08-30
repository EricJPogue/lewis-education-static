
import { checklist } from './SLSprint00' // Shared slide decks.
import { sprint1Router } from './SLSprint01'
import { sprint4Router } from './SLSprint04'
import { sprint5Router } from './SLSprint05'
import { sprint6Router } from './SLSprint06'

import { tutorialRouter } from './Tutorials'

export const slideDeckRouter = (route) => {
	let currentSlideDeck = sprint1Router(route)
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