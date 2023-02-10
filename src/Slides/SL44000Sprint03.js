import { makeSlideDeck, xyz_n_1of6_lists, xyz_n_1of6, tLab, tAnnouncementPreworkOrAgenda, tDemos } from './SL00000Sprint00'

import { breakoutStandard, tPreworkWithLogo, tPrework, agendaSlide, basicSlideWithLogo, bulletListSlide, discussionBreakout, orderedListSlide, submissionPercentage, tQuiz } from './SLSprint00'
import { sprintDemosIntro, sprintDemos, demoAssignment } from './SLSprint00'
import { checklistAnnouncementsPreworkAndAgenda } from './SL00000Sprint00'
import { basicSlide } from './SLSprint00'
import { completeDeck } from './SL00000Sprint00'
import { tReviewDemoSchedule } from './SL00000Sprint00'

import { list44000Sprint02 } from '../ActivityLists/AL44000Sprint02' 
import { list44000Sprint03 } from '../ActivityLists/AL44000Sprint03'

import { se_4_1of6_prework_list } from './SL44000Sprint04'

// Constants
const sprint = 3
const activityListPrevious = () => { return list44000Sprint02(sprint-1) }
const activityList = () => { return list44000Sprint03(sprint) }

// Session 1 of 6: Monday
export const se_3_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const se_3_1of6 = () => { return xyz_n_1of6(sprint, se_3_1of6_PAaA.prework, activityListPrevious, se_3_1of6_PAaA.agenda, se_3_2of6_prework_list, activityList) }

// Session 2 of 6: Wednesday
const se_3_2of6_prework_list = [
	'Complete through activity 4 prior to next class', '',
	`Be prepared for team Discussion ${sprint} and Lab` ]
const se_3_2of6_agenda_list = [
	`Discussion Board ${sprint} as a Scrum Team`,
	'Prework for Next Class',
	'Lab & Programming Together' ]
export const se_3_2of6 = () => {
	const prework = () => { return tPreworkWithLogo('Prework For Today', se_3_2of6_prework_list, sprint, activityList) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', ['Any announcements?']) }
	const agenda = () => { return agendaSlide(se_3_2of6_agenda_list) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_2_3of6_PAaA.prework, sprint, activityList) }

	const discussion3Breakout = () => { return discussionBreakout(sprint) } 
	const programmingTogether = () => {
		return bulletListSlide('Lab & Programming Together', 
			'Let’s commit to making 30 minutes of focused effort to our Lab assignment by:', [
			'Understanding and setting up a GitHub organization for your scrum team',
			'Setting up and hosting a public “Getting to Know Each Other Teams” repository',
			'Successfully adding all team members to your “Getting to Know Each Other Teams” repository',
			'Having each team member individually update the README.md file with their name and email address',
			'Reviewing the repository commit history to see everyone’s commit'])
	}

	return makeSlideDeck([ prework, announcements, agenda, discussion3Breakout, preworkNext, programmingTogether ])
}

const se_2_3of6_PAaA = {
	'prework': [
		'Complete through activity 8 prior to next class', '',
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
export const se_3_3of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_2_3of6_PAaA, sprint, activityList)

	const metrics = () => {
		return basicSlide(`Sprint ${sprint-1} Metrics`, [
			`Let’s take a minute and review our Sprint ${sprint-1} Submission Percentage class metric.` ])
	}
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:26, submitted:25 },
			{ name: 'Quiz', due:26, submitted:26 },
			{ name: 'Lab', due:26, submitted:25 },
			{ name: 'Reflection', due: 26, submitted: 25 }])
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Solid submission percentage',
			'All assignments are graded and posted', 
			'Thank you for your reflection comments',
			'Comments and feedback immensely different depending on Web development background', 
			'Azure static website are much better for static content!' ])
	}
	const retrospectiveBreakout = () => {
		return orderedListSlide('Breakout Session for Team Retrospective', 
			'As a scrum team consider:', [
			`How does your team feel about sprint ${sprint-1} now that it is over`,
			`What could be done to make sprint ${sprint-1} or the class overall better or more manageable`,
			'What improvements should we make as a class, team, or individual going forward' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', se_3_4of6_PAaA.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ tReviewDemoSchedule, sprintDemosIntro, sprintDemos, tDemos, demoAssignment, metrics, 
		metricsSubmissionPercentage, retrospective, retrospectiveBreakout, preworkNext ])
}

const se_3_4of6_PAaA = {
	'prework': [
		'Complete through activity 8 prior to next class', '',
		`Be prepared for sprint ${sprint-1} demos and retrospectives`,
		'Those scheduled to demo on Wednesday please be a couple of minutes early to class' ],
	'announcements':[ 
		'Any announcements?' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}

// Todo: Update session 4, 5, and 6.
const se_3_4of6_prework_list = [
	'Complete through activity 11 prior to next class', '',
	'Focus on reading assignments and associated lectures',
	'Be prepared for Lab and Programming Together**' ]
const se_3_4of6_agenda_list = [
	'Requirements Breakout',
	'Prework for Next Class',
	'Lab & Programming Together' ]
export const se_3_4of6 = () => {
	const prework = () => { return tPreworkWithLogo('Prework For Today', se_3_4of6_prework_list, sprint, activityList) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', [
		'No class Friday', 
		'No Node.js or JSON Breakout this sprint (you are still responsible for the content)']) 
	}
	const agenda = () => { return agendaSlide(se_3_4of6_agenda_list) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_3_5of6_prework_list, sprint, activityList) }

	const breakout = () => { 
		return breakoutStandard( 
			'Requirements Breakout', 
			'In this breakout session on Requirements (reading and lecture) your team will discuss:', [
			'Behavior-Driven Design, Gemba (or Genba), Requirements, Use Cases, and User Stories',
			'Points, velocity, SMART, and MVP',
			'Story Points, Use Case Points, Function Points, and measuring productivity across teams',
			'User Experience / User Interface Design, Interface Sketches, and Storyboards',
			'Requirements Gathering Waterfall (Requirements) vs. Iterative (Use Cases) vs. Agile (Stories)' ])
	}

	return makeSlideDeck([ announcements, prework, agenda, breakout, preworkNext ])
}

const se_3_5of6_announcement_list = [
	'Announcements', 
	'No class Friday', 
	`All sprint ${sprint} assignments are due Sunday!`]
const se_3_5of6_prework_list = [
	'Complete through activity 14 prior to next class', '',
	'Focus on reading assignments and associated lectures',
	'Be prepared for Lab and Programming Together',
	'Be prepared for Quiz 3' ]
const se_3_5of6_agenda_list = [
	'Agenda', 
	'Lab and Programming Together',
	'Prework for Next Class',
	'Quiz 3' ]
export const se_3_5of6 = () => {
	const announcements =  () => { return tAnnouncementPreworkOrAgenda(se_3_5of6_announcement_list) }
	const prework = () => { return tAnnouncementPreworkOrAgenda(se_3_5of6_prework_list, sprint, activityList) }
	const agenda = () => { return tAnnouncementPreworkOrAgenda(se_3_5of6_agenda_list) }

	const preworkNext = () => { return tPrework('Prework For Next Class', se_4_1of6_prework_list, sprint, activityList) }
	const quiz = () => { return tQuiz(sprint) }

	return makeSlideDeck([ announcements, prework, agenda, tLab, preworkNext, quiz ])
}

// No “se_3_6of6...” prework or agenda structures as there is no class Friday due to Fall Break.
export const se_3_6of6 = () => {
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', [
		'No class', 
		`All sprint ${sprint} assignments are due Sunday!`]) 
	}

	return [ announcements ]
}

// Todo: Where do these topics fit?
/*
Team discusses topics while the presenter summarizes the topics below:
Chapter 3 Introduction to Ruby… how do we create non-objects in Ruby?
Chapter 4 Introduction to Rails… how do we create a non-model-view-controller Rails application?
Chapter 5 Advanced Rails… authentication? Is the Ruby/Rails framework opinionated? Is that good or bad?
A.6 Git and Version Control and A.7 GitHub
ORM (Object-Relational-Mapper) and NoSQL Databases
*/
