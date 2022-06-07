
import { checklist } from './SLSprint00' // Shared slide decks.
import { sprint4Router } from './SLSprint04'
import { sprint5Router } from './SLSprint05'

export const slideDeckRouter = (route) => {
	let currentSlideDeck = sprint4Router(route)
	if (currentSlideDeck === null) {
		currentSlideDeck = sprint5Router(route)
	}
	if (currentSlideDeck === null) {
		currentSlideDeck = checklist()
	}
	return currentSlideDeck
}