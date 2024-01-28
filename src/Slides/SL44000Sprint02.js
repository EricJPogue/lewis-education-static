import { list44000Sprint01 } from '../ActivityLists/AL44000Sprint01'
import { list44000Sprint02 } from '../ActivityLists/AL44000Sprint02'

import { xyz_n_1of6_lists, xyz_n_1of6, xyz_n_6of6, checklistAnnouncementsPreworkAndAgenda, completeDeck, tReviewDemoSchedule, tLab } from './SL00000Sprint00'
import { basicSlide, bulletListSlide, orderedListSlide, submissionPercentage, tDiscussionBreakout, tPrework, tQuiz, tQuizExpectations, breakoutStandard, sprintDemosIntro, sprintDemos, demoAssignment } from './SLSprint00'

import { se_3_1of6_PAaA } from './SL44000Sprint03'

import { sprint2Planning } from './SL20000Sprint02'

// Software Engineering (SE) sprint 2 global values.
const sprint = 2
const activityListPrevious = () => { return list44000Sprint01(sprint-1) }
const activityList = () => { return list44000Sprint02(sprint) }

// SE Sprint 2 session 1 of 6: Monday
export const se_2_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const se_2_1of6 = () => { return xyz_n_1of6(sprint, se_2_1of6_PAaA.prework, activityListPrevious, se_2_1of6_PAaA.agenda, se_2_2of6_PAaA.prework, activityList, sprint2Planning ) }

/* BugBug: Integrate this into sprint 2. 

const breakoutSaaSName = 'SaaS, Cloud, and Frameworks & Tools'
const breakoutSaaS = () => { 
	return breakoutStandard(
	'Breakout: SaaS, Cloud, and Frameworks & Tools', 
	'In this breakout session on Software Development Life Cycles (SDLCs), Software as a Service, Cloud Computing, and Highly Productive Frameworks & Tools your team will:', [
	'SaaService architectures including SOA, APIs, and Web Services',
	'Cloud Computing including Azure, AWS, Google, GoDaddy, and Cloud9... How have costs evolved?',
	'Highly Effective Frameworks including Ruby/Rails, React, and MERN and more... what is our framework?', 
	'Highly Effective Tools Git, GitHub, JUnit,  and more',
	'Testing including Verification and Validation... How does Waterfall accomplish Validation?' ])
}
*/

// Session 2 of 6: Wednesday
const se_2_2of6_PAaA = {
	'prework': [
		'Complete through activity 6 prior to next class', '',
		'Be prepared for Lab & Programming Together Wednesday',
		'Demos and retrospectives will be Friday' ],
	'announcements':[
		'Reducing procrastination is on the agenda',
		'Does everyone know where to find the class recordings?'],
	'agenda':[
		`Sprint ${sprint} Planning Questions & Answers`,
		`Discussion Board ${sprint} as a scrum team`,
		'Confirm scrum team Demos for Next Class',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}
export const se_2_2of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_2_2of6_PAaA, sprint, activityList)
	const qAndA = () => { return bulletListSlide(`Sprint ${sprint} Planning Questions & Answers`, `What questions do you have about sprint ${sprint}?`, [ ]) }
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const preworkNext = () => { return tPrework('Prework For Next Class', se_2_3of6_PAaA.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ qAndA, discussionBreakout, tReviewDemoSchedule, preworkNext, tLab ])
}

// Session 3 of 6: Friday
const breakoutSaaSArchitectureName = 'The Architecture of Saas Applications'
const breakoutSaaSArchitecture = () => {
	return breakoutStandard( 
		`Breakout: ${breakoutSaaSArchitectureName}`, 
		`In this breakout session on ${breakoutSaaSArchitectureName} reading and lecture your team will discuss:`, [
		'“100,000 Feet” through “50,000 Feet”',
		'“10,000 Feet” through “500 Feet”',
		'SaaS Architecture elements and the specific tools in the Author’s SaaS Architecture including database', 
		'The required components of our SaaS architecture... and interesting options', 
		'Suggested additional components including Bootstrap, Mongoose, Web Services/REST, and React' ])
}
const se_2_3of6_PAaA = {
	'prework': [
		'Complete through activity 11 prior to next class', '',
		'Be prepared for Demos and Retrospectives Friday' ],
	'announcements':[ 
		'Any announcements?' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class',
		`Preview of Monday Breakout on ${breakoutSaaSArchitectureName}` ]
}
export const se_2_3of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_2_3of6_PAaA, sprint, activityList)

	const metrics = () => {
		return basicSlide(`Sprint ${sprint-1} Metrics`, [
			`Let’s take a minute and review our Sprint ${sprint-1} Submission Percentage class metric.` ])
	}
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:26, submitted:26 },
			{ name: 'Quiz', due:26, submitted:26 },
			{ name: 'Lab', due:26, submitted:26},
			{ name: 'Reflection', due: 26, submitted: 26 }])
	}
	// Todo: Consider adding the pretty slides back into slide deck for Demos and Retrospectives. 
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Wow! 100% submission percentage in sprint 1',
			'All assignments are graded and posted', 
			'Thank you for your reflection comments',
			'Lots of nice comments about scrum teammates', 
			'Be **sure** to put something in for each question so that I can give you at least a point or two',
			'Riddles continue to be my Kryptonite for me :-) ... and now funny YouTube videos?!?!', 
			'... What has cities with no people, mountains with no trees, and water with no ocean?', 
			'If you are not where you want to be in the class after sprint 1, I encourage you to come and talk with me' ])
	}
	const retrospectiveBreakout = () => {
		return orderedListSlide('Breakout Session for Team Retrospective', 
			'As a scrum team consider:', [
			`How does your team feel about sprint ${sprint-1} now that it is over`,
			`What could be done to make sprint ${sprint-1} or the class overall better or more manageable`,
			'What improvements should we make as a class, team, or individual going forward' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', se_2_4of6_PAaA.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ tReviewDemoSchedule, sprintDemosIntro, sprintDemos, demoAssignment, metrics, 
		metricsSubmissionPercentage, retrospective, retrospectiveBreakout, preworkNext, breakoutSaaSArchitecture ])
}

const se_2_4of6_PAaA = {
	'prework': [
		'Complete through activity 13 prior to next class', '',
		`Be prepared for “${breakoutSaaSArchitectureName}” breakout` ],
	'announcements':[ 
		'Any teams interested in working on a Lewis Signage class product?' ],
	'agenda':[ 
		'The Humble Text File (abbreviated)',
		`Breakout: ${breakoutSaaSArchitectureName}`,
		'Lab (as time allows)' ]
}
export const se_2_4of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_2_4of6_PAaA, sprint, activityList)
	const theHumbleTextFile = () => { return basicSlide('The Humble Text File (abbreviated)', ['Let’s explore the evolution of the humble text file.']) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_2_5of6_PAaA.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ theHumbleTextFile, breakoutSaaSArchitecture, preworkNext, tLab ])
}

// Session 5 of 6: Wednesday
const breakoutSaaSClientFrameworkJavaScriptName = 'SaaS Client Framework: JavaScript Introduction'
const breakoutSaaSClientFrameworkJavaScript = () => {
	return breakoutStandard( 
		`Breakout: ${breakoutSaaSClientFrameworkJavaScriptName}`, 
		`In this breakout session on ${breakoutSaaSClientFrameworkJavaScriptName} reading and lecture your team will discuss:`, [
		'JavaScript and code running in the browser',
		'How does JavaScript relate to the Introduction to Ruby, Introduction to Rails, and Advanced Rails chapters?',
		'JavaScript and code running on the server plus Node.js, AJAX, JavaScript, and JSON', 
		'AJAX, REST, Web Services, and JSON', 
		'JavaScript libraries including JQuery, Bootstrap, and reactive applications',
		'Single-page web applications, static web sites, REACT, and Jamstack' ])
}

const se_2_5of6_PAaA = {
	'prework': [
		'Complete through activity 15 prior to next class', '',
		`Be prepared for “${breakoutSaaSClientFrameworkJavaScriptName}” breakout`,
		`Be prepared for Quiz ${sprint}` ],
	'announcements':[ 
		'Any announcements or questions?' ],
	'agenda':[ 
		'Sprint Progress Polling',
		`Breakout: ${breakoutSaaSClientFrameworkJavaScriptName}`,
		`Quiz ${sprint}` ],
}
export const se_2_5of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_2_5of6_PAaA, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', se_2_5of6_PAaA.prework, sprint, activityList) }
	const breakout = () => { return breakoutSaaSClientFrameworkJavaScript() }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_2_6of6_PAaA.prework, sprint, activityList) }
	const quizExpectations = () => { return tQuizExpectations(sprint)}
	const quiz = () => { return tQuiz(sprint) }

	return 	completeDeck(slideDeck, [ poll, breakout, preworkNext, quizExpectations, quiz ])
}

// Session 6 of 6: Friday
const se_2_6of6_PAaA = () => {
	const preworkAnnouncementsAndAgenda = {
		'prework': [
			'Complete activity 15 and be actively working on 16', '',
			'Be prepared for Lab & Programming Together',
			`All sprint ${sprint} assignments are due Sunday!` ],
		'announcements':[
			`All sprint ${sprint} assignments are due Sunday!`],
		'agenda':[
			`Quiz ${sprint} “Phone a Friend”`,
			'Lab']
	}
	return preworkAnnouncementsAndAgenda
}

export const se_2_6of6 = () => { return  xyz_n_6of6(sprint, se_2_6of6_PAaA, se_3_1of6_PAaA.prework, activityList) }
