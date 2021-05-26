import React from 'react'
import { pastDate, sprintCalendarFromURL } from '../SprintDates'

// Todo: Review licensing of preview stamp.
import ALPreviewStamp from './ALPreviewStamp.png'


export const DisplayPreviewStampIfNeeded = (activityListSprint) => {
	if ((activityListSprint > 8) || (activityListSprint < 2)) {
		return (null)
	}

	let calendar = sprintCalendarFromURL() 
	let dates = calendar[activityListSprint-1]

	// If the sprint has not started, place the preview stamp on the page.
	if (!pastDate(dates.start)) {
		return (
			<div style={{position:"absolute", opacity:0.7, right:40, top:80}}>
				<img src={ALPreviewStamp} alt='preview' width= '212'/>
			</div>
		)
	}

	return (null)
}