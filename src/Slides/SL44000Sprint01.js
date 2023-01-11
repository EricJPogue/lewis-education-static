import { xyz_1_2of6 } from './SL00000Sprint00'
import { checklistAnnouncementsPreworkAndAgenda, completeDeck } from './SL00000Sprint00'
import { tPrework, bulletListSlide } from './SLSprint00'

import { list44000Sprint01 } from '../ActivityLists/AL44000Sprint01'

// Software Engineering (SE) sprint 1 global values.
const sprint = 1
const activityList = () => { return list44000Sprint01(sprint) }

// Sprint 1 session 1 of 6: Monday
const se_1_1of6_lists = {
	'announcements':[ 
		'Welcome back! I hope you had a wonderful Holiday Break.' ],
	'prework':[
		'Review Welcome Message',
		'Review Blended Learning & Flipped Classroom',
		'Review Introduction to Scrum',
		'Review Course Syllabus' ],
	'agenda':[
		'Sprint Progress Polling',
		'Class Format',
		'Introductions - Part 1',
		'Sprint 1 Planning (abbreviated)',
		'Introductions - Part 2 and Scrum Team Assignments',
		'Prework for Next Class' ]
}

export const se_1_1of6 = () => { 
	const poll = () => { return tPrework('Sprint Progress Polling', se_1_1of6_lists.prework, sprint, activityList) }
	const switchDeck = () => { return bulletListSlide('PowerPoint', 'Switch to PowerPoint slides.', [])}

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_1_1of6_lists, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', se_1_2of6_lists.prework, sprint, activityList) }
	return completeDeck(slideDeck, [poll, switchDeck, preworkNext])
}

// Sprint 1 session 2 of 6: Wednesday
const se_1_2of6_lists = {
	'announcements':[ 
	'Friday’s class will be remote via Zoom' ],
	'prework':[
		'Complete through activity 7 prior to next class', '',
		`Be prepared to complete sprint ${sprint} planning` ],
	'agenda':[
		'Sprint Progress Polling', 
		'Introductions and Scrum Team Assignments (continued)',
		`Sprint ${sprint} Planning (continued)`,
		`Sprint ${sprint} Scrum Team Breakout` ]
}
export const se_1_2of6 = () => { return xyz_1_2of6(sprint, se_1_2of6_lists, se_1_3of6_lists, activityList) }

// Sprint 1 session 3 of 6: Friday
const se_1_3of6_lists = {
	'announcements':[ 
		'Any Announcements?' ],
	'prework':[
		'Have your scrum team Discord server set up for Friday’s remote class',
		'Complete through activity 9 prior to next class', '',
		'Be prepared to for a scrum team breakout session on “Engineering Software as a Service” Chapter 1 and the associated lecture' ],
	'agenda':[
		'' ]
}