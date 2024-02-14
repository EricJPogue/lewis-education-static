import { list44500Sprint02 } from '../ActivityLists/AL44500Sprint02'
import { list44500Sprint03 } from '../ActivityLists/AL44500Sprint03'

import { xyz_n_1of6_lists, xyz_n_1of6, makeSlideDeck } from './SL00000Sprint00'
import { agendaSlide, basicSlideWithLogo, bulletListSlide, discussionBreakout, tPrework, tPreworkWithLogo } from './SLSprint00'

// Constants
const sprint = 3
const activityList = () => { return list44500Sprint03(sprint) }
const activityListPrevious = () => { return list44500Sprint02(sprint-1) }

// Session 1 of 6: Monday
export const af_3_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const af_3_1of6 = () => { return xyz_n_1of6(sprint, af_3_1of6_PAaA.prework, activityListPrevious, af_3_1of6_PAaA.agenda, af_3_2of6_PAaA.prework, activityList) }

const af_3_2of6_PAaA = {
	'prework': [
		'Complete through activity 5 prior to next class', '',
		'Be prepared for Discussion 3',
		'Be prepared for Lab & Programming Together Wednesday',
		'Demos and retrospectives will be Friday' ],
	'announcements':[
		'Any questions or announcements?' ],
	'agenda':[
		`Sprint ${sprint} Planning Questions & Answers`,
		`Discussion Board ${sprint} as a scrum team`,
		'Confirm Demos for Next Class',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}

export const af_3_2of6 = () => {
	const prework = () => { return tPreworkWithLogo('Prework For Today', af_3_2of6_PAaA.prework, sprint, activityList) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', af_3_2of6_PAaA.announcements ) }
	const agenda = () => { return agendaSlide(af_3_2of6_PAaA.agenda) }
	const preworkNext = () => { return tPrework('Prework For Next Class', af_3_3of6_PAaA.prework, sprint, activityList) }

	const discussion3Breakout = () => { return discussionBreakout(sprint) } 
	const programmingTogether = () => {
		return bulletListSlide('Lab & Programming Together', 
			'Let’s commit to making 30 minutes of focused effort to our Lab assignment by:', [
			'Discussing and Implementing our README.md and LICENSE file in GitHub', 
			'Clone from Azure React template',
			'Edit, Test Local... Repeat (every 5 minutes)', 
			'Git Add, Git Commit, Git Push, Test Production (Every hour)',
			'Pus everything at the end of each day' ])
	}

	return makeSlideDeck([ prework, announcements, agenda, discussion3Breakout, programmingTogether, preworkNext ])
}

// Session 3 of 6: Friday
const af_3_3of6_PAaA = {
	'prework': [
		'Complete through activity 9 prior to next class', '',
		`Be prepared for sprint ${sprint-1} demos and retrospectives`,
		'Those scheduled to demo please be a couple of minutes early to class' ],
	'announcements':[ 
		'Any questions or announcements?' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}