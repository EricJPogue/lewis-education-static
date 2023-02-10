import { makeSlideDeck, xyz_n_1of6, xyz_n_1of6_lists, tLab, tAnnouncementPreworkOrAgenda } from './SL00000Sprint00'
import { breakoutStandard, tPreworkWithLogo, tPrework, agendaSlide, basicSlideWithLogo, bulletListSlide, discussionBreakout, orderedListSlide, submissionPercentage, tQuiz } from './SLSprint00'

import { xyz_n_3of6 } from './SL00000Sprint00'

import { list20000Sprint02 } from '../ActivityLists/AL20000Sprint02' 
import { list20000Sprint03 } from '../ActivityLists/AL20000Sprint03'

import { ics_4_1of6_prework_list } from './SL20000Sprint04'

// Constants
const sprint = 3
const activityList = () => { return list20000Sprint03(sprint) }
const activityListPrevious = () => { return list20000Sprint02(sprint-1) }

// Session 1 of 6: Monday
export const ics_3_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const ics_3_1of6 = () => { return xyz_n_1of6(sprint, ics_3_1of6_PAaA.prework, activityListPrevious, ics_3_1of6_PAaA.agenda, ics_3_2of6_prework_list, activityList) }

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
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_3_3of6_PAaA.prework, sprint, activityList) }

	const discussion3Breakout = () => { return discussionBreakout(sprint) } 
	const programmingTogether = () => {
		return bulletListSlide('Lab & Programming Together', 
			'Let’s commit to making 30 minutes of focused effort to our Lab assignment by:', [
			'Discussing and Implementing our README.md and LICENSE file in GitHub', 
			'Adding a index.html file', 
			'Pushing the index.html file to GitHub' ])
	}

	return makeSlideDeck([ prework, announcements, agenda, discussion3Breakout, programmingTogether, preworkNext ])
}

const ics_3_3of6_PAaA = {
	'prework': [
		'Complete through activity 9 prior to next class', '',
		`Be prepared for sprint ${sprint-1} demos and retrospectives`,
		'Those scheduled to demo please be a couple of minutes early to class' ],
	'announcements':[ 
		'Any announcements?' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}
export const ics_3_3of6 = () => {
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:14, submitted:14 },
			{ name: 'Quiz', due:14, submitted:14 },
			{ name: 'Lab', due:14, submitted:14},
			{ name: 'Reflection', due: 14, submitted: 13 }])
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Fantastic submission percentage!',
			'All assignments are graded and posted', 
			'Can you see your scores?',
			'Can you see the answers to all quiz questions?',
			'Thank you for your reflection comments' ])
	}
	return xyz_n_3of6(sprint, ics_3_4of6_PAaA, ics_3_4of6_PAaA.prework, activityList, metricsSubmissionPercentage, retrospective)
}





const ics_3_4of6_PAaA = {
	'prework': [
		'Complete through activity 11 prior to next class', '',
		'Focus on “Gates and Circuits” and “Computing Components” chapters and lectures',
		'Be prepared for Lab and Programming Together**' ],
	'announcements':[ 
		'Any announcements?' ],
	'agenda':[
		'Gates and Circuits Breakout (abbreviated)',
		'Prework for Next Class',
		'Lab & Programming Together' ]
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