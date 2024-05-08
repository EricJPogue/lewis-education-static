import { checklistAnnouncementsPreworkAndAgenda, completeDeck } from './SL00000Sprint00'
import { tPrework, orderedListSlide } from './SLSprint00'
import { list20000Sprint08 } from '../ActivityLists/AL20000Sprint08'

// Introduction to Computer Science (ICS) sprint 8 global values.
const sprint = 8
const activityList = () => { return list20000Sprint08(sprint) } 

// Final Exam / Final Project Presentation
const ics_8_7of6_PAaA = {
	'announcements':[ 
		'Class Product Presentations',
		'Please consider taking time to complete your course evaluation' ],
	'prework':[
		'Be prepared for your class product presentations' ],
	'agenda':[
		'Product Overview',
		'Individual Class Product Presentations',
		'Thank you!' ] 
}
export const ics_8_7of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_8_7of6_PAaA, sprint, activityList)
	const finalProjectPresentation = () => {
		return orderedListSlide('Final Project Presentations', `Recall that your final project presentation should including a/an:`, [
			'Brief introduction of yourself',
			'Overview of your final project proposal',
			'Demonstration standard and advanced features',
			'Overview of the project source code',
			'Description of what else you expect to complete by the end of the day Thursday' ])
	}
	const nextSteps = () => { return tPrework('Next Steps', [ 'Everything is due Thursday!' ], sprint, activityList) }
	const finalComments = () => {
		return orderedListSlide('Thank you!',
			'', [
			'Thank you for making this a wonderful experience for me',
			'Don’t hesitate to reach out in the future',
			'Hope to see you in a future class', 
			'Reach out to me if you are interested in taking Web & Distributed Programming',
			'Very nice work! I am impressed with what you have accomplished.' ])
	}

	return completeDeck(slideDeck, [ finalProjectPresentation, nextSteps, finalComments ]) 
}

