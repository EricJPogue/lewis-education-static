import { checklistAnnouncementsPreworkAndAgenda, completeDeck, tLab } from './SL00000Sprint00'
import { xyz_1_1of6, xyz_1_2of6,  } from './SL00000Sprint01'
import { tPrework, tQuizExpectations, tQuiz, basicSlide, basicSlideWithLogo, bulletListSlide, breakoutStandard } from './SLSprint00'

import { list20000Sprint01 } from '../ActivityLists/AL20000Sprint01'
import { ics_2_1of6_PAaA } from './SL20000Sprint02'

// Introduction to Computer Science (ICS) sprint 1 global values.
const sprint = 1
const activityList = () => { return list20000Sprint01(sprint) }

// Sprint 1 session 1 of 6: Monday
export const ics_1_1of6 = () => { return xyz_1_1of6(activityList, ics_1_2of6_PreworkAnnouncementAndAgenda.prework) }

// Session 2 of 6: Wednesday
const ics_1_2of6_PreworkAnnouncementAndAgenda = {
	'prework':[
		'Complete through activity 7 prior to next class', '',
		`Be prepared to complete sprint ${sprint} planning` ],
	'announcements':[ 
		'Friday’s class will be remote via Zoom' ],
	'agenda':[
		'Sprint Progress Polling', 
		'Introductions and Scrum Team Assignments (continued)',
		`Sprint ${sprint} Planning (continued)`,
		`Sprint ${sprint} Scrum Team Breakout` ]
}
export const ics_1_2of6 = () => { return xyz_1_2of6(sprint, ics_1_2of6_PreworkAnnouncementAndAgenda, ics_1_3of6_PreworkAnnouncementAndAgenda, activityList) }

// Session 3 of 6: Friday
const ics_1_3of6_PreworkAnnouncementAndAgenda = {
	'prework':[
		'Complete through activity 10 prior to next class', '',
		'Be prepared for “File Systems, Directories, and Files” Breakout' ],
	'announcements':[ 
		'Reminder that Monday is Labor Day with no classes' ],
	'agenda':[
		'Sprint Progress Polling plus Command Line Interfaces (CLI) and Directories',
		'Programming Together with graphical and CLI tool to manage directories and files',
		'Prework for Next Class',
		'Breakout: File Systems, Directories, and Files' ]
}
export const ics_1_3of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_1_3of6_PreworkAnnouncementAndAgenda, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', ics_1_3of6_PreworkAnnouncementAndAgenda.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_1_5of6_PreworkAnnouncementsAndAgenda.prework, sprint, activityList) }
	const lab = () => {
		return bulletListSlide('Programming Together (Lab)', 
			'Let’s spend a few minutes programming together utilizing our Command Line Interface (CLI) to explore Directories and Files by:', [
			'Quick review of graphical directory and file management tools', 
			'Launching PowerShell or Terminal', 
			'Executing pwd', 
			'Executing cd, ls, ls -l, ls -a, and clear',
			'Utilizing mkdir and rmdir' ])
	}
	const breakout = () => { return breakoutFileSystemsDirectoriesAndFile() }

	return completeDeck(slideDeck, [poll, lab, breakout, preworkNext])
}

// Session 4 of 6: Monday
export const ics_1_4of6 = () => { 
	const announcement = () => { return basicSlideWithLogo('Announcement', ['In recognition of Labor Day there is no class.']) }
	return [ announcement ] 
}

// Session 5 of 6: Wednesday
const ics_1_5of6_PreworkAnnouncementsAndAgenda = {
	'prework':[
		'Complete through activity 13 prior to next class', '',
		'Make your initial post for Discussion 1',
		'Be prepared to continue “File Systems, Directories, and Files” Breakout',
		'Be certain to have your GitHub account available',
		'Be prepared for Programming Together with “Hello World for the Web - Part 1”'],
	'announcements':[
		'All sprint 1 activities and assignments due Sunday'],
	'agenda':[
		'Sprint Progress Polling',
		'Breakout: File Systems, Directories, and Files (continued)',
		'Prework for Next Class',
		'Programming Together with “Hello World for the Web - Part 1”']
}
export const ics_1_5of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_1_5of6_PreworkAnnouncementsAndAgenda, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', ics_1_5of6_PreworkAnnouncementsAndAgenda.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_1_6of6_PreworkAnnouncementsAndAgenda.prework, sprint, activityList) }
	const breakout = () => { return breakoutFileSystemsDirectoriesAndFile() }
	const quizExpectations = () => { return tQuizExpectations() }
	const quiz = () => { return tQuiz(sprint) }

	return completeDeck(slideDeck, [poll, breakout, quizExpectations, quiz, preworkNext])
}

// Session 6 of 6: Friday
const ics_1_6of6_PreworkAnnouncementsAndAgenda = {
	'prework': [
		'Complete through activity 14 prior to next class', '',
		'Be prepared for Lab & Programming Together',
		`Be prepared to submit all sprint ${sprint} assignments Sunday!` ],
	'announcements':[
		`All sprint ${sprint} assignments due Sunday!`],
	'agenda':[
		`Quiz ${sprint} “Phone a Friend”`,
		'Quiz 1',
		'Lab']
}
export const ics_1_6of6 = () => { 
	const slideDeck =  checklistAnnouncementsPreworkAndAgenda(ics_1_6of6_PreworkAnnouncementsAndAgenda, sprint, activityList)
	const quizPhoneAFriend = () => { return basicSlide(`Quiz ${sprint} “Phone a Friend”`, [`Let’s play Quiz ${sprint} “Phone a Friend”`]) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_2_1of6_PAaA.prework, sprint, activityList) }

	return completeDeck(slideDeck, [quizPhoneAFriend, preworkNext, tLab ])
}

// Share between multiple sessions
const breakoutFileSystemsDirectoriesAndFile = () => {
	return breakoutStandard(
		'Breakout: File Systems, Directories, and Files', 
		'In this breakout session on File Systems, Directories, and Files (including Dale chapter 11 content) your team will:', [
			'File Systems, Directories, and Hidden Directories... Do hidden folders keep information safe? ',
			'Files, Hidden Files, File Types, and File Extensions... How do we see hidden files and file extensions?', 
			'How would we utilize graphical and command line tools to view and update File Systems?',
			'Where would be a good place to store files for this class? Why?', 
			'What would be a good answer to the lab question on where to store files for this class?' ])
}

// Todo: Fix syllabus Final Exam time that says Friday... when it should be Wednesday.