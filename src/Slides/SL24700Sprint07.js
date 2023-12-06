import { xyz_n_1of6_lists, xyz_n_1of6, xyz_n_3of6, xyz_n_5of6, tNoClassToday } from './SL00000Sprint00'
import { orderedListSlide, submissionPercentage, tDiscussionBreakout } from './SLSprint00'

import { xyz_n_6of6 } from './SL00000Sprint00'
import { web_8_1of6_lists } from './SL24700Sprint08'

import { breakoutStandard } from './SLSprint00'

import { list24700Sprint06 } from '../ActivityLists/AL24700Sprint06'
import { list24700Sprint07 } from '../ActivityLists/AL24700Sprint07'

import { xyz_n_4of6 } from './SL00000Sprint00'

import { demoAssignment } from './SLSprint00'
import { tDemos } from './SL00000Sprint00'
import { sprintDemos } from './SLSprint00'
import { completeDeck } from './SL00000Sprint00'
import { checklistAnnouncementsPreworkAndAgenda } from './SL00000Sprint00'
import { retrospectiveIntroduction } from './SLSprint00'
import { tPrework } from './SLSprint00'
import { sprintDemosIntro } from './SLSprint00'

import { tQuiz } from './SLSprint00'
import { tLab } from './SL00000Sprint00'
import { basicSlide } from './SLSprint00'

// Introduction to Computer Science (ICS) sprint 6 global values.
const sprint = 7
const activityListPrevious = () => { return list24700Sprint06(sprint-1) }
const activityList = () => { return list24700Sprint07(sprint) }

// Sprint 7 session 1 of 6: Monday
export const web_7_1of6_lists = xyz_n_1of6_lists(sprint)
export const web_7_1of6 = () => { 
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning as a Class', `Sprint ${sprint} Expectations:`, [
			'Similar to previous sprints only in that it has a Discussion, Quiz, Lab, and Reflection',
			'Everything else about sprint 7 is different from other sprints',
			`Sprint ${sprint} is different that sprint ${sprint} has ever been in the past`,
			`Sprint ${sprint+1} is connected with sprint ${sprint}`,
			'I will be looking for your feedback on if these are good changes' ])
	}

	return xyz_n_1of6(sprint, web_7_1of6_lists.prework, activityListPrevious, web_7_1of6_lists.agenda, web_7_4of6_lists.prework, activityList, sprintPlanning) 
}

// Sprint 7 session 2 of 6: Wednesday
export const web_7_2of6 = () => { return [ tNoClassToday ] }

// Sprint 7 session 3 of 6: Friday
export const web_7_3of6 = () => { return [ tNoClassToday ] }


// Sprint 7 session 4 of 6: Monday
const web_7_4of6_PAaA = {
	'prework':[
		'Complete through activity 8 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared Lab' ],
	'announcements':[ 
		'You need to have a solid start on your Class Project by Wednesday if you intend to present it at the end of sprint 7' ],
	'agenda':[
		'Sprint Progress Polling',
		`Discussion Board ${sprint} as a scrum team`,
		'Lab' ]
}

export const web_7_4of6 = () => { 
	const breakout = () => { 
		return breakoutStandard( 
			'Breakout: Project Management, Scrum, Pairs, and Version Control... next class', 
			'In this breakout session we will explore Project Management, Scrum, Pairs, and Version Control:', [
				'Team sizes, SDLCs, and key Scrum Roles & Rituals',
				'Project Managers, Project Management, and the Six Phases of a Project',
				'Priority of specialized vs generalized skills in Agile vs Waterfall or Iterative',
				'Configuration management, version control, merge conflicts, and branching',
				'Reporting and fixing bugs: The five R’s', 
				'Paired Programming',
				'The two most important books about managing people (according to the authors)' ]
		)
	}
	
	return xyz_n_4of6(sprint, web_7_4of6_PAaA, web_7_4of6_lists.prework, activityList, breakout)
}



// Sprint 7 session 4 of 6: Monday
const web_7_4of6_lists = {
	'announcements':[ 
		'Welcome back!' ],
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

export const web_7_4of6X = () => { 
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:11, submitted:10 },
			{ name: 'Quiz', due:11, submitted:11 },
			{ name: 'Lab', due:11, submitted:9 },
			{ name: 'Reflection', due: 11, submitted: 10 }
		])
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
		'Feedback from Assignments & Reflections', [
		'Submission percentage concerns me',
		'All assignments graded and posted',
		'Some confusion around finals / final project presentation date',
		'Very nice work!' ])
	}

	const discussionBreakout = () => { return tDiscussionBreakout(sprint) }

	// Due to the Thanksgiving holiday we missed sessions 2 and 3 so we mostly doing session 3 activities here in session 4. 
	let slides = xyz_n_3of6(sprint, web_7_4of6_lists, web_7_5of6_lists.prework, activityList, metricsSubmissionPercentage, retrospective)

	slides.splice(slides.length-2,0,discussionBreakout)
	return slides
}

// Sprint 7 session 5 of 6: Wednesday
const web_7_5of6_lists = {
	'announcements':[ 
		'Any Announcements?' ],
	'prework':[
		'Complete through activity 8 prior to next class', '',
		'Be prepared for “Angular, React, and Vue” Breakout',
		`Be prepared for Quiz ${sprint}` ],
	'agenda':[
		'Sprint Progress Polling', 
		'Angular, React, and Vue Breakout',
		'Lab and Programming Together',
		`Quiz ${sprint}` ]
}
export const web_7_5of6X = () => { 
	const breakout = () => { 
		return breakoutStandard( 
			'Breakout: Angular, React, and Vue', 
			'In this breakout session we will explore Angular, React, and Vue:', [
				'Describe Angular and make an argument for using Angular and against using React',
				'Describe React and make an argument for using React and against using Vue',
				'Describe Vue and make an argument for using Vue and against using Angular and React' ]
		)
	}
	const slides = xyz_n_5of6(sprint, web_7_5of6_lists, web_7_6of6_lists.prework, activityList)
	const agendaSlide = 3
	slides.splice(agendaSlide+2, 0, breakout)
	return slides 
}

// Sprint 7 session 6 of 6: Friday
const web_7_6of6_lists = {
	'announcements':[ 
		`All sprint ${sprint} assignments due Sunday!` ],
	'prework':[
		`All sprint ${sprint} assignments due Sunday!`, '',
		'Be prepared for Programming Together' ],
	'agenda':[
		'Sprint Progress Polling',
		'Lab & Programming Together',
		'Global Software Development / Practical Diversity' ]
}
export const web_7_6of6 = () => { return xyz_n_6of6(sprint, web_7_6of6_lists, web_8_1of6_lists.prework, activityList) }


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
export const web_7_5of6 = () => { 
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
		return submissionPercentage([
			{ name: 'Discussion', due:10, submitted:9 },
			{ name: 'Quiz', due:10, submitted:10 },
			{ name: 'Lab', due:10, submitted:9 },
			{ name: 'Reflection', due:10, submitted:8 }
		])
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
		'Feedback from Assignments & Reflections', [
		'Not a very good submission percentage',
		'Grading is a work in process', 
		'Let’s make our final push to deliver a class project that we can be proud of delivering' ])
	}

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_7_5of6_PAaA, sprint, activityList)
	const retrospectiveInto = () => { return retrospectiveIntroduction(sprint)}
	const preworkNext = () => { return tPrework('Prework For Next Class', web_7_4of6_PAaA.prework, sprint, activityList) }
	return completeDeck(slideDeck, [ sprintDemosIntro, sprintDemos, tDemos, demoAssignment, retrospectiveInto, metricsSubmissionPercentage, retrospective, breakout, preworkNext])
}

// Sprint 7 session 6 of 6: Friday
const tWeb_7_6of6_PAaA = {
	'prework':[
		`Be prepared for Quiz ${sprint}`,
		'Be prepared for Lab' ],
	'announcements':[ 
		'Monday is Lab and Programming Together' ],
	'agenda':[
		'Sprint Progress Polling',
		'Quiz',
		'Lab & Programming Together' ]
}
export const tWeb_7_6of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(tWeb_7_6of6_PAaA, sprint, activityList)
	const quiz = () => { return tQuiz(sprint) }
	const preworkNext = () => { return tPrework('Prework For Next Class', tWeb_7_7of6_PAaA.prework, sprint, activityList) }
	return completeDeck(slideDeck, [ quiz, tLab, preworkNext]) 
}

const tWeb_7_7of6_PAaA = {
	'prework':[
		'Be prepared for Lab' ],
	'announcements':[ 
		'Wednesday is required in-person Quiz 8' ],
	'agenda':[
		'Review Class Project Presentation Schedule',
		'Lab & Programming Together' ]
}

// Sprint 7 session 7 of 6: Monday
export const tWeb_7_7of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(tWeb_7_7of6_PAaA, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', tWeb_7_8of6_PAaA.prework, sprint, activityList) }
	return completeDeck(slideDeck, [ tLab, preworkNext]) 
}

const tWeb_7_8of6_PAaA = { 
	'prework':[
		`Be prepared for Quiz ${sprint+1} (final exam)` ],
	'announcements':[ 
		'Friday is Class Project presentations in classroom plus remote' ],
	'agenda':[
		'Review Class Project Presentation Schedule',
		`Quiz ${sprint+1} (final exam)` ] 
}

// Sprint 7 session 8 of 6: Wednesday
export const web_7_8of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(tWeb_7_8of6_PAaA, sprint, activityList)
	const reviewPresentationSchedule = () => { return basicSlide('Class Project Presentation Schedule', [
		'Let’s take a last look at our presentation schedule for Friday and for next week.' ])}
	const quiz = () => { return tQuiz(sprint+1) }
	const preworkNext = () => { return tPrework('Prework For Next Class', web_7_9of6_PAaA.prework, sprint, activityList) }
	return completeDeck(slideDeck, [ reviewPresentationSchedule, preworkNext, quiz]) 
}

const web_7_9of6_PAaA = { 
	'prework':[
		`Be prepared for a quick sprint ${sprint+1} planning review`,
		'Be prepared for class project presentations in classroom plus remote' ],
	'announcements':[ 
		`All sprint ${sprint} assignments due Sunday`,
		`All sprint ${sprint+1} assignment due Thursday next week`,
		`If you are presenting today, your sprint ${sprint} and sprint ${sprint+1} assignments are due Sunday` ],
	'agenda':[
		`Brief review of sprint ${sprint+1} expectations`,
		'Class Project presentations' ]
}
export const web_7_9of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(tWeb_7_8of6_PAaA, sprint, activityList)

	const quiz = () => { return tQuiz(sprint+1) }
	const preworkNext = () => { return tPrework('Prework For Next Class', web_7_9of6_PAaA.prework, sprint, activityList) }
	return completeDeck(slideDeck, [ quiz, preworkNext]) 
}