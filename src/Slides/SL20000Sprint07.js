import { getClass } from '../DataAndAPIs/Classes'

import { xyz_n_1of6_lists, xyz_n_3of6, xyz_n_5of6, xyz_n_1of6, xyz_n_6of6 } from './SL00000Sprint00'
import { tNoClassToday } from './SL00000Sprint00'
import { submissionPercentage, orderedListSlide, tDiscussionBreakout, breakoutStandard } from './SLSprint00'

import { ics_8_1of6_lists } from './SL20000Sprint08'

import { list20000Sprint06 } from '../ActivityLists/AL20000Sprint06'
import { list20000Sprint07 } from '../ActivityLists/AL20000Sprint07'

// Introduction to Computer Science (ICS) sprint 7 global values.
const sprint = 7
const activityListPrevious = () => { return list20000Sprint06(sprint-1) }
const activityList = () => { return list20000Sprint07(sprint) }

// Sprint 7 session 1 of 6: Monday
export const ics_7_1of6_lists = xyz_n_1of6_lists(sprint)
export const ics_7_1of6 = () => { 
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning', `Sprint ${sprint} Expectations:`, [
			'Similar to previous sprint with Discussion, Quiz, Lab, and Reflection',
			'Not having class on Wednesday or Friday will be challenging',
			'We will complete our scrum team Discussion Board next Monday',
			`We will also have our sprint ${sprint-1} Demos and Retrospective next Monday` ])
	}

	return xyz_n_1of6(sprint, ics_7_1of6_lists.prework, activityListPrevious, ics_7_1of6_lists.agenda, ics_7_4of6_lists.prework, activityList, sprintPlanning()) 
}

// Sprint 7 session 2 of 6: Wednesday
export const ics_7_2of6 = () => { return [ tNoClassToday ] }

// Sprint 7 session 3 of 6: Friday
export const ics_7_3of6 = () => { return [ tNoClassToday ] }

// Sprint 7 session 4 of 6: Monday
const ics_7_4of6_lists = {
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
	let slides = xyz_n_3of6(sprint, ics_7_4of6_lists, ics_7_5of6_lists.prework, activityList, metricsSubmissionPercentage, retrospective)

	slides.splice(slides.length-2,0,discussionBreakout)
	return slides
}

// Sprint 7 session 5 of 6: Wednesday
const ics_7_5of6_lists = {
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

	const slides = xyz_n_5of6(sprint, ics_7_5of6_lists, ics_7_6of6_lists.prework, activityList)
	const agendaSlide = 3
	slides.splice(agendaSlide+1, 0, breakout)
	return slides 
}

// Sprint 7 session 6 of 6: Friday

const ics_7_6of6_lists = {
	'announcements':[ 
		`All sprint ${sprint} assignments due Sunday!` ],
	'prework':[
		`All sprint ${sprint} assignments due Sunday!`, '',
		'Be prepared for Programming Together' ],
	'agenda':[
		'Sprint Progress Polling',
		'Lab & Programming Together' ]
}
export const ics_7_6of6 = () => { return xyz_n_6of6(sprint, ics_7_6of6_lists, ics_8_1of6_lists.prework, activityList) }
