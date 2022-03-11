import React from 'react'

import { DESIGN_PRINCIPLES_ROUTE, designPrinciples, designPrinciplesLink } from './DesignPrinciples'
import { GUIS_JAVA_ROUTE, graphicalUserInterfacesJava, graphicalUserInterfacesJavaLink } from './GUIsInJava'
import { LEARNING_JAVA_DESKTOP_APPLICATIONS_ROUTE, learningJavaDesktopApplications, learningJavaDesktopApplicationsLink } from './LearningJavaDesktopApplications'
import { PREFLIGHT_CHECKLIST_ROUTE, preflightChecklist, preflightChecklistLink } from './PreflightChecklist'
import { FOX_DISCUSSION_3TO5A6A7_ROUTE, foxDiscussion3to5A6A7, foxDiscussion3to5A6A7Link } from './FoxDiscussionChapter3to5PlusA6A7'
import { FOX_DISCUSSION_7_ROUTE, foxDiscussion7, foxDiscussion7Link } from './FoxDiscussionChapter7'
import { INSTRUCTOR_CHECKLIST_ROUTE, instructorChecklist, instructorChecklistLink } from './InstructorChecklist'

const BASE_ACTIVITY_URL = '/slide/'
export const makeSlideInternalURL = (slideRoute) => {
	return BASE_ACTIVITY_URL + slideRoute
}

export const routeSlide = (slideRoute) => {
	switch(slideRoute) {
		case SLIDE_INDEX_ROUTE: return slideIndex()
		case DESIGN_PRINCIPLES_ROUTE: return designPrinciples()
		case GUIS_JAVA_ROUTE: return graphicalUserInterfacesJava()
		case LEARNING_JAVA_DESKTOP_APPLICATIONS_ROUTE: return learningJavaDesktopApplications()
		case PREFLIGHT_CHECKLIST_ROUTE: return preflightChecklist()
		case FOX_DISCUSSION_3TO5A6A7_ROUTE: return foxDiscussion3to5A6A7()
		case FOX_DISCUSSION_7_ROUTE: return foxDiscussion7()
		case INSTRUCTOR_CHECKLIST_ROUTE: return instructorChecklist()
		default: return null
	}
}

const SLIDE_INDEX_ROUTE = 'index'
const slideIndex = () => { 
	return ( <div>
		{preflightChecklistLink()}<br />
		{designPrinciplesLink()}<br />
		{graphicalUserInterfacesJavaLink()}<br />
		{learningJavaDesktopApplicationsLink()}<br />
		{foxDiscussion3to5A6A7Link()}<br />
		{foxDiscussion7Link()}<br />
		{instructorChecklistLink()}
	</div> )
}
