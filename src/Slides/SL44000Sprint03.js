import { makeSlideDeck, xyz_n_1of6 } from './SL00000Sprint00'

import { breakoutStandard, tPreworkWithLogo, tPrework, agendaSlide, basicSlideWithLogo, bulletListSlide, discussionBreakout, orderedListSlide, submissionPercentage } from './SLSprint00'
import { sprintDemosIntro, sprintDemos, demoAssignment, retrospectiveBreakout } from './SLSprint00'

import { list44000Sprint02 } from '../ActivityLists/AL44000Sprint02' 
import { list44000Sprint03 } from '../ActivityLists/AL44000Sprint03'

import { ics_3_1of6_prework_list, ics_3_1of6_agenda_list, ics_3_3of6_agenda_list } from './SL20000Sprint03'

const sprint = 3
const activityListPrevious = () => { return list44000Sprint02(sprint-1) }
const activityList = () => { return list44000Sprint03(sprint) }

export const se_3_1of6_prework_list = ics_3_1of6_prework_list
const se_3_1of6_agenda_list = ics_3_1of6_agenda_list
export const se_3_1of6 = () => { return xyz_n_1of6(sprint, se_3_1of6_prework_list, activityListPrevious, se_3_1of6_agenda_list, se_3_2of6_prework_list, activityList) }

// Todo: Review if we still want to continue to swap Wednesday and Friday sessions. If not, make appropriate changes to slides.
const se_3_2of6_prework_list = [
	'Complete through activity 4 prior to next class', '',
	'Be prepared for team Discussion 2 and Lab' ]
const se_3_2of6_agenda_list = [
	`Discussion Board ${sprint} as a Scrum Team`,
	'Prework for Next Class',
	'Lab & Programming Together' ]
export const se_3_2of6 = () => {
	const prework = () => { return tPreworkWithLogo('Prework For Today', se_3_2of6_prework_list, sprint, activityList) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', ['Any announcements?']) }
	const agenda = () => { return agendaSlide(se_3_2of6_agenda_list) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_3_3of6_prework_list, sprint, activityList) }

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

const se_3_3of6_prework_list = [
	'Complete through activity 8 prior to next class', '',
	`Be prepared for sprint ${sprint-1} demos and retrospectives`,
	'Those scheduled to demo on Wednesday please be a couple of minutes early to class' ]
const se_3_3of6_agenda_list = ics_3_3of6_agenda_list
export const se_3_3of6 = () => {
	const prework = () => { return tPreworkWithLogo('Prework For Today', se_3_3of6_prework_list, sprint, activityList) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', ['No class next Friday', 'Any other announcements?']) }
	const agenda = () => { return agendaSlide(se_3_3of6_agenda_list) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_3_4of6_prework_list, sprint, activityList) }

	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:14, submitted:13 },
			{ name: 'Quiz', due:14, submitted:14 },
			{ name: 'Lab', due:14, submitted:12 },
			{ name: 'Reflection', due: 14, submitted: 13 }
		])
	}
	const breakout = () =>{ return retrospectiveBreakout(sprint) }
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Okay submission percentage... it does’t feel good to have multiple Labs not submitted',
			'Why I “don’t allow” for late assignments... because it often makes a difficult situation worse',
			'Why I don’t provide detailed quiz information between attempts', 
			'All assignments are graded and posted... maybe?', 
			'Still some difficulties creating and attaching zip files' ])
	}

	return makeSlideDeck([ prework, announcements, agenda, sprintDemosIntro, sprintDemos, demoAssignment, 
		metricsSubmissionPercentage, retrospective, breakout, preworkNext ])
}

const se_3_4of6_prework_list = [
	'Complete through activity 11 prior to next class', '',
	'Focus on reading assignments and associated lectures',
	'Be prepared for Lab and Programming Together**' ]
const se_3_4of6_agenda_list = [
	'!!!Gates and Circuits Breakout (abbreviated)',
	'Prework for Next Class',
	'Lab & Programming Together' ]
export const se_3_4of6 = () => {
	const prework = () => { return tPreworkWithLogo('Prework For Today', se_3_4of6_prework_list, sprint, activityList) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', [
		'No class Friday', 
		'!!!No Computing Components Breakout this sprint (you are still responsible for the content)']) 
	}
	const agenda = () => { return agendaSlide(se_3_4of6_agenda_list) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_3_5of6_prework_list, sprint, activityList) }

	const breakout = () => { 
		return breakoutStandard( 
			'!!!Breakout: Gates and Circuits', 
			'In this breakout session on Gates and Circuits (reading and lecture) your team will discuss:', [
			'Gates', 
			'Circuits and how they relate to Gates', 
			'NOT and AND gates',
			'OR, XOR, NAND, and NOR gates and share which one is consistent with English language "or"',
			'Integrated Circuits, CPU Chips, and how much does it cost to buy 100,000,000 (100 million) gates',
			'Computing Component: Can you identify one computing component?' ])
	}

	return makeSlideDeck([ announcements, prework, agenda, breakout, preworkNext ])
}

const se_3_5of6_prework_list = [
	'!!!Complete through activity 13 prior to next class', '',
	'Focus on reading assignments and associated lectures',
	'Be prepared for Lab and Programming Together',
	'Be prepared for Quiz 3' ]






// Todo: Where do these topics fit?
/*
Team discusses topics while the presenter summarizes the topics below:
Chapter 3 Introduction to Ruby… how do we create non-objects in Ruby?
Chapter 4 Introduction to Rails… how do we create a non-model-view-controller Rails application?
Chapter 5 Advanced Rails… authentication? Is the Ruby/Rails framework opinionated? Is that good or bad?
A.6 Git and Version Control and A.7 GitHub
ORM (Object-Relational-Mapper) and NoSQL Databases
*/
