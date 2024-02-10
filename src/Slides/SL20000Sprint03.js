import { makeSlideDeck, xyz_n_1of6, xyz_n_1of6_lists, xyz_n_4of6, xyz_n_5of6, xyz_n_6of6_PAaA, xyz_n_6of6 } from './SL00000Sprint00'
import { agendaSlide, basicSlideWithLogo, breakoutStandard, bulletListSlide, orderedListSlide, discussionBreakout, submissionPercentage, tPrework, tPreworkWithLogo } from './SLSprint00'

import { list20000Sprint02 } from '../ActivityLists/AL20000Sprint02' 
import { list20000Sprint03 } from '../ActivityLists/AL20000Sprint03'

import { ics_4_1of6_prework_list } from './SL20000Sprint04'
import { getClassSection } from '../DataAndAPIs/ClassSections'
import { basicSlide } from './SLSprint00'
import { checklistAnnouncementsPreworkAndAgenda } from './SL00000Sprint00'
import { tReviewDemoSchedule } from './SL00000Sprint00'
import { sprintDemosIntro, sprintDemos, demoAssignment } from './SLSprint00'
import { completeDeck } from './SL00000Sprint00'

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
	`Discussion Board ${sprint} as a Scrum Team`,
	'Lab & Programming Together',
	'Review Demo Schedule for Next Class',
	'Prework for Next Class' ]
export const ics_3_2of6 = () => {
	const prework = () => { return tPreworkWithLogo('Prework For Today', ics_3_2of6_prework_list, sprint, activityList) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', ['No class next Friday (October 6)']) }
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
const ics_3_3of6_PAaA = {
	'prework': [
		'Complete through activity 9 prior to next class', '',
		`Be prepared for sprint ${sprint-1} demos and retrospectives`,
		'Those scheduled to demo please be a couple of minutes early to class' ],
	'announcements':[ 
		'No class next Friday (October 6)' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}
export const ics_3_3of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_3_3of6_PAaA, sprint, activityList)
	const metrics = () => {
		return basicSlide(`Sprint ${sprint-1} Metrics`, [
			'What is Bob Parsons Rule #9?', '',
			`Let’s take a minute and review our Sprint ${sprint-1} Submission Percentage class metric.` ])
	}
	const metricsSubmissionPercentage = () => {
		if (getClassSection() === '002') {
			return submissionPercentage([
				{ name: 'Discussion', due:27, submitted:27 },
				{ name: 'Quiz', due:27, submitted:27 },
				{ name: 'Lab', due:27, submitted:27 },
				{ name: 'Reflection', due: 27, submitted: 26 }])
		}
		else {
			return submissionPercentage([
				{ name: 'Discussion', due:24, submitted:24 },
				{ name: 'Quiz', due:24, submitted:24 },
				{ name: 'Lab', due:24, submitted:23 },
				{ name: 'Reflection', due: 24, submitted: 23 }])
		}
	}
	// Todo: Consider adding the pretty slides back into slide deck for Demos and Retrospectives. 
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Excellent submission percentage',
			'Do not go searching for the person who forgot to submit their Reflection', 
			'Grading is a bit of a work in process',
			'We still need some work on creating, testing, and submitting Zip files' ])
	}
	const retrospectiveBreakout = () => {
		return orderedListSlide('Breakout Session for Team Retrospective', 
			'As a scrum team consider:', [
			`How does your team feel about sprint ${sprint-1} now that it is over`,
			`What could be done to make sprint ${sprint-1} or the class overall better or more manageable`,
			'What improvements should we make as a class, team, or individual going forward' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_3_4of6_PAaA.prework, sprint, activityList) }


	return completeDeck(slideDeck, [ tReviewDemoSchedule, sprintDemosIntro, sprintDemos, demoAssignment, metrics, 
		metricsSubmissionPercentage, retrospective, retrospectiveBreakout, preworkNext ])
}

// Session 4 of 6: Monday
/* Include Representation and theHumbleTextFile
const breakoutRepresentation = () => { 
	return breakoutStandard('Breakout: Data Representation', 
		'In this breakout session on Data Representation (reading and lecture) your team will:', [
		'Analog and Digital Data',
		'Binary Representation of Numeric Data',
		'Text including ASCII, Unicode, UTF-8, UTF-16 Representations, and PDF',
		'Photo and Audio Representation Priorities',
		'Video Representation priorities' ])
}

import { theHumbleTextFileName, theHumbleTextFile } from './SL00000Sprint02'

		'Breakout: Data Representation... moved to Friday',
		`Complete Data Representation and ${theHumbleTextFileName}`,
*/



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
const ics_3_4of6_PAaA = {
	'prework': [
		'Complete through activity 11 prior to next class', '',
		`Focus on “${breakoutGateAndCircuitsName}” and the “${breakoutGateAndCircuitsName}” chapters and lectures`,
		'Be prepared for Lab and Programming Together' ],
	'announcements':[ 
		'No class next Friday (October 6)',
		`All sprint ${sprint} assignments due Sunday`, '',
		'Sprint 2 assignments all posted',
		'If you need to resubmit your “Getting to Know Each Other” zip file, email it to me today' ],
	'agenda':[
		'Sprint Progress Polling', 
		`“${breakoutGateAndCircuitsName}”s Breakout`,
		'Prework for Next Class',
		'Lab & Programming Together' ]
}
export const ics_3_4of6 = () => { return xyz_n_4of6(sprint, ics_3_4of6_PAaA, ics_3_5of6_PAaA.prework, activityList, breakoutGateAndCircuits) }

// Session 5 of 6: Wednesday
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
const ics_3_5of6_PAaA = {
	'prework': [
		'Complete through activity 14 prior to next class', '',
		`Be prepared for ${breakoutComputingComponentsName}`,
		'Be prepared for Lab and Programming Together as time allows',
		`Be prepared for Quiz ${sprint}` ],
	'announcements':[ 
		'No class next Friday (October 6)',
		`All sprint ${sprint} assignments due Sunday` ],
	'agenda':[
		'Lab and Programming Together',
		`${breakoutComputingComponentsName}`,
		'Prework for Next Class',
		`Quiz ${sprint}` ]
}
export const ics_3_5of6 = () => { 
	let slides = xyz_n_5of6(sprint, ics_3_5of6_PAaA, ics_3_6of6_PAaA.prework, activityList)
	slides.splice(slides.length-3, 0, breakoutComputingComponents)
	return slides 
}

// Session 6 of 6: Friday
const ics_3_6of6_PAaA = xyz_n_6of6_PAaA('Complete through activity activity 13 and actively working on 14', sprint)
export const ics_3_6of6 = () => { return  xyz_n_6of6(sprint, ics_3_6of6_PAaA, ics_4_1of6_prework_list, activityList) }

