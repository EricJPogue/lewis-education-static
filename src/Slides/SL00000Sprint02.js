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

// Todo: Convert the following function. 
export const xyz_2_6of6_PreworkAnnouncementsAndAgenda = (preworkItem1, sprint) => {
	const preworkAnnouncementsAndAgenda = {
		'prework': [
			`${preworkItem1}`, '',
			'Be prepared for Lab & Programming Together',
			`All sprint ${sprint} assignments are due Sunday!` ],
		'announcements':[
			`All sprint ${sprint} assignments are due Sunday!`],
		'agenda':[
			`Quiz ${sprint} “Phone a Friend”`,
			'Lab']
	}
	return preworkAnnouncementsAndAgenda
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

