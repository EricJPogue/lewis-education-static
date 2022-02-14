import { DALE_DISCUSSION_3_ROUTE, daleDiscussion3 } from './DaleDiscussion'
import { DALE_DISCUSSION_4_ROUTE, daleDiscussion4 } from './DaleDiscussion'
import { DESIGN_PRINCIPLES_ROUTE, designPrinciples } from './DesignPrinciples'
import { GUIS_JAVA_ROUTE, graphicalUserInterfacesJava } from './GUIsInJava'
import { PREFLIGHT_CHECKLIST_ROUTE, preflightChecklist } from './PreflightChecklist'
import { FOX_DISCUSSION_3TO5A6A7_ROUTE, foxDiscussion3to5A6A7 } from './FoxDiscussionChapter3to5PlusA6A7'
import { FOX_DISCUSSION_7_ROUTE, foxDiscussion7 } from './FoxDiscussionChapter7'
import { INSTRUCTOR_CHECKLIST_ROUTE, instructorChecklist } from './InstructorChecklist'

const BASE_ACTIVITY_URL = '/slide/'
export const makeSlideInternalURL = (slideRoute) => {
	return BASE_ACTIVITY_URL + slideRoute
}

export const routeSlide = (slideRoute) => {
	switch(slideRoute) {
		case DALE_DISCUSSION_3_ROUTE: return daleDiscussion3()
		case DALE_DISCUSSION_4_ROUTE: return daleDiscussion4()
		case DESIGN_PRINCIPLES_ROUTE: return designPrinciples()
		case GUIS_JAVA_ROUTE: return graphicalUserInterfacesJava()
		case PREFLIGHT_CHECKLIST_ROUTE: return preflightChecklist()
		case FOX_DISCUSSION_3TO5A6A7_ROUTE: return foxDiscussion3to5A6A7()
		case FOX_DISCUSSION_7_ROUTE: return foxDiscussion7()
		case INSTRUCTOR_CHECKLIST_ROUTE: return instructorChecklist()

		default: return null
	}
}
