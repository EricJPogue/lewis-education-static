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
		'Class Product Presentations',
		'Please consider taking time to complete your course evaluation' ],
	'prework':[
		'Be prepared for your final project presentations' ],
	'agenda':[
		'Product Overview',
		'Individual Class Product Presentations',
		'Thank you!' ] 
}
export const se_8_7of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_8_7of6_PAaA, sprint, activityList)
	const productOverview = () => {
		return orderedListSlide(
			'Class Product Presentations', `Product Overview (less than 5 minutes):`, [
			'How would a user most likely utilize the product the first time they use it?',
			'How regularly is the product being used currently?' ])
	}
	const projectPresentations = () => {
		return orderedListSlide(
			'Class Product Presentations (3-4 minutes)', `Your class product presentation should including a/an:`, [
			'Introduction yourself and what part of your project you enjoyed working on most',
			'Demonstration of feature you are the most proud of delivering',
			'Discussion of related source code',
			'Description of what was transitioned to you or what you transitioned to someone else... is anything outstanding' ])
	}
	const nextSteps = () => { return tPrework('Next Steps', [ 'Everything is due Wednesday!' ], sprint, activityList) }
	const finalComments = () => {
		return orderedListSlide('Thank you!', '', [
			'Thank you for making this a wonderful experience for me',
			'Don’t hesitate to reach out in the future',
			'Hope to see you in a future class', 
			'Reach out to me if you are interested in taking Web & Distributed Programming',
			'Very nice work! I am impressed with what you have accomplished.' ])
	}

	return completeDeck(slideDeck, [ productOverview, projectPresentations, nextSteps, finalComments ]) 
}