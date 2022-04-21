import React from 'react'

import { ExampleCode, internalLink, gitCommands, codingStandards, calendarLink, scheduleLink, Blended, scrumIn7Min, blackboardChangePhoto, programmingTogether } from '../Links'
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
	return ( <p>Let’s start with our sprint {sprint} learning objectives. By the end of sprint {sprint} we will be able to:</p> )
}

export const activitiesListIntro = (sprint = 1) => {
	return (
		<p>Below is our sprint 1 activities list. Although you are welcome to pursue the activities in any order, they are
		listed in the order I think will be the most efficient to complete. Expect each item to take 20 to 40 minutes of 
		focused time unless otherwise noted. <em>Bold</em> items are graded assignments.</p>
	)
}

export const initialPost = () => {
	return ( <li><em>Make your initial Discussion 1 post by the middle of the sprint</em></li> )
}

export const standardActivities = (sprint=1, programmingAssignmentLink='', playlistLink='') => { 
	const tutoringOptions = () => { return internalLink('tutoring options', '/activity/study-table') }
	const programmingAssignmentActivityStart = () => {
		if (programmingAssignmentLink !== '') return ( <li>Start working on {programmingAssignmentLink}</li> ) 
	}
	const previousSprintTopics = () => { 
		if (playlistLink !== '') return ( <li>From previous sprints review {ExampleCode()}, {gitCommands()}, {codingStandards()}, {tutoringOptions()}, and {playlistLink}</li> )
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
	
	return ( <div>
		<li>Maintain a laser focus on due dates by reviewing our {calendarLink(sprint)} and {scheduleLink(sprint)}</li>
		<li><em>Review sprint {sprint} assignments including Discussion 1, Quiz 1, Lab 1, Reflection 1, and Lab Demo</em></li>
		{previousSprintTopics()}
		{sprint1StandardActivities()}
		{programmingAssignmentActivityStart()}
	</div> )
}

export const standardActivitiesClosing = (sprint=1, programmingAssignmentLink='', programmingAssignmentEstimate='') => { 
	if (sprint === 8) {
		return (<div>
			<li>Submit your Final Project Presentation assignment at least two hours before to your scheduled presentation time</li>
			<li><em style={{color:'red'}}>Deliver your Final Project Presentation <u>in person</u> on <u>{getFinalExamDateAndTime()}</u></em></li>
			<li>Complete {programmingAssignmentLink}{estimated(programmingAssignmentEstimate)}</li>
			<li><em style={{color:'red'}}>Submit <u>all assignments</u> by the end of the day <u>{sprintEndDateWithoutTime(sprint-1)}</u>... no late assignments</em></li> 
		</div>)
	}
	else {
		return (<div>
			<li>Add a representative photo of yourself to your {blackboardChangePhoto()} and Zoom profiles</li>
			<li>Complete {programmingAssignmentLink}{estimated(programmingAssignmentEstimate)}</li>
			<li><em>Complete Discussion 1 by responding to at least two of your classmates’ posts</em></li>
			<li><em>Submit sprint {sprint} assignments including Quiz 1, Lab 1, and Reflection 1</em></li>
		</div>)
	}
}

export const closing = () => {
	return (
		<p>The best advise that I can give you is to start assignments early, submit something for each assignment, and to 
		attend class. If you do these things, I believe your success is virtually guaranteed. Finally, be sure to periodically 
		check for updates to our {programmingTogether()} tutorials.</p>
	) 
}