import { makeSlideDeck, xyz_n_1of6, xyz_n_1of6_lists, tLab, tAnnouncementPreworkOrAgenda } from './SL00000Sprint00'

import { breakoutStandard, tPreworkWithLogo, tPrework, agendaSlide, basicSlideWithLogo, bulletListSlide, discussionBreakout, orderedListSlide, submissionPercentage, tQuiz } from './SLSprint00'
import { sprintDemosIntro, sprintDemos, demoAssignment, retrospectiveBreakout } from './SLSprint00'

import { list24700Sprint02 } from '../ActivityLists/AL24700Sprint02' 
import { list24700Sprint03 } from '../ActivityLists/AL24700Sprint03'

import { web_4_1of6_prework_list } from './SL24700Sprint04'

const sprint = 3
const activityListPrevious = () => { return list24700Sprint02(sprint-1) }
const activityList = () => { return list24700Sprint03(sprint) }


// Session 1 of 6: Monday
export const web_3_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const web_3_1of6 = () => { return xyz_n_1of6(sprint, web_3_1of6_PAaA.prework, activityListPrevious, web_3_1of6_PAaA.agenda, web_3_2of6_PAaA.prework, activityList) }

const web_3_2of6_PAaA = {
	'prework': [
		'Complete through activity 4 prior to next class', '',
		'Be prepared Discussion Board 3',
		'Be prepared for Lab & Programming Together' ],
	'announcements':[ 
		'Any announcements or questions?' ],
	'agenda':[ 
		'Sprint Progress Polling',
		'Lab... as time allows',
		`Quiz ${sprint}` ],
}

export const web_3_2of6 = () => {
	const prework = () => { return tPreworkWithLogo('Prework For Today', web_3_2of6_prework_list, sprint, activityList) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', ['No class next Friday (October 6)']) }
	const agenda = () => { return agendaSlide(web_3_2of6_agenda_list) }
	const preworkNext = () => { return tPrework('Prework For Next Class', web_3of6_PAaA.prework, sprint, activityList) }

	const discussion3Breakout = () => { return discussionBreakout(sprint) } 
	const programmingTogether = () => {
		return bulletListSlide('Lab & Programming Together', 
			'Let’s commit to making 30 minutes of focused effort to our Lab assignment by:', [
			'Understanding and setting up a GitHub organization for your scrum team',
			'Setting up and hosting a public “Getting to Know Each Other Teams” repository',
			'Successfully adding all team members to your “Getting to Know Each Other Teams” repository',
			'Having each team member individually update the README.md file with their name and email address',
			'Reviewing the repository commit history to see everyone’s commit'])
	}

	return makeSlideDeck([ prework, announcements, agenda, discussion3Breakout, preworkNext, programmingTogether ])
}

const web_3of6_PAaA = {
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


//BugBug: Fix this
const ics_3_1of6_prework_list = [
	'Everything is due Sunday!', '',
	`Be prepared for Sprint ${sprint} Planning` ]

const ics_3_1of6_agenda_list = [
	`Sprint ${sprint} Planning`,
	`Sprint ${sprint} Planning Breakout`,
	'Review Wednesday’s Demo Schedule',
	'Prework for Next Class' ]
//End BugBug: Fix this

export const web_3_1of6_prework_list = ics_3_1of6_prework_list
const web_3_1of6_agenda_list = ics_3_1of6_agenda_list
export const web_3_1of6X = () => { return xyz_n_1of6(sprint, web_3_1of6_prework_list, activityListPrevious, web_3_1of6_agenda_list, web_3_2of6_prework_list, activityList) }

const web_3_2of6_prework_list = [
	'Complete through activity 4 prior to next class', '',
	'Be prepared Discussion Board 3',
	'Be prepared for Lab & Programming Together' ]
const web_3_2of6_agenda_list = [
	`Discussion Board ${sprint} as a Scrum Team`,
	'Prework for Next Class',
	'Lab & Programming Together' ]
export const web_3_2of6X = () => {
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
		'Focus on reading assignments and associated lectures',
		'Be prepared for Lab and Programming Together**' ]
	const web_3_4of6_agenda_list = [
		'JavaScript Breakout',
		'Prework for Next Class',
		'Lab & Programming Together' ]
	export const web_3_4of6 = () => {
		const prework = () => { return tPreworkWithLogo('Prework For Today', web_3_4of6_prework_list, sprint, activityList) }
		const announcements =  () => { return basicSlideWithLogo( 'Announcements', [
			'No class Friday', 
			'No Computing XML or AJAX breakout sessions this sprint (you are still responsible for the content)']) 
		}
		const agenda = () => { return agendaSlide(web_3_4of6_agenda_list) }
		const preworkNext = () => { return tPrework('Prework For Next Class', web_3_5of6_prework_list, sprint, activityList) }
	
		const breakout = () => { 
			return breakoutStandard( 
				'Breakout: JavaScript', 
				'In this breakout session on JavaScript your team will discuss:', [
				'Origins and History', 
				'Recent Evolution including Babble and React', 
				'HTML, JavaScript, Events, and Document Object Modal (DOM)',
				'Dynamically typed and call-by-value',
				'Input validation and regular expressions',
				'3-Tier architecture relevance' ])
		}
	
		return makeSlideDeck([ announcements, prework, agenda, breakout, preworkNext, tLab ])
	}
	
	const web_3_5of6_announcement_list = [
		'Announcements', 
		'No class Friday', 
		`All sprint ${sprint} assignments are due Sunday!`]
	const web_3_5of6_prework_list = [
		'Prework For Today', 
		'Complete through activity 14 prior to next class', '',
		'Be prepared for Lab and Programming Together',
		'Be prepared for Quiz 3' ]
	const web_3_5of6_agenda_list = [
		'Agenda', 
		'Lab and Programming Together',
		'Prework for Next Class',
		'Quiz 3' ]
	export const web_3_5of6 = () => {
		const announcements =  () => { return tAnnouncementPreworkOrAgenda(web_3_5of6_announcement_list) }
		const prework = () => { return tAnnouncementPreworkOrAgenda(web_3_5of6_prework_list, sprint, activityList) }
		const agenda = () => { return tAnnouncementPreworkOrAgenda(web_3_5of6_agenda_list) }
	
		const preworkNext = () => { return tPrework('Prework For Next Class', web_4_1of6_prework_list, sprint, activityList) }
		const quiz = () => { return tQuiz(sprint) }
	
		return makeSlideDeck([ announcements, prework, agenda, tLab, preworkNext, quiz ])
	}
	
	// No “web_3_6of6...” prework or agenda structures as there is no class Friday due to Fall Break.
	export const web_3_6of6 = () => {
		const announcements =  () => { return basicSlideWithLogo( 'Announcements', [
			'No class', 
			`All sprint ${sprint} assignments are due Sunday!`]) 
		}
	
		return [ announcements ]
	}