import { getClass } from '../DataAndAPIs/Classes'

import { preflightChecklist, instructorChecklist, agendaSlide, activitiesReview, orderedListSlide, prework, bulletListSlide, end, } from './SLSprint00'
import { sprintDemosIntro, sprintDemos, demoAssignment } from './SLSprint00'

import { ics_prework_2_1of6 } from './SLSprint01'
import { list20000Sprint02 } from '../ActivityLists/AL20000Sprint02' 

export const sprint2Router = (route) => {
	const courseNumberPlusRoute = getClass().number + '-' + route
	switch(courseNumberPlusRoute) {
		case '20000-2-1': return ics2_1of6()

		default: return null
	}
}

const sprint = 2
const ics2_1of6 = () => {
	const preworkToday = () => { return ics_prework_2_1of6() } 
	const preworkNextClass = () => { return ics_prework_2_2of6() }

	const agenda = () => {
		return agendaSlide([
			'Prework for Today',
			`Sprint ${sprint} Planning`,
			`Breakout on Sprint ${sprint} Planning`,
			'Review Demo Schedule',
			'Prework for Next Class' ])
	}
	const sprintPlanning = () => {
		return orderedListSlide(`Sprint Planning`, `Sprint ${sprint} Changes:`, [
			'Similar to previous sprint with Discussion, Quiz, Lab, and Reflection',
			'We have a new Demo assignment that will need to be submitted when you complete your lab demo',
			`We will have sprint ${sprint-1} Demos and Retrospectives on Wednesday`,
			'We will complete our first Scrum Team Breakout Discussion on Friday',
			'Should be a little easier since we don’t have a holiday during the sprint',
			'Easter break and no classes Thursday through Monday will make the sprint a bit challenging'
		])
	}
	const activitiesBreakout = () => {
		return orderedListSlide('Scrum Team Planning Review', 'As a scrum team:', [
			`Review sprint ${sprint} activity list & assignments in detail`,
			'Discuss and identify questions/concerns',
			'Scrum master share your team’s top 2 questions/concerns during report out' ])
	}
	const introducingDemos = () => {
		return bulletListSlide('Foreshadowing Wednesday’s Sprint Demos', 
			'Sprint demos are a key part of Agile software development and Scrum.', [
			'They occur at the beginning of each new sprint ',
			'They are an opportunity to show what was completed in the previous sprint',
			'They are intended to be an **easy** and rewarding experience to show off your work',
			'Also a chance to see how others solved a problem and to see some of the challenges they faces',
			'We will each be doing at least on sprint demo during the semester during class' ])
	}

	return [ instructorChecklist, preflightChecklist, agenda, preworkToday, sprintPlanning, activitiesReview, 
		activitiesBreakout, preworkNextClass, introducingDemos, sprintDemosIntro, sprintDemos, demoAssignment, end ]
}

const ics_prework_2_2of6 = () => {
	const activityList = () => { return list20000Sprint02(sprint) }
	return prework('Prework', [
		'Complete through activity 5 prior to next class', '',
		'Be prepared for sprint 1 demos and retrospectives',
		'Those scheduled to demo on Wednesday please be a couple of minutes early to class' ], 
		sprint, activityList)
}




