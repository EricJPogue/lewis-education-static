
import React, { Component } from 'react'

import { courseTitle, courseNumber } from './URLParameters'
import { al } from './ActivityLists/AL'
import { DisplayPreviewStampIfNeeded } from './ActivityLists/ALPreviewStamp'

export class Sprint extends Component {
	render = () => {
		let activityListSprint = parseInt(this.props.match.params.reference)
		let number = courseNumber()
		return ( 
			<div>
				<h4>{courseTitle()}</h4>
				{al(number, activityListSprint)}
				{DisplayPreviewStampIfNeeded(activityListSprint)}
			</div>
		)

	}
}

