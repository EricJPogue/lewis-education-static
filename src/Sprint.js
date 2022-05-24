
import React, { Component } from 'react'

import { getCourseTitle } from './data/ClientDataAPIs';
import { getCourseNumber } from './data/ClientDataAPIs'
import { al } from './ActivityLists/AL'
import { displayPreviewStampIfNeeded } from './ActivityLists/ALPreviewStamp'

export class Sprint extends Component {
	render = () => {
		let activityListSprint = parseInt(this.props.match.params.reference)
		let number = getCourseNumber()
		return ( 
			<div>
				<h4>{getCourseTitle()}</h4>
				{al(number, activityListSprint)}
				{displayPreviewStampIfNeeded(activityListSprint)}
			</div>
		)

	}
}

