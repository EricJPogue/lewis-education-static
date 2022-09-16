import { getClass } from '../DataAndAPIs/Classes'

import { preflightChecklist, instructorChecklist, agendaSlide, basicSlide, activitiesReview, orderedListSlide, prework, bulletListSlide, submissionPercentage, basicSlideWithLogo, end, } from './SLSprint00'
import { sprintDemosIntro, sprintDemos, demoAssignment } from './SLSprint00'

import { discussionBreakout } from './SLSprint00'

import { ics_prework_2_1of6, web_prework_2_1of6 } from './SLSprint01'

import { list20000Sprint02 } from '../ActivityLists/AL20000Sprint02' 
import { list24700Sprint02 } from '../ActivityLists/AL24700Sprint02'
import { list44000Sprint02 } from '../ActivityLists/AL44000Sprint02'

export const sprint2Router = (route) => {
	const courseNumberPlusRoute = getClass().number + '-' + route
	switch(courseNumberPlusRoute) {
		case '20000-2-1': return ics2_1of6()
		case '20000-2-2': return ics2_2of6()
		case '20000-2-3': return ics2_3of6()

		case '24700-2-1': return web2_1of6()
		case '24700-2-2': return web2_2of6()
		case '24700-2-3': return web2_3of6()

		case '44000-2-1': return se2_1of6()
		case '44000-2-2': return se2_2of6()
		case '44000-2-3': return se2_3of6()

		default: return null
	}
}

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

// Todo: Review slides and check for class conflict relating to “Mass of the Holy Spirit” as FA22 university schedule
//     cancelled 11 AM classes cause us to reschedule Wednesday (ics2_2of6) activities to Friday.
// Todo: Consider prerecording class for both FA22 sections if one is canceled.
const ics2_2of6 = () => {
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
			{ name: 'Discussion', due:27, submitted:27 },
			{ name: 'Quiz', due:27, submitted:27 },
			{ name: 'Lab', due:27, submitted:26},
			{ name: 'Reflection', due: 27, submitted: 26 }
		])
	}
	// Todo: Add pretty slides back into slide deck for Demos and Retrospectives. 
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Excellent submission percentage',
			'All assignments are graded and posted', 
			'Thank you for your reflection comments',
			'Lots of nice comments about scrum teammates', 
			'Several requests for more time to work with your scrum teams',
			'Be **sure** to put something in for each question so that I can give you at least a point or two',
			'Riddles are still like Kryptonite for me :-) ... Why Michael? What is “eiπ+1 = ?”', 
			'Why Sami? ... What has cities with no people, mountains with no trees, and water with no ocean?', 
			'**If you are not where you want to be in the class after sprint 1, I highly encourage you to come and talk with me' ])
	}
	// Todo: Create and add slide for metrics.
	const retrospectiveBreakout = () => {
		return orderedListSlide('Breakout Session for Team Retrospective', 
			'As a scrum team consider:', [
			`How does your team feel about sprint ${sprint-1} now that it is over`,
			`What could be done to make sprint ${sprint-1} or the class overall better or more manageable`,
			'What improvements should we make as a class, team, or individual going forward' ])
	}

	const prework = ics_prework_2_2of6

	return [ preflightChecklist, instructorChecklist, agenda, prework, 
		sprintDemosIntro, sprintDemos, demoAssignment,  
		metrics, metricsSubmissionPercentage, retrospective, retrospectiveBreakout, end ]
}

/* Due to change in plans on Wednesday, the Friday prework was not implemented. 
const ics_prework_2_3of6 = () => {
	const activityList = () => { return list20000Sprint02(sprint) }
	return prework('Prework', [
		'Complete through activity 5 prior to next class', '',
		'Be prepared for sprint 1 demos and retrospectives',
		'Those scheduled to demo on Wednesday please be a couple of minutes early to class' ], 
		sprint, activityList)
}
*/

const ics2_3of6 = () => {
	const announcements =  () => { return basicSlideWithLogo(
		'Announcements', 
		['Our change of plans on Wednesday has us completing Wednesday’s activities today.']) }

	const slides = [ preflightChecklist, instructorChecklist, announcements ].concat(ics2_2of6())
	
	// Todo: Rewrite this section of code.
	// Remove duplicate checklists.
	slides.splice(3, 2)
	slides.splice(12, 0, ics_prework_2_4of6)

	return slides
}

const ics_prework_2_4of6 = () => {
	const activityList = () => { return list20000Sprint02(sprint) }
	return prework('Prework', [
		'Complete through activity 9 prior to next class', '',
		'Complete your initial Discussion 2 post by the end of the day Sunday',
		'Be prepared for breakout on The Information Layer reading and lecture',
		'Be prepared for programming together with Getting to Know Each Other' ], 
		sprint, activityList)
}

// Web & Distributed Programming (WEB)
const web2_1of6 = () => {
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
const web2_2of6 = () => {
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
const web2_3of6 = () => {
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
		`Be prepared for breakout discussion on Engineering Software as a Service” Chapter 2 reading and lecture` ], 
		sprint, activityList)
}

// Software Engineering (SE)
// Todo: Switch to "_prework" naming for Sprint 2 prework slide functions. 
export const se2_1of6_prework = () => {
	return prework('Prework', [
		'Everything is due Sunday!', '',
		'Be prepared to focus 100% on Sprint 2 Planning' ])
}
const se2_1of6 = () => {
	return ics2_1of6(se2_1of6_prework(), se2_2of6_prework())
}

const se2_2of6_prework = () => {
	const activityList = () => { return list44000Sprint02(sprint) }
	return prework('Prework', [
		'Complete through activity 6 prior to next class', '',
		'Be prepared for sprint 1 demos and retrospectives',
		'Those scheduled to demo on Wednesday please be a couple of minutes early to class' ], 
		sprint, activityList)
}
const se2_2of6 = () => {
	const prework = se2_2of6_prework
	const preworkNext = se2_3of6_prework

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
			{ name: 'Lab', due:14, submitted:13 },
			{ name: 'Reflection', due: 14, submitted: 12 }
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

const se2_3of6_prework = () => {
	const activityList = () => { return list44000Sprint02(sprint) }
	return prework('Prework', [
		'Complete through activity 6 prior to next class', '',
		`Be prepared for discussion ${sprint}`,
		'Be prepared for Lab' ], 
		sprint, activityList)
}

const se2_3of6 = () => {
	const prework = se2_3of6_prework
	const preworkNext = se2_4of6_prework

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
			'Implementing a Assignment Portfolio website utilizing GitHub, Azure, and Node.js', 
			'Locally updating and testing your Assignment Portfolio',
			'Completing the CI/CD workflow with automatically pushing our changes through GitHub to Azure ' ])
	}

	return [ preflightChecklist, instructorChecklist, agenda, prework, 
		discussionBoard, preworkNext, programmingTogether, end ]
}

const se2_4of6_prework = () => {
	const activityList = () => { return list44000Sprint02(sprint) }
	return prework('Prework', [
		'Complete through activity 10 prior to next class', '',
		`Be prepared for breakout discussion on Engineering Software as a Service” Chapter 2 reading and lecture` ], 
		sprint, activityList)
}