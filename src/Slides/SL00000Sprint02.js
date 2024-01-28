import { bulletListSlide } from "./SLSprint00"

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

