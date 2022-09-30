import { makeSlideDeck, xyz_n_1of6 } from './SL00000Sprint00'

import { tPreworkWithLogo, tPrework, agendaSlide, basicSlideWithLogo, bulletListSlide, discussionBreakout, orderedListSlide, submissionPercentage } from './SLSprint00'
import { sprintDemosIntro, sprintDemos, demoAssignment, retrospectiveBreakout } from './SLSprint00'

import { list24700Sprint02 } from '../ActivityLists/AL24700Sprint02' 
import { list24700Sprint03 } from '../ActivityLists/AL24700Sprint03'

import { ics_3_1of6_prework_list, ics_3_1of6_agenda_list  } from './SL20000Sprint03'

const sprint = 3
const activityListPrevious = () => { return list24700Sprint02(sprint-1) }
const activityList = () => { return list24700Sprint03(sprint) }

export const web_3_1of6_prework_list = ics_3_1of6_prework_list
const web_3_1of6_agenda_list = ics_3_1of6_agenda_list
export const web_3_1of6 = () => { return xyz_n_1of6(sprint, web_3_1of6_prework_list, activityListPrevious, web_3_1of6_agenda_list, web_3_2of6_prework_list, activityList) }

const web_3_2of6_prework_list = [
	'Complete through activity 4 prior to next class', '',
	'Be prepared Discussion Board 3',
	'Be prepared for Lab & Programming Together' ]
const web_3_2of6_agenda_list = [
	`Discussion Board ${sprint} as a Scrum Team`,
	'Prework for Next Class',
	'Lab & Programming Together' ]
export const web_3_2of6 = () => {
	const prework = () => { return tPreworkWithLogo('Prework For Today', web_3_2of6_prework_list, sprint, activityList) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', ['Any announcements?']) }
	const agenda = () => { return agendaSlide(web_3_2of6_agenda_list) }
	const preworkNext = () => { return tPrework('Prework For Next Class', web_3_3of6_prework_list, sprint, activityList) }

	const discussion3Breakout = () => { return discussionBreakout(sprint) } 
	const programmingTogether = () => {
		return bulletListSlide('Lab & Programming Together', 
			'Let’s commit to making 30 minutes of focused effort to our Lab assignment by:', [
			'Download the client code for “Dogs, JavaScript & An API 🐶 Fetch, Promises & Async Await”',
			'Implementing “Dogs, JavaScript & An API 🐶 Fetch, Promises & Async Await” Static Azure Website',
			'Start reviewing the client code' ])
	}

	return makeSlideDeck([ prework, announcements, agenda, discussion3Breakout, preworkNext, programmingTogether ])
}

const web_3_3of6_prework_list = [
	'Complete through activity 9 prior to next class', '',
	`Be prepared for sprint ${sprint-1} demos and retrospectives`,
	'Those scheduled to demo please be a couple of minutes early to class' ]
const web_3_3of6_agenda_list = [
	`Sprint ${sprint-1} Demos`,
	`Sprint ${sprint-1} Retrospective`,
	`Breakout for Sprint ${sprint-1} Retrospective`,
	'Prework for Next Class' ]
export const web_3_3of6 = () => {
		const prework = () => { return tPreworkWithLogo('Prework For Today', web_3_3of6_prework_list, sprint, activityList) }
		const announcements =  () => { return basicSlideWithLogo( 'Announcements', ['No class next Friday', 'Any other announcements?']) }
		const agenda = () => { return agendaSlide(web_3_3of6_agenda_list) }
		const preworkNext = () => { return tPrework('Prework For Next Class', web_3_4of6_prework_list, sprint, activityList) }
		const metricsSubmissionPercentage = () => {
			return submissionPercentage([
				{ name: 'Discussion', due:14, submitted:12 },
				{ name: 'Quiz', due:14, submitted:14 },
				{ name: 'Lab', due:14, submitted:12 },
				{ name: 'Reflection', due: 14, submitted: 14 }
			])
		}
	
		const retrospective = () => {
			return orderedListSlide('Class Retrospective',
				'Feedback from Assignments & Reflections', [
				'Okay submission percentage... it does’t feel good to have multiple Labs not submitted',
				'Why I “don’t allow” for late assignments... because it often makes a difficult situation worse',
				'Why I don’t provide detailed quiz information between attempts', 
				'All assignments are graded and posted... maybe?', 
				'Still some difficulties creating and attaching zip files' ])
		}
		const breakout = () =>{ return retrospectiveBreakout(sprint) }
	
		return makeSlideDeck([ prework, announcements, agenda, sprintDemosIntro, sprintDemos, demoAssignment, 
			metricsSubmissionPercentage, retrospective, breakout, preworkNext ])
	}
	
	const web_3_4of6_prework_list = [
		'Complete through activity 11 prior to next class', '',
		'Focus on “Gates and Circuits” and “Computing Components” chapters and lectures',
		'Be prepared for Lab and Programming Together**' ]
