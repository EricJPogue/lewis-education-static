import React from 'react'
import Table from 'react-bootstrap/Table'

import { getClassTitle, getClassSectionID, getModuleDescriptions, getModuleAssignment } from '../DataAndAPIs/ClassSections'
import { sprintEndDateWithoutTime } from '../CalendarAndSchedule/SprintDates'

export const ModuleList = () => {
	const classSectionID = getClassSectionID()
	const renderTableBody = (moduleDescriptions) => {
		return moduleDescriptions.map((description, index) => {
			return ( 
				<tr key={index}>
					<td style={{textAlign:'center'}}>{index+1}</td>
					<td><a href= {`/?cpsc=${classSectionID}#/sprint/${index+1}`}>{description}</a></td>
					<td>{getModuleAssignment(index)}</td>
					<td>{sprintEndDateWithoutTime(index)}</td>
				</tr>
			)
		})
	}

	const moduleDescriptions = getModuleDescriptions() 
	return ( <div>
		<h4>{getClassTitle()}</h4>
		<p>This class includes 8 modules spread across 8 sprints.</p>
		<h5>Modules:</h5>
		<Table striped bordered hover>
			<thead>
				<tr style={{backgroundColor:'#C0C0C0'}}>
					<th style={{width:'20px', textAlign:'center'}}>Sprint</th>
					<th style={{width:'380px', textAlign:'center'}}>Topics</th>
					<td style={{width:'300px', textAlign:'center'}}><b>Assignments</b></td>
					<td style={{textAlign:'center'}}><b>Due Date</b></td>
				</tr>
			</thead>
			<tbody>
				{renderTableBody(moduleDescriptions)} 
			</tbody> 
		</Table> 
	</div> )
} 
