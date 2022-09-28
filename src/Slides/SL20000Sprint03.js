
import { makeSlideDeck, xyz_n_1of6 } from './SL00000Sprint00'

import { tPreworkWithLogo, tPrework, agendaSlide, basicSlideWithLogo, bulletListSlide, discussionBreakout } from './SLSprint00'

import { list20000Sprint02 } from '../ActivityLists/AL20000Sprint02' 
import { list20000Sprint03 } from '../ActivityLists/AL20000Sprint03'

const sprint = 3
const activityList = () => { return list20000Sprint03(sprint) }
const activityListPrevious = () => { return list20000Sprint02(sprint-1) }

// Introduction to Computer Science Sprint 3 Session 1 of 6
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
