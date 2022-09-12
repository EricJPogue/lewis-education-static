import { getClass } from '../DataAndAPIs/Classes'

import { preflightChecklist, instructorChecklist, agendaSlide, activitiesReview, orderedListSlide, prework, bulletListSlide, end, } from './SLSprint00'
import { sprintDemosIntro, sprintDemos, demoAssignment } from './SLSprint00'

import { ics_prework_2_1of6, web_prework_2_1of6 } from './SLSprint01'

import { list20000Sprint02 } from '../ActivityLists/AL20000Sprint02' 
import { list24700Sprint02 } from '../ActivityLists/AL24700Sprint02'
import { list44000Sprint02 } from '../ActivityLists/AL44000Sprint02'

export const sprint2Router = (route) => {
	const courseNumberPlusRoute = getClass().number + '-' + route
	switch(courseNumberPlusRoute) {
		case '20000-2-1': return ics2_1of6()

		case '24700-2-1': return web2_1of6()

		case '44000-2-1': return se2_1of6()

		default: return null
	}
}

const sprint = 2
const ics2_1of6 = (preworkTodayIn, preworkNextClassIn) => {
	const preworkToday = () => { 
		if (preworkTodayIn === undefined) {
			return ics_prework_2_1of6() 
		}
		return preworkTodayIn 
	} 
	const preworkNextClass = () => { 
		if (preworkNextClassIn === undefined) {
			return ics_prework_2_2of6() 
		}
		return preworkNextClassIn
	}

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
			'Should be a little easier since we don’t have a holiday during the sprint'
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


// Web & Distributed Programming (WEB)
const web2_1of6 = () => {
	return ics2_1of6(web_prework_2_1of6(), web_prework_2_2of6())
}

const web_prework_2_2of6 = () => {
	const activityList = () => { return list24700Sprint02(sprint) }
	return prework('Prework', [
		'Complete through activity 5 prior to next class', '',
		'Be prepared for sprint 1 demos and retrospectives',
		'Those scheduled to demo on Wednesday please be a couple of minutes early to class' ], 
		sprint, activityList)
}

// Software Engineering (SE)
// Todo: Switch to "_prework" naming for Sprint 2 prework slide functions. 
export const se_2_1of6_prework = () => {
	return prework('Prework', [
		'Everything is due Sunday!', '',
		'Be prepared to focus 100% on Sprint 2 Planning' ])
}
const se2_1of6 = () => {
	return ics2_1of6(se_2_1of6_prework(), se_2_2of6_prework())
}

const se_2_2of6_prework = () => {
	const activityList = () => { return list44000Sprint02(sprint) }
	return prework('Prework', [
		'Complete through activity 6 prior to next class', '',
		'Be prepared for sprint 1 demos and retrospectives',
		'Those scheduled to demo on Wednesday please be a couple of minutes early to class' ], 
		sprint, activityList)
}
