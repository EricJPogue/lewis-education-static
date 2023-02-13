import { xyz_n_1of6, xyz_n_1of6_lists, xyz_n_4of6 } from './SL00000Sprint00'
import { checklistAnnouncementsPreworkAndAgenda, completeDeck, makeSlideDeck, tAnnouncementPreworkOrAgenda, tDemos, tLab, tReviewDemoSchedule } from './SL00000Sprint00'
import { agendaSlide, basicSlideWithLogo, breakoutStandard, bulletListSlide, orderedListSlide, discussionBreakout, submissionPercentage, tPrework, tPreworkWithLogo,tQuiz } from './SLSprint00'

import { basicSlide, demoAssignment, sprintDemosIntro, sprintDemos, retrospectiveBreakout } from './SLSprint00'

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

// Todo: Update session 2 so that it utilizes the integrated lists format. 
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
	const preworkNext = () => { return tPrework('Prework For Next Class', se_3_3of6_PAaA.prework, sprint, activityList) }

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

// Todo: Update the following session to be similar to ics.
const se_3_3of6_PAaA = {
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
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_3_3of6_PAaA, sprint, activityList)

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
	const breakout = () => { return retrospectiveBreakout(sprint) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_3_4of6_PAaA.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ tReviewDemoSchedule, sprintDemosIntro, sprintDemos, tDemos, demoAssignment, metrics, 
		metricsSubmissionPercentage, retrospective, breakout, preworkNext ])
}

// Session 4 of 6: Monday
const breakoutRequirementsName = 'Requirements'
const breakoutRequirements = () => {
	return breakoutStandard( 
		`Breakout: ${breakoutRequirementsName}`, 
		`In this breakout session on our “${breakoutRequirementsName}” reading and lecture your team will discuss:`, [
		'Behavior-Driven Design, Gemba (or Genba), Requirements, Use Cases, and User Stories',
		'Points, velocity, SMART, and MVP',
		'Story Points, Use Case Points, Function Points, and measuring productivity across teams',
		'User Experience / User Interface Design, Interface Sketches, and Storyboards',
		'Requirements Gathering Waterfall (Requirements) vs. Iterative (Use Cases) vs. Agile (Stories)' ])
}
const se_3_4of6_PAaA = {
	'prework': [
		'Complete through activity 8 prior to next class', '',
		`Be prepared for a breakout session on ${breakoutRequirementsName}`,
		'Be prepared for Lab and Programming Together as time allows' ],
	'announcements':[ 
		'I have updated Lab 3 to reflect specific exercises to complete in “Web Development with Node.js and Express”',
		'Is anyone having difficulties accessing O’Reilly?' ],
	'agenda':[
		'Sprint Progress Polling', 
		`${breakoutRequirementsName} Breakout`,
		'Lab and Programming Together as time allows' ]
}
export const se_3_4of6 = () => { return xyz_n_4of6(sprint, se_3_4of6_PAaA, se_3_5of6_PAaA.prework, activityList, breakoutRequirements) }

// Todo: Update 5, and 6.
// Session 5 of 6: Wednesday
const se_3_5of6_PAaA = {
	'prework': [
		'Complete through activity 11 prior to next class', '',
		'Be prepared for Lab and Programming Together as time allows',
		`Be prepared for Quiz ${sprint}` ],
	'announcements':[ 
		'Any announcements or questions?' ],
	'agenda':[
		'Agenda', 
		'Lab and Programming Together',
		'Prework for Next Class',
		`Quiz ${sprint}` ]
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
