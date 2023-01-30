import { bulletListSlide, orderedListSlide } from "./SLSprint00"

export const xyz_2_1of6_sprintPlanning = (sprint) => {
	return orderedListSlide(`Sprint Planning`, `Sprint ${sprint} Changes:`, [
		'Similar to previous sprint with Discussion, Quiz, Lab, and Reflection',
		'We have a new Demo assignment that will need to be submitted when you complete your lab demo',
		'To help reduce procrastination** demos and retrospectives will be Friday while and Lab will be Wednesday',
		'We will complete our first scrum team Breakout Discussion on Friday',
		`Sprint ${sprint} should be a little easier since we don’t have a holiday during the sprint`
	])
}

export const theHumbleTextFileName = 'The Humble Text File'
export const theHumbleTextFile = () => {
	return bulletListSlide(`${theHumbleTextFileName}`, 
		'Let’s explore Binary Values and the Data Representation of text files including:', [
		'ASCII Text Files', 
		'Unicode',
		'UTF-16 and UTF-8 ',
		'What is a local',
		'What is received when a US-English ASCII email is sent to a CA-French recipient?'])
}