import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

import { CSTDate, duration, sprintCalendarFromURL, sprintStartDate, sprintEndDateWithoutTime } from './SprintDates'
import { courseTitle } from './URLParameters'

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
		console.log('sprint='+sprint)
		if (sprint === -1)
			return (null)
		else
			return (
				<p>Sprint {sprint+1} starts <em>{sprintStartDate(sprint)}</em> and ends <em>{sprintEndDateWithoutTime(sprint)}</em>.</p>
			)
	}

	renderCalendarBody = () => {
		console.log(1)
		let sprintCalendar = sprintCalendarFromURL()
		console.log(sprintCalendar)

		return sprintCalendar.map((row, index) => {
			const {start, end, notes} = row 
			if (index === this.currentSprint()) {
				return (
					<tr onClick={() => this.rowClicked(index+1)} key={index+1} style={{backgroundColor:'#adebdb'}}>
						<td style={{textAlign:'center'}}>{index+1}</td>
						<td>{CSTDate(end,true,true)}</td>
						<td>{duration(start,end)} days</td>
						<td>{notes}</td>
					</tr>
				)
			} else { 
				return (
					<tr onClick={() => this.rowClicked(index+1)} key={index+1}>
						<td style={{textAlign:'center'}}>{index+1}</td>
						<td>{CSTDate(end,true,true)}</td>
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
			<h4>{courseTitle()}</h4>
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
			<p>View daily schedule by clicking on “Schedule” in the table header.</p>
			</div>
		)
	}
}