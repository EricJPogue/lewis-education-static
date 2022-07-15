import { getFinalExamDateAndTime } from '../DataAndAPIs/Classes'

export const _INSTRUCTOR = { 
	name:'Eric Pogue', 
	office:'AS-124-A', 
	lewisPhone:'(815) 836-5015',
	lewisEmail:'epogue@lewisu.edu' 
}

export const _CALENDAR = {
	officeHours:'Thursday 2:30 to 4 PM CT by appointment',
	appointmentRequests:'Appointments can be requested via email',
	description:'Fall 2022'
}

// BugBug: meetingLocation needs to be updated and possibly included in class data.
// Todo: Figure out where the master list of program outcomes and baccalaureate characteristics reside. 

export const _CPSC_20000 = {
	name:'Introduction to Computer Science',
	id:'CPSC-20000',
	number: 20000,
	creditHours:3,
	description: 
		`This course explores the field of computer science. It provides an overview of computer architecture, 
		networking, data organization and computational theory. Students will be introduced to fundamental concepts 
		underlying all of computing, such as algorithms, abstractions, and how computers represent numbers, text, 
		images, and sound. Students will learn the basics of programming and computational problem solving.`,
	prerequisites:'none',
	meetingTimes:'This course in online and asynchronous',
	meetingDates:'This class starts Monday, May 9th and ends Thursday, June 30th',
	meetingLocation:'Online',
	finalExamTime: `${getFinalExamDateAndTime()}`,
	learningOutcomes:[
		'Use abstraction to simplify a problem to its essential elements',
		'Write algorithms to describe how to solve a problem step-by-step',
		'Write computer programs involving sequence, selection, and repetition that enable a computer to follow the steps of an algorithm',
		'Identify the parts of a computer and explain how each is involved in processing a set of instructions',
		'Represent data the way a computer would, in binary and hexadecimal',
		'Demonstrate how logical operations enable a computer to perform arithmetic and explain how they are implemented at the transistor level',
		'Research seminal works in computer science and describe their relevance',
		'Explain how computer networks communicate data across and between networks',
		'Design a website and post it online so that it can be accessed over the Internet',
		'Explain how various encryption and hashing routines protect our online privacy'
	],
	programOutcomes:[
		{'value':1, outcome:'develop programs using languages having different programming paradigms and for a variety of platforms'},
		{'value':2, outcome:'select the most appropriate data structures and algorithms for the given problem'},
		{'value':4, outcome:'describe how computer systems can communicate securely with each other and form networks'}, // BugBug: Fix this value as 4 is a guess. 
		{'value':7, outcome:'explain how programming languages are designed and implemented'}
	],
	baccalaureateCharacteristics:[
		{'value':1, outcome:'Essential Skills'},
		{'value':2, outcome:'Major Approaches to Knowledge'},
		{'value':6, outcome:'Critical Thinking'},
		{'value':7, outcome:'Lifelong Learning'}
	],
	textBook: 'Computer Science Illuminated, Nell Dale and John Lewis, Jones & Bartlett Learning. This book is required for this course.',
	modules: [
		'File Systems and Directories, Computer Science – The Big Picture, and Introduction to Python',
		'Binary Values and Number Systems, Data Representation, and Introduction to HTML and CSS',
		'Gates and Circuits, Computing Components, and Cloud Computing with HTML and CSS',
		'Artificial Intelligence, Functions, and Objects and Drawing',
		'Networks, Final Project Proposal, and Objects and Drawing with Python',
		'Full Stack Development with Web Browser, Web Server, and NoSQL Database',
		'Security, More HTML, CSS, and more JavaScript or more Python',
		'Final Project'
	]
}

export const _CPSC_24700 = {
	name:'Web and Distributed Programming',
	id:'CPSC-24700',
	number: 24700,
	creditHours:3,
	description: 
		`This course explores the languages and technologies utilized to develop leading edge web and distributed 
		software applications. Topics initially include developing HTML, CSS, and JavaScript to develop browser based 
		applications. Students will then continue to expand their skills by learning server-side web development, 
		cloud hosting, web services, and database programming.`,
	prerequisites:'CPSC-20000 Introduction to Computer Science',
	meetingTimes:'This course in online and asynchronous',
	meetingDates:'This class starts Monday, May 9th and ends Thursday, June 30th',
	meetingLocation:'Online',
	finalExamTime: `${getFinalExamDateAndTime()}`,
	learningOutcomes:[
		'understand the Internet, the Web, Web programming, and distributed computing',
		'create Web applications using HyperText Markup Language and Cascading Style Sheets',
		'utilize cloud computing to host websites',
		'create interactive Web applications using JavaScript',
		'understand Web interface design and user experience best practices',
		'understand web services, JSON, and XML',
		'implement server-side application programming',
		'understand basic database concepts and make simple queries',
		'conceptually understand server-side web software development with Python and Java'
	],
	programOutcomes:[
		{'value':1, outcome:'develop programs using languages having different programming paradigms and for a variety of platforms'},
		{'value':2, outcome:'select the most appropriate data structures and algorithms for the given problem'},
		{'value':7, outcome:'explain how programming languages are designed and implemented'}
	],
	baccalaureateCharacteristics:[
		{'value':1, outcome:'Essential Skills'},
		{'value':6, outcome:'Critical Thinking'}
	],
	textBook: 'Programming the World Wide Web 8th Edition, Robert W. Sebesta, Addison-Wesley, 2015 (ISBN 978-0-13-377598-3). This book is required for this course.',
	modules: [
		'The Internet, World Wide Web, Web Applications, and HyperText Markup Language',
		'Web Servers, Cloud Hosting, Cascading Style Sheets, and Continuous Integration / Continuous Delivery',
		'Interactive Web Applications, JavaScript, Distributed Applications, and Web Services',
		'User Interfaces, Application Programming Interfaces, and Intermediate JavaScript',
		'User Experience, Advanced JavaScript, Final Project Proposals, and Relational Databases',
		'Full Stack Development with Web Browser, Web Server, and NoSQL Database',
		'Continuous Delivery / Continuous Delivery, Configuration Management, and Final Project',
		'Final Project'
	]
}