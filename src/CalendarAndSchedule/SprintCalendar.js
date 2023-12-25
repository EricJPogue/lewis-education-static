import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

import { CSTDate, duration, sprintStartDate, sprintEndDateWithoutTime } from './SprintDates'
import { getClass } from '../DataAndAPIs/Classes'
import { getFinalExamDateAndTime } from '../DataAndAPIs/ClassSections'
import { getClassCalendar } from '../DataAndAPIs/ClassSections' 

export class SprintCalendar extends Component {
	headerClicked = (input) => {
		window.location.assign('#/schedule/'+input);	
	}

	rowClicked = (input) => {
		window.location.assign('#/calendar/'+input);	
	}

	currentSprint = () => {
		// Current sprint is zero based internally but passed on the URL as one based because users can view it on the URL. 
		let currentSprint = parseInt(this.props.match.params.reference)
		if (isNaN(currentSprint)) {
			return -1 // Do not highlight any rows.
		}

		return currentSprint-1
	}

	renderSummaryText = (sprint) => {
		if (sprint === -1)
			return (null)
		else
			return (<p>Sprint {sprint+1} starts <em>{sprintStartDate(sprint)}</em> and ends <u><em>{sprintEndDateWithoutTime(sprint)} at 11:59 PM CT.</em></u></p>)
	}

	finalExamDateAndTimeText = () => {
		let finalExam = getFinalExamDateAndTime()
		if (finalExam.length > 0)
			return (<div>Final exam, makeup exams, and any missed class project presentations will be held during our scheduled Final Exam time which is <u><em>{finalExam}</em></u> with in-person attendance required.</div>)
		else
			return null
	}

	renderCalendarBody = () => {
		let sprintCalendar = getClassCalendar()

		return sprintCalendar.map((row, index) => {
			const {start, end, notes} = row 
			if (index === this.currentSprint()) {
				return (
					<tr onClick={() => this.rowClicked(index+1)} key={index+1} style={{backgroundColor:'#adebdb'}}>
						<td style={{textAlign:'center'}}>{index+1}</td>
						<td>{CSTDate(end,true,false)}</td>
						<td>{duration(start,end)} days</td>
						<td>{notes}</td>
					</tr>
				)
			} else { 
				return (
					<tr onClick={() => this.rowClicked(index+1)} key={index+1}>
						<td style={{textAlign:'center'}}>{index+1}</td>
						<td>{CSTDate(end,true,false)}</td>
						<td>{duration(start,end)} days</td>
						<td>{notes}</td>
					</tr>
				)
			}
		})
	}

	render = () => {
		return (
			<div>
			<h4>{getClass().title}</h4>
			{this.renderSummaryText(this.currentSprint())}

			<h5 style={{marginTop:'32px'}} onClick={() => this.headerClicked(this.currentSprint()+1)}>Calendar | <span style={{color: "grey"}}>Schedule</span></h5>
			<Table striped bordered hover>
				<thead><tr>
					<th style={{textAlign:'center'}}>Sprint</th>
					<th>End Date and Time</th>
					<th>Duration</th>
					<th>Notes</th>
				</tr></thead>
				<tbody>{this.renderCalendarBody()}</tbody>
			</Table>
			{this.finalExamDateAndTimeText()}
			</div>
		)
	}
}