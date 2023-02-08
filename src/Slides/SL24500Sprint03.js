import { xyz_n_1of6_lists, xyz_n_1of6 } from './SL00000Sprint00'

import { makeSlideDeck } from './SL00000Sprint00'
import { tPreworkWithLogo, tPrework, agendaSlide, basicSlideWithLogo, bulletListSlide, discussionBreakout } from './SLSprint00'


import { list24500Sprint02 } from '../ActivityLists/AL24500Sprint02'
import { list24500Sprint03 } from '../ActivityLists/AL24500Sprint03'

// Constants
const sprint = 3
const activityList = () => { return list24500Sprint03(sprint) }
const activityListPrevious = () => { return list24500Sprint02(sprint-1) }

export const oop_3_1of6_PreworkAnnouncementsAndAgenda = {
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

// Session 1 of 6: Monday
export const oop_3_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const oop_3_1of6 = () => { return xyz_n_1of6(sprint, oop_3_1of6_PAaA.prework, activityListPrevious, oop_3_1of6_PAaA.agenda, oop_3_2of6_prework_list, activityList) }

// Session 2 of 6: Wednesday
const oop_3_2of6_prework_list = [
	'Complete through activity 4 prior to next class', '',
	`Be prepared for team Discussion ${sprint} and Lab` ]
export const oop_3_2of6_agenda_list = [
	`Discussion Board ${sprint} as a Scrum Team`,
	'Lab & Programming Together',
	'Review Demo Schedule for Next Class',
	'Prework for Next Class' ]

export const oop_3_2of6 = () => {
	const prework = () => { return tPreworkWithLogo('Prework For Today', oop_3_2of6_prework_list, sprint, activityList) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', ['Any announcements?']) }
	const agenda = () => { return agendaSlide(oop_3_2of6_agenda_list) }
	const preworkNext = () => { return tPrework('Prework For Next Class', oop_3_3of6_prework_list, sprint, activityList) }

	const discussion3Breakout = () => { return discussionBreakout(sprint) } 
	const programmingTogether = () => {
		return bulletListSlide('Lab & Programming Together', 
			'Let’s commit to making 30 minutes of focused effort to our Lab assignment by:', [
			'Discussing and Implementing our README.md and LICENSE file in GitHub', 
			'Adding a Java file', 
			'Pushing the Java file to GitHub',
			'' ])
	}

	return makeSlideDeck([ prework, announcements, agenda, discussion3Breakout, programmingTogether, preworkNext ])
}

const oop_3_3of6_prework_list = [
	'Complete through activity 9 prior to next class', '',
	`Be prepared for sprint ${sprint-1} demos and retrospectives`,
	'Those scheduled to demo please be a couple of minutes early to class' ]