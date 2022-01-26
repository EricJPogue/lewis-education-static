import { PREFLIGHT_CHECKLIST_ROUTE, preflightChecklist } from './PreflightChecklist'
import { INSTRUCTOR_CHECKLIST_ROUTE, instructorChecklist } from './InstructorChecklist'

const BASE_ACTIVITY_URL = '/slides/'
export const makeSlideInternalURL = (slideRoute) => {
	return BASE_ACTIVITY_URL + slideRoute
}

export const routeSlide = (slideRoute) => {
	console.log('testing '+ slideRoute)
	switch(slideRoute) {
		case PREFLIGHT_CHECKLIST_ROUTE: return preflightChecklist()
		case INSTRUCTOR_CHECKLIST_ROUTE: return instructorChecklist()

		default: return null
	}
}
