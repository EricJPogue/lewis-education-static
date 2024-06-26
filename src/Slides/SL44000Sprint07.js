import { xyz_n_1of6_lists, xyz_n_4of6 } from './SL00000Sprint00'
import { orderedListSlide } from './SLSprint00'

import { submissionPercentage, tPrework, retrospectiveIntroduction } from './SLSprint00'
import { checklistAnnouncementsPreworkAndAgenda, completeDeck, tLab } from './SL00000Sprint00'

import { tPreworkWithLogo } from './SLSprint00'
import { basicSlideWithLogo } from './SLSprint00'
import { agendaSlide } from './SLSprint00'
import { makeSlideDeck } from './SL00000Sprint00'
import { insertInto } from './SLSprintPlanning'
import { sprintPlanningSlideDeck } from './SLSprintPlanning'

import { breakoutStandard } from './SLSprint00'

import { list44000Sprint06 } from '../ActivityLists/AL44000Sprint06'
import { list44000Sprint07 } from '../ActivityLists/AL44000Sprint07'

import { xyz_n_1of6 } from './SL00000Sprint00'

import { tQuiz } from './SLSprint00'
import { tDiscussionBreakout } from './SLSprint00'

import { confirmFinalExamAndPresentationTimes, practicalDiversityAndWorkingWithIndia } from './SL20000Sprint07'

import { tExamExpectations, tExam } from './SLSprint00'

// Todo: Update naming to reflect that fact that there are nine class sessions in sprint 7. Note that that will cause issues 
// with the “http://localhost:3000/?cpsc=sp24-cpsc-44500-001#/deck/7-4” URL routing method. 

// Todo: theSocialDilemma, 
// import { theSocialDilemma } from './SL20000Sprint05'

// Software Engineering (SE) sprint 7 global values.
const sprint = 7
const activityListPrevious = () => { return list44000Sprint06(sprint-1) }
const activityList = () => { return list44000Sprint07(sprint) }

// Session 1 of 6: Monday
export const se_7_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const se_7_1of6 = () => { 
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning as a Class', `Sprint ${sprint} Expectations:`, [
			'Similar to previous sprints only in that it has a Discussion, Quiz, Lab, and Reflection',
			'Everything else about sprint 7 is different from other sprints',
			`Sprint ${sprint} is different that sprint ${sprint} has ever been in the past`,
			`Sprint ${sprint+1} is connected with sprint ${sprint}`,
			'I will be looking for your feedback on if these are good changes' ])
	}

	const slideDeck = xyz_n_1of6(sprint, se_7_1of6_PAaA.prework, activityListPrevious, se_7_1of6_PAaA.agenda, se_7_2of6_PAaA.prework, activityList, sprintPlanning)
	insertInto(slideDeck, sprintPlanningSlideDeck(sprint), 8)
	return slideDeck
}

// Session 2 of 6: Wednesday
export const se_7_2of6_PAaA = {
	'prework':[
		'Complete through activity 4 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared Lab' ],
	'announcements':[ 
		'Any announcements?' ],
	'agenda':[
		`Sprint ${sprint} Commitments & Immutable Sprint ${sprint} Backlog`,
		`Discussion Board ${sprint} as a scrum team`,
		'Lab' ]
}
export const se_7_2of6 = () => { 
	const prework = () => { return tPreworkWithLogo('Prework For Today', se_7_2of6_PAaA.prework, sprint-1, activityListPrevious) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', se_7_2of6_PAaA.announcements) }
	const agenda = () => { return agendaSlide(se_7_2of6_PAaA.agenda) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_7_2of6_PAaA.prework, sprint, activityList) }

	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 

	const slideDeck = makeSlideDeck([ prework, announcements, agenda, discussionBreakout, preworkNext ])
	return slideDeck
}

// Session 3 of 6: Friday
const se_7_3of6_PAaA = {
	'prework':[
		'Complete through activity 6 prior to next class', '',
		`Be prepared sprint ${sprint} Demos and Retrospectives` ],
	'announcements':[ 
		'Godspell playing this weekend at Lewis' ],
	'agenda':[
		'Class Retrospective',
		`Scrum Team Sprint ${sprint-1} Demos`,
		'Best-of-the-best Scrum Team Demo',
		`Scrum Team Sprint ${sprint-1} Retrospective`,
		`Scrum Team report-outs for Sprint ${sprint-1} Retrospective` ]
}
export const se_7_3of6 = () => { 
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:28, submitted:22 },
			{ name: 'Quiz', due:28, submitted:27 },
			{ name: 'Lab', due:28, submitted:28 },
			{ name: 'Reflection', due:28, submitted: 28 }])
	} 
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
		'Feedback from Assignments & Reflections', [
		`Excellent submission percentage... not perfect but excellent`,
		'Grading is not complete', 
		'Very well done!... this is hard!' ])
	}
	const scrumTeamDemos = () => {
		return orderedListSlide('Scrum Team Demos', 
			'How do/will your team handle Demos?', [
			'Did you complete and create an artifact for your Demos?',
			'Aidan Interactive Rendering Demo', 
			'What is your team’s “Best-of-the-best” demo... as time allows' ])
	}
	const bestOfTheBestScrumTeamDemos = () => {
		return orderedListSlide('Best-of-the-Best Scrum Team Demos', 
			'Can’t wait to see!', [ ])
	}
	const scrumTeamRetrospective = () => {
		return orderedListSlide('Scrum Team Retrospective',
			'What is the highest priority Continuous Improvement action for your team?', [
			`What will your team need to do to guarantee Sprint ${sprint+1} planning is complete on the first day of the Sprint?`,
			'Do we need to do something different to make sure that team members are here in person for sprint planning?',
			'What is the highest priority Continuous Improvement item for your team... will you make it a story in the future?' ])
	}

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_7_3of6_PAaA, sprint, activityList)
	const retrospectiveInto = () => { return retrospectiveIntroduction(sprint)}
	const preworkNext = () => { return tPrework('Prework For Next Class', se_7_4of6_PAaA.prework, sprint, activityList) }
	return completeDeck(slideDeck, [retrospectiveInto, metricsSubmissionPercentage, retrospective, scrumTeamDemos, bestOfTheBestScrumTeamDemos, 
		scrumTeamRetrospective, preworkNext])
}

// Sprint 7 session 4 of 6: Monday
const se_7_4of6_PAaA = {
	'prework':[
		'Complete through activity 8 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared Lab' ],
	'announcements':[ 
		'We have a special guest Wednesday that Dr. Klump will be visiting our class',
		'Class Product presentation times need to be finalized by Friday' ],
	'agenda':[
		'Sprint Progress Polling',
		'Breakout on Project Management, Scrum, Pairs, and Version Control',
		'Lab' ]
}
export const se_7_4of6 = () => { 
	const breakout = () => { 
		return breakoutStandard( 
			'Breakout: Project Management, Scrum, Pairs, and Version Control', 
			'In this breakout session we will explore Project Management, Scrum, Pairs, and Version Control:', [
				'Team sizes, SDLCs, and key Scrum Roles & Rituals',
				'Project Managers, Project Management, and the Six Phases of a Project',
				'Priority of specialized vs generalized skills in Agile vs Waterfall or Iterative... what about specialized teams?',
				'Configuration management, version control, merge conflicts, and branching',
				'Reporting and fixing bugs: The five R’s', 
				'Paired Programming',
				'The two most important books about managing people (according to the authors)' ]
		)
	}
	
	return xyz_n_4of6(sprint, se_7_4of6_PAaA, se_7_5of6_PAaA.prework, activityList, breakout)
}

// Sprint 7 session 5 of 6: Wednesday
const se_7_5of6_PAaA = {
	'prework':[
		'Complete through activity 8 prior to next class', '',
		'Be prepared for Software Business Models discussion',
		'Be prepared for Lab' ],
	'announcements':[ 
		'Recall that our Final Exam is next Wednesday in class with in-person attendance required' ],
	'agenda':[
		'Sprint Progress Polling',
		'Product Transition Reflections and Feedback',
		'Software Business Models, YouTube, and the competition for your eyes',
		'Lab' ]
}
export const se_7_5of6 = () => { 
	const reflections = () => {
		return orderedListSlide('Product Transition Reflections',
		'Now that your product is transitioning to your team consider', [
			'In the spirit of continuous improvement, how can we improve the transition next semester?',
			'Connect teams earlier, transition earlier (maybe sprint 6?), more standard environments?' ])
	}
	const isItPossibleTo = () => {
		return orderedListSlide('Software Business Models and YouTube',
		'Software Business Models, YouTube, and the competition for your eyes', [
			'Is is possible for me to use YouTube and at the same time “protect” your focus?',
			'If so, what can I do to make that happen?' ])
	}
	const poll = () => { return tPrework('Sprint Progress Polling', se_7_5of6_PAaA.prework, sprint, activityList) }

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_7_5of6_PAaA, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', se_7_4of6_PAaA.prework, sprint, activityList) }
	return completeDeck(slideDeck, [ poll, reflections, isItPossibleTo, tLab, preworkNext])
}

 // Sprint 7 session 6 of 6: Friday
const se_7_6of6_PAaA = {
	'prework':[
		'Be prepared for Lab' ],
	'announcements':[ 
		'Monday is Lab and Programming Together' ],
	'agenda':[
		'Sprint Progress Polling', 
		'Quiz',
		'Lab & Programming Together' ]
}
export const se_7_6of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_7_6of6_PAaA, sprint, activityList)
	const quiz = () => { return tQuiz(sprint) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_7_7of6_PAaA.prework, sprint, activityList) }
	return completeDeck(slideDeck, [ quiz, tLab, preworkNext]) 
}

// Session 7 of 6: Monday
const se_7_7of6_PAaA = { 
	'prework':[
		'Be prepared for Lab' ],
	'announcements':[ 
		'Wednesday is our Final Exam (in-person attendance required)' ],
	'agenda':[ 
		'Confirm Final Exam Time',
		'Confirm Class Project presentation time',
		'Practical Diversity and Working with India (continued)',
		'Lab' ]
}
export const se_7_7of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_7_7of6_PAaA, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', se_7_8of6_PAaA.prework, sprint, activityList) }
	return completeDeck(slideDeck, [ confirmFinalExamAndPresentationTimes, practicalDiversityAndWorkingWithIndia, preworkNext, tLab ]) 
}

// Sprint 7 session 8 of 6: Wednesday
const se_7_8of6_PAaA = {
	'prework': [ 
		'Complete through activity 10', '',
		`Final Exam` ],
	'announcements': [ 	
		`All sprint ${sprint} assignments due Sunday`,
		`All sprint ${sprint+1} assignment due next Wednesday`, ],
	'agenda': [ 
		'Confirm Class Project Presentation Time',
		'Final Exam' ]
}
const confirmPresentationTimes = () => {
	return orderedListSlide('Confirm Final Exam and Class Project presentation times',
		'Confirm Class Project Presentation Time', [ ] )		
}
export const se_7_8of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_7_8of6_PAaA, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', se_7_9of6_PAaA.prework, sprint, activityList) }
	return completeDeck(slideDeck, [ confirmPresentationTimes, preworkNext, tExamExpectations, tExam ])
}

const se_7_9of6_PAaA = { 
	'prework':[
		`Be prepared for a sprint ${sprint+1} planning` ],
	'announcements':[ 
		`All sprint ${sprint} assignments due Sunday`,
		`All sprint ${sprint+1} assignment due Wednesday next week` ],
	'agenda':[
		`Review of sprint ${sprint+1} assignments & expectations`,
		'Lab' ]
}

export const se_7_9of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_7_9of6_PAaA, sprint, activityList)
	const finalProjectPresentation = () => {
		return orderedListSlide('Class Project Presentation Schedule and Expectations ', `Recall that your final project presentation should including a/an:`, [
			'Brief introduction of your team and yourself',
			'Overview of your project proposal',
			'** Detailed discussion of the teams and transition and who is responsible for each asset',
			'One team member review the overall project... capstone team first',
			'Each team member demonstrate a feature that they personally delivered that they are most proud of delivering',
			'Description of what else you expect to complete by the end of the day Thursday' ])
	}
	const nextSteps = () => { return tPrework('Next Steps', [ 
			`All sprint ${sprint} assignments are due Sunday`,
			`All sprint ${sprint+1} assignment due Wednesday next week` ], sprint, activityList) }

	return completeDeck(slideDeck, [ finalProjectPresentation, nextSteps ]) 
}