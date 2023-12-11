import { orderedListSlide } from './SLSprint00'
import { checklistAnnouncementsPreworkAndAgenda } from './SL00000Sprint00'
import { tPrework } from './SLSprint00'
import { completeDeck } from './SL00000Sprint00'
import { list44000Sprint08 } from '../ActivityLists/AL44000Sprint08'

// Software Engineering (SE) sprint 8 global values.
const sprint = 8
const activityList = () => { return list44000Sprint08(sprint) }

// Final Exam / Final Project Presentation
const se_8_7of6_PAaA = {
	'announcements':[ 
		'Final Project Presentations Today',
		'Please consider taking time to complete your course evaluation' ],
	'prework':[
		'Verify that you have submitted your final project presentation assignment',
		'Be prepared for your final project presentations' ],
	'agenda':[
		'Final Project Presentations',
		'Next Steps',
		'Thank you!' ] 
}
export const se_8_7of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_8_7of6_PAaA, sprint, activityList)
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