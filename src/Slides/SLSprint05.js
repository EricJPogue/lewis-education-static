import React from 'react'

import { agenda, prework, progressPolling, quiz, end, basicSlideWithTitle  } from './SL00000'
import { preflightChecklist, instructorChecklist } from './Slide'

import { breakoutIntroducingPython6Through9 } from './Breakout'
import { al24500Sprint05 } from '../ActivityLists/AL24500Sprint05'

import { internalLink } from '../Links'

// Index 
export const SPRINT_5_INDEX_ROUTE = 'index'
export const sprint5Index = () => {
	const index = () => {
		return ( <div>
			March 23, 2022:<br />
			{internalLink('Introduction to Computer Science', `${SD20000_5_5_of_6_ROUTE}`)}<br />
			{internalLink('Object-Oriented ProgrammingMarch', `${SD24500_5_5_of_6_ROUTE}`)}
		</div> )
	}
	return { sprint: 5, startingSlide: 0,
		slideFunctionList: [ index, preflightChecklist, instructorChecklist ]
	}
}

// Introduction to Computer Science Sprint 5 Session 5 of 6 for 
export const SD20000_5_5_of_6_ROUTE = '20000-5-5-of-6'
export const sd20000Sprint5_5of6 = () => {
	const agenda5of6 = () => {
		return agenda([
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

const preworkICS6of6 = () => {
	return prework([
		'Complete through activity 11', '',
		'Be prepared for Lab'])
}

// Object-Oriented Programming Sprint 5 Session 5 of 6 for 
export const SD24500_5_5_of_6_ROUTE = '24500-5-5-of-6'
export const sd24500Sprint5_5of6 = () => {
	const agenda5of6 = () => {
		return agenda([
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
			'Review Lab 5 assignment'
		]) 
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

const preworkOOP6of6 = () => {
	return prework([
		'Complete through activity 14', '',
		'Be prepared for Lab'])
}

