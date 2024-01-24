import { checklistAnnouncementsPreworkAndAgenda, completeDeck, tLab } from './SL00000Sprint00'
import { xyz_1_1of6, xyz_1_2of6,  } from './SL00000Sprint01'
import { tPrework, tQuizExpectations, tQuiz, bulletListSlide, breakoutStandard, tRecap } from './SLSprint00'

import { list20000Sprint01 } from '../ActivityLists/AL20000Sprint01'
import { ics_2_1of6_PAaA } from './SL20000Sprint02'

import { sprint1_class_2_PAaA, sprint1_class_2 } from './SL00000Sprint00'



// Introduction to Computer Science (ICS) sprint 1 global values.
const sprint = 1
const activityList = () => { return list20000Sprint01(sprint) }

// Sprint 1 session 1 of 6: Monday
export const ics_1_1of6 = () => { return xyz_1_1of6(activityList, ics_1_2of6_PAaA.prework) }

// Todo: Consolidate xyz_1_1of6 and sprint11_class_2... the are mostly the same. The main issue is that sometime 
// session 1 is a holiday and sometimes it is session 4 depending on the semester. 

// Session 2 of 6: Wednesday
const ics_1_2of6_PAaA = {
	'prework':[
		'Review welcome message', 
		'Review Blended Learning',
		'Review Scrum',
		'Take a quick look at the course syllabus' ],
	'announcements':[ 
		'Welcome back! I hope you had a wonderful Christmas break',
		'Friday’s class will be remote via Zoom' ],
	'agenda':[ 'Progress Polling',
		'Class Format',
		'Introductions - Part 1',
		'Sprint 1 Planning (abbreviated)',
		'Introductions - Part 2 and Scrum Team Assignments',
		'Prework for Next Class' ]
}
export const ics_1_2of6 = () => { return xyz_1_2of6(sprint, ics_1_2of6_PAaA, ics_1_3of6_PAaA, activityList) }

const lab = () => {
	return bulletListSlide('Programming Together (Lab)', 
		'Let’s use our knowledge of Directories and Files to help each other set up a directory for this class and for tool-of-the-trade-screenshots by:', [
		'Quick review of graphical directory and file management tools', 
		'Launching File Explorer or Finder',
		'Launching PowerShell or Terminal', 
		'Executing pwd', 
		'Executing cd, ls, ls -l, ls -a, and clear',
		'Utilizing mkdir and rmdir' ])
}

// Share between multiple sessions
const breakoutFileSystemsDirectoriesAndFile = () => {
	return breakoutStandard(
		'Breakout: File Systems, Directories, and Files', 
		'In this breakout session on File Systems, Directories, and Files (including Dale chapter 11 content) your team will:', [
			'File Systems, Directories, and Hidden Directories... Do hidden folders keep information safe? ',
			'Files, Hidden Files, File Types, and File Extensions... How do we see hidden files and file extensions?', 
			'How would we utilize graphical and command line tools to view and update File Systems?',
			'What would be a good place to store files for this class? Why? See lab question.', 
			'What would be examples of questionable places to store files for this class? Why? See lab question.' ])
}

// Session 3 of 6: Friday
const ics_1_3of6_PAaA = sprint1_class_2_PAaA
export const ics_1_3of6 = () => { return sprint1_class_2(sprint, activityList, sprint1_class_2_PAaA, ics_1_4of6_PAaA.prework) }


/* Cover the following:

Assume I was creating a directory to store source files for a class named “cpsc-20000” and that I was working on my sprint 1 “Hello World” assignment. 
First, explain why the directory below is a very good location to choose to store my source files.

/users/epogue/lewis/cpsc-20000/sprint-1/hello-world

Second, explain the potential issue(s) with each of the following directories:

./lewis/cpsc-2000/sprint-1/hello-world

/Users/epogue/Desktop/lewis/sprint-1/hello-world

/Users/epogue/Documents/lewis/sprint-1/hello-world

./Recents

/Users/epogue/lewis/cpsc 2000/sprint 1/helloworld

/lewis/sprint-1/hello-world
*/

// Session 4 of 6: Monday
const ics_1_4of6_PAaA = {
	'prework':[
		'Complete through activity 9 prior to next class', '',
		'Be prepared to complete Discussion 1', 
		'Be prepared for Lab'],
	'announcements':[ 
		'Welcome back for week 2!',
		'Today is a busy day' ],
	'agenda':[ 
		'Sprint Progress Poll',
		'Discussion 1 & Lab',
		'Preview of Wednesday’s topic' ]
}

export const ics_1_4of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_1_4of6_PAaA, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', ics_1_4of6_PAaA.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_1_5of6_PAaA.prework, sprint, activityList) }
	const lab = () => { return bulletListSlide('Lab & Programming Together', 
		'Let’s focus on completing our activities and assignments by:', [
		'Discussing “Hello World for the Web”', 
		'Completing Discussion 1' ])
	}
	const recap = () => { return tRecap(ics_1_4of6_PAaA.agenda.slice(1))}

	return completeDeck(slideDeck, [poll, lab, preworkNext, breakoutFileSystemsDirectoriesAndFile, recap])
}

// Session 5 of 6: Wednesday
const ics_1_5of6_PAaA = {
	'prework':[
		'Complete through activity 13 prior to next class', '',
		'Make your initial post for Discussion 1',
		'Be prepared for “File Systems, Directories, and Files” Breakout',
		'Be prepared for Programming Together with “Directories and Files”',
		'Be prepared for Quiz 1'],
	'announcements':[
		'Your initial Discussion 1 post was due Monday',
		'All sprint 1 activities and assignments due Sunday'],
	'agenda':[
		'Sprint Progress Polling',
		'Breakout: File Systems, Directories, and Files',
		'Programming Together with “Directories and Files”', 
		'Prework for Next Class',
		'Quiz 1']
}
export const ics_1_5of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_1_5of6_PAaA, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', ics_1_5of6_PAaA.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_1_6of6_PAaA.prework, sprint, activityList) }
	const breakout = () => { return breakoutFileSystemsDirectoriesAndFile() }
	const recap = () => { return tRecap(ics_1_5of6_PAaA.agenda)}
	const quiz = () => { return tQuiz(sprint) }

	return completeDeck(slideDeck, [poll, breakout, lab, tQuizExpectations, quiz, recap, preworkNext])
}

// Session 6 of 6: Friday
const ics_1_6of6_PAaA = {
	'prework': [
		'Complete through activity 14 and working on 15 prior to next class', '',
		'Be prepared for Lab & Programming Together',
		'Be prepared for Quiz 1',
		`Be prepared to submit all sprint ${sprint} assignments Sunday!` ],
	'announcements':[
		`All sprint ${sprint} assignments due Sunday!`],
	'agenda':[
		'Quiz 1',
		'Lab']
}
export const ics_1_6of6 = () => { 
	const slideDeck =  checklistAnnouncementsPreworkAndAgenda(ics_1_6of6_PAaA, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_2_1of6_PAaA.prework, sprint, activityList) }
	const quizExpectations = () => { return tQuizExpectations() }
	const quiz = () => { return tQuiz(sprint) }

	return completeDeck(slideDeck, [preworkNext, quizExpectations, quiz, tLab])
}


