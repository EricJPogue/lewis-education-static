import { xyz_1_2of6, checklistAnnouncementsPreworkAndAgenda, completeDeck } from './SL00000Sprint00'
import { tPrework, tQuiz, basicSlideWithLogo, bulletListSlide, breakoutStandard, orderedListSlide } from './SLSprint00'

import { list20000Sprint01 } from '../ActivityLists/AL20000Sprint01'

// Introduction to Computer Science (ICS) sprint 1 global values.
const sprint = 1
const activityList = () => { return list20000Sprint01(sprint) }

// Todo: Integrate all sprint 1 session 1 of 6 slide decks as they are all the same. 

// Sprint 1 session 1 of 6: Monday
const ics_1_1of6_lists = {
	'announcements':[ 
		'Welcome back! I hope you had a wonderful Holiday Break.' ],
	'prework':[
		'Review Welcome Message',
		'Review Blended Learning & Flipped Classroom',
		'Review Introduction to Scrum',
		'Review Course Syllabus' ],
	'agenda':[
		'Progress Polling',
		'Class Format',
		'Introductions - Part 1',
		'Sprint 1 Planning (abbreviated)',
		'Introductions - Part 2 and Scrum Team Assignments',
		'Prework for Next Class' ]
}

export const ics_1_1of6 = () => { 
	const poll = () => { return tPrework('Sprint Progress Polling', ics_1_1of6_lists.prework, sprint, activityList) }
	const switchDeck = () => { return bulletListSlide('PowerPoint', 'Switch to PowerPoint slides.', [])}

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_1_1of6_lists, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_1_2of6_lists.prework, sprint, activityList) }
	return completeDeck(slideDeck, [poll, switchDeck, preworkNext])
}

// Sprint 1 session 2 of 6: Wednesday
const ics_1_2of6_lists = {
	'announcements':[ 
		'Friday’s class will be remote via Zoom' ],
	'prework':[
		'Complete through activity 7 prior to next class', '',
		`Be prepared to complete sprint ${sprint} planning` ],
	'agenda':[
		'Sprint Progress Polling', 
		'Introductions and Scrum Team Assignments (continued)',
		`Sprint ${sprint} Planning (continued)`,
		`Sprint ${sprint} Scrum Team Breakout` ]
}
export const ics_1_2of6 = () => { return xyz_1_2of6(sprint, ics_1_2of6_lists, ics_1_3of6_lists, activityList) }

// Sprint 1 session 3 of 6: Friday
const ics_1_3of6_lists = {
	'announcements':[ 
		'Reminder that Monday is Martin Luther King Jr. Day with no classes' ],
	'prework':[
		'Complete through activity 10 prior to next class', '',
		'Be prepared for “Software as a Service, Agile Development, and Cloud Computing” Breakout'],
	'agenda':[
			'Sprint Progress Polling plus Command Line Interfaces (CLI) and Directories',
			'Programming Together with graphical and CLI tool to manage directories and files',
			'Prework for Next Class',
			'Breakout: File Systems, Directories, and Files' 
	]
}
export const ics_1_3of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_1_3of6_lists, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', ics_1_3of6_lists.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_1_5of6_lists.prework, sprint, activityList) }
	const lab = () => {
		return bulletListSlide('Programming Together (Lab)', 
			'Let’s spend a few minutes programming together utilizing our Command Line Interface (CLI) to explore Directories and Files by:', [
			'Quick review of graphical directory and file management tools', 
			'Launching PowerShell or Terminal', 
			'Executing pwd', 
			'Executing cd, ls, ls -l, ls -a, and clear',
			'Utilizing mkdir and rmdir' ])
	}
	const breakout = () => { 
		return breakoutStandard(
		'Breakout: File Systems, Directories, and Files', 
		'In this breakout session on File Systems, Directories, and Files (including Dale chapter 11 content) your team will:', [
			'File Systems, Directories, and Hidden Directories... Do hidden folders keep information safe? ',
			'Files, Hidden Files, File Types, and File Extensions... How do we see hidden files and file extensions?', 
			'How would we utilize graphical and command line tools to view and update File Systems?',
			'Where would be a good place to store files for this class? Why?', 
			'What would be a good answer to the lab question on where to store files for this class?' ])
	}

	return completeDeck(slideDeck, [poll, lab, breakout, preworkNext])
}

// Sprint 1 session 4 of 6: Monday
export const ics_1_4of6 = () => { 
	const announcement = () => { return basicSlideWithLogo('Announcement', ['In recognition of Martin Luther King Jr. Day day there is no class.']) }
	return [ announcement ] 
}

// Sprint 1 session 5 of 6: Wednesday
const ics_1_5of6_lists = {
	'prework':[
		'Complete through activity 13 prior to next class', '',
		'Make your initial post for Discussion 1',
		'Be prepared to continue “File Systems, Directories, and Files” Breakout',
		'Be prepared for Quiz 1'],
	'announcements':['TBD'],
	'agenda':['TBD']
}
export const ics_1_5of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_1_5of6_lists, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', ics_1_5of6_lists.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_1_6of6_lists.prework, sprint, activityList) }
	const breakout = () => { 
		return breakoutStandard(
		'Breakout: SaaS, Cloud, and Frameworks & Tools', 
		'In this breakout session on Software Development Life Cycles (SDLCs), Software as a Service, Cloud Computing, and Highly Productive Frameworks & Tools your team will:', [
		'SaaService architectures including SOA, APIs, and Web Services',
		'Cloud Computing including Azure, AWS, Google, GoDaddy, and Cloud9... How have costs evolved?',
		'Highly Effective Frameworks including Ruby/Rails, React, MERN, Flask and many more', 
		'Highly Effective Tools Git, GitHub, JUnit,  and many more',
		'Testing including Verification and Validation... How does Waterfall accomplish Validation?' ])
	}
	const quizExpectations = () => {
		return orderedListSlide('Quiz Expectations', 
			'Quiz Expectations include:', [
			'You may use any naturally available documentation including books, notes, and web browser',
			'You may not use quiz specific content like question banks',
			'The quiz is an individual assignment so asking others would be inappropriate**',
			'You are welcome to ask me quiz or non-quiz related questions',
			'Your first sincere attempt at the quiz is expected by the end of class']) 
	}
	const quiz = () => { return tQuiz(sprint) }
	return completeDeck(slideDeck, [poll, breakout, quizExpectations, quiz, preworkNext])
}

// Sprint 1 session 6 of 6: Friday
const ics_1_6of6_lists = {
	'announcements':['TBD'],
	'prework':['TBD'],
	'agenda':['TBD']
}
export const ics_1_6of6 = () => { 
	return checklistAnnouncementsPreworkAndAgenda(ics_1_6of6_lists, sprint, activityList)
}