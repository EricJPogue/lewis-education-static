import { DALE_DISCUSSION_3_ROUTE, daleDiscussion3 } from './DaleDiscussion'
import { PREFLIGHT_CHECKLIST_ROUTE, preflightChecklist } from './PreflightChecklist'
import { FOX_DISCUSSION_3TO5A6A7_ROUTE, foxDiscussion3to5A6A7 } from './FoxDiscussionChapter3to5PlusA6A7'
import { INSTRUCTOR_CHECKLIST_ROUTE, instructorChecklist } from './InstructorChecklist'

const BASE_ACTIVITY_URL = '/slide/'
export const makeSlideInternalURL = (slideRoute) => {
	return BASE_ACTIVITY_URL + slideRoute
}

export const routeSlide = (slideRoute) => {
	switch(slideRoute) {
		case DALE_DISCUSSION_3_ROUTE: return daleDiscussion3()
		case PREFLIGHT_CHECKLIST_ROUTE: return preflightChecklist()
		case FOX_DISCUSSION_3TO5A6A7_ROUTE: return foxDiscussion3to5A6A7()
		case INSTRUCTOR_CHECKLIST_ROUTE: return instructorChecklist()

		default: return null
	}
}
