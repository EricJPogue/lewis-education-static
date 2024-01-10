import React from 'react'

import { ExampleCode, internalLink, gitCommands, codingStandards, calendarLink, scheduleLink, Blended, scrumIn7Min, blackboardChangePhoto, programmingTogether, successfulProgrammer, overcomingProcrastination } from '../DataAndAPIs/Links'
import { getFinalExamDateAndTime } from '../DataAndAPIs/ClassSections'
import { sprintEndDateWithoutTime } from '../CalendarAndSchedule/SprintDates'

export const estimated = (estimate) => {
	if ((estimate === null) || (estimate === undefined) || (estimate === '')) {
		console.log('Error: Estimated function called without estimate value.')
		return null
	}
	return (<sup> ~{estimate}</sup>)
}

export const scrumIntro = (sprint = 0) => {
	return ( <p>I am using the term “sprint 1” to describe our first set of activities. Sprints are part of the scrum 
		software development process and describe a set of work to be delivered by a specific date. Our sprint 1
		activities are described below, are estimated to take about 18 hours of total effort, and need to be completed 
		by <em>{sprintEndDateWithoutTime(sprint)}</em>.</p> ) 
}

export const learningObjectivesIntro = (sprint = 1) => {
	switch(sprint) {
		case 1: return ( <p>Let’s start with our sprint {sprint} learning objectives. By the end of sprint {sprint} we will be able to:</p> )
		case 2: return ( <p>Let’s start with our Learning Objectives. By the end of sprint {sprint} we will be able to:</p> )
		default: return ( <p>Our Learning Objectives for this sprint include:</p> )
	}
}

export const activitiesListIntro = (sprint = 1) => {
	switch(sprint) {
		case 1: return (
				<p>Below is our sprint 1 activities list. Expect each item to take 10 to 30 minutes of focused time 
				unless otherwise noted. <em>Bold</em> items are graded assignments.</p>
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
	const initialPostSprint678 = () => { return ( <li><em>Make your initial Discussion post by the middle of the sprint</em></li> ) }
	switch(sprint) {
		case 6: return initialPostSprint678()
		case 7: return initialPostSprint678()
		default: return ( <li><em>Make your initial Discussion {sprint} post by the middle of the sprint</em></li> )
	}
}

export const standardActivities = (sprint=1, programmingAssignmentLink='', playlistLink='', includeTutoring=true) => { 
	const programmingAssignmentActivityStart = () => {
		if (programmingAssignmentLink !== '') return ( <li>Start working on {programmingAssignmentLink}</li> ) 
	}
	const previousSprintTopics = () => { 
		const checkIncludeTutoring = () => { if (includeTutoring) { return ( <span>{tutoringOptions()},</span> ) }}
		const tutoringOptions = () => internalLink('tutoring options', '/activity/study-table')

		if (playlistLink !== '') return ( <li>From previous sprints review {checkIncludeTutoring()} {ExampleCode()}, {gitCommands()}, {codingStandards()}, and {playlistLink}</li> )
	}
	const sprint1StandardActivities = () => {
		const syllabus = () => internalLink('syllabus', '/syllabus')
		const toolsOfTheTrade = () => internalLink('Tools of the Trade', '/activity/tools' )
		return ( <div>
			<li>Review our course {syllabus()}</li>
			<li>Watch {Blended()} and {scrumIn7Min()}</li>
			<li>Add a representative photo of yourself to {blackboardChangePhoto()}</li>
			<li>Set up GitHub, Discord, and O’Reilly Books by following the instruction in {toolsOfTheTrade()}</li>
		</div> )
	}
	const sprint2StandardActivities = () => {
		return ( <div>
			<li>Review our class {ExampleCode()} and study our {codingStandards()}</li>
			<li>Embrace the 30-for-30 plan {overcomingProcrastination()}</li>
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
		switch (sprint) {
			case 1: return ( <em>Review sprint {sprint} assignments including Discussion {sprint}, Quiz {sprint}, Lab {sprint}, and Reflection {sprint}</em> )
			case 2: return ( <em>Review sprint {sprint} assignments including Discussion {sprint}, Quiz {sprint}, Lab {sprint}, Reflection {sprint}, and Lab Demo</em> )
			case 3: return ( <em>Review sprint {sprint} assignments including Discussion {sprint}, Quiz {sprint}, Lab {sprint}, Reflection {sprint}, and Lab Demo</em> )
			case 4: return ( <em>Review sprint {sprint} assignments including Discussion, Quiz, Lab, Reflection, and Lab Demo</em> )
			case 5: return ( <em>Review sprint {sprint} assignments including Discussion, Quiz, Lab, Reflection, and Lab Demo</em> )
			case 6: return ( <em>Review assignments including Discussion, Quiz, Lab, Reflection, and Lab Demo</em>)
			case 7: return ( <em>Review assignments including Discussion, Quiz, Lab, Reflection, and Lab Demo</em>)
			case 8: return ( <em>Review assignments including Discussion, Quiz, Lab, and Reflection</em>)
			default: return null
		}
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
	const sprint1StandardActivitiesClosing = () => { 
		return (<div>
			<li>Complete {programmingAssignmentLink}{estimated(programmingAssignmentEstimate)}</li>
			<li><em>Complete Discussion {sprint} by responding to at least two of your classmates’ posts</em></li>
			<li><em>Submit sprint {sprint} assignments including Quiz {sprint}, Lab {sprint}, and Reflection {sprint}</em></li>
		</div>) 
	}
	const sprint2StandardActivitiesClosing = () => { 
		return (<div>
			<li>Verify that you added a representative photo of yourself to {blackboardChangePhoto()} and Zoom</li>
			<li>Complete {programmingAssignmentLink}{estimated(programmingAssignmentEstimate)}</li>
			<li><em>Complete Discussion {sprint} by responding to at least two of your classmates’ posts</em></li>
			<li><em>Submit sprint {sprint} assignments including Quiz {sprint}, Lab {sprint}, and Reflection {sprint}</em></li>
		</div>) 
	}
	const sprint3StandardActivitiesClosing = () => { 
		const checkProgrammingAssignment = () => {
			if (programmingAssignmentLink === '') 
				return null
			else
				return ( <li>Complete {programmingAssignmentLink}{estimated(programmingAssignmentEstimate)}</li> ) 
		}
		return (<div>
			{checkProgrammingAssignment()}
			<li><em>Complete Discussion {sprint} by responding to at least two of your classmates’ posts</em></li>
			<li><em>Submit Quiz {sprint}, Lab {sprint}, and Reflection {sprint}</em></li>
		</div>)
	}
	const sprint4and5StandardActivitiesClosing = () => { 
		return (<div>
			<li>Complete {programmingAssignmentLink}{estimated(programmingAssignmentEstimate)}</li>
			<li><em>Submit sprint {sprint} assignments including Discussion, Quiz, Lab, and Reflection</em></li>
		</div>)
	}
	const sprint6and7StandardActivitiesClosing = () => { 
		return (<div>
			<li>Complete {programmingAssignmentLink}{estimated(programmingAssignmentEstimate)}</li>
			<li><em>Submit Discussion, Quiz, Lab, and Reflection</em></li>
		</div>)
	}
	const sprint8StandardActivitiesClosing = () => { 
		return (<div>
			<li>Submit your Final Project Presentation assignment at least two hours before to your scheduled presentation time</li>
			<li><em>Deliver your Final Project Presentation on <u>{getFinalExamDateAndTime()}</u></em></li>
			<li>Complete {programmingAssignmentLink}{estimated(programmingAssignmentEstimate)}</li>
			<li><em>Submit <u>all assignments</u> by the end of the day <u>{sprintEndDateWithoutTime(sprint-1)}</u>... no late assignments</em></li> 
		</div>)
	}
	
	switch (sprint) {
		case 1: return sprint1StandardActivitiesClosing()
		case 2: return sprint2StandardActivitiesClosing()
		case 3: return sprint3StandardActivitiesClosing()
		case 4: return sprint4and5StandardActivitiesClosing()
		case 5: return sprint4and5StandardActivitiesClosing()
		case 6: return sprint6and7StandardActivitiesClosing()
		case 7: return sprint6and7StandardActivitiesClosing()
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
		any of the suggestions resonate with you. Also, be sure to periodically check for updates to our {programmingTogether()} tutorials.</p> ) 
	}
	const sprint5Closing = () => { return (
		<p>Remember to periodically check for new {programmingTogether()} tutorials. Also, take a minute to consider if 
		you are you getting what you hoped to get out of this course. If not, let’s sit down and talk for a few minutes 
		to see if we can make the course something special for you.</p> )
	}
	const sprint8Closing = () => { return ( <p>Let’s finish strong. It has been a sincere pleasure.</p> ) }
	const defaultClosing = () => { return (<p>Be sure to periodically check for updates to our {programmingTogether()} tutorials.</p> ) }

	switch (sprint) {
		case 1: return sprint1Closing()
		case 2: return sprint2Closing()
		case 4: return sprint4Closing()
		case 5: return sprint5Closing()
		case 8: return sprint8Closing()
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

export const justinaPiwoniQuote = () => {
	return ( <div>
		<p>Quote on Overcoming Procrastination:</p>
		<h5> 
		<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
		“The difference of starting early instead of leaving everything for the last minute truly amazes me.</div>
		<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
		I am proud of myself for getting everything done and not feeling so overwhelmed."</div><br />
		<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
		- Justina Piwoni, Introduction to Computer Science, Sprint 6 Reflection</div></h5>
	</div> )
}