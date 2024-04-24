import { xyz_n_1of6_lists, xyz_n_4of6, xyz_n_1of6, tLab } from './SL00000Sprint00'
import { submissionPercentage, orderedListSlide, tDiscussionBreakout, breakoutStandard } from './SLSprint00'

import { checklistAnnouncementsPreworkAndAgenda } from './SL00000Sprint00'
import { retrospectiveIntroduction } from './SLSprint00'
import { tPrework } from './SLSprint00'
import { completeDeck } from './SL00000Sprint00'
import { sprintDemos, sprintDemosIntro, demoAssignment } from './SLSprint00'
import { tDemos } from './SL00000Sprint00'

import { list20000Sprint06 } from '../ActivityLists/AL20000Sprint06'
import { list20000Sprint07 } from '../ActivityLists/AL20000Sprint07'

import { tQuiz } from './SLSprint00'
import { basicSlide } from './SLSprint00'
import { bulletListSlide } from './SLSprint00'


// Todo:
//		'YouTube, Eric’s Trip to Google, The Social Dilemma, and Technology Business Models',
// theSocialDilemma, 
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
			'We will be focused on our Class Projects',
			`Sprint ${sprint} is three weeks duration and has high expectation around effort`,
			'Our Final Exam will be in person on Wednesday, May 1st (in person attendance required',
			`Sprint ${sprint+1} is directly connected with sprint ${sprint} in that we will be presenting our Class Projects` ])
	}

	return xyz_n_1of6(sprint, ics_7_1of6_PAaA.prework, activityListPrevious, ics_7_1of6_PAaA.agenda, ics_7_4of6_PAaA.prework, activityList, sprintPlanning) 
}

// Sprint 7 session 2 of 6: Wednesday
const ics_7_2of6_PAaA = {
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared for Lab & Programming Together' ],
	'announcements':[ 
		'Any announcements?' ],
	'agenda':[
		`Discussion Board ${sprint} as a scrum team`,
		'Review Demo Schedule for Next Class',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}
export const ics_7_2of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_7_2of6_PAaA, sprint, activityList)
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_7_3of6_PAaA.prework, sprint, activityList) }
	const reviewDemoSchedule = () => {
		return bulletListSlide('Review Friday’s Demo Schedule', 
			'Let’s review Wednesday’s demo schedule while recalling that demos are an important part of scrum and that they:', [
			'Occur at the beginning of each new sprint ',
			'Are an opportunity to show what was completed in the previous sprint',
			'Are an **easy** and hopefully rewarding experience to show off your work',
			'Provide a chance to see how others solved a problem and to see some of the challenges they faces' ]
		)
	}

	return completeDeck(slideDeck, [ discussionBreakout, preworkNext, reviewDemoSchedule, tLab ])
}

// Session 3 of 6: Friday
const ics_7_3of6_PAaA = {
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared for Demos & Retrospectives' ],
	'announcements':[ 
		'Godspell playing this weekend at Lewis' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		'Lab' ]
}
export const ics_7_3of6 = () => { 
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:15, submitted:13 },
			{ name: 'Quiz', due:15, submitted:14 },
			{ name: 'Lab', due:15, submitted:12 },
			{ name: 'Reflection', due:15, submitted:12 }])
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			`Not very good Sprint ${sprint-1} submission percentage`,
			'Grading is complete and posted', 
			'Can we make one final push to the end? ' ])
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
	return completeDeck(slideDeck, [ sprintDemosIntro, sprintDemos, tDemos, demoAssignment, retrospectiveInto, metricsSubmissionPercentage, retrospective, scrumTeamRetrospective, preworkNext])
}

// Sprint 7 session 4 of 6: Monday
const ics_7_4of6_PAaA = {
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared Lab' ],
	'announcements':[ 
		'Class Product presentation times need to be “finalized” by Friday' ],
	'agenda':[
		'Sprint Progress Polling',
		`Breakout on Security`,
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
	'prework':[
		'Complete through activity 8 prior to next class' ],
	'announcements':[ 
		'Recall that our Final Exam is next Wednesday in class with in-person attendance required' ],
	'agenda':[
		'Sprint Progress Polling',
		'Software Business Models, YouTube, and the competition for your eyes',
		'Lab' ]
	}
export const ics_7_5of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_7_5of6_PAaA, sprint, activityList)
	const isItPossibleTo = () => {
		return orderedListSlide('Software Business Models and YouTube',
		'Software Business Models, YouTube, and the competition for your eyes', [
			'Is is possible for me to use YouTube and at the same time “protect” your focus?',
			'If so, what can I do to make that happen?' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_7_6of6_PAaA.prework, sprint, activityList) }
	return completeDeck(slideDeck, [isItPossibleTo, preworkNext])
}

// Sprint 7 session 6 of 6: Friday
const ics_7_6of6_PAaA = {
	'prework':[
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
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_7_5of6_PAaA.prework, sprint, activityList) }
	return completeDeck(slideDeck, [ quiz, tLab, preworkNext]) 
}


const ics_7_7of6_PAaA = { 
	'prework':[
		'Be prepared for Lab' ],
	'announcements':[ 
		'Wednesday is Quiz 8 (in-person attendance required)' ],
	'agenda':[
		'Confirm Friday class project presentation schedule',
		'Lab & Programming Together' ]
}

// Sprint 7 session 7 of 6: Monday
export const ics_7_7of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_7_7of6_PAaA, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_7_8of6_PAaA.prework, sprint, activityList) }
	return completeDeck(slideDeck, [ tLab, preworkNext]) 
}

// Sprint 7 session 8 of 6: Wednesday
const ics_7_8of6_PAaA = { 
	'prework':[
		`Be prepared for Quiz ${sprint+1} (final exam)` ],
	'announcements':[ 
		'Friday is Class Project presentations in classroom plus remote' ],
	'agenda':[
		'Review Class Project Presentation Schedule',
		`Quiz ${sprint+1} (final exam)` ] 
}
export const ics_7_8of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_7_8of6_PAaA, sprint, activityList)
	const reviewPresentationSchedule = () => { return basicSlide('Class Project Presentation Schedule', [
		'Let’s take a last look at our presentation schedule for Friday and for next week.' ])}
	const quiz = () => { return tQuiz(sprint+1) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_7_9of6_PAaA.prework, sprint, activityList) }
	return completeDeck(slideDeck, [ reviewPresentationSchedule, preworkNext, quiz]) 
}

const ics_7_9of6_PAaA = { 
	'prework':[
		`Be prepared for a quick sprint ${sprint+1} planning review`,
		'Be prepared for class project presentations in classroom plus remote' ],
	'announcements':[ 
		`All sprint ${sprint} assignments due Sunday`,
		`All sprint ${sprint+1} assignment due Thursday next week`,
		`If you are presenting today, your sprint ${sprint} and sprint ${sprint+1} assignments are due Sunday` ],
	'agenda':[
		`Brief review of sprint ${sprint+1} assignments & expectations`,
		'Class Project presentations' ]
}
export const ics_7_9of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_7_9of6_PAaA, sprint, activityList)
	const quickSprint8PlanningReview = () => { return basicSlide(`Be prepared for a quick sprint ${sprint+1} planning review`, [
		`Let’s look at our ${sprint+1} assignments and remaining Class Project presentation schedule.` ])}
	const finalProjectPresentation = () => {
		return orderedListSlide('Final Project Presentations', `Recall that your final project presentation should including a/an:`, [
			'Brief introduction of yourself',
			'Overview of your final project proposal',
			'Demonstration standard and advanced feature',
			'Overview of the project source code',
			'Description of what else you expect to complete by the end of the day Thursday' ])
	}
	const nextSteps = () => { return tPrework('Next Steps', [ 
		`All sprint ${sprint} assignments due Sunday`,
		'Remaining Class Project presentations next week on...'
	], sprint, activityList) }
	const finalComments = () => {
		return orderedListSlide('For those of you who presented today... Thank you!',
			'', [
			'Thank you for making this a wonderful experience for me',
			'Don’t hesitate to reach out in the future',
			'I hope to see you in a future class', 
			'Reach out to me if you are interested in taking Web & Distributed Programming',
			'Very nice work! I am impressed with what you have accomplished.' ])
	}

	return completeDeck(slideDeck, [ quickSprint8PlanningReview, finalProjectPresentation, nextSteps, finalComments ]) 
}

