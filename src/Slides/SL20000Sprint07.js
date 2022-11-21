import { xyz_n_nof6_lists, xyz_n_1of6_lists, xyz_n_4of6, xyz_n_1of6 } from './SL00000Sprint00'

import {tUnderConstruction, tNoClassToday } from './SL00000Sprint00'

import { orderedListSlide, breakoutStandard } from './SLSprint00'

import { list20000Sprint06 } from '../ActivityLists/AL20000Sprint06'
import { list20000Sprint07 } from '../ActivityLists/AL20000Sprint07'

// Introduction to Computer Science (ICS) sprint 6 global values.
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
		'No class Wednesday or Friday this week in observance of Thanksgiving' ],
	'prework':[
		'Complete through activity 5 prior to next class', '',
		'Be prepared for Demos & Retrospectives',
		`Be prepared Discussion Board ${sprint}` ],
	'agenda':[
		`Discussion Board ${sprint} as a scrum team`,
		'Review Demo Schedule for Next Class',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}
// BugBug: Review and update slides to include Discussion Board as well.
export const ics_7_4of6 = () =>  {
	const breakout = () => { 
		return breakoutStandard( 
			'Breakout: Security', 
			'In this breakout session we will explore Security:', [
				'Information Security and Confidentiality, Availability, and Integrity',
				'Access, Authentication, Authorization, CAPTCHA',
				'Malicious Code /Malware, Worms, Trojan Horses, Phishing, and DoS',
				'Cryptography, Encryption/Decryption, ciphers, public-key cryptography, and digital signatures',
				'Protecting Online Information' ]
		)
	}

	return xyz_n_4of6(sprint, ics_7_4of6_lists, ics_7_5of6_lists.prework, activityList, breakout)
}

// Sprint 7 session 5 of 6: Wednesday
const ics_7_5of6_lists = xyz_n_nof6_lists(sprint)
export const ics_7_5of6 = () => { return [ tUnderConstruction ] }

// Sprint 7 session 6 of 6: Friday
// const ics_7_6of6_lists = xyz_n_nof6_lists(sprint)
export const ics_7_6of6 = () => { return [ tUnderConstruction ] }
