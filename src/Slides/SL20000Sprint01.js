import { checklistAnnouncementsPreworkAndAgenda, completeDeck } from './SL00000Sprint00'
import { tPrework, bulletListSlide } from './SLSprint00'

import { list20000Sprint01 } from '../ActivityLists/AL20000Sprint01'

// Introduction to Computer Science (ICS) sprint 1 global values.
const sprint = 1
const activityList = () => { return list20000Sprint01(sprint) }

// Todo: Integrate all sprint 1 session 1 of 6 slide decks as they are all the same. 

// Sprint 1 session 1 of 6: Monday
const ics_1_1of6_lists = {
	'announcements':[ 
		'Welcome back! I hope you had a wonderful Holiday Break.' ],
	'prework':[
		'Review Welcome Message',
		'Review Blended Learning & Flipped Classroom',
		'Review Introduction to Scrum',
		'Review Course Syllabus' ],
	'agenda':[
		'Progress Polling',
		'Class Format',
		'Introductions - Part 1',
		'Sprint 1 Planning (abbreviated)',
		'Introductions - Part 2 and Scrum Team Assignments',
		'Prework for Next Class' ]
}

export const ics_1_1of6 = () => { 
	const poll = () => { return tPrework('Sprint Progress Polling', ics_1_1of6_lists.prework, sprint, activityList) }
	const switchDeck = () => { return bulletListSlide('PowerPoint', 'Switch to PowerPoint slides.', [])}

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_1_1of6_lists, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_1_2of6_lists.prework, sprint, activityList) }
	return completeDeck(slideDeck, [poll, switchDeck, preworkNext])
}

// Sprint 2 session 2 of 6: Wednesday
const ics_1_2of6_lists = {
	'announcements':[ 
		'Any Announcements?' ],
	'prework':[
		'Complete through activity 7 prior to next class', '',
		`Be prepared to complete sprint ${sprint} planning` ],
	'agenda':[
		'TBD' ]
}