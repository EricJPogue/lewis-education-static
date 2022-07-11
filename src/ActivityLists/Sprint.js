
import React, { Component } from 'react'

import { getClass } from '../DataAndAPIs/Classes'
import { al } from './AL'
import { displayPreviewStampIfNeeded } from './ALPreviewStamp'

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