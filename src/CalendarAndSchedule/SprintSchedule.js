import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

import { CSTDate, incrementDate, isToday, pastDate, sprintStartDate, sprintEndDateWithoutTime } from './SprintDates'
import { getFinalExamDateAndTime } from '../DataAndAPIs/ClassSections'
import { getClassCalendar, getClassTitle } from '../DataAndAPIs/ClassSections'
import { internalLink } from '../DataAndAPIs/Links'

import { getIsScheduleT, getIsScheduleTTr, getIsScheduleOnline } from '../DataAndAPIs/ClassSections'

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
			<h4>{getClassTitle()}</h4>
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
		'FirstMonday':     'Sprint Planning',
		'FirstWednesday':  'Discussion Board & Lab',
		'FirstFriday':     'Demos & Retrospectives',
		'SecondMonday':    'Topic Discussion',
		'SecondWednesday': 'Quiz',
		'SecondFriday':    'Lab'
	}

	MWFScheduleSprint1 = {
		'FirstMonday':     'Martin Luther King Day: No Classes',
		'FirstWednesday':  'Introductions & Sprint Planning',
		'FirstFriday':     'Sprint Planning (continued)',
		'SecondMonday':    'Discussion Board & Lab',
		'SecondWednesday': 'Topic Discussion & Quiz',
		'SecondFriday':    'Lab'
	}

	MWFScheduleSprint3 = {
		'FirstMonday':     'Sprint Planning',
		'FirstWednesday':  'Discussion Board & Lab',
		'FirstFriday':     'Demos, Retrospectives, and Topic Discussion',
		'SecondMonday':    'Topic Discussion',
		'SecondWednesday': 'Quiz & Lab',
		'SecondFriday':    'Lab'
	}

	MWFScheduleSprint4 = {
		'FirstMonday':     'Sprint Planning',
		'FirstWednesday':  'Discussion Board & Lab',
		'FirstFriday':     'Demos & Retrospectives',
		'SecondMonday':    'Topic Discussion',
		'SecondWednesday': 'Midterm Exam (in-person attendance required)',
		'SecondFriday':    'Lab'
	}

	MWFScheduleSprint5 = {
		'FirstMonday':     'Sprint Planning',
		'FirstWednesday':  'Discussion Board & Lab',
		'FirstFriday':     'Demos & Retrospectives',
		'SecondMonday':    'Topic Discussion',
		'SecondWednesday': 'Quiz & Lab',
		'SecondFriday':    'Easter: No Classes'
	}

	MWFScheduleSprint6 = {
		'FirstMonday':     'Easter: No Classes',
		'FirstWednesday':  'Sprint Planning',
		'FirstFriday':     'Discussion Board, Demos, and Retrospectives',
		'SecondMonday':    'Topic Discussion',
		'SecondWednesday': 'Quiz',
		'SecondFriday':    'Lab'
	}

	MWFScheduleSprint7 = {
		'FirstMonday':     'Sprint Planning',
		'FirstWednesday':  'Discussion Board & Lab',
		'FirstFriday':     'Demos & Retrospectives',
		'SecondMonday':    'Topic Discussion & Lab',
		'SecondWednesday': 'Topic Discussion & Lab',
		'SecondFriday':    'Lab',
		'ThirdMonday':	   'Lab',
		'ThirdWednesday':  'Final Exam (in-person attendance required)',
		'ThirdFriday':     'Sprint 8 Planning & Presentations'
	}

	MWFScheduleSprint8 = {
		'FirstMonday':     'Sprint Planning',
		'FirstWednesday':  'Quiz & Lab',
		'FirstFriday':     'Demos, Retrospectives, & Lab',
		'SecondMonday':    'No regular classes (final exams)',
		'SecondWednesday': 'No regular classes (final exams)',
		'SecondFriday':    'No regular classes (final exams)'
	}

	finalExamDateAndTimeTextForFinalSprint = () => {
		let finalExam = getFinalExamDateAndTime()
		if ((this.currentSprintBaseOne() === 8) && (finalExam.length > -0))
			return (<div>
				{internalLink('Final Project Presentations', '/deck/8-7')} will be held during our scheduled Final Exam 
				time which is <u><em>{finalExam}</em></u> with in-person attendance required.
			</div>)
		else
			return null
	}

	renderScheduleRow = (activityDate,activity,session) => {
		const slideDeckLink = (activity) => { return internalLink(activity, `/deck/${this.currentSprintBaseOne()}-${session}`)}

		if (isToday(activityDate)) {
			return (<tr style={{backgroundColor:'#adebdb'}}><td>{CSTDate(activityDate,false,false)}</td><td>{slideDeckLink(activity)}</td></tr>)
		}
		if (pastDate(activityDate)) {
			return (<tr style={{backgroundColor:'#d3d3d3'}}><td>{CSTDate(activityDate,false,false)}</td><td>{slideDeckLink(activity)}</td></tr>)
		}
		return (<tr><td>{CSTDate(activityDate,false,false)}</td><td>{slideDeckLink(activity)}</td></tr>)
	}

	renderMWFSchedule = () => {
		let schedule = null
		switch(this.currentSprintBaseOne()) {
			case 1: schedule = this.MWFScheduleSprint1; break;
			case 3: schedule = this.MWFScheduleSprint3; break;
			case 4: schedule = this.MWFScheduleSprint4; break;
			case 5: schedule = this.MWFScheduleSprint5; break;
			case 6: schedule = this.MWFScheduleSprint6; break;
			case 7: schedule = this.MWFScheduleSprint7; break;
			case 8: schedule = this.MWFScheduleSprint8; break;
			default: schedule = this.MWFSchedule
		}

		const calendar = getClassCalendar()
		const dates = calendar[this.currentSprint()]
		if (this.currentSprintBaseOne() === 8) {
			return (
				<div>
					{this.renderScheduleHeader()}
					<br />
					<b>Final Exam</b><br /><br />
					{this.finalExamDateAndTimeTextForFinalSprint()}
				</div>
			)
		} else if (this.currentSprintBaseOne() === 7) {
			return (
				<div>
					{this.renderScheduleHeader()}
					<Table striped bordered hover>
						<thead><tr style={{backgroundColor:'#C0C0C0'}}><th style={{width:'300px'}}>Day</th><th>Topics and Slides</th></tr></thead>
						<tbody>
							{this.renderScheduleRow(incrementDate(dates.start,0),schedule.FirstMonday,1)}
							{this.renderScheduleRow(incrementDate(dates.start,2),schedule.FirstWednesday,2)}
							{this.renderScheduleRow(incrementDate(dates.start,4),schedule.FirstFriday,3)}
							{this.renderScheduleRow(incrementDate(dates.start,7),schedule.SecondMonday,4)}
							{this.renderScheduleRow(incrementDate(dates.start,9),schedule.SecondWednesday,5)}
							{this.renderScheduleRow(incrementDate(dates.start,11),schedule.SecondFriday,6)}
							{this.renderScheduleRow(incrementDate(dates.start,14),schedule.ThirdMonday,7)}
							{this.renderScheduleRow(incrementDate(dates.start,16),schedule.ThirdWednesday,8)}
							{this.renderScheduleRow(incrementDate(dates.start,18),schedule.ThirdFriday,9)}
						</tbody>
					</Table>
					{this.finalExamDateAndTimeTextForFinalSprint()}
				</div>
			)
		}
		else {
			return (
				<div>
					{this.renderScheduleHeader()}
					<Table striped bordered hover>
						<thead><tr style={{backgroundColor:'#C0C0C0'}}><th style={{width:'300px'}}>Day</th><th>Topics and Slides</th></tr></thead>
						<tbody>
							{this.renderScheduleRow(incrementDate(dates.start,0),schedule.FirstMonday,1)}
							{this.renderScheduleRow(incrementDate(dates.start,2),schedule.FirstWednesday,2)}
							{this.renderScheduleRow(incrementDate(dates.start,4),schedule.FirstFriday,3)}
							{this.renderScheduleRow(incrementDate(dates.start,7),schedule.SecondMonday,4)}
							{this.renderScheduleRow(incrementDate(dates.start,9),schedule.SecondWednesday,5)}
							{this.renderScheduleRow(incrementDate(dates.start,11),schedule.SecondFriday,6)}
						</tbody>
					</Table>
					{this.finalExamDateAndTimeTextForFinalSprint()}
				</div>
			)
		}
	}

	// Tuesday, Thursday class schedules. 
	TTSchedule = {
		'FirstTuesday':   'Demos, Retrospective, and Sprint Planning',
		'FirstThursday':  'Topic Discussion, Discussion Board, and Lab',
		'SecondTuesday':  'Lab & Quiz',
		'SecondThursday': 'Lab'
	}

	TTScheduleSprint1 = {
		'FirstTuesday':   'Introductions & Sprint Planning',
		'FirstThursday':  'Topic Discussion, Discussion Board, and Lab',
		'SecondTuesday':  'Lab & Quiz',
		'SecondThursday': 'Lab'
	}

	TTScheduleSprint7 = {
		'FirstTuesday':   'Demos, Retrospective, Sprint Planning, and Discussion Board',
		'FirstThursday':  'Easter Holiday',
		'SecondTuesday':  'Topic Discussion, Lab & Quiz',
		'SecondThursday': 'Lab'
	}

	TTScheduleSprint8 = {
		'FirstTuesday':   'Demos, Retrospective, and Sprint Planning',
		'FirstThursday':  'Topic Discussion, Quiz, and Lab',
		'SecondTuesday':  'Finals Week (no regular classes)',
		'SecondThursday': 'Finals Week (no regular classes)'
	}

	renderTThSchedule = () => {
		let schedule = null
		switch(this.currentSprintBaseOne()) {
			case 1: schedule = this.TTScheduleSprint1; break;
			case 7: schedule = this.TTScheduleSprint7; break;
			case 8: schedule = this.TTScheduleSprint8; break;
			default: schedule = this.TTSchedule
		}

		let calendar = getClassCalendar()
		let dates = calendar[this.currentSprint()]
		return (
			<div>
				{this.renderScheduleHeader()}
				<Table striped bordered hover>
					<thead><tr><th>Day</th><th>Schedule</th></tr></thead>
					<tbody>
						{this.renderScheduleRow(incrementDate(dates.start,1),schedule.FirstTuesday,1)}
						{this.renderScheduleRow(incrementDate(dates.start,3),schedule.FirstThursday,2)}
						{this.renderScheduleRow(incrementDate(dates.start,8),schedule.SecondTuesday,3)}
						{this.renderScheduleRow(incrementDate(dates.start,10),schedule.SecondThursday,4)}
					</tbody>
				</Table>
			</div>
		)
	}

	renderTSchedule = () => {
		// Tuesday class schedules. 
		const TSchedule = {
			'FirstTuesday':   'Sprint Planning & Lab',
			'SecondTuesday':  'Lab',
		}

		const schedule = TSchedule
		const calendar = getClassCalendar()
		const dates = calendar[this.currentSprint()]
		return ( <div>
				{this.renderScheduleHeader()}
				<Table striped bordered hover>
					<thead><tr><th>Day</th><th>Schedule</th></tr></thead>
					<tbody>
						{this.renderScheduleRow(incrementDate(dates.start,1),schedule.FirstTuesday,1)}
						{this.renderScheduleRow(incrementDate(dates.start,8),schedule.SecondTuesday,3)}
					</tbody>
				</Table>
		</div> )
	}

	renderOnlineSchedule = () => {
		return ( <div>
			{this.renderScheduleHeader()}
			<p>This is an online class and does not have regularly scheduled class sessions.</p>
		</div> )
	}

	render() {
		if (getIsScheduleT()) return this.renderTSchedule()
		if (getIsScheduleTTr()) return this.renderTThSchedule()
		if (getIsScheduleOnline()) return this.renderOnlineSchedule()
		else return this.renderMWFSchedule()
	}
}