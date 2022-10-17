import { getClass } from '../DataAndAPIs/Classes'

import { xyz_n_1of6_agenda_list, xyz_n_1of6_prework_list, xyz_n_1of6, completeDeck, checklistAnnouncementsPreworkAndAgenda, tLab } from './SL00000Sprint00'

import { sprintDemosIntro, sprintDemos, demoAssignment, reviewDemoSchedule } from './SLSprint00'
import { tPrework, bulletListSlide, discussionBreakout, submissionPercentage, retrospectiveBreakout, orderedListSlide, retrospectiveIntroduction, breakoutStandard, tQuiz } from './SLSprint00'

import { list20000Sprint03 } from '../ActivityLists/AL20000Sprint03'
import { list20000Sprint04 } from '../ActivityLists/AL20000Sprint04'

// Sprint 4 Introduction to Computer Science (ICS) values.
const sprint = 4
const activityListPrevious = () => { return list20000Sprint03(sprint-1) }
const activityList = () => { return list20000Sprint04(sprint) }

// Todo: Review https://stackoverflow.com/questions/1300242/passing-a-function-with-parameters-as-a-parameter
// Todo: Create xyz_n_1of6 version 2 that includes optional null (or default_announcements) announcements and makes prework_list 
// and agenda_list optionally null (or default_prework_list and default_agenda_list)

// Session 1 of 6: Monday
export const ics_4_1of6_prework_list = xyz_n_1of6_prework_list(sprint)  
const ics_4_1of6_agenda_list = xyz_n_1of6_agenda_list(sprint)
export const ics_4_1of6 = () => { return xyz_n_1of6(sprint, ics_4_1of6_prework_list, activityListPrevious, ics_4_1of6_agenda_list, ics_4_2of6_lists.prework, activityList) }

// Session 2 of 6: Wednesday
const ics_4_2of6_lists = {
	'announcements':[ 
		'Any announcements?' ],
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared for Lab & Programming Together' ],
	'agenda':[
		`Discussion Board ${sprint} as a scrum team`,
		'Review Demo Schedule for Next Class',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}
export const ics_4_2of6 = () => {
	const discussion4Breakout = () => { return discussionBreakout(sprint) } 
	const programmingTogether = () => {
		return bulletListSlide('Lab & Programming Together', 
			'Let’s commit to focusing on our Lab assignment by:', [
			'Start MatchMakerLite tutorial by implementing a README.md and LICENSE file in GitHub', 
			'Adding a MatchMakerLite.py file', 
			'Pushing the updated files to GitHub',
			'Zipping the files as if we were going to submit them for Lab 4',
			'Finally, let’s do the same thing for MatchMaker' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_4_3of6_lists.prework, sprint, activityList) }

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_4_2of6_lists, sprint, activityList)
	return completeDeck(slideDeck, [ discussion4Breakout, reviewDemoSchedule, preworkNext, programmingTogether ])
}

// Session 3 of 6: Friday
const ics_4_3of6_lists = {
	'announcements':[ 
		'You rock!', 
		`If you are enjoying creating websites, you may want to consider taking Web & Distributed Programming... I will 
		happily wave the Programming Fundamentals prerequisite if you have completed this section of Intro to Computer
		Science` ],
	'prework':[
		'Complete through activity 9 prior to next class', '',
		`Be prepared for sprint ${sprint-1} demos and retrospectives`,
		'Those scheduled to demo please be a couple of minutes early to class' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}
export const ics_4_3of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_4_3of6_lists, sprint, activityList)
	const metricsSubmissionPercentage = () => {
		if (getClass().section === '002') {
			return submissionPercentage([
				{ name: 'Discussion', due:27, submitted:26 },
				{ name: 'Quiz', due:27, submitted:27 },
				{ name: 'Lab', due:27, submitted:26 },
				{ name: 'Reflection', due: 27, submitted: 27 }
			])
		} else {
			return submissionPercentage([
				{ name: 'Discussion', due:27, submitted:24 },
				{ name: 'Quiz', due:27, submitted:27 },
				{ name: 'Lab', due:27, submitted:27 },
				{ name: 'Reflection', due: 27, submitted: 25 }
			])
		}
	}
	const retrospectiveInto = () => { return retrospectiveIntroduction(sprint)}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Excellent submission percentage... very well done!',
			'100% Submission Percentage === Food... what does “===” mean in Python?',
			'All assignments are graded and posted', 
			'Some difficulties creating GitHub Repositories and Azure Websites',
			'It feels like our changes to help us get started earlier had a positive impact... thoughts?', 
			'Very impressive work! Thank you!' ])
	}
	const breakout = () =>{ return retrospectiveBreakout(sprint) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_4_4of6_lists.prework, sprint, activityList) }

	return completeDeck(slideDeck, [sprintDemosIntro, sprintDemos, demoAssignment, retrospectiveInto, metricsSubmissionPercentage, retrospective, breakout, preworkNext])
}

// Session 4 of 6: Monday
const ics_4_4of6_lists = {
	'announcements':[ 
		'Any announcements?' ],
	'prework':[
		'Complete through activity 11 prior to next class', '',
		'Focus on “Sequences, Selections, and Loops” and “Python Programming”',
		'Be prepared for “Sequences, Selections, and Loops with Python Breakout”' ],
	'agenda':[
		'Sequences, Selections, and Loops with Python Breakout',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}
export const ics_4_4of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_4_4of6_lists, sprint, activityList)
	const breakout = () => { 
		return breakoutStandard( 
			'Breakout: Sequences, Selections, and Loops with Python', 
			'In this breakout session we will demonstrate our mastery of Sequences, Selections, and Loops using our knowledge of Python:', [
			'Sequence and selection “Numbering Systems with Python”', 
			'Loops in “Numbering Systems with Python”', 
			'Sequences in “Matchmaker Lite - Part 2”',
			'Selections in “Matchmaker Lite - Part 2”',
			'Repetition in “Matchmaker Lite - Part 2”... what is the relationship between Loops and Repetition?'
		])
	}
	const programmingTogether = () => {
		return bulletListSlide('Lab & Programming Together', 
			'How can we best make progress on Matchmaker given that we have already:', [
			'Started MatchMakerLite tutorial by implementing a README.md and LICENSE file in GitHub', 
			'Added a MatchMakerLite.py file', 
			'Pushed the updated files to GitHub',
			'Zipped the files as if we were going to submit them for Lab 4',
			'Started work on MatchMaker' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_4_5of6_lists.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ breakout, preworkNext, programmingTogether ])
}

// Session 5 of 6: Wednesday
const ics_4_5of6_lists = {
	'announcements':[ 
		'Any announcements?' ],
	'prework':[
		'Complete through activity 12 and working on activity 13 prior to next class', '',
		'Be prepared for “Computer Science Illuminated” Artificial Intelligence Breakout',
		'Be prepared for Quiz 4' ],
	'agenda':[
		'“Computer Science Illuminated” Artificial Intelligence Breakout',
		'Prework for Next Class',
		'Quiz 4' ]
}
export const ics_4_5of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_4_5of6_lists, sprint, activityList)
	const breakout = () => { 
		return breakoutStandard( 
			'Breakout: Artificial Intelligence', 
			'In this breakout will discuss Artificial Intelligence (reading and lecture):', [
			'Thinking Machines',
			'Knowledge Representation and Data Quality',
			'Expert Systems',
			'Neural Networks',
			'Natural Language Processing',
			'Robotics' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_4_5of6_lists.prework, sprint, activityList) }
	const quiz = () => { return tQuiz(sprint) }

	return completeDeck(slideDeck, [ breakout, preworkNext, quiz ])
}

// Session 5 of 6: Wednesday
const ics_4_6of6_lists = {
	'announcements':[ 
		`All sprint ${sprint} assignments due Sunday!` ],
	'prework':[
		'Be at mostly complete with activity 13 prior to next class', '',
		'Be prepared for Lab & Programming together' ],
	'agenda':[
		'Sprint Progress Polling',
		'Prework for Next Class',
		'Lab and Programming Together' ]
}
export const ics_4_6of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_4_6of6_lists, sprint, activityList)
	// BugBug: the following line must be updated for ics_5_1of6.prework.
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_4_5of6_lists.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ preworkNext, tLab ])
}



