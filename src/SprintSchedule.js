import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

import { CSTDate, incrementDate, isToday, pastDate, sprintStartDate, sprintEndDateWithoutTime } from './SprintDates'
import { getCalendar, getCourseTitle, getFinalExamDateAndTime, getIsScheduleTTr, getIsScheduleOnline } from './data/ClientDataAPIs'
import { internalLink } from './Links'

export class SprintClassActivities extends Component {
	// Todo: Update 'currentSprint()+1' to 'currentSprintBaseOne()'.

	currentSprint = () => {
		// Current sprint is zero based internally but passed on the URL as one based because users can view it on the URL. 
		return this.currentSprintBaseOne()-1
	}

	currentSprintBaseOne = () => {
		let currentSprint = parseInt(this.props.match.params.reference)
		if (isNaN(currentSprint)) {
			return 1
		}

		if ((currentSprint < 1) || (currentSprint > 8)) {
			return 1
		}

		return currentSprint
	}

	renderScheduleHeader = () => {
		let sprint = this.currentSprint()+1
		return( 
		<div>
			<h4>{getCourseTitle()}</h4>
			<p>Sprint {sprint} starts <em>{sprintStartDate(sprint-1)}</em> and ends <u><em>{sprintEndDateWithoutTime(sprint-1)} at 11:59 PM CT.</em></u></p>
			<h5 style={{marginTop:'32px', color: "grey"}} onClick={() => this.headerClicked(sprint)}>Calendar | <span style={{color: "black"}}>Schedule</span></h5>
		</div>	
		)
	}

	headerClicked = (input) => {
		window.location.assign('#/calendar/'+input);	
	}

	// Monday, Wednesday, and Friday class schedules.
	MWFSchedule = {
		"FirstMonday":     "Sprint Planning",
		"FirstWednesday":  "Demos & Retrospectives",
		"FirstFriday":     "Discussion Board & Lab",
		"SecondMonday":    "Topic Discussion",
		"SecondWednesday": "Quiz",
		"SecondFriday":    "Lab"
	}

	MWFScheduleSprint1 = {
		"FirstMonday":     "Introductions & Sprint Planning",
		"FirstWednesday":  "Sprint Planning (continued)",
		"FirstFriday":     "Discussion Board and Topic Discussion",
		"SecondMonday":    "No class (Labor Day)",
		"SecondWednesday": "Quiz",
		"SecondFriday":    "Lab"
	}

	MWFScheduleSprint3 = {
		"FirstMonday":     "Sprint Planning",
		"FirstWednesday":  "Demos & Retrospectives",
		"FirstFriday":     "Discussion Board & Topic Discussion",
		"SecondMonday":    "Topic Discussion",
		"SecondWednesday": "Quiz & Lab",
		"SecondFriday":    "Lab"
	}

	MWFScheduleSprint7 = {
		"FirstMonday":     "Sprint Planning",
		"FirstWednesday":  "Demos, Retrospectives, and Discussion Board",
		"FirstFriday":     "Easter Holiday",
		"SecondMonday":    "Easter Holiday",
		"SecondWednesday": "Topic Discussion & Quiz",
		"SecondFriday":    "Lab"
	}

	MWFScheduleSprint8 = {
		"FirstMonday":     "Sprint Planning",
		"FirstWednesday":  "Demos, Retrospectives, & Quiz",
		"FirstFriday":     "Topic Discussion & Lab",
		"SecondMonday":    "No regular classes (final exams)",
		"SecondWednesday": "No regular classes (final exams)",
		"SecondFriday":    "No regular classes (final exams)"
	}

	finalExamDateAndTimeTextForFinalSprint = () => {
		let finalExam = getFinalExamDateAndTime()
		if ((this.currentSprintBaseOne() === 8) && (finalExam.length > -0))
			return (<div>Final Project Presentations will be held during our scheduled Final Exam time which is <u><em>{finalExam}</em></u> with in-person attendance required.</div>)
		else
			return null
	}

	renderScheduleRow = (activityDate,activity) => {
		// Todo: Update slide deck link for TTh.
		// Todo: Update slide deck link for each session.
		const slideDeckLink = (activity) => { return internalLink(activity, `/deck/${this.currentSprintBaseOne()}-1of6`)}
		if (isToday(activityDate)) {
			return (<tr style={{backgroundColor:'#adebdb'}}><td>{CSTDate(activityDate,false,false)}</td><td>{slideDeckLink(activity)}</td></tr>)
		}
		if (pastDate(activityDate)) {
			return (<tr style={{backgroundColor:'#d3d3d3'}}><td>{CSTDate(activityDate,false,false)}</td><td>{activity}</td></tr>)
		}
		return (<tr><td>{CSTDate(activityDate,false,false)}</td><td>{activity}</td></tr>)
	}

	renderMWFSchedule = () => {
		let schedule = null
		switch(this.currentSprintBaseOne()) {
			case 1: schedule = this.MWFScheduleSprint1; break;
			case 3: schedule = this.MWFScheduleSprint3; break;
			case 7: schedule = this.MWFScheduleSprint7; break;
			case 8: schedule = this.MWFScheduleSprint8; break;
			default: schedule = this.MWFSchedule
		}

		const calendar = getCalendar()
		const dates = calendar[this.currentSprint()]
		return (
			<div>
				{this.renderScheduleHeader()}
				<Table striped bordered hover>
					<thead><tr><th style={{width:'300px'}}>Day</th><th>Schedule</th></tr></thead>
					<tbody>
						{this.renderScheduleRow(incrementDate(dates.start,0),schedule.FirstMonday)}
						{this.renderScheduleRow(incrementDate(dates.start,2),schedule.FirstWednesday)}
						{this.renderScheduleRow(incrementDate(dates.start,4),schedule.FirstFriday)}
						{this.renderScheduleRow(incrementDate(dates.start,7),schedule.SecondMonday)}
						{this.renderScheduleRow(incrementDate(dates.start,9),schedule.SecondWednesday)}
						{this.renderScheduleRow(incrementDate(dates.start,11),schedule.SecondFriday)}
					</tbody>
				</Table>
				{this.finalExamDateAndTimeTextForFinalSprint()}
			</div>
		)
	}

	// Tuesday, Thursday class schedules. 
	TTSchedule = {
		"FirstTuesday":   "Demos, Retrospective, and Sprint Planning",
		"FirstThursday":  "Topic Discussion, Discussion Board, and Lab",
		"SecondTuesday":  "Lab & Quiz",
		"SecondThursday": "Lab"
	}

	TTScheduleSprint1 = {
		"FirstTuesday":   "Introductions & Sprint Planning",
		"FirstThursday":  "Topic Discussion, Discussion Board, and Lab",
		"SecondTuesday":  "Lab & Quiz",
		"SecondThursday": "Lab"
	}

	TTScheduleSprint7 = {
		"FirstTuesday":   "Demos, Retrospective, Sprint Planning, and Discussion Board",
		"FirstThursday":  "Easter Holiday",
		"SecondTuesday":  "Topic Discussion, Lab & Quiz",
		"SecondThursday": "Lab"
	}

	TTScheduleSprint8 = {
		"FirstTuesday":   "Demos, Retrospective, and Sprint Planning",
		"FirstThursday":  "Topic Discussion, Quiz, and Lab",
		"SecondTuesday":  "Finals Week (no regular classes)",
		"SecondThursday": "Finals Week (no regular classes)"
	}

	renderTTSchedule = () => {
		let schedule = null
		switch(this.currentSprintBaseOne()) {
			case 1: schedule = this.TTScheduleSprint1; break;
			case 7: schedule = this.TTScheduleSprint7; break;
			case 8: schedule = this.TTScheduleSprint8; break;
			default: schedule = this.TTSchedule
		}

		let calendar = getCalendar()
		let dates = calendar[this.currentSprint()]
		return (
			<div>
				{this.renderScheduleHeader()}
				<Table striped bordered hover>
					<thead><tr><th>Day</th><th>Schedule</th></tr></thead>
					<tbody>
						{this.renderScheduleRow(incrementDate(dates.start,1),schedule.FirstTuesday)}
						{this.renderScheduleRow(incrementDate(dates.start,3),schedule.FirstThursday)}
						{this.renderScheduleRow(incrementDate(dates.start,8),schedule.SecondTuesday)}
						{this.renderScheduleRow(incrementDate(dates.start,10),schedule.SecondThursday)}
					</tbody>
				</Table>
			</div>
		)
	}

	renderOnlineSchedule = () => {
		return ( <div>
			{this.renderScheduleHeader()}
			<p>This is an online class and does not have regularly scheduled class sessions.</p>
		</div> )
	}

	render() {
		if (getIsScheduleTTr()) return this.renderTTSchedule()
		if (getIsScheduleOnline()) return this.renderOnlineSchedule()
		else return this.renderMWFSchedule()
	}
}