import { getClass } from '../DataAndAPIs/Classes'

import { makeSlideDeck, xyz_n_1of6, tLab, tAnnouncementPreworkOrAgenda } from './SL00000Sprint00'
import { breakoutStandard, tPreworkWithLogo, tPrework, agendaSlide, basicSlideWithLogo, bulletListSlide, discussionBreakout, orderedListSlide, submissionPercentage, tQuiz } from './SLSprint00'
import { sprintDemosIntro, sprintDemos, demoAssignment, retrospectiveBreakout } from './SLSprint00'

import { list20000Sprint02 } from '../ActivityLists/AL20000Sprint02' 
import { list20000Sprint03 } from '../ActivityLists/AL20000Sprint03'

import { ics_4_1of6_prework_list } from './SL20000Sprint04'

const sprint = 3
const activityList = () => { return list20000Sprint03(sprint) }
const activityListPrevious = () => { return list20000Sprint02(sprint-1) }

// Introduction to Computer Science Sprint 3 Session 1 of 6

// BugBug: Integrate different prework and agendas
export const ics_3_1of6_PAaA = {
	'prework': [
		'Everything is due Sunday!', '',
		`Be prepared for Sprint ${sprint} Planning` ],
	'announcements':[
		`All sprint ${sprint} assignments due Sunday!`],
	'agenda':[
		`Sprint ${sprint} Planning`,
		`Sprint ${sprint} Planning Breakout`,
		'Review Wednesday’s Demo Schedule',
		'Prework for Next Class' ]
}


export const ics_3_1of6_prework_list = [
	'Everything is due Sunday!', '',
	`Be prepared for Sprint ${sprint} Planning` ]
export const ics_3_1of6_agenda_list = [
	`Sprint ${sprint} Planning`,
	`Sprint ${sprint} Planning Breakout`,
	'Review Wednesday’s Demo Schedule',
	'Prework for Next Class' ]
export const ics_3_1of6 = () => { return xyz_n_1of6(sprint, ics_3_1of6_prework_list, activityListPrevious, ics_3_1of6_agenda_list, ics_3_2of6_prework_list, activityList) }

// Session 2 of 6
const ics_3_2of6_prework_list = [
	'Complete through activity 5 prior to next class', '',
	'Be prepared Discussion Board 3',
	'Be prepared for Lab & Programming Together' ]
export const ics_3_2of6_agenda_list = [
	`Discussion Board ${sprint} as a Scrum Team`,
	'Lab & Programming Together',
	'Review Demo Schedule for Next Class',
	'Prework for Next Class' ]
export const ics_3_2of6 = () => {
	const prework = () => { return tPreworkWithLogo('Prework For Today', ics_3_2of6_prework_list, sprint, activityList) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', ['Any announcements?']) }
	const agenda = () => { return agendaSlide(ics_3_2of6_agenda_list) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_3_3of6_prework_list, sprint, activityList) }

	const discussion3Breakout = () => { return discussionBreakout(sprint) } 
	const programmingTogether = () => {
		return bulletListSlide('Lab & Programming Together', 
			'Let’s commit to making 30 minutes of focused effort to our Lab assignment by:', [
			'Implementing our README.md and LICENSE file in GitHub as the first step of Continuous Integration / Continuous Delivery (CI/CD)', 
			'Adding a index.html file', 
			'Pushing the index.html file to GitHub' ])
	}

	return makeSlideDeck([ prework, announcements, agenda, discussion3Breakout, programmingTogether, preworkNext ])
}

const ics_3_3of6_prework_list = [
	'Complete through activity 9 prior to next class', '',
	`Be prepared for sprint ${sprint-1} demos and retrospectives`,
	'Those scheduled to demo please be a couple of minutes early to class' ]
export const ics_3_3of6_agenda_list = [
	`Sprint ${sprint-1} Demos`,
	`Sprint ${sprint-1} Retrospective`,
	`Breakout for Sprint ${sprint-1} Retrospective`,
	'Prework for Next Class' ]
export const ics_3_3of6 = () => {
	const prework = () => { return tPreworkWithLogo('Prework For Today', ics_3_3of6_prework_list, sprint, activityList) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', ['No class next Friday', 'Any other announcements?']) }
	const agenda = () => { return agendaSlide(ics_3_3of6_agenda_list) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_3_4of6_prework_list, sprint, activityList) }

	const metricsSubmissionPercentage = () => {
		if (getClass().section === '002') {
			return submissionPercentage([
				{ name: 'Discussion', due:27, submitted:25 },
				{ name: 'Quiz', due:27, submitted:27 },
				{ name: 'Lab', due:27, submitted:24 },
				{ name: 'Reflection', due: 27, submitted: 26 }
			])
		} else {
			return submissionPercentage([
				{ name: 'Discussion', due:28, submitted:26 },
				{ name: 'Quiz', due:28, submitted:28 },
				{ name: 'Lab', due:28, submitted:27 },
				{ name: 'Reflection', due: 28, submitted: 27 }
			])
		}
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Okay submission percentage... it does’t feel good to have multiple Labs not submitted',
			'I “don’t allow” for late assignments because historically it makes a difficult situation worse',
			'All assignments are graded and posted... maybe?', 
			'Still some difficulties creating and attaching zip files' ])
	}
	const breakout = () =>{ return retrospectiveBreakout(sprint) }

	return makeSlideDeck([ prework, announcements, agenda, sprintDemosIntro, sprintDemos, demoAssignment, 
		metricsSubmissionPercentage, retrospective, breakout, preworkNext ])
}

const ics_3_4of6_prework_list = [
	'Complete through activity 11 prior to next class', '',
	'Focus on “Gates and Circuits” and “Computing Components” chapters and lectures',
	'Be prepared for Lab and Programming Together**' ]
const ics_3_4of6_agenda_list = [
	'Gates and Circuits Breakout (abbreviated)',
	'Prework for Next Class',
	'Lab & Programming Together' ]
export const ics_3_4of6 = () => {
	const prework = () => { return tPreworkWithLogo('Prework For Today', ics_3_4of6_prework_list, sprint, activityList) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', [
		'No class Friday', 
		'Recall ECaMS tutoring',
		'No Computing Components Breakout this sprint (you are still responsible for the content)']) 
	}
	const agenda = () => { return agendaSlide(ics_3_4of6_agenda_list) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_3_5of6_prework_list, sprint, activityList) }

	const breakout = () => { 
		return breakoutStandard( 
			'Breakout: Gates and Circuits', 
			'In this breakout session on Gates and Circuits (reading and lecture) your team will discuss:', [
			'Gates', 
			'Circuits and how they relate to Gates', 
			'NOT and AND gates',
			'OR, XOR, NAND, and NOR gates and share which one is consistent with English language "or"',
			'Integrated Circuits, CPU Chips, and how much does it cost to buy 100,000,000 (100 million) gates',
			'Computing Component: Can you identify one computing component?' ])
	}

	return makeSlideDeck([ announcements, prework, agenda, breakout, preworkNext ])
}

const ics_3_5of6_announcement_list = [
	'Announcements', 
	'No class Friday', 
	`All sprint ${sprint} assignments are due Sunday!`]
const ics_3_5of6_prework_list = [
	'Prework For Today', 
	'Complete through activity 13 prior to next class', '',
	'Focus on reading assignments and associated lectures',
	'Be prepared for Lab and Programming Together',
	'Be prepared for Quiz 3' ]
const ics_3_5of6_agenda_list = [
	'Agenda', 
	'Lab and Programming Together',
	'Prework for Next Class',
	'Quiz 3' ]
export const ics_3_5of6 = () => {
	const announcements =  () => { return tAnnouncementPreworkOrAgenda(ics_3_5of6_announcement_list) }
	const prework = () => { return tAnnouncementPreworkOrAgenda(ics_3_5of6_prework_list, sprint, activityList) }
	const agenda = () => { return tAnnouncementPreworkOrAgenda(ics_3_5of6_agenda_list) }

	const preworkNext = () => { return tPrework('Prework For Next Class', ics_4_1of6_prework_list, sprint, activityList) }
	const quiz = () => { return tQuiz(sprint) }

	return makeSlideDeck([ announcements, prework, agenda, tLab, preworkNext, quiz ])
}

// No “ics_3_6of6...” prework or agenda structures as there is no class Friday due to Fall Break.
export const ics_3_6of6 = () => {
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', [
		'No class', 
		`All sprint ${sprint} assignments are due Sunday!`]) 
	}

	return [ announcements ]
}