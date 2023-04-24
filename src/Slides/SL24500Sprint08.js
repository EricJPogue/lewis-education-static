
import { xyz_n_1of6_lists, xyz_n_1of6 } from "./SL00000Sprint00"

import { orderedListSlide } from "./SLSprint00"

import { list24500Sprint07 } from '../ActivityLists/AL24500Sprint07'
import { list24500Sprint08 } from '../ActivityLists/AL24500Sprint08'

// Object-Oriented Programming sprint 8 global values.
const sprint = 8
const activityListPrevious = () => { return list24500Sprint07(sprint-1) }
const activityList = () => { return list24500Sprint08(sprint) }

export const oop_8_1of6_PAaA = xyz_n_1of6_lists()
export const oop_8_1of6 = () => { 
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning', `Sprint ${sprint} Expectations:`, [
			`We will be focused on final projects throughout the sprint ${sprint}`,
			'No regular class sessions during finals week',
			'You will submit Quiz 8, Lab 8, Reflection 8, and Final Project Presentation assignments',
			'Discussion 8 is a request to complete your course evaluation and is not graded',
			'Quiz 8 will be in class on Wednesday',
			`We will have our sprint ${sprint-1} Demos and Retrospective Friday`,
			'Final project presentations will be during our final exam time next week' ])
	}

	return xyz_n_1of6(sprint, oop_8_1of6_PAaA.prework, activityListPrevious, oop_8_1of6_PAaA.agenda, oop_8_2of6_PAaA.prework, activityList, sprintPlanning()) 
}

// Session 2 of 6: Wednesday
const oop_8_2of6_PAaA = {
	'announcements':[ 
		'This is the last week of regular classes', 
		'Be certain you have your final exam time marked on your calendar ' ],
	'prework':[
		'Complete through activity 4 prior to next class', '',
		`Be prepared for Quiz ${sprint}`,
		'Be prepared for Lab & Programming Together' ],
	'agenda':[
		'Lab & Programming Together',
		`Quiz ${sprint}` ]
}