import { getClass } from '../DataAndAPIs/Classes'

import { xyz_n_1of6_lists, xyz_n_3of6, xyz_n_5of6, xyz_n_1of6, xyz_n_6of6, tNoClassToday } from './SL00000Sprint00'
import { submissionPercentage, orderedListSlide, tDiscussionBreakout, breakoutStandard } from './SLSprint00'

import { ics_8_1of6_PAaA } from './SL20000Sprint08'

import { checklistAnnouncementsPreworkAndAgenda } from './SL00000Sprint00'
import { retrospectiveIntroduction } from './SLSprint00'
import { tPrework } from './SLSprint00'
import { completeDeck } from './SL00000Sprint00'
import { sprintDemos, sprintDemosIntro, demoAssignment } from './SLSprint00'
import { tDemos } from './SL00000Sprint00'

import { list20000Sprint06 } from '../ActivityLists/AL20000Sprint06'
import { list20000Sprint07 } from '../ActivityLists/AL20000Sprint07'

// Introduction to Computer Science (ICS) sprint 7 global values.
const sprint = 7
const activityListPrevious = () => { return list20000Sprint06(sprint-1) }
const activityList = () => { return list20000Sprint07(sprint) }

// Session 1 of 6: Monday
export const ics_7_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const ics_7_1of6 = () => { return [ tNoClassToday ] }

// Session 2 of 6: Wednesday
export const ics_7_2of6_PAaA = xyz_n_1of6_lists(sprint)
export const ics_7_2of6 = () => { 
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning as a Class', `Sprint ${sprint} Expectations:`, [
			'Similar to previous sprints with Discussion, Quiz, Lab, and Reflection',
			'We missed Monday due to the Easter Holiday recess which is challenging',
			'Demos will be occurring Friday... including Aidan',
			'We will complete our scrum team Discussion Board on Friday',
			`We will have sprint ${sprint-1} Retrospective on Friday also if possible` ])
	}

	return xyz_n_1of6(sprint, ics_7_1of6_PAaA.prework, activityListPrevious, ics_7_1of6_PAaA.agenda, ics_7_4of6_PAaA.prework, activityList, sprintPlanning) 
}

// Session 3 of 6: Friday
const ics_7_3of6_PAaA = {
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared for Demos & Retrospectives' ],
	'announcements':[ 
		'Fall 2023 registration is process',
		'Charlie Brown at the Lewis Theater this weekend' ],
	'agenda':[
		`Discussion Board ${sprint} as a scrum team`,
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		'Lab' ]
}
export const ics_7_3of6 = () => { 
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:13, submitted:10 },
			{ name: 'Quiz', due:13, submitted:12 },
			{ name: 'Lab', due:13, submitted:11 },
			{ name: 'Reflection', due: 13, submitted: 12 }])
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
		'Feedback from Assignments & Reflections', [
		`Not very good Sprint ${sprint-1} submission percentage`,
		'I am running substantially behind on grading', 
		'Can we make one final push to the end? ' ])
	}
	const scrumTeamDemos = () => {
		return orderedListSlide('Scrum Team Demos', 
			'How do/will your team handle Demos?', [
			'Did you complete and create an artifact for your Demos?',
			'Aidan Interactive Rendering Demo', 
			'What is your team’s “Best-of-the-best” demo... as time allows' ])
	}
	const scrumTeamRetrospective = () => {
		return orderedListSlide('Scrum Team Retrospective',
			'What is the highest priority Continuous Improvement action for your team?', [
			`What will your team need to do to guarantee Sprint ${sprint+1} planning is complete on the first day of the Sprint?`,
			'Do we need to do something different to make sure that team members are here in person for sprint planning?',
			'What is the highest priority Continuous Improvement item for your team... will you make it a story in the future?' ])
	}

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_7_3of6_PAaA, sprint, activityList)
	const retrospectiveInto = () => { return retrospectiveIntroduction(sprint)}
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_7_4of6_PAaA.prework, sprint, activityList) }
	return completeDeck(slideDeck, [ discussionBreakout, sprintDemosIntro, sprintDemos, tDemos, demoAssignment, retrospectiveInto, metricsSubmissionPercentage, retrospective, scrumTeamDemos, scrumTeamRetrospective, preworkNext])
}

// Sprint 7 session 4 of 6: Monday
const ics_7_4of6_PAaA = {
	'announcements':[ 
		'Welcome back! I hope you had a wonderful Thanksgiving holiday.' ],
	'prework':[
		'Complete through activity 5 prior to next class', '',
		'Be prepared for Demos & Retrospectives',
		`Be prepared Discussion Board ${sprint}` ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		`Discussion Board ${sprint} as a scrum team`,
		'Prework for Next Class' ]
}
export const ics_7_4of6 = () =>  {
	const metricsSubmissionPercentage = () => {
		if (getClass().section === '002') {
			return submissionPercentage([
				{ name: 'Discussion', due:27, submitted:25 },
				{ name: 'Quiz', due:27, submitted:27 },
				{ name: 'Lab', due:27, submitted:26 },
				{ name: 'Reflection', due: 27, submitted: 27 }
			])
		} else {
			return submissionPercentage([
				{ name: 'Discussion', due:27, submitted:25 },
				{ name: 'Quiz', due:27, submitted:26 },
				{ name: 'Lab', due:27, submitted:26 },
				{ name: 'Reflection', due: 27, submitted: 25 }
			])
		}
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
		'Feedback from Assignments & Reflections', [
		'Solid submission percentage... well done.',
		'All assignments graded and posted', 
		'Very nice work!' ])
	}
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 

	// Due to the Thanksgiving holiday we missed sessions 2 and 3 so we mostly doing session 3 activities here in session 4. 
	let slides = xyz_n_3of6(sprint, ics_7_4of6_PAaA, ics_7_5of6_PAaA.prework, activityList, metricsSubmissionPercentage, retrospective)

	slides.splice(slides.length-2,0,discussionBreakout)
	return slides
}

// Sprint 7 session 5 of 6: Wednesday
const ics_7_5of6_PAaA = {
	'announcements':[ 
		'Any Announcements?' ],
	'prework':[
		'Complete through activity 8 prior to next class', '',
		'Be prepared for Security Breakout',
		`Be prepared for Quiz ${sprint}` ],
	'agenda': [
		'Security Breakout',
		'Lab & Programming Together',
		`Quiz ${sprint}` ]
}
export const ics_7_5of6 = () => { 
	const breakout = () => { 
		return breakoutStandard( 
			'Breakout: Security', 
			'In this breakout session we will explore Security:', [
				'Information Security and Confidentiality, Availability, and Integrity',
				'Access, Authentication, Authorization, CAPTCHA',
				'Malicious Code, Malware, Worms, Trojan Horses, Phishing, and DoS',
				'Cryptography, Encryption/Decryption, ciphers, public-key cryptography, and digital signatures',
				'Protecting Online Information',
				'Security and Usability Tradeoffs' ]
		)
	}

	const slides = xyz_n_5of6(sprint, ics_7_5of6_PAaA, ics_7_6of6_PAaA.prework, activityList)
	const agendaSlide = 3
	slides.splice(agendaSlide+1, 0, breakout)
	return slides 
}

// Sprint 7 session 6 of 6: Friday

const ics_7_6of6_PAaA = {
	'announcements':[ 
		`All sprint ${sprint} assignments due Sunday!` ],
	'prework':[
		`All sprint ${sprint} assignments due Sunday!`, '',
		'Be prepared for Programming Together' ],
	'agenda':[
		'Sprint Progress Polling',
		'Lab & Programming Together' ]
}
export const ics_7_6of6 = () => { return xyz_n_6of6(sprint, ics_7_6of6_PAaA, ics_8_1of6_PAaA.prework, activityList) }
