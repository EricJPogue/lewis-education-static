import { xyz_n_1of6_lists, xyz_n_4of6, xyz_n_1of6, tLab } from './SL00000Sprint00'
import { submissionPercentage, orderedListSlide, tDiscussionBreakout, breakoutStandard } from './SLSprint00'
import { tNoClassToday } from './SL00000Sprint00'

import { checklistAnnouncementsPreworkAndAgenda } from './SL00000Sprint00'
import { retrospectiveIntroduction } from './SLSprint00'
import { tPrework } from './SLSprint00'
import { completeDeck } from './SL00000Sprint00'
import { sprintDemos, sprintDemosIntro, demoAssignment } from './SLSprint00'
import { tDemos } from './SL00000Sprint00'

import { list20000Sprint06 } from '../ActivityLists/AL20000Sprint06'
import { list20000Sprint07 } from '../ActivityLists/AL20000Sprint07'

import { getClass } from '../DataAndAPIs/Classes'
import { tQuiz } from './SLSprint00'

// Introduction to Computer Science (ICS) sprint 7 global values.
const sprint = 7
const activityListPrevious = () => { return list20000Sprint06(sprint-1) }
const activityList = () => { return list20000Sprint07(sprint) }

// Session 1 of 6: Monday
export const ics_7_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const ics_7_1of6 = () => { 
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning as a Class', `Sprint ${sprint} Expectations:`, [
			'Similar to previous sprints only in that it has a Discussion, Quiz, Lab, and Reflection',
			'Everything else about sprint 7 is different from other sprints',
			`Sprint ${sprint} is different that sprint ${sprint} has ever been in the past`,
			`Sprint ${sprint+1} is connected with sprint ${sprint}`,
			'I will be looking for your feedback on if these are good changes' ])
	}

	return xyz_n_1of6(sprint, ics_7_1of6_PAaA.prework, activityListPrevious, ics_7_1of6_PAaA.agenda, ics_7_4of6_PAaA.prework, activityList, sprintPlanning) 
}

// Session 2 of 6: Wednesday
export const ics_7_2of6_PAaA = {
	'prework':[
		'Recognize that there is no class Wednesday or Friday', '',
		`Decide. Do you want to be done with sprints ${sprint} & ${sprint+1} at the end of sprint ${sprint}... this will take work over the break`,
		'Be prepared for Discussion Board & Lab on Monday' ],
	'announcements':[ 
		'TBD' ],
	'agenda':[
		`Discussion Board ${sprint} as a scrum team`,
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		'Lab' ]
}
export const ics_7_2of6 = () => { return [ tNoClassToday ] }

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
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared Lab' ],
	'announcements':[ 
		'You need to have a solid start on your Class Project by Wednesday if you intend to present it at the end of sprint 7' ],
	'agenda':[
		'Sprint Progress Polling',
		`Discussion Board ${sprint} as a scrum team`,
		'Lab' ]
}

export const ics_7_4of6 = () => { 
	const breakout = () => { 
		return breakoutStandard( 
			'Breakout: Security... next class', 
			'In this breakout session we will explore Security:', [
				'Information Security and Confidentiality, Availability, and Integrity',
				'Access, Authentication, Authorization, CAPTCHA',
				'Malicious Code, Malware, Worms, Trojan Horses, Phishing, and DoS',
				'Cryptography, Encryption/Decryption, ciphers, public-key cryptography, and digital signatures',
				'Protecting Online Information',
				'Security and Usability Tradeoffs' ]
		)
	}
	
	return xyz_n_4of6(sprint, ics_7_4of6_PAaA, ics_7_5of6_PAaA.prework, activityList, breakout)
}

// Sprint 7 session 5 of 6: Wednesday
const ics_7_5of6_PAaA = {
	'announcements':[ 
		'I need to know if you are likely to be ready to demo your class project next Friday' ],
	'prework':[
		'Complete through activity 8 prior to next class', '',
		'Be prepared for Demos and Retrospectives',
		'Be prepared for Security Breakout' ],
	'agenda': [
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		'Security Breakout' ]
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

	const metricsSubmissionPercentage = () => {
		if (getClass().section === '002') {
			return submissionPercentage([
				{ name: 'Discussion', due:27, submitted:26 },
				{ name: 'Quiz', due:27, submitted:27 },
				{ name: 'Lab', due:27, submitted:25 },
				{ name: 'Reflection', due: 27, submitted: 25 }])
		}
		else {
			return submissionPercentage([
				{ name: 'Discussion', due:24, submitted:23 },
				{ name: 'Quiz', due:24, submitted:23 },
				{ name: 'Lab', due:24, submitted:23 },
				{ name: 'Reflection', due: 24, submitted: 23 }])
		}
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
		'Feedback from Assignments & Reflections', [
		'Solid submission percentage',
		'Grading is a work in process', 
		'Let’s make our final push to deliver a class project that we can be proud of delivering' ])
	}

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_7_5of6_PAaA, sprint, activityList)
	const retrospectiveInto = () => { return retrospectiveIntroduction(sprint)}
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_7_6of6_PAaA.prework, sprint, activityList) }
	return completeDeck(slideDeck, [ sprintDemosIntro, sprintDemos, tDemos, demoAssignment, retrospectiveInto, metricsSubmissionPercentage, retrospective, breakout, preworkNext])
}

// Sprint 7 session 6 of 6: Friday
const ics_7_6of6_PAaA = {
	'prework':[
		`All sprint ${sprint} assignments due Sunday!`, '',
		`Be prepared for Quiz ${sprint}`,
		'Be prepared for Lab' ],
	'announcements':[ 
		'Monday is Lab and Programming Together' ],
	'agenda':[
		'Sprint Progress Polling',
		'Quiz',
		'Lab & Programming Together' ]
}
export const ics_7_6of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_7_6of6_PAaA, sprint, activityList)
	const quiz = () => { return tQuiz(sprint) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_7_4of6_PAaA.prework, sprint, activityList) }
	return completeDeck(slideDeck, [ quiz, tLab, preworkNext]) 
}
