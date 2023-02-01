// Todo: These slides to to be reviewed and updated. 

import { preflightChecklist, instructorChecklist, agendaSlide, basicSlide, breakoutStandard, activitiesReview, orderedListSlide, prework, bulletListSlide, submissionPercentage, basicSlideWithLogo, end, tPrework, tQuiz } from './SLSprint00'
import { sprintDemosIntro, sprintDemos, demoAssignment } from './SLSprint00'
import { tPreworkWithLogo } from './SLSprint00'

import { discussionBreakout } from './SLSprint00'

import { ics_prework_2_1of6, web_prework_2_1of6 } from './archive/SLSprint01'

import { list20000Sprint02 } from '../ActivityLists/AL20000Sprint02' 
import { list24700Sprint02 } from '../ActivityLists/AL24700Sprint02'
import { list44000Sprint02 } from '../ActivityLists/AL44000Sprint02'

import { web_3_1of6_prework_list } from './SL24700Sprint03'

const makeSlideDeck = (slides) => {	return [ preflightChecklist, instructorChecklist ].concat(slides).concat(end) }
const sprint = 2
const ics2_1of6 = (preworkTodayIn, preworkNextClassIn) => {
	const preworkToday = () => { 
		if (preworkTodayIn === undefined) {
			return ics_prework_2_1of6() 
		}
		return preworkTodayIn 
	} 
	const preworkNextClass = () => { 
		if (preworkNextClassIn === undefined) {
			return ics_prework_2_2of6() 
		}
		return preworkNextClassIn
	}
	const agenda = () => {
		return agendaSlide([
			'Prework for Today',
			`Sprint ${sprint} Planning`,
			`Breakout on Sprint ${sprint} Planning`,
			'Review Demo Schedule',
			'Prework for Next Class' ])
	}
	const sprintPlanning = () => {
		return orderedListSlide(`Sprint Planning`, `Sprint ${sprint} Changes:`, [
			'Similar to previous sprint with Discussion, Quiz, Lab, and Reflection',
			'We have a new Demo assignment that will need to be submitted when you complete your lab demo',
			`We will have sprint ${sprint-1} Demos and Retrospectives on Wednesday`,
			'We will complete our first Scrum Team Breakout Discussion on Friday',
			'Should be a little easier since we don’t have a holiday during the sprint'
		])
	}
	const activitiesBreakout = () => {
		return orderedListSlide('Scrum Team Planning Review', 'As a scrum team:', [
			`Review sprint ${sprint} activity list & assignments in detail`,
			'Discuss and identify questions/concerns',
			'Scrum master share your team’s top 2 questions/concerns during report out' ])
	}
	const introducingDemos = () => {
		return bulletListSlide('Foreshadowing Wednesday’s Sprint Demos', 
			'Sprint demos are a key part of Agile software development and Scrum.', [
			'They occur at the beginning of each new sprint ',
			'They are an opportunity to show what was completed in the previous sprint',
			'They are intended to be an **easy** and rewarding experience to show off your work',
			'Also a chance to see how others solved a problem and to see some of the challenges they faces',
			'We will each be doing at least on sprint demo during the semester during class' ])
	}

	return [ instructorChecklist, preflightChecklist, agenda, preworkToday, sprintPlanning, activitiesReview, 
		activitiesBreakout, preworkNextClass, introducingDemos, sprintDemosIntro, sprintDemos, demoAssignment, end ]
}

const ics_prework_2_2of6 = () => {
	const activityList = () => { return list20000Sprint02(sprint) }
	return prework('Prework', [
		'Complete through activity 5 prior to next class', '',
		'Be prepared for sprint 1 demos and retrospectives',
		'Those scheduled to demo on Wednesday please be a couple of minutes early to class' ], 
		sprint, activityList)
}


const theHumbleTextFile = () => {
	return bulletListSlide('The Humble Text File', 
		'Let’s explore Binary Values and the Data Representation of text files including:', [
		'ASCII Text Files', 
		'Unicode',
		'UTF-16 and UTF-8 ',
		'What is a local',
		'What is received when a US-English ASCII email is sent to a CA-French recipient?'])
}

const lab = () => { return basicSlide('Lab and Programming Together', [
	`How can we best work together to help you be successful in sprint ${sprint}?`, 
	'“Phone a Friend” quiz question review?', 
	'Programming together on assignments?' ]) }

const ics_2_6of6_agenda = [
	'Sprint Progress Polling',
	'Prework for Next Class',
	'Lab and Programming Together']
	
// Web & Distributed Programming (WEB)
export const web_2_1of6 = () => {
	return ics2_1of6(web_prework_2_1of6(), web2_2of6_prework())
}

const web2_2of6_prework = () => {
	const activityList = () => { return list24700Sprint02(sprint) }
	return prework('Prework', [
		'Complete through activity 5 prior to next class', '',
		'Be prepared for sprint 1 demos and retrospectives',
		'Those scheduled to demo on Wednesday please be a couple of minutes early to class' ], 
		sprint, activityList)
}
export const web_2_2of6 = () => {
	const prework = web2_2of6_prework
	const preworkNext = web2_3of6_prework

	const agenda = () => { 
		return agendaSlide([
			'Prework for Today',
			`Sprint ${sprint-1} Demos`,
			`Sprint ${sprint-1} Retrospective`,
			`Breakout for Sprint ${sprint-1} Retrospective`,
			'Prework for Next Class' ])
	}
	const metrics = () => {
		return basicSlide(`Sprint ${sprint-1} Metrics`, [
			`Let’s take a minute and review our Sprint ${sprint-1} Submission Percentage class metric.` ])
	}
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:14, submitted:13 },
			{ name: 'Quiz', due:14, submitted:14 },
			{ name: 'Lab', due:14, submitted:14},
			{ name: 'Reflection', due: 14, submitted: 13 }
		])
	}
	// Todo: Add pretty slides back into slide deck for Demos and Retrospectives. 
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Excellent submission percentage',
			'Quiz 1 and Reflection 1 are posted... still working on other assignments', 
			'Thank you for your reflection comments',
			'Feel free to leverage a library or other appropriate code in your assignments' ])
	}
	// Todo: Create and add slide for metrics.
	const retrospectiveBreakout = () => {
		return orderedListSlide('Breakout Session for Team Retrospective', 
			'As a scrum team consider:', [
			`How does your team feel about sprint ${sprint-1} now that it is over`,
			`What could be done to make sprint ${sprint-1} or the class overall better or more manageable`,
			'What improvements should we make as a class, team, or individual going forward' ])
	}

	return [ preflightChecklist, instructorChecklist, agenda, prework, 
		sprintDemosIntro, sprintDemos, demoAssignment,  
		metrics, metricsSubmissionPercentage, retrospective, retrospectiveBreakout, preworkNext, end ]
}

const web2_3of6_prework = () => {
	const activityList = () => { return list24700Sprint02(sprint) }
	return prework('Prework', [
		'Complete through activity 6 prior to next class', '',
		`Be prepared for discussion ${sprint}`,
		'Be prepared for Lab' ], 
		sprint, activityList)
}
export const web_2_3of6 = () => {
	const prework = web2_3of6_prework
	const preworkNext = web2_4of6_prework

	const agenda = () => { 
		return agendaSlide([
			'Prework for Today',
			`Discussion Board ${sprint} as a Scrum Team`,
			'Prework for Next Class',
			'Lab' ])
	}

	const discussionBoard = () => {
		return discussionBreakout(sprint)
	} 

	const programmingTogether = () => {
		return bulletListSlide('Lab & Programming Together', 
			'Let’s implement CI/CD for our Assignment Portfolio by:', [
			'Discussing Continuous Integration / Continuous Delivery (CI/CD)', 
			'Implementing a Assignment Portfolio website utilizing GitHub and Azure', 
			'Locally updating and testing your Web Resume',
			'Completing the CI/CD workflow with automatically pushing our changes through GitHub to Azure ' ])
	}

	return [ preflightChecklist, instructorChecklist, agenda, prework, discussionBoard, preworkNext, programmingTogether, end ]
}

const web2_4of6_prework = () => {
	const activityList = () => { return list44000Sprint02(sprint) }
	return prework('Prework', [
		'Complete through activity 10 prior to next class', '',
		`Be prepared for breakout discussion on Cascading Style Sheets (CSS) reading and lecture` ], 
		sprint, activityList)
}

const web_2_4of6_prework_list = [
	'Complete through activity 10 prior to next class', '',
	'Be prepared for breakout discussion on Engineering Software as a Service” Chapter 2 reading and lecture' ]
export const web_2_4of6 = () => {
	const activityList = () => { return list24700Sprint02(sprint) }
	const prework = () => { return tPreworkWithLogo('Prework For Today', web_2_4of6_prework_list, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', web_2_5of6_prework_list, sprint, activityList) }

	const agenda = () => { 
		return agendaSlide([
			'Breakout: Cascading Style Sheets (CSS)',
			'The Humble Text File',
			'Prework for Next Class',
			'Lab & Programming Together (as time allows)' ])
	}
	const breakout = () => { 
		return breakoutStandard( 
			'Breakout: Cascading Style Sheets (CSS)', 
			'In this breakout session on Cascading Style Sheets (CSS) including the Sebesta chapter 3 reading and lecture your team will discuss:', [
			'Introduction plus levels including Inline, Internal, and External', 
			'Selectors, Properties, and Pseudo classes', 
			'Font, Color, and List Properties',
			'<span> and <div> tags',
			'Toolkits and Libraries' ])
	}
	// Todo: Remove the following function as it is already available "globally" in the file. 
	const theHumbleTextFile = () => {
		return bulletListSlide('The Humble Text File', 
			'Let’s explore text files including:', [
			'ASCII Text Files', 
			'Unicode',
			'UTF-16 and UTF-8 ',
			'HTML Implications', 
			'Curly Double Quotes' ])
	}
	const lab = () => { 
		return basicSlide( 'Lab & Programming Together (as time allows)', [
			'Tools of the Trade installation and configuration',
			'Current programming assignments' ]) 
	}

	return makeSlideDeck ([ prework, agenda, breakout, theHumbleTextFile, preworkNext, lab ])
}

const web_2_5of6_prework_list = [
	'Complete through activity 10 prior to next class', '',
	'Be prepared for breakout discussion on “Learning Web Development” Chapter 3 on CSS plus Software Licenses' ]
export const web_2_5of6 = () => {
	const activityList = () => { return list24700Sprint02(sprint) }
	const prework = () => { return tPreworkWithLogo('Prework For Today', web_2_5of6_prework_list, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', web_2_6of6_prework_list, sprint, activityList) }

	const announcements =  () => { return basicSlideWithLogo(
		'Announcements', ['ECaMS Study Table is available and fantastic!']) }
	const agenda = () => { 
		return agendaSlide([
			'Data Representation and The Humble Text File (continued)',
			'Breakout: “Learning Web Development” Chapter 3 on CSS plus Software Licenses',
			'Prework for Next Class',
			'Quiz 2' ])
	}
	const breakout = () => { 
		return breakoutStandard( 
			'Breakout: “Learning Web Development” Chapter 3 on CSS plus Software Licenses', 
			'In this breakout session on Cascading Style Sheets (CSS) and Software Licenses your team will discuss:', [
			'Selectors, classes, and pseudoclasses', // Only properties is missing from previous breakout
			'Cascading rules and CSS levels', 
			'Font, Color, and List Properties',
			'Could “Learning Web Development” chapter 3 replace “Programming the World Wide Web” chapter 3?',
			'Describe three types of software license and explain which one would be most appropriate for class work' ])
	}
	const quiz = () => { return tQuiz(sprint) }

	return makeSlideDeck([ announcements, prework, agenda, theHumbleTextFile, breakout, preworkNext, quiz ])
}

const web_2_6of6_prework_list = [
	'Complete through activity 13 prior to next class', '',
	'Be prepared for Lab and Programming Together' ]
const web_2_6of6_agenda = ics_2_6of6_agenda
export const web_2_6of6 = () => {
	const activityList = () => { return list24700Sprint02(sprint) }
	const prework = () => { return tPreworkWithLogo('Prework For Today', web_2_6of6_prework_list, sprint, activityList) }
	const agenda = () => { return agendaSlide(web_2_6of6_agenda) }
	const preworkNext = () => { return tPrework('Prework For Next Class', web_3_1of6_prework_list, sprint, activityList) }

	const announcements =  () => { return basicSlideWithLogo( 'Announcements', ['Everything is due Sunday!']) }
	const polling = () => { return tPrework('Sprint Progress Polling', [], sprint, activityList) }

	return makeSlideDeck([ announcements, prework, agenda, polling, preworkNext, lab ])
}
