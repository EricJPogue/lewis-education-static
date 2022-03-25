import React from 'react'

import { agendaSlide, prework, progressPolling, quiz, end, basicSlideWithTitle  } from './SL00000'
import { preflightChecklist, instructorChecklist } from './Slide'

import { breakoutIntroducingPython6Through9 } from './Breakout'
import { al20000Sprint05 } from '../ActivityLists/AL20000Sprint05'
import { al24500Sprint05 } from '../ActivityLists/AL24500Sprint05'
import { al44000Sprint05 } from '../ActivityLists/AL44000Sprint05'

import { internalLink } from '../Links'

// Index 
export const SPRINT_5_INDEX_ROUTE = 'index'
export const sprint5Index = () => {
	const index = () => {
		return ( <div>
			March 25, 2022:<br />
			{internalLink('Introduction to Computer Science', `${SD20000_5_6_of_6_ROUTE}`)}<br />
			{internalLink('Object-Oriented Programming', `${SD24500_5_6_of_6_ROUTE}`)}<br />
			March 24, 2022:<br />
			{internalLink('Software Engineering', `${SD44000_5_4_of_4_ROUTE}`)}<br />
			March 23, 2022:<br />
			{internalLink('Introduction to Computer Science', `${SD20000_5_5_of_6_ROUTE}`)}<br />
			{internalLink('Object-Oriented ProgrammingMarch', `${SD24500_5_5_of_6_ROUTE}`)}
		</div> )
	}
	return { sprint: 5, startingSlide: 0,
		slideFunctionList: [ index, preflightChecklist, instructorChecklist ]
	}
}

// Introduction to Computer Science Sprint 5 Session 5 of 6
export const SD20000_5_5_of_6_ROUTE = '20000-5-5-of-6'
export const sd20000Sprint5_5of6 = () => {
	const agenda5of6 = () => {
		return agendaSlide([
			'Prework',
			'Sprint Progress Polling',
			'Breakout on Loops, Tuples, Lists, Dictionaries, Sets, and Functions',
			'Prework for Next Class',
			'Quiz 5' ])
	}
	const breakout = () => { return breakoutIntroducingPython6Through9() }
	const quiz5 = () => { return quiz(5) }
	return { sprint: 5, startingSlide: 2,
		slideFunctionList: [ preflightChecklist, instructorChecklist, 
			agenda5of6, preworkICS5of6, progressPolling, breakout, preworkICS6of6, quiz5, end ]
	}
}

const preworkICS5of6 = () => {
	return prework([
		'Complete through activity 10', '',
		'Be prepared for Quiz 5'])
}

// Introduction to Computer Science Sprint 5 Session 6 of 6
export const SD20000_5_6_of_6_ROUTE = '20000-5-6-of-6'
export const sd20000Sprint5_6of6 = () => {
	const agenda = () => {
		return agendaSlide([
			'Prework',
			'Sprint Progress Polling',
			'Lab',
			'Prework for Next Class' ])
	}
	const lab = () => { 
		return basicSlideWithTitle( 'Lab', [
			'Final Project Proposals',
			'Continue Programming Together with TurtleDraw',
			'Review Lab 5 assignment' ]) 
	}
	return { sprint: 5, startingSlide: 2,
		slideFunctionList: [ preflightChecklist, instructorChecklist, 
			agenda, preworkICS6of6, al20000Sprint05, progressPolling, lab, preworkICS7of6, end ]
	}
}

const preworkICS6of6 = () => {
	return prework([
		'Complete through activity 11', '',
		'Be prepared for Lab'])
}

const preworkICS7of6 = () => {
	return prework([
		'All Sprint 5 Assignments due Sunday!', '',
		'Be prepared for Sprint 6 Planning on MondayTuesday' ])
}

// Object-Oriented Programming Sprint 5 Session 5 of 6 for 
export const SD24500_5_5_of_6_ROUTE = '24500-5-5-of-6'
export const sd24500Sprint5_5of6 = () => {
	const agenda5of6 = () => {
		return agendaSlide([
			'Prework',
			'Sprint Progress Polling',
			'Lab',
			'Prework for Next Class',
			'Quiz 5' ])
	}
	const lab = () => { 
		return basicSlideWithTitle('Lab', [
			'Continue Programming Together of Node.js including JSON review',
			'Review SwissArmyKnife lite and Help system requirements',
			'Review Lab 5 assignment' ]) 
	}
	const quiz5 = () => { return quiz(5) }
	return { sprint: 5, startingSlide: 2,
		slideFunctionList: [ preflightChecklist, instructorChecklist, 
			agenda5of6, preworkOOP5of6, al24500Sprint05, progressPolling, lab, preworkOOP6of6, quiz5, end ]
	}
}

const preworkOOP5of6 = () => {
	return prework([
		'Complete through activity 13', '',
		'Be prepared for Quiz 5'])
}

// Object-Oriented Programming Sprint 5 Session 6 of 6
export const SD24500_5_6_of_6_ROUTE = '20000-5-6-of-6'
export const sd24500Sprint5_6of6 = () => {
	const agenda = () => {
		return agendaSlide([
			'Prework',
			'Sprint Progress Polling',
			'Lab',
			'Prework for Next Class' ])
	}
	const lab = () => { 
		return basicSlideWithTitle('Lab', [
			'Continue Programming Together of Node.js including JSON review',
			'More SwissArmyKnife lite',
			'Review Lab 5 assignment' ]) 
	}
	return { sprint: 5, startingSlide: 2,
		slideFunctionList: [ preflightChecklist, instructorChecklist, 
			agenda, preworkICS6of6, al20000Sprint05, progressPolling, lab, preworkICS7of6, end ]
	}
}

const preworkOOP6of6 = () => {
	return prework([
		'Complete through activity 14', '',
		'Be prepared for Lab'])
}

// Software Engineering Sprint 5 Session 4 of 4
export const SD44000_5_4_of_4_ROUTE = '44000-5-4-of-4'
export const sd44000Sprint5_4of4 = () => {
	const agenda4of4 = () => {
		return agendaSlide([
			'Prework',
			'Sprint 6 Planning Expectations', 
			'Backlog Grooming in Preparation for Tuesday’s Sprint 6 Sprint Planning',
			'Lab... as time allows',
			'Prework for Next Class' ])
	}
	const planningExpectations = () => { return basicSlideWithTitle('Sprint 6 Planning Expectations', [
			'Review Blackboard Announcement from this morning.' ]) 
	}
	const lab = () => { return basicSlideWithTitle('Lab', [
			'Continue working in scrum teams on Sprint 5 assignments' ]) 
	}
	const backlogGrooming = () => {
		return basicSlideWithTitle('Backlog Grooming', [
			'Backlog Grooming in Preparation for Tuesday’s Sprint 6 Sprint Planning', '',
			'** Goal: Each team member needs to provide Product Owner at least two valid user stories prior to class on Tuesday' ]) 
	}
	return { sprint: 5, startingSlide: 2,
		slideFunctionList: [ preflightChecklist, instructorChecklist, 
			agenda4of4, preworkSE4of4, al44000Sprint05, planningExpectations, backlogGrooming, lab, preworkSE5of4, end ]
	}
}

const preworkSE4of4 = () => {
	return basicSlideWithTitle('Prework for Today', [
		'Complete through activity 11 and working on 12', '',
		'Be prepared for Sprint 6 Backlog Grooming',
		'Be prepared for Breakout Session on Software Metrics', 
		'Be prepared for Lab' ])
}

const preworkSE5of4 = () => {
	return basicSlideWithTitle('Prework for Today', [
		'All Sprint 5 Assignments due Sunday!', '',
		'** Be prepared for in-person Sprint 6 Planning on Tuesday' ])
}