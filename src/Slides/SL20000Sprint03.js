import { makeSlideDeck, xyz_n_1of6, xyz_n_1of6_lists, xyz_n_3of6, xyz_n_4of6, xyz_n_5of6, xyz_n_6of6_PAaA, xyz_n_6of6 } from './SL00000Sprint00'
import { agendaSlide, basicSlideWithLogo, breakoutStandard, bulletListSlide, orderedListSlide, discussionBreakout, submissionPercentage, tPrework, tPreworkWithLogo } from './SLSprint00'

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

// Session 2 of 6: Wednesday
const ics_3_2of6_prework_list = [
	'Complete through activity 5 prior to next class', '',
	'Be prepared Discussion Board 3',
	'Be prepared for Lab & Programming Together' ]
export const ics_3_2of6_agenda_list = [
	'Previewing midterm exam during sprint 4 in-person on Wednesday, October 18',
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

// Session 3 of 6: Friday
// Todo: Consider where “Gates & Circuits” and “Computing Components” breakout should occur.
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

// Session 4 of 6: Monday
const breakoutGateAndCircuitsName = 'Gates & Circuits'
const breakoutGateAndCircuits = () => { 
	return breakoutStandard( 
		`Breakout: ${breakoutGateAndCircuitsName}`, 
		`In this breakout session on our ${breakoutGateAndCircuitsName} reading and lecture your team will discuss:`, [
		'Gates', 
		'Circuits and how they relate to Gates', 
		'NOT and AND gates',
		'OR, XOR, NAND, and NOR gates and share which one is consistent with English language "or"',
		'Integrated Circuits, CPU Chips, and how much does it cost to buy 100,000,000 (100 million) gates' ])
}

const breakoutComputingComponentsName = 'Computing Components'
const breakoutComputingComponents = () => { 
	return breakoutStandard( 
		`Breakout: ${breakoutComputingComponentsName}`, 
		`In this breakout session on our ${breakoutComputingComponentsName} reading and lecture your team will discuss:`, [
		'Computing Components',
		'Stored Program plus Von Neumann Architecture',
		'Ram and Rom plus Secondary Storage',
		'Embedded Systems',
		'Parallel Architectures plus Classes of Parallel Hardware' ])
}

const ics_3_4of6_PAaA = {
	'prework': [
		'Complete through activity 11 prior to next class', '',
		`Focus on “${breakoutGateAndCircuitsName}” and “${breakoutGateAndCircuitsName}” chapters and lectures`,
		'Be prepared for Lab and Programming Together' ],
	'announcements':[ 
		`Have we discussed “${breakoutGateAndCircuitsName}”?`,
		'Any announcements or questions?' ],
	'agenda':[
		'Sprint Progress Polling', 
		`“${breakoutGateAndCircuitsName}” or “${breakoutGateAndCircuitsName}”s Breakout`,
		'Prework for Next Class',
		'Lab & Programming Together' ]
}
export const ics_3_4of6 = () => { 
	let slides = xyz_n_4of6(sprint, ics_3_4of6_PAaA, ics_3_5of6_PAaA.prework, activityList, breakoutComputingComponents)
	// Not sure if we completed “Gate & Circuits breakout.
	slides.splice(slides.length-4, 0, breakoutGateAndCircuits)
	return slides
}

const ics_3_5of6_PAaA = {
	'prework': [
		'Complete through activity 12 prior to next class', '',
		'Be prepared for Lab and Programming Together as time allows',
		`Be prepared for Quiz ${sprint}` ],
	'announcements':[ 
		'ECaMS Study Table open for business in Memorial Hall - Room 129... highly recommended!',
		'Any other announcements or questions?' ],
	'agenda':[
		'Lab and Programming Together',
		'Prework for Next Class',
		`Quiz ${sprint}` ]
}
export const ics_3_5of6 = () => { return xyz_n_5of6(sprint, ics_3_5of6_PAaA, ics_3_6of6_PAaA.prework, activityList) }

// Session 6 of 6: Friday
const ics_3_6of6_PAaA = xyz_n_6of6_PAaA('Complete through activity activity 13 and actively working on 14', sprint)
export const ics_3_6of6 = () => { return  xyz_n_6of6(sprint, ics_3_6of6_PAaA, ics_4_1of6_prework_list, activityList) }

