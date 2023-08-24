import { getCalendarByCalendarID, _FALL_2023_08_28_16, _CURRENT_CALENDAR } from "./Calendars"

import { al44000Sprint1Topics } from '../ActivityLists/AL44000Sprint01'
import { al44000Sprint2Topics } from '../ActivityLists/AL44000Sprint02'
import { al44000Sprint3Topics } from '../ActivityLists/AL44000Sprint03'
import { al44000Sprint4Topics } from '../ActivityLists/AL44000Sprint04'
import { al44000Sprint5Topics } from '../ActivityLists/AL44000Sprint05'
import { al44000Sprint6Topics } from '../ActivityLists/AL44000Sprint06'
import { al44000Sprint7Topics } from '../ActivityLists/AL44000Sprint07'
import { al44000Sprint8Topics } from '../ActivityLists/AL44000Sprint08'

export const getIsScheduleT = () => {
	return (getClass().schedule === _T)
}

export const getIsScheduleTTr = () => {
	return (getClass().schedule === _TTR)
}

export const getIsScheduleOnline = () => {
	return (getClass().schedule === _ASYNCHRONOUS)
}

export const getFinalExamDateAndTime = () => {
	const course = getClass()
	if (course === null) {
		return ''
	}
	return course.finalExam
}

export const getClasses = () => {
	const classes = []
	for (let i = 0; i < classSectionList.length; i++) {
		classes.push(classSectionList[i])
	}
	return classes
}

export const getClassIDfromURL = () => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const cpscParam = urlParams.get(URLCLASSID)
	if (cpscParam === null) {
		return ''
	}
	return cpscParam
}

export const getClassCalendar = () => { 
	return getCalendarByCalendarID(getClass().calendarID) 
}

// getClass() depreciated... replace getClass() with getClassSection()
export const getClass = () => {
	const classID = getClassIDfromURL()
	if (classID  === '') {
		return null
	}
	return getClassByClassID(classID)
}

export const getClassSection = () => {
	const classID = getClassIDfromURL()
	if (classID  === '') {
		return null
	}
	return getClassByClassID(classID)
}

export  const getClassNumber = () => {
	return getClass().number
}

export const getClassByClassID = (classID) => {
	for (let i = 0; i < classSectionList.length; i++) {
		if (classSectionList[i].classID === classID) {
			return classSectionList[i]
		}
	}

	console.log('Error: Class not found (class= “'+classID+'”).')
	return classSectionList[0]
}

export const _INSTRUCTOR = { 
	name:'Eric Pogue', 
	officeHours:'Tuesdays 1-3 PM and Thursdays 10-11 AM CT by appointment',
	office:'AS-124-A', 
	appointmentRequests:'Appointments can be requested via email',
	lewisPhone:'(815) 836-5015',
	lewisEmail:'epogue@lewisu.edu' 
}

// Todo: Figure out where the master list of program outcomes and baccalaureate characteristics reside. 
// Todo: Remove course 'title' from classSectionList and use 'name' from _CPSC data.

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
	learningOutcomes:[
		'Use abstraction to simplify a problem to its essential elements',
		'Develop algorithms to describe that solve a problem step-by-step',
		'Write computer programs to implement algorithms using sequence, selection, and repetition',
		'Identify the parts of a computer and explain how each is involved in processing a computer program',
		'Represent data the way a computer program would using binary and hexadecimal representations',
		'Demonstrate how transistors and logical operations allow a computer execute a computer program',
		'Research seminal works in computer science and describe their relevance',
		'Explain how computer networks communicate data across and between networks',
		'Explain computer security and how encryption and hashing protect our networks and online privacy',
		'Utilize multiple computer programming tools and paradigms to create computer programs'
	],
	programOutcomes:[
		{'value':1, outcome:'develop programs using languages having different programming tools and paradigms'}, // I modified the wording.
		{'value':2, outcome:'select the most appropriate tools, data structures, and algorithms for the given problem'},
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
		'The Big Picture, Files Systems, Tools of the Trade, and HyperText Markup Language',
		'Numbering Systems, Data Representation, and HyperText Markup Language (HTML)',
		'Gates and Circuits, Computing Components, and Cloud Computing with HTML, CSS, and JavaScript',
		'Artificial Intelligence, Functions, and Objects and Drawing',
		'Networks, Class Project Proposal, and Objects and Drawing with Python',
		'Full Stack Development with Web Browser, Web Server, and NoSQL Database',
		'Class Project Security, More HTML, CSS, and more JavaScript or more Python',
		'Final Exam'
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

export const _CPSC_24500 = {
	name:'Object-Oriented Programming',
	id:'CPSC-24500',
	number: 24500,
	creditHours:3,
	description: 
		`Students will learn to design and develop software using the object-oriented approach.
		Topics include encapsulation, inheritance, polymorphism, abstraction, and patterns.
		Students will learn how to use an SDK to develop desktop and web applications that
		provide data processing and visualization services. Students will also learn how to
		manage threads and networking connections in software they write.`,
	prerequisites:'CPSC-21000 Programming Fundamentals',
	learningOutcomes:[
		'solve problems by writing programs using standard language elements',
		'list and explain the key concepts of object-oriented development',
		'describe problems that typically plague software including rigidity, fragility, immobility',
		'define industry standard object-oriented patterns',
		'define and provide examples for object-oriented design principles',
		'write class definitions and create objects from them',
		'declare and use special types of methods for classes including constructors and destructors',
		'create hierarchies of classes that start with abstract base classes',
		'design an object-oriented program in UML (Unified Modeling Language)',
		'describe what exceptions are and write programs that deal with them',
		'perform web services or screen-scraping by retrieving data from a website',
		'write programs that use various collections and use them polymorphically',
		'use generic data types in programs',
		'explain the difference between classes and interfaces',
		'perform input and output with text file streams including JSON or XML',
		'use an API as a reference when writing programs',
		'build attractive, intuitive graphical user interfaces that utilize event-handling',
		'describe how layout managers arrange components',
		'define callback functions for responding to event handling',
		'describe and use the client-server computing model',
		'describe how Java achieves cross-platform compatibility',
		'distinguish among heavyweight and lightweight components',
		'write unit tests to verify the correctness of software modules',
		'utilize Git and MS Azure to manage and deploy software development projects'
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
	textBook: 'There is no required textbook for this course.',
	modules: [
		'Object-Oriented Programming Concepts, Java Review, Tools of the Trade including Java and Git',
		'Object-oriented programming Patterns & Principles, More Java, JSON and UML',
		'Graphical User Interfaces, Developing Java Graphical Applications, GitHub',
		'Interactive Programming, Action Listeners, Files and JavaDoc',
		'Microsoft Azure, Final Project Proposals, Distributed Programming & Web Services',
		'Object-Oriented Programming Languages and Platforms, Threads and Processes, Multi-Threaded Java Programming',
		'Graphical, Distributed, and Interactive Programming, Model-View-Controller, Databases',
		' Final Project, Advanced Topics in Object-Oriented Programming'
	]
}

export const _CPSC_36000 = {
	name:'Applied Programming Languages',
	id:'CPSC-36000',
	number: 36000,
	creditHours:3,
	description: 
		`This course exposes students to a variety of current programming languages that are not the focus of other 
		courses in the major. The goal of the course is to increase students' programming skills while helping them 
		develop good programming methodology and style. This course also gives students experience using code management 
		systems and working on open-source programming projects.`,
	prerequisites:'CPSC-24500 Object-Oriented Programming',
	learningOutcomes:[
		'create moderately complex applications using multiple programming languages and frameworks',
		'improve programming style through effective coding standards', 
		'optimizing programming, testing, enhancements, and fixes through modularization',
		'write well-documented, easy-to-understand, clearly organized code that others may extend',
		'use source code management tools to coordinate changes and create high quality releases',
		'implement defect tracking to manage and prioritize a backlog of application improvements',
		'use debuggers and profilers to analyze, troubleshoot, and enhance code',
		'utilize scripting to automate build, testing, and deployment tasks',
		'effectively work on software applications with small teams',
		'develop and implement unit tests and integration tests',
		'contribute to open-source programming projects'
	],
	programOutcomes:[
		{'value':1, outcome:'develop programs using languages having different programming paradigms and for a variety of platforms'},
		{'value':2, outcome:'select the most appropriate data structures and algorithms for the given problem'},
		{'value':3, outcome:'work in a team to design and implement complex data processing systems collaboratively'},
		{'value':7, outcome:'explain how programming languages are designed and implemented'}
	],
	baccalaureateCharacteristics:[
		{'value':1, outcome:'Essential Skills'},
		{'value':2, outcome:'Major Approaches to Knowledge'},
		{'value':6, outcome:'Critical Thinking'},
		{'value':7, outcome:'Lifelong Learning'}
	],
	textBook: 'Reading assignments well be made from the O’Reilly online book service which Lewis University provides to students at no cost.',
	modules: [
		'Programming Languages, Object-Oriented Programming (OOP) Concepts, Getting Started with Go',
		'OOP Patterns and Principles, Functional Programming, Configuration Management, Structs, Interfaces, and Packages',
		'Inheritance and Polymorphism, Classes (including Constructors and Destructors), Exceptions, Templates, Overloading, and Testing',
		'Concurrency and Next Steps',
		'Web Development with HTML, CSS, JavaScript, React plus Final Project Proposal',
		'Cloud Computing with Microsoft Azure, Azure Functions, Final Project Proposal Review and Updates',
		'Containers, More React, Final Project – Version 0',
		'Application Architecture, Even More React, Final Project – Version 1'
	]
}

export const _CPSC_44000 = {
	name:'Software Engineering',
	id:'CPSC-44000',
	number: 44000,
	creditHours:3,
	description: 
		`Methods, strategies, and tools for implementing software systems, particularly as part of a development team. 
		Topics include the software development life cycle, Unified Modeling Language, software testing techniques, 
		software security, open-source development, requirements gathering and documentation, maintenance, and basic
		software project management.`,
	prerequisites:'CPSC-24500 Object-Oriented Programming',
	learningOutcomes:[
		'compare and contrast various software process models',
		'be able to elicit and analyze requirements of a proposed application',
		'write clear and complete requirements documents',
		'identify the events to which the software must respond and document them as a set of use cases',
		'identify security issues in a software projects requirements and design',
		'use techniques to produce self-documenting code',
		'use coding strategy to produce secure code',
		'draw diagrams to model workflows',
		'develop and use diagrams to model classes and the interaction of classes',
		'understand and practice unit testing and functional testing',
		'understand the techniques used to test non-functional requirements such as performance and security',
		'develop a project schedule'
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
	textBook: 'Fox and Patterson. Engineering Software as a Service: An Agile Approach Using Cloud Computing.  ISBN: 978-0984881246.',
	modules: [
		`${al44000Sprint1Topics}`,
		`${al44000Sprint2Topics}`,
		`${al44000Sprint3Topics}`, 
		`${al44000Sprint4Topics}`, 
		`${al44000Sprint5Topics}`, 
		`${al44000Sprint6Topics}`,
		`${al44000Sprint7Topics}`,
		`${al44000Sprint8Topics}`,
	]
}

export const _CPSC_49200 = {
	name:'Software Systems Capstone',
	id:'CPSC-49200',
	number: 49200,
	creditHours:3,
	description: 
		`In this course, students will participate, as part of a team, in the design,
		implementation and testing of a medium-to-large software project. Additionally, this
		course will cover topics in professional ethics, intellectual properties, privacy and
		professional communication.`,
	prerequisites:'CPSC-44000 Software Engineering',
	learningOutcomes:[
		'Conduct a review of software code for a software project',
		'Write a software component that performs non-trivial tasks and is resilient to input and run-time errors',
		'Identify the biases within software that runs within our institutions',
		'Articulate the political ramifications of software that is used within our local and global communities',
		'Collaborate in a team setting, in helping to develop a high-grade software product',
		'Work with professional software development tools',
		'Effectively document their role in the creation of a software product',
		'Explain privacy and regulation issues relating to developing and using software',
		'Explain the different kinds of software licenses and how they define and protect intellectual property',
		'Provide examples of the role of ethics in code, and in how people use code',
		'Apply code management skills within a team',
		'Appropriately to share code within a repository',
		'Apply software engineering concepts to a software work',
		'Effectively present their product as a team',
		'Document the usage of the product so partners can understand how to implement the product within their business/community',
		'Write clear, concise and accurate technical documents following well defined standards'
	],
	programOutcomes:[
		{'value':1, outcome:'develop programs using languages having different programming paradigms and for a variety of platforms'},
		{'value':2, outcome:'select the most appropriate data structures and algorithms for the given problem'},
		{'value':7, outcome:'explain how programming languages are designed and implemented'},
		{'value':9, outcome:'Work in a team to design and implement complex data processing systems collaboratively.'}
		// BugBug: Update value of 9 to reflect actual outcome number.
	],
	baccalaureateCharacteristics:[
		{'value':1, outcome:'Essential Skills'},
		{'value':2, outcome:'Major Approaches to Knowledge'},
		{'value':6, outcome:'Critical Thinking'},
		{'value':7, outcome:'Lifelong Learning'}
	],
	textBook: 'Various readings from O’Reilly Books which is available free to you through Lewis University. ',
	modules: [
		'Agile Software Development, Scrum Team Assignments, Product Development and Configuration Management',
		'Continuous Integration / Continuous Delivery,Software as a Service (SaaS) / Cloud Computing, Product Development and Continuous Delivery',
		'Testing and Test-Driven Development, MERN Stack or equivalent, Product Development and Testing-Driven Development',
		'User Support and User Recruiting, Kanban, Product Development with Support and Users',
		'Usability, Usability Testing, Product Development with User Led Demos',
		'User and Team Metrics, Continuous Improvement, Full Product Development',
		'Software Product Sustainability, Product Swap with Evaluation, Full Product Development',
		'Full Product Development, Product Presentations, Product Handoff'
	]
}

// Application Constants
export const URLCLASSID = 'cpsc'
export const _MWF = 'MWF'
const _T = 'T'
export const _TTR = 'TTh'
export const _ASYNCHRONOUS = 'Asynchronous' 

export const classSectionList = [
	{ 'classID':'fa23-cpsc-20000-002', 'calendarID':_FALL_2023_08_28_16, 'class':_CPSC_20000, 'number':'20000', 'section':'002', 'crn':'80006', 
		'title':'Introduction to Computer Science', 'location':'Arts and Sciences (AS) 104A and Friday remote via Zoom', 'schedule':_MWF, 'time':'10-10:50 pm', 'finalExam':'Monday, Dec 11 from 10:30 AM to 12:30 PM CT' },

	{ 'classID':'fa23-cpsc-20000-003', 'calendarID':_FALL_2023_08_28_16, 'class':_CPSC_20000, 'number':'20000', 'section':'003', 'crn':'80007', 
		'title':'Introduction to Computer Science', 'location':'Arts and Sciences (AS) 104A and Friday remote via Zoom', 'schedule':_MWF, 'time':'11-11:50 pm', 'finalExam':'Friday, Dec 15 from 10:30 AM to 12:30 PM CT' },

	{ 'classID':'fa23-cpsc-24700-001', 'calendarID':_FALL_2023_08_28_16, 'class':_CPSC_24700, 'number':'24700', 'section':'001', 'crn':'80024', 
		'title':'Web and Distributed Programming', 'location':'Arts and Sciences (AS) 104A and Friday remote via Zoom', 'schedule':_MWF, 'time':'1-1:50 pm', 'finalExam':'Wednesday, Dec 13 from 1:30 AM to 3:30 PM CT' },

	{ 'classID':'fa23-cpsc-44000-001', 'calendarID':_FALL_2023_08_28_16, 'class':_CPSC_44000, 'number':'44000', 'section':'001', 'crn':'80053', 
		'title':'Software Engineering', 'location':'Arts and Sciences (AS) 104A and Friday remote via Zoom', 'schedule':_MWF, 'time':'2-2:50 am', 'finalExam':'Monday, Dec 11 from 4 pm to 6 pm CT' },

	{ 'classID':'fa23-cpsc-49200-001', 'calendarID':_FALL_2023_08_28_16, 'class':_CPSC_49200, 'number':'49200', 'section':'001', 'crn':'80056', 
		'title':'Software Systems Capstone', 'schedule':_T, 'time':'11-12:15', 'finalExam':'Tuesday, Dec 12 from 10:30 to 12:30 pm CT' },

	{ 'classID':'cpsc-24500', 'calendarID':_CURRENT_CALENDAR, 'class':_CPSC_24500, 'number':'24500', 'section':'XXX', 'crn':'00000',
		'title':'Object-Oriented Programming', 'location':'', 'schedule':'', 'time':'', 'finalExam':'' },
	
	{ 'classID':'cpsc-36000', 'calendarID':_CURRENT_CALENDAR, 'class':_CPSC_36000, 'number':'36000', 'section':'XXX', 'crn':'00000',
		'title':'Applied Programming Languages', 'location':'', 'schedule':'', 'time':'', 'finalExam':'' }	
]




