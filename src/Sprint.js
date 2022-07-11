
import React, { Component } from 'react'

import { getClass } from './data/Classes'
import { al } from './ActivityLists/AL'
import { displayPreviewStampIfNeeded } from './ActivityLists/ALPreviewStamp'

export class Sprint extends Component {
	render = () => {
		const activityListSprint = parseInt(this.props.match.params.reference)
		const number = getClass().number
		return ( 
			<div>
				<h4>{getClass().title}</h4>
				{al(number, activityListSprint)}
				{displayPreviewStampIfNeeded(activityListSprint)}
			</div>
		)

	}
}

