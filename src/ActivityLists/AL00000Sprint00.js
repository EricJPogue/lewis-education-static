import React from 'react'

import { ExampleCode, internalLink, gitCommands, codingStandards, calendarLink, scheduleLink, Blended, scrumIn7Min, blackboardChangePhoto, programmingTogether, successfulProgrammer } from '../Links'
import { getFinalExamDateAndTime } from '../data/ClientDataAPIs'
import { sprintEndDateWithoutTime } from '../SprintDates'

export const estimated = (estimate) => {
	if ((estimate === null) || (estimate === undefined) || (estimate === '')) {
		console.log('Error: Estimated function called without estimate value.')
		return null
	}
	return (<sup> ~{estimate}</sup>)
}

export const scrumIntro = (sprint = 0) => {
	return ( <p>You likely noticed that I am using the term “sprint 1” to describe our first set of course activities. 
		Sprints are part of the scrum software development process and are used to describe a set of work that we have 
		committed to deliver by a given date. We will be learning more about sprints and scrum. For now, it is 
		sufficient to know that our sprint 1 activities will take approximately 18 hours of effort to complete, and that 
		we are committed to completing the activities by the end of sprint 1 which is <em>{sprintEndDateWithoutTime(sprint)}</em>.</p> )
}

export const learningObjectivesIntro = (sprint = 1) => {
	switch(sprint) {
		case 1: return ( <p>Let’s start with our sprint {sprint} learning objectives. By the end of sprint {sprint} we will be able to:</p> )
		case 2: return ( <p>Let’s start with our Learning Objectives. By the end of sprint {sprint} we will be able to:</p> )
		default: return ( <p>Our Learning Objectives for this sprint include::</p> )
	}
}

export const activitiesListIntro = (sprint = 1) => {
	switch(sprint) {
		case 1: return (
				<p>Below is our sprint 1 activities list. Although you are welcome to pursue the activities in any order, they are
				listed in the order I think will be the most efficient to complete. Expect each item to take 20 to 40 minutes of 
				focused time unless otherwise noted. <em>Bold</em> items are graded assignments.</p>
		)
		case 2: return (
				<p>Below is our sprint {sprint} activities list. Activities are listed in the order that I think will be the most efficient 
				for them to be completed, the <em>bold</em> items are graded assignments, and everything is by the end of the sprint 
				which is <em>{sprintEndDateWithoutTime(sprint-1 /* base zero */)}</em>.</p>
		)
		default: return (
			<p>Below is our activities list which needs to be completed by <em>{sprintEndDateWithoutTime(sprint-1 /* base zero */)}</em>:</p>
	)
	}
}

export const initialPost = (sprint=1) => {
	return ( <li><em>Make your initial Discussion {sprint} post by the middle of the sprint</em></li> )
}

export const standardActivities = (sprint=1, programmingAssignmentLink='', playlistLink='', excludePreviousTopics) => { 
	const programmingAssignmentActivityStart = () => {
		if (programmingAssignmentLink !== '') return ( <li>Start working on {programmingAssignmentLink}</li> ) 
	}
	const previousSprintTopics = () => { 
		if (playlistLink !== '') return ( <li>From previous sprints review {ExampleCode()}, {gitCommands()}, {codingStandards()}, and {playlistLink}</li> )
	}
	const sprint1StandardActivities = () => {
		const syllabus = () => internalLink('syllabus', '/syllabus')
		const toolsOfTheTrade = () => internalLink('Tools of the Trade', '/activity/tools' )
		return ( <div>
			<li>Review our course {syllabus()}</li>
			<li>Understand blended learning by watching {Blended()}</li>
			<li>Be prepared to participate in your scrum team by watching {scrumIn7Min()}</li>
			<li>Start working on {toolsOfTheTrade()} by setting up Discord and O’Reilly Books</li>
		</div> )
	}
	const sprint2StandardActivities = () => {
		return ( <div>
			<li>Review our class {ExampleCode()} and study our {codingStandards()}</li>
		</div> )
	}
	const sprintTopics = (sprint) =>  {
		switch (sprint) {
			case 1: return (sprint1StandardActivities())
			case 2: return (sprint2StandardActivities())
			default: return null
		}
	}
	const currentAssignments = (sprint) => {
		if (sprint > 4) {
			return ( <em>Review sprint {sprint} assignments including Discussion, Quiz, Lab, Reflection, and Lab Demo</em> )			
		}
		return ( <em>Review sprint {sprint} assignments including Discussion {sprint}, Quiz {sprint}, Lab {sprint}, Reflection {sprint}, and Lab Demo</em> )
	}
	
	const focusOnDueDates = (sprint) => {
		if (sprint > 3) {
			return ( <li>Focus on due dates by reviewing our {calendarLink(sprint)} and {scheduleLink(sprint)}</li> )			
		}
		return ( <li>Maintain a laser focus on due dates by reviewing our {calendarLink(sprint)} and {scheduleLink(sprint)}</li> )
	}

	return ( <div>
		{focusOnDueDates(sprint)}
		<li>{currentAssignments(sprint)}</li>
		{previousSprintTopics()}
		{sprintTopics(sprint)}
		{programmingAssignmentActivityStart()}
	</div> )
}

export const standardActivitiesClosing = (sprint=1, programmingAssignmentLink='', programmingAssignmentEstimate='') => { 
	const standardActivitiesClosing = () => {
		return ( <div>
			<li>Complete {programmingAssignmentLink}{estimated(programmingAssignmentEstimate)}</li>
			<li><em>Complete Discussion {sprint} by responding to at least two of your classmates’ posts</em></li>
			<li><em>Submit sprint {sprint} assignments including Quiz {sprint}, Lab {sprint}, and Reflection {sprint}</em></li>
		</div>)
	}
	const sprint1StandardActivitiesClosing = () => { return (<div>
			<li>Add a representative photo of yourself to your {blackboardChangePhoto()} and Zoom profiles</li>
			{standardActivitiesClosing()}
		</div>)
	}
	const sprint2StandardActivitiesClosing = () => { return (<div>
		<li>Verify that you added a representative photo of yourself to {blackboardChangePhoto()} and Zoom</li>
		{standardActivitiesClosing()}
		</div>)
	}
	const sprint3StandardActivitiesClosing = () => { return (<div>
			<li>Complete {programmingAssignmentLink}{estimated(programmingAssignmentEstimate)}</li>
			<li><em>Complete Discussion {sprint} by responding to at least two of your classmates’ posts</em></li>
			<li><em>Submit Quiz {sprint}, Lab {sprint}, and Reflection {sprint}</em></li>
		</div>)
	}
	const sprint4StandardActivitiesClosing = () => { return (<div>
		<li>Complete {programmingAssignmentLink}{estimated(programmingAssignmentEstimate)}</li>
		<li><em>Submit Discussion {sprint} responses, Quiz {sprint}, Lab {sprint}, and Reflection {sprint}</em></li>
		</div>)
	}
	const sprint5StandardActivitiesClosing = () => { return (<div>
		<li>Complete {programmingAssignmentLink}{estimated(programmingAssignmentEstimate)}</li>
		<li><em>Submit sprint {sprint} assignments including Discussion, Quiz, Lab, and Reflection</em></li>
		</div>)
	}
	const sprint8StandardActivitiesClosing = () => { return (<div>
			<li>Submit your Final Project Presentation assignment at least two hours before to your scheduled presentation time</li>
			<li><em style={{color:'red'}}>Deliver your Final Project Presentation <u>in person</u> on <u>{getFinalExamDateAndTime()}</u></em></li>
			<li>Complete {programmingAssignmentLink}{estimated(programmingAssignmentEstimate)}</li>
			<li><em style={{color:'red'}}>Submit <u>all assignments</u> by the end of the day <u>{sprintEndDateWithoutTime(sprint-1)}</u>... no late assignments</em></li> 
		</div>)
	}
	
	switch (sprint) {
		case 1: return sprint1StandardActivitiesClosing()
		case 2: return sprint2StandardActivitiesClosing()
		case 3: return sprint3StandardActivitiesClosing()
		case 4: return sprint4StandardActivitiesClosing()
		case 5: return sprint5StandardActivitiesClosing()
		case 8: return sprint8StandardActivitiesClosing()
		default: return null
	}
}

export const closing = (sprint) => {
	const sprint1Closing = () => { return (
		<p>The best advise that I can give you is to start assignments early, submit something on time for each assignment, and to 
		attend class. If you do these things, I believe your success is virtually guaranteed. Finally, be sure to periodically 
		check for updates to our {programmingTogether()} tutorials.</p> ) 
	}
	const sprint2Closing = () => { return (
		<p>If you are struggling, remember to reach out for help early. Also, be sure to periodically check for updates to 
		our {programmingTogether()} tutorials.</p> ) 
	}
	const sprint4Closing = () => { return (
		<p>It might be a good time to spend a few minutes checking out our {successfulProgrammer()} activity and see if 
		any of the suggestions resonate with you. Also, be sure to periodically check for updates to our 
		{programmingTogether()} tutorials.</p> ) 
	}
	const sprint5Closing = () => { return (
		<p>Remember to periodically check for new {programmingTogether()} tutorials. Also, take a minute to consider if 
		you are you getting what you hoped to get out of this course. If not, let’s sit down and talk for a few minutes 
		to see if we can make the course something special for you.</p> )
	}
	const defaultClosing = () => { return (
		<p>Be sure to periodically check for updates to our {programmingTogether()} tutorials.</p> ) 
	}

	switch (sprint) {
		case 1: return sprint1Closing()
		case 2: return sprint2Closing()
		case 4: return sprint4Closing()
		case 5: return sprint5Closing()
		default: return defaultClosing()
	}
}

export const finalProjectsAndMoreResponsibility = () => {
	return ( <div>
		<p>We will also be creating our Final Project proposals this sprint. How would you like to finishing the course by 
		creating something that makes you proud? What type of a final project would you enjoy creating? Is there a final project 
		that would both be interesting to create and be something you could add to your professional portfolio as you are 
		looking for internships or jobs? How can I help?</p>

		<p>You will also notice a continuing trend this sprint where assignments will become less prescriptive and you
		will have more control <em>and responsibility</em> in determining what is done and how it is implemented.</p>
	</div> )
}
